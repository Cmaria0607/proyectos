const Box = ({ title, description, image }) => {
  return (
    <section className=" flex flex-col md:flex-row justify-center items-center p-0 md:p-8 lg:p-0">

      <div className="w-full md:w-1/2 flex flex-col gap-4 p-4 md:p-8">
        
        <h1 className="font-semibold text-xl md:text-2xl">{title}</h1>
        <p className="text-base font-semibold text-black text-justify">{description}</p>
      </div>

      <div className={`w-full md:w-1/2 h-[300px] md:h-[400px] ${image}`}>
        <img src={image} className="w-full h-full object-cover" alt={title} />
      </div>

    </section>
  );
};

export default Box;
