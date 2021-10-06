/* eslint-disable no-restricted-globals */
import React,{Component} from 'react'
import './Team.css'
import team1 from '..//assets/Team Pictures web/Nabarun Chakraborty (1).png'
import team2 from '..//assets/Team Pictures web/Joel Dsouza.png'
import team3 from '..//assets/Team Pictures web/Sanjana.webp'
import team4 from '..//assets/Team Pictures web/Reshmi Mitra.png'
import team5 from '..//assets/Team Pictures web/Shreejata Neogi.webp'
import team6 from '..//assets/Team Pictures web/Ashwathy Ramachandran.webp'
import team7 from '..//assets/Team Pictures web/Viiny.png'
import team8 from '..//assets/Team Pictures web/Shrey Chopra.webp'
import team9 from '..//assets/Team Pictures web/Preetish Biswal.webp'
import team10 from '..//assets/Team Pictures web/wasim21.jpeg'

class Team extends Component {
  
  constructor(props) {
    super(props);
    // React Ref is created here
    this.navRef = React.createRef();
    scroll({
      behavior:"smooth"
    })
  }
  handleNav = (direction) => {
 

    if (direction === 'left') {
      return(this.navRef ?  (this.navRef.current.scrollLeft -= 1100) : null)
    } 
    else{
      return(this.navRef ?  (this.navRef.current.scrollLeft += 1100) : null)
    }
  
  }

  

