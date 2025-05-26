import multer from 'multer'

/*
Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.

NOTE: Multer will not process any form which is not multipart (multipart/form-data).
*/ 

const storage = multer.diskStorage({
   filename: function(req,file,callback){
    callback(null,file.originalname)
   }
});

const upload = multer({storage});

export default upload