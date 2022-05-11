import React from 'react'
import '../styles/Home.module.css'
import AutoTyping, { BlinkCursor } from 'react-auto-typing'
import Slider from "react-slick";


const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center md:mt-16">
    <div className="w-screen p-3 lg:flex lg:inline-block overflow-hidden">
      <img src="/home.jfif" alt="" className='image h-80 w-screen object-contain'/>
     <div className="w-full overflow-hidden px-36-3">
       <h1 className='text-sm text-left text-black font-serif text-1xl font-extralight capitalize -space-x-4 mt-3'>
         <AutoType text="my name is krishna kharal from Bayatari i am a computer and IT engineer."/>
       </h1>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae eum tempora rem dignissimos accusantium, unde incidunt nam maxime reprehenderit modi ipsa ducimus est, cupiditate perferendis ipsum necessitatibus porro sit fugiat?</p>
       </div>
    </div>
    </div>
  )
}

const AutoType = (props)=>{
  const {text} = props;
  return (
    <>
    <AutoTyping
      active // <boolean>
      textRef={text}// <string>
      writeSpeed={150} // <number>
      deleteSpeed={150} // <number>
      delayToWrite={1000} // <number>
      delayToDelete={2000} // <number>
    />
    <BlinkCursor
      active // <boolean>
      blinkSpeed={500} // <number>
    />
    </>
  )
}

const Sliders = ()=>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
    <div>
      <h3>6</h3>
    </div>
  </Slider>

  )
}

// using object 
// let Container ={
//    background:"red",
//    color:"white",
// }

export default Home