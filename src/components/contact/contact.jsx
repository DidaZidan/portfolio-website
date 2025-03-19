import'./contact.css'
function Contact(){
return(
    <>
        <div id='contact' className="main">
            <div className="lets">
                    <h1>let's talk</h1>
                    <p>i am availble 24/7 so feel free to contact with me any time</p>
                    <div className="email">
                    <i className="fa-solid fa-envelope"></i> <span>abdelrahmanbusiness2006@gmail.com</span>
                    </div>
                    <div className="linked">
                    <i className="fa-brands fa-linkedin"></i> <span>www.linkedin.com/in/abdelrahman-zidan-bb89a1356</span>
                    </div>
            </div>
            <form action="https://formspree.io/f/xkgjgzgo" method='post'>
                <div className="inputs">
                    <div className="user">
                    <p><label  htmlFor="name">Your Name</label></p>
                    <input name='username' placeholder='Enter you name' id='name' type="text"  required/>
                    </div>
                    <div className="mail">
                    <p><label htmlFor="mail">Your Email</label></p>
                    <input name='email' placeholder='Enter you email' id='mail' type="text" required />
                    </div>
                    <div className="area">
                        <p><label htmlFor="text">Write your message here</label></p>
                        <textarea placeholder='Enter your message' name="message" id="text"></textarea>
                    </div>
                </div>
                <input className='sunbmit' type="submit" value={'Submit'} />
            </form>    
        </div>
    </>
)
}
export default Contact