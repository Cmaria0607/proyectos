import Header  from "./Components/Header"
import Nav from "./Components/Nav"
import Box from "./Components/Box"
import Box1 from "./Components/Box1"
import Qualities from "./Components/Qualities"
import Refer from "./Components/Refer"
import Footer from "./Components/Footer"
const App = () => {
  return (
    <>
    <Nav /> 
    <Header />  

    <section className=" bg-slate-100 flex flex-wrap py-12 ">
      <Qualities image='window.svg' title='Full Responsive' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
      <Qualities image='layers.svg' title='Escalable' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
      <Qualities image='terminal.svg' title='Facil de usar' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' />
    </section>


    <section className=" flex-wrap " >
      <Box  title='Diseño totalmente responsivo'
      description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor alias doloremque dignissimos laboriosam quibusdam. Quo modi sequi vitae, sit, vero amet at eveniet quidem consequuntur molestias quis libero assumenda deserunt.'
      image='bg-showcase-1.jpg'/> 
      <Box1 title='Escalable donde sea'
      description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor alias doloremque dignissimos laboriosam quibusdam. Quo modi sequi vitae, sit, vero amet at eveniet quidem consequuntur molestias quis libero assumenda deserunt.'
      image='bg-showcase-2.jpg'/>
      <Box  title='Facil de usar y personalizar'
      description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor alias doloremque dignissimos laboriosam quibusdam. Quo modi sequi vitae, sit, vero amet at eveniet quidem consequuntur molestias quis libero assumenda deserunt.'
      image='bg-showcase-3.jpg'/> 
   </section>

     <h1 className="text-4xl text-center font-semibold  relative top-20">Lo que la gente esta diciendo...</h1>

      <section className=" bg-slate-100 flex flex-wrap justify-around py-10">
        <Refer title='Margaret E.'
        description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor alias doloremque dignissimos laboriosam quibusdam. Quo modi sequi vitae, sit, vero amet at eveniet quidem consequuntur molestias quis libero assumenda deserunt.'
        image='testimonials-1.jpg'/>
        <Refer title='Fred S.'
        description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor alias doloremque dignissimos laboriosam quibusdam. Quo modi sequi vitae, sit, vero amet at eveniet quidem consequuntur molestias quis libero assumenda deserunt.'
        image='testimonials-2.jpg'/>
        <Refer title='Sarah W.'
        description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor alias doloremque dignissimos laboriosam quibusdam. Quo modi sequi vitae, sit, vero amet at eveniet quidem consequuntur molestias quis libero assumenda deserunt.'
        image='testimonials-3.jpg'/>
       </section>

    <Footer  />
       
   
  

    </>
  )
   
}

export default App



