import React from 'react'
import logo from '../assets/white logo horizontal.png'
import './Nav.css'
import hero from '..//assets/Web Graphic1.webp'
import tele from '../assets/pngegg.png'




function Nav() {
    return (
        <>
         <section id="landing">
      <nav className="navbar navbar-expand-lg navbar-toggleable-sm fixed-top" id="nav"> 
      <a className="navbar-brand ml-lg-5 ml-xs-5 pl-xs-0" href=" " ><img src={logo} alt="" style={{width:"130px",marginLeft:"20%"}} className="img-fluid" id="logo_img"></img></a>
      <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active mx-4 my-3"><a href="#home" data-target="#home" className="button current" style={{fontWeight:"500"}}>Home</a>
               
            </li>
          
            <li className="nav-item mx-4 my-3 current">
            <a className="button" href="#solution" data-target="#solution" style={{fontWeight:"500"}} >Solutions  </a>
            </li>
            
            <li className="nav-item mx-4 my-3 current">
            <a className="button" href="#eCommerce" data-target="#eCommerce" style={{fontWeight:"500"}} >eCommerce  </a>
            </li>
            <li className="nav-item mx-4 my-3"><a href="#team" data-target="#team" className="button current"  style={{fontWeight:"500"}}>Team</a>
                
                </li>
            <li className="nav-item mx-4 my-3" id="ss">
            <a className="button1"href="#contact" data-target="#contact" style={{fontWeight:"500"}} >Contact Us</a>
            </li>
          
            </ul>
            {/* <ul className="navbar-nav mr-5 row" id="ul">

            <a href="https://twitter.com/autifynetwork" target="_blank" rel="noreferrer" className="mx-3"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII=" alt="twitter"></img></a>
            <a href="https://www.linkedin.com/company/autify-network/" target="_blank" rel="noreferrer" className="mx-3"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC" alt="linkedin"></img></a>
           <a href="https://www.facebook.com/autifynetwork" target="_blank" rel="noreferrer" className="mx-3"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgB7ZXNEYJADIWzCwVYAiXI3x0r0RLswLUStRM8M4Ad2AIF8OOL4zpclIhw4zsACy/JvOwyUfQiy7LEcZxD13VrLFc0EqVU2rbtOYqiy3PNlzzPDW4HmpZjGIZGIfkOixPNAJxsNCxtaSa45S56ngj1FbQGQRff9yv7Eh3oPgXwfrokBOK93bgfWGmpckTyJ2IHfYqiuMORJ9GKHfSRJmfUt01icJbVt+9D8aMcWMqy9IY0fxWo69ob0gy2yNJvlTSG+cvBUmAp8C5Q0Yy4GDg3yUz45exbkDfVTdMcaT7OOo7jFA+GpsfwDOn//jtY2qJlCY2Hx+pNa22CILjyiwczlG3mydx+agAAAABJRU5ErkJggg==" alt="facebook"></img></a>
         
            </ul> */}
        </div>

      </nav>
     
          
          <div className="parent1" style={{borderStyle:"none"}} id="home">
            <div className="child2 mt-lg-5 pt-lg-5" > 
            <div className="heading"><h1 id="heading" style={{background: "white",WebkitBackgroundClip: "text",backgroundClip: "text", color: "transparent"}}>The Key to Countering the Counterfeit Problem
     </h1>
           <div className="my-md-5 my-lg-0 pt-3"><h5 className="mx-xs-5" style={{color:"white",marginTop:"1%",fontWeight:"400"}} id="h41">At Autify, we believe in harnessing the power of blockchain technology to solve real-world problems. We are building a blockchain trust protocol to combat the $1.8 trillion big global counterfeit trade predicament. <br className="break-phone"/></h5></div> </div>
            <div className="mt-3 mb-lg-5"><button  className="btn-grad py-3 mx-xs-5 mr-sm-auto"><a href="https://twitter.com/autifynetwork" target="_blank" rel="noreferrer" style={{fontWeight:"500"}}>Join Us on Our Mission</a></button></div>
            <div className="landing__foot__icons mt-lg-5 my-xs-3"  id="problem_1">
                <a href="https://twitter.com/autifynetwork" target="_blank" rel="noreferrer" className="mx-1"><img style={{width:"24px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII=" alt="twitter" id="icons"></img></a>
            <a href="https://www.linkedin.com/company/autify-network/" target="_blank" rel="noreferrer" className="mx-1"><img style={{width:"24px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC" alt="linkedin" id="icons"></img></a>
           <a href="https://www.facebook.com/autifynetwork" target="_blank" rel="noreferrer" className="mx-1"><img style={{width:"24px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgB7ZXNEYJADIWzCwVYAiXI3x0r0RLswLUStRM8M4Ad2AIF8OOL4zpclIhw4zsACy/JvOwyUfQiy7LEcZxD13VrLFc0EqVU2rbtOYqiy3PNlzzPDW4HmpZjGIZGIfkOixPNAJxsNCxtaSa45S56ngj1FbQGQRff9yv7Eh3oPgXwfrokBOK93bgfWGmpckTyJ2IHfYqiuMORJ9GKHfSRJmfUt01icJbVt+9D8aMcWMqy9IY0fxWo69ob0gy2yNJvlTSG+cvBUmAp8C5Q0Yy4GDg3yUz45exbkDfVTdMcaT7OOo7jFA+GpsfwDOn//jtY2qJlCY2Hx+pNa22CILjyiwczlG3mydx+agAAAABJRU5ErkJggg==" alt="facebook" is="icons"></img></a>
           <a href="https://t.me/autifynetwork" target="_blank" rel="noreferrer" className="mx-1 "><img src={tele} style={{width:"28px"}} alt="telegram" className="img-fluid" id="icons"></img></a>
           <h5 style={{color:"white",fontWeight:"lighter",alignSelf:"center"}}  className="mx-1 py-1" id="follow">
            - Follow us</h5>
             </div>
            
           
            
            </div>
                <div className="child1" id="child"><img src={hero} className="img-fluid img1" alt="alt" style={{width:"100%",zIndex:"0"}} id="img1"></img></div>
                </div>
          


      </section>
            </>
    )
}

export default Nav
