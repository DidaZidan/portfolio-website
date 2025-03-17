import './Hero.css'
import image from'../../assets/potfolio-removebg-preview.png'
function Hero() {
  

    return (
      <>
     <div id='home' className="Hero">
        <div className="image">
            <img src={image} alt="porfolio image" />
        </div>
        
        <h1><span>I'm Abdelrahman Zidan</span>, Front-End Developer Based In Egypt</h1>
        <p>I'm a Front-end developer and a Datascience student at <a target='_Blank' href='https://www.alexu.edu.eg/index.php/en/'>Alexandria university</a></p>
        
        <div className="btns">
            <div  className="body-btn1">
                    <a href="#contact">Contact With Me</a>
            </div>
        </div>
        
     </div>
        
     
      </>
    )
  }
  
  export default Hero