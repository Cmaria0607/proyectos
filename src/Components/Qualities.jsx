
const Qualities = ({ image, title, description }) => {
  return (
    <section className="flex justify-around flex-wrap md:w-80 md:ml-32 my-20">

      <div className=" flex flex-col items-center justify-center md:w-80 md:h-80 md:rounded-xl">

        <img className="mx-auto w-35 h-28 md:w-40 md:h-40" src={image} alt={title} />
        <h2 className="text-center text-semibold text-2xl font-semibold">{title}</h2>
        <p className="text-center line-clamp-3">{description}</p>
        
      </div>
    </section>
  );
};

export default Qualities;


