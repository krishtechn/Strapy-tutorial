import React from 'react'


const Products = (props) => {
  return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
     {/* <div className="flex flex-wrap -m-4">
         {props.data.map((items)=>{
             return       <div className="p-4 md:w-1/3">
             <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
               <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog"/>
               <div className="p-6">
                 <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                 <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{items.name}</h1>
                 <p className="leading-relaxed mb-3">{items.desc}</p>
                 <div className="flex items-center flex-wrap ">
                   <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                     <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                       <path d="M5 12h14"></path>
                       <path d="M12 5l7 7-7 7"></path>
                     </svg>
                   </a>
                   <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                     <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                       <circle cx="12" cy="12" r="3"></circle>
                     </svg>1.2K
                   </span>
                   <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                     <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                       <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                     </svg>6
                   </span>
                 </div>
               </div>
             </div>
           </div>
         })}

    </div> */}
<div className="flex flex-wrap -m-4">

{props.Products.data.map((items)=>{
    const {title,slug,description,category,size,color,price,availableQty,image} = items.attributes;
    
 return <div className="p-4 md:w-1/3">
             <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
               <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image.data.attributes.name} alt="blog"/>
               <div className="p-6">
                 <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-{category.toUpperCase()}</h2>
                 <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                 <p className="leading-relaxed mb-3">{description}</p>
                 <button className={`bg-${color}-800 w-4 h-4 rounded-lg`}></button>
                 <p className="leading-relaxed mb-3"></p>
                 <div className="flex items-center flex-wrap ">
                   <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                     <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                       <path d="M5 12h14"></path>
                       <path d="M12 5l7 7-7 7"></path>
                     </svg>
                   </a>
                   <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    Rs:{price}
                   </span>
                   <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm">
                     Size:{size}
                   </span>
                   <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                     Color:{color}
                   </span>
                 </div>
               </div>
             </div>
           </div>
})}
</div> 
  </div>
</section>
  )
}

export async function getServerSideProps(context) {
    let headers = {Authorization:"Bearera 1fb68929fea47b0a125a76716b99e644a0f514e123e0e07ba7574a5d76626e72582b480dd63185a98459908b7fcbb242cf9cd421018ebdb49b7625f57022ad24d4d60130b3da706986ebfb2724a1266acba8636c08f84036211369bb59587bbf9701c3a5ea0782835c75c002d5945cde0a857294f55ca30e265988886a386dd"}
    let a = await fetch("http://localhost:1337/api/products?populate=*",{headers:headers});
    let products = await a.json();
    
    return {
    //  fetch all data 

    //   props: {data:[
    //       {name:"krish",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aspernatur, facilis illo aut iure, quod, eius voluptatum quis repellat nam accusantium! Vero reiciendis laborum maiores saepe! Veritatis, nostrum. Dolorem, nemo?"},
    //       {name:"krish",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aspernatur, facilis illo aut iure, quod, eius voluptatum quis repellat nam accusantium! Vero reiciendis laborum maiores saepe! Veritatis, nostrum. Dolorem, nemo?"},
    //       {name:"krish",desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aspernatur, facilis illo aut iure, quod, eius voluptatum quis repellat nam accusantium! Vero reiciendis laborum maiores saepe! Veritatis, nostrum. Dolorem, nemo?"},
    //     ]} // will be passed to the page component as props
       props:{Products:products},    
}
  }

export default Products