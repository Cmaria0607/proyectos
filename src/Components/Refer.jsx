

const Refer = ({image, description, title}) => {
  return (
    
    <section className="  w-80 my-20 ">
   
        <div className={` flex flex-col pl-4 ${image}`}>

            <img className=" rounded-full w-64 h-64     "
            src={image}  />
       
        <h2 className=" pr-4 text-center  font-semibold  text-3xl">{title}</h2>
            <p className=" pr-4 text-center line-clamp-3">{description}</p>
          
        </div>
        

       
   </section> 

  )
}

export default Refer