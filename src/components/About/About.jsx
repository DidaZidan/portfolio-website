import './About.css'
function About(){
return(
<>
<div id='skills' className="about">
    <h1>Skills</h1>
    <div className="skills">
    <div className="skill">
        <i style={{color:'#e34c26'}} className="fa-brands fa-html5"></i>
        <div>HTML</div>
    </div>
    <div className="skill">
    <i style={{color:'#2965f1'}} className="fa-brands fa-css3-alt"></i>
    <div>CSS</div>
    </div>
    <div className="skill">
    <i style={{color:'#f0db4f'}} className="fa-brands fa-square-js"></i>
    <div>Javascript</div>
    </div>
    <div className="skill">
    <i style={{color:'#61DBFB'}} className="fa-brands fa-react"></i>
    <div>REACT</div>
    </div>
    <div className="skill">
    <i style={{color:'#563d7c'}} className="fa-brands fa-bootstrap"></i>
    <div>Bootstrap</div>
    </div>
    </div>
</div>
</>
)
}
export default About