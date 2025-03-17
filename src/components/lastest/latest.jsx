import './latest.css'
import sneaker from'../../assets/sneaker.png'
import awu from'../../assets/awul.png'
import colp from'../../assets/colorpicker.png'
import cora from'../../assets/cora.png'
import crud from'../../assets/crud.png'
import ip from'../../assets/iphone.png'
import movie from'../../assets/movie.png'
import news from'../../assets/newss.png'
import nov from'../../assets/nouvill.png'
import rock from'../../assets/rock.png'
import todo from'../../assets/todoList.png'
function Latest(){
return(
    <>
    <h1 id='work' className='work'>My Work</h1>
    <div className="section">
        <div className="card">
            <div className="image">
                    <img src={sneaker} alt="" />
            </div>
            <div className="text">
                <div className="title">
                    <h1>Sneaker web store </h1>
                </div>
                <div className="discribtion">
                    <h3>this web store displayes a variety of sneakers and it has change color item functionality </h3>
                </div>
                <div className="btn">
                        <a target='_blank' href="https://github.com/DidaZidan/Sneaker-Store-Website.git">GitHub Repo</a>
                        <a target='_blank' href="https://didazidan.github.io/Sneaker-Store-Website/">Live Demo</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="image">
                    <img src={cora} alt="" />
            </div>
            <div className="text">
                <div className="title">
                    <h1>Cora web store </h1>
                </div>
                <div className="discribtion">
                    <h3>this web store displayes a variety of clothes and it has a page for each item and change item model  </h3>
                </div>
                <div className="btn">
                        <a target='_blank' href="https://github.com/DidaZidan/Cora.git">GitHub Repo</a>
                        <a target='_blank' href="https://didazidan.github.io/Cora/">Live Demo</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="image">
                    <img src={ip} alt="" />
            </div>
            <div className="text">
                <div className="title">
                    <h1>Iphone landing page </h1>
                </div>
                <div className="discribtion">
                    <h3> this landing page displayes the iphone 13pro max with functionality to change color of the phone and also the background color changes to match the phone color </h3>
                </div>
                <div className="btn">
                        <a target='_blank' href="https://github.com/DidaZidan/iphone-landpage.git">GitHub Repo</a>
                        <a target='_blank' href="https://didazidan.github.io/iphone-landpage/">Live Demo</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="image">
                    <img src={nov} alt="" />
            </div>
            <div className="text">
                <div className="title">
                    <h1>Nouvil Academy </h1>
                </div>
                <div className="discribtion">
                    <h3> Nouvil Academy is a simulation of a real academy web site that has a drop down menu ,a collapse animation and slides animation . This website built with bootstrap and completly responsive </h3>
                </div>
                <div className="btn">
                        <a target='_blank' href="https://github.com/DidaZidan/Nouvil.git">GitHub Repo</a>
                        <a target='_blank' href="https://didazidan.github.io/Nouvil/">Live Demo</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="image">
                    <img src={awu} alt="" />
            </div>
            <div className="text">
                <div className="title">
                    <h1>AWU web store </h1>
                </div>
                <div className="discribtion">
                    <h3>this web store displayes a variety of products and each product has add/remove cart functionality . also the store has sign in and sign out padge</h3>
                </div>
                <div className="btn">
                        <a target='_blank' href="https://github.com/DidaZidan/AWU.git">GitHub Repo</a>
                        <a target='_blank' href="https://didazidan.github.io/AWU/">Live Demo</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="image">
                    <img src={news} alt="" />
            </div>
            <div className="text">
                <div className="title">
                    <h1>News mag </h1>
                </div>
                <div className="discribtion">
                    <h3>This website has an api that retrieves the news . The button at the navebar specifies the topic to be displayed on the screen .This website built with bootstrap and completly responsive</h3>
                </div>
                <div className="btn">
                        <a target='_blank' href="https://github.com/DidaZidan/news-project.git">GitHub Repo</a>
                        <a target='_blank' href="https://didazidan.github.io/news-project/">Live Demo</a>
                </div>
                <span style={{color:'red'}}>there is an issue while deploying due to GitHub pages restrictions</span>
            </div>
        </div>
        <div className="card">
            <div className="image">
                    <img src={movie} alt="" />
            </div>
            <div className="text">
                <div className="title">
                    <h1>Movie land  </h1>
                </div>
                <div className="discribtion">
                    <h3>This web site has an api that retrieves the movie name,date and all it's chapters  </h3>
                </div>
                <div className="btn">
                        <a target='_blank' href="https://github.com/DidaZidan/movie-search-app.git">GitHub Repo</a>
                        <a target='_blank' href="https://didazidan.github.io/movie-search-app/">Live Demo</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="image">
                    <img src={crud} alt="" />
            </div>
            <div className="text">
                <div className="title">
                    <h1>Crud application </h1>
                </div>
                <div className="discribtion">
                    <h3>A basic crud application that has all basic features like Create,Read,Delete and Update. it is ready to be used and has a local storage feature to store the items  </h3>
                </div>
                <div className="btn">
                        <a target='_blank' href="https://github.com/DidaZidan/CRUD.git">GitHub Repo</a>
                        <a target='_blank' href="https://didazidan.github.io/CRUD/">Live Demo</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="image">
                    <img src={rock} alt="" />
            </div>
            <div className="text">
                <div className="title">
                    <h1>Rock-Paper-Scissors game </h1>
                </div>
                <div className="discribtion">
                    <h3>Basic rock paper scissors game . computer playes against you and the result is displayed and also the socre </h3>
                </div>
                <div className="btn">
                        <a target='_blank' href="https://github.com/DidaZidan/new-rock-paper-sci.git">GitHub Repo</a>
                        <a target='_blank' href="https://didazidan.github.io/new-rock-paper-sci/">Live Demo</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="image">
                    <img src={todo} alt="" />
            </div>
            <div className="text">
                <div className="title">
                    <h1>Todo List  </h1>
                </div>
                <div className="discribtion">
                    <h3>basic todo list application that enables you to write down your todos and delete it while you finish </h3>
                </div>
                <div className="btn"> 
                        <a target='_blank' href="https://github.com/DidaZidan/TodoList-React.git">GitHub Repo</a>
                        <a target='_blank' href="https://didazidan.github.io/TodoList-React/">Live Demo</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="image">
                    <img src={colp} alt="" />
            </div>
            <div className="text">
                <div className="title">
                    <h1>Color Picker App </h1>
                </div>
                <div className="discribtion">
                    <h3>this color picker app enables user to know the hexa decimal value of the color they want to choose </h3>
                </div>
                <div className="btn">
                        <a target='_blank' href="https://github.com/DidaZidan/color-picker.git">GitHub Repo</a>
                        <a target='_blank' href="https://didazidan.github.io/color-picker/">Live Demo</a>
                </div>
            </div>
        </div>
    </div>
    </>
)
}
export default Latest