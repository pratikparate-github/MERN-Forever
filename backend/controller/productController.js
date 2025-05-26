import {v2 as cloudinary} from 'cloudinary'
import productModel from '../models/productModel.js'

// function for add product
const addProduct = async (req,res) =>{
    try {
        
        const { name, description, price, category, subCategory,sizes, bestseller} = req.body;
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]

        const images = [image1 ,image2, image3, image4].filter((item) => item !== undefined)

        const imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path , {resource_type: 'image'})
                return result.secure_url;
            })
        )

        // console.log(name, description, price, category, subCategory,sizes, bestseller);
        // console.log(imagesUrl);
        // console.log(images);

        const productData ={
            name,
            description,
            category,
            price:Number(price),
            subCategory,
            sizes:JSON.parse(sizes),
            bestseller: bestseller === 'true' ? true :false,
            image:imagesUrl,
            date: Date.now()
        }
        
        console.log(productData);
        
        const product = new productModel(productData);
        await product.save();

        res.status(201).json({
            success: true,
            message: 'Product Added'
        })

    } catch (error) {
        console.log(error);
        res.status(406).json({
            success: false,
            message: error.message
        })
        
    }
}

// function for List product
const listProduct = async (req,res) =>{
    try {
        
    const products = await productModel.find({});
    res.json({
        success: true,
        products
    })

    } catch (error) {
       console.log(error);
       res.json({
        success: false,
        message: error.message
    })
        
    } 
}

// remove product
const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;

        // Check if ID is present in the request body**
        if (!id) {
            return res.status(400).json({
                success: false,
                message: "Product ID not found in the request body"
            });
        }

        const product = await productModel.findById(id);
        if(product === null){
            return res.status(300).json({
                success: false,
                message: `Product not found corresponding to _id:${id}`
            });
        }

        const images = product.image;

        let cloudinaryResult = "No images"
        if (images && images.length > 0) {
            // ✅ Extract public IDs from URLs
            const publicIds = images.map((url) => {
                // URL format: https://res.cloudinary.com/{cloud_name}/image/upload/v{version}/{public_id}.{extension}
                const parts = url.split('/');
                const publicIdWithExt = parts[parts.length - 1];
                const publicId = publicIdWithExt.split('.')[0]; // Remove file extension
                return publicId;
            });

                // ✅ Delete all images from Cloudinary
            cloudinaryResult = await cloudinary.api.delete_resources(publicIds, { invalidate: true }); // { invalidate: true } image remove from cache otherwise (almost link active for 24 hr after deleting  )
            //console.log(cloudinaryResult);
        }
        
        
        // ✅ If delete is successful, remove the product from DB
            await productModel.findByIdAndDelete(id);

            // ✅ Send response
            return res.status(200).json({
                success: true,
                message: `Product and its images have been successfully deleted.`,
                cloudinaryResult
            });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// function for single product info
const singleProduct = async (req,res) =>{
    try {
        const {productId } = req.body;
        const product = await productModel.findById(productId);
        res.json({
            success: true,
            product
        })
    } catch (error) {
        console.log(error);
        
        res.json({
            success: false,
            message: error.message
        })
    }
}


export {addProduct,listProduct,removeProduct,singleProduct};