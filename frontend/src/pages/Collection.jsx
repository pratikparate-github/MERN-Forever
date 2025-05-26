import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const {products,showSearch, search} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent')

  const toggleCategory = (e) => {
       if(category.includes(e.target.value)){
        setCategory(category.filter((item)=> item !== e.target.value))
       }
       else{
          setCategory(pre => [...pre,e.target.value])
       }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(subCategory.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(pre => [...pre,e.target.value])
    }
  }

  const applyFilter = () => {
    let productCopy = products.slice();
      if(search && showSearch){
        productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) );
      }

      if(category.length > 0){
         productCopy = productCopy.filter(item => category.includes(item.category))
      }

      if(subCategory.length > 0){
        productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
     }
     setFilterProducts(productCopy);
  }

  const sortProduct = () =>{

    let fpCopy = filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }


  useEffect(()=>{
    applyFilter();
    },[category, subCategory,search,showSearch]);

  useEffect(()=>{
    sortProduct();
    },[sortType]);


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ''}`} src={assets.dropdown_icon} alt=''/>
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Men'} onClick={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Women'} onClick={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Kids'} onClick={toggleCategory}/>Kids
            </p>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Topwear'} onClick={toggleSubCategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Bottomwear'} onClick={toggleSubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Winterwear'} onClick={toggleSubCategory}/>Winterwear
            </p>
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4 '>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* Product Sort */}
          <select onClick={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: low to high</option>
            <option value="high-low">Sort by: high to low</option>
          </select>
        </div>

        {/* Mapp Product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item, index)=>(
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
              ))
            }
        </div>

      </div>

    </div>
  )
}

export default Collection