  render(){


    return (
      
          <section className="my-5 slider teams" style={{backgroundColor:"transparent"}} id="team">
      
    <div className="section text-center mx-lg-5 px-lg-5 mb-lg-5 pb-lg-5">
      <h2 className="title mt-5 mb-3 pt-5 mb-3"id="meet_the_team_h2"> <strong style={{color:"white"}}> MEET THE TEAM</strong></h2>
      <div className="mx-lg-5 px-lg-5 mx-3"> <h4 className="py-3 mb-5 mx-lg-5" id="meet_the_team_h4"> We are a team of entrepreneurs, blockchain engineers, cryptographers, operational and marketing experts eager to build real-world solutions</h4>
      </div>
     
      
     <div className="row mx-lg-5 px-lg-4 flex-row flex-nowrap overflow-auto x-scroll-disabled card-group" id="phone1" ref={this.navRef}>
      
       
        
          <div className="col mr-lg-2" >
            <div className="team-player ">
              <div className="card card-plain">
                <div className="row">
                  <div className="col">
                    <img src={team1} alt="ThumbnailImage" className="img-raised rounded-circle mx-auto" id="team_img1"/>
                  </div>
                </div>
                <h4 className="card-title my-3" id="h4">
                  <br/>
                  <small className="card-description text-muted"></small>
                </h4>
                <div className="card-body">
                  <p className="card-description" style={{color:"white"}}>Founder & CEO</p>
                </div>
                <div className="card-footer justify-content-center">
                <div className="landing__foot__icons" style={{display:"block"}}>
                <a href="https://twitter.com/autifynetwork" target="_blank" rel="noreferrer"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII=" alt="twitter"></img></a>
            <a href="https://www.linkedin.com/company/autify-network/" target="_blank" rel="noreferrer"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC" alt="linkedin"></img></a>
                    
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col mx-2">
            <div className="team-player mr-auto ml-auto">
              <div className="card card-plain">
                <div className="row">
                  <div className="col" >
                    <img src={team3} alt="ThumbnailImage" 
                     className="img-raised rounded-circle mx-auto" id="team_img1" />
                  </div>
                </div>
                <h4 className="card-title my-3 pt-2" id="h4">Sanjana Sudheer 
                  <br/>
                  <small className="card-description text-muted"></small>
                </h4>
                <div className="card-body">
                  <p className="card-description"  style={{color:"white"}}>Content Specialist</p>
                </div>
                <div className="card-footer justify-content-center">
                <div className="landing__foot__icons" style={{display:"block"}}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII=" alt="twitter"></img>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sanjana-sudheer-35b179118/"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC" alt="linkedin"></img></a> 
                  
                </div>
                </div>
              </div>
            </div>
         
        </div>
     
    

        
    
          <div className="col mx-2">
            <div className="team-player mx-auto">
              <div className="card card-plain" >
                <div className="row">
                  <div className="col">
                    <img src={team5} alt="ThumbnailImage" className="img-raised rounded-circle mx-auto" id="team_img1"/>
                  </div>
                </div>
                <h4 className="card-title my-3" id="h4">Shreejata Neogi
                  <br/>
                  <small className="card-description text-muted"></small>
                </h4>
                <div className="card-body">
                  <p className="card-description"  style={{color:"white"}}>Graphic Design Lead</p>
                </div>
                <div className="card-footer justify-content-center">
                <div className="landing__foot__icons" style={{display:"block"}}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII=" alt="twitter"></img>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shreejata-neogi-0b37b1165/"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC" alt="linkedin"></img></a> 
                   
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col mx-2">
            <div className="team-player mr-auto ml-auto">
              <div className="card card-plain">
                <div className="row">
                  <div className="col" >
                    <img src={team6} alt="ThumbnailImage" className="img-raised rounded-circle mx-auto" id="team_img1"
                       />
                  </div>
                </div>
                <h4 className="card-title my-3 text-truncate" id="h4">Ashwathy Ramachandran
                  <br/>
                  <small className="card-description text-muted"></small>
                </h4>
                <div className="card-body">
                  <p className="card-description"  style={{color:"white"}}>Graphic Design Associate</p>
                </div>
                <div className="card-footer justify-content-center">
                <div className="landing__foot__icons" style={{display:"block"}}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII=" alt="twitter"></img>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ashwathy-r-801098138"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC" alt="linkedin" /> </a> 
                   
                </div>
                </div>
              </div>
            </div>
         
        </div>
        <div className="col mx-2">
         <div className="team-player mx-auto">
           <div className="card card-plain" >
             <div className="row"> 
               <div className="col">
                 <img src={team10} alt="ThumbnailImage" className="img-raised  rounded-circle mx-auto" id="team_img1"/>
               </div>
             </div>
             <h4 className="card-title my-3 pt-2" id="h4">Wasim Bari 
               <br/>
               <small className="card-description text-muted"></small>
             </h4>
             <div className="card-body">
               <p className="card-description text-truncate"  style={{color:"white"}}>Blockchain Developer</p>
             </div>
             <div className="card-footer justify-content-center">
             <div className="landing__foot__icons" style={{display:"block"}}>
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII=" alt="twitter"></img>
                 <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/wasim-bari-it/"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC" alt="linkedin"></img></a> 
                 
             </div>
             </div>
           </div>
         </div>
       </div> 
     
     
       <div className="col mx-2">
         <div className="team-player mx-auto">
           <div className="card card-plain">
             <div className="row">
               <div className="col mx-auto">
                 <img src={team7} alt="ThumbnailImage" className="img-raised  rounded-circle mx-auto" id="team_img1"/>
               </div>
             </div>
             <h4 className="card-title my-4" id="h4">Vinny Varghese
               <br/>
               <small className="card-description text-muted"></small>
             </h4>
             <div className="card-body">
               <p className="card-description" style={{color:"white"}}>Content Writer</p>
             </div>
             <div className="card-footer justify-content-center">
             <div className="landing__foot__icons" style={{display:"block"}}>
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII=" alt="twitter"></img>
                 <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vinny-varghese-94b876155"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC" alt="linkedin"></img></a> 
                
             </div>
             </div>
           </div>
         </div>
       </div>
       <div className="col mx-2">
         <div className="team-player mx-auto">
           <div className="card card-plain" >
             <div className="row"> 
               <div className="col">
                 <img src={team8} alt="ThumbnailImage" className="img-raised  rounded-circle mx-auto" id="team_img1"/>
               </div>
             </div>
             <h4 className="card-title my-3" id="h4">Shrey Chopra
               <br/>
               <small className="card-description text-muted"></small>
             </h4>
             <div className="card-body">
               <p className="card-description text-truncate"  style={{color:"white"}}>Community Management Associate</p>
             </div>
             <div className="card-footer justify-content-center">
             <div className="landing__foot__icons" style={{display:"block"}}>
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII=" alt="twitter"></img>
                 <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shreychopra17"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC" alt="linkedin"></img></a> 
                 
             </div>
             </div>
           </div>
         </div>
       </div> 
       <div className="col mx-2">
         <div className="team-player mr-auto ml-auto">
           <div className="card card-plain">
             <div className="row">
               <div className="col" >
                 <img src={team9} alt="ThumbnailImage"className="img-raised  rounded-circle mx-auto" id="team_img1"
                    />
               </div>
             </div>
             <h4 className="card-title my-3" id="h4">Preetish Biswal
               <br/>
               <small className="card-description text-muted"></small>
             </h4>
             <div className="card-body">
               <p className="card-description"  style={{color:"white"}}>Frontend Developer</p>
             </div>
             <div className="card-footer justify-content-center">
             <div className="landing__foot__icons" style={{display:"block"}}>
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII=" alt="twitter"></img>
                 <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/preetishbiswal777/"> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC" alt="linkedin"></img></a> 
               
             </div>
             </div>
           </div>
         </div>
      
    
     </div>
     </div>
     <div className="mt-5">
          <button onClick={() => this.handleNav('left')} id="btn_toggler" className="mx-2">  </button>
          <button onClick={() => this.handleNav('right')} id="btn_toggler" className="mx-2">  </button>
        </div>
     </div>
     
  





  </section>
 
            
       
    );
}
}

export default Team;
