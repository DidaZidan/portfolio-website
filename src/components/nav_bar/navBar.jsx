import './navBar.css'
function Navbar(){
    return(
        <>
        <div className="nav-bar">
            <div className="logo">
                <h2>ABDELRAHMAN</h2> 
            </div>
            <div className="nav-list">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="nav-btn">
                <a href="#contact">Contact With Me</a>
            </div>
        </div>
        </>
    )
    }
    export default Navbar