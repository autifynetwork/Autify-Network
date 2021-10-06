import React from 'react'
import './Footer.css'
import logo from '../assets/white logo 3 (1).png'
import {db} from '../firebase'
import {useState} from 'react'
import tele from '../assets/pngegg.png'


function Footer()
 {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [subscribe,setSubscribe] = useState("");
  
    
    // function sendEmail(e) {
    //     e.preventDefault();
    //     emailjs.sendForm('service_xn2suce', 'template_khb69db', e.target, 'user_Rrrqmo6h0kHJPvhS4zkK0')
    //     .then((res) => {
    //     console.log(res.text);
    //     }, (error) => {
    //     console.log(error.text);
    //     });
    //     }
    const handleSubmit = (e) => {
      e.preventDefault();
     
  
      db.collection("contacts")
        .add({
          name: name,
          email: email,
          message: message,
          subject: subject
        })
        .then(() => {
        
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
      
        });
  
      setName("");
      setEmail("");
      setMessage("");
    
    };
    const handleSubscribe = (e) => {
        e.preventDefault();
       
    
        db.collection("contacts")
          .add({
            subscribe: subscribe
          })
          .then(() => {
          
            alert("Thannks for subscribing!");
          })
          .catch((error) => {
            alert(error.message);
        
          });
    
        setSubscribe("");

      
      };
    


    return (
        <>  <section className="pb-lg-5 pt-lg-3">
            <div className="contact_form container my-5" style={{height:""}} id="contact">
                <div className="row" style={{marginTop:"15%",marginBottom:"20%"}}>
                    <div className="col-lg mr-3">
                        
                    <h2 id="h2">Contact Us
                    <span className="my-5 mx-auto " id="p1">
                    Get In Touch to Know More
                    <br/> PR: pr@autify.network
                    <br/>Investors: invest@autify.network
                      <br/>Influencer : influencer@autify.network
                      <br/>Get Hired : hr@autify.network <br/>
                    </span></h2>


                    
                    <div className="row mb-1">
                        <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/02/illustration-hero-new.png" className="img-fluid mx-auto" alt="alt" style={{width:"400px"}}/>
                    </div>

                    </div>
                    <div className="col-md-12 col-lg-5 ml-lg-5" id="hh">
                    <div className="contact-form mx-auto">
                      <h1 id="h2" className="title mt-5">Your Details</h1>
                      <h4 id="h3" className="subtitle">We are here to assist you.</h4>
                            <form method="post" style={{width: "75%"}} className="mx-auto mb-1" onSubmit={handleSubmit}>
            
            <div className="form-group mx-auto">
                <input type="text" name="txtName" className="form-control" placeholder="Your Name *" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-group mx-auto">
                <input type="text" name="user__email" className="form-control" placeholder="Your Email *" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group mx-auto">
                <input type="text" className="form-control" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}  />
            </div>
            <div className="form-group mx-auto">
              <textarea name="txtMsg" className="form-control" placeholder="Your Message *" value={message} style={{width: "100%", height: "150px"}} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
            <div className="form-group mx-auto">
                <input type="submit" name="btnSubmit" className="button_info " value="Send Message" />
            </div>
          </form>
	</div>

                        
            </div>
                </div>

            </div>
            {/* <div className="stay_in_touch container ml-auto mr-auto my-5 mx-xs-5" id="stay">
                    <div className="contact_description">
                        <h2 id="h2">Our Newsletter</h2>
                        <p>Drop your email below and our team will get in touch with you</p>

                    </div>
                    <div style={{display:"block"}}>
                        <form className="form" onSubmit={handleSubscribe}>
                            <input type="text" placeholder="Enter email" className="input"/>
                                <button type="submit" className="btn-subscribe">Submit</button>
                            
                        </form>
                    </div>
                </div> */}
                </section>
                <div className="footer_m">
              

                    <a href=" "><img src={logo} alt="alt-text" style={{height:"100px"}}></img></a>

                    <div className="row">
                        <div className="col">
                        <a href=" " className="button11 current">Privacy Policy</a>
                        </div>
                        <div className="col" style={{placeItems:"center"}}>
                        <a href=" " className="button11 current">Terms and Conditions</a>
                            
                            </div>
                            <div className="col">
                            <a href=" " className="button11">Sitemap</a>
                            
                            </div></div>
                <div className="landing__foot__icons" style={{display:"block"}}>
                <a href="https://twitter.com/autifynetwork" target="_blank" rel="noreferrer" className="mx-1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII=" alt="twitter" id="icons"></img></a>
            <a href="https://www.linkedin.com/company/autify-network/" target="_blank" rel="noreferrer" className="mx-1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC" alt="linkedin" id="icons"></img></a>
            <a href="https://www.facebook.com/autifynetwork" target="_blank" rel="noreferrer" className="mx-1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgB7ZXNEYJADIWzCwVYAiXI3x0r0RLswLUStRM8M4Ad2AIF8OOL4zpclIhw4zsACy/JvOwyUfQiy7LEcZxD13VrLFc0EqVU2rbtOYqiy3PNlzzPDW4HmpZjGIZGIfkOixPNAJxsNCxtaSa45S56ngj1FbQGQRff9yv7Eh3oPgXwfrokBOK93bgfWGmpckTyJ2IHfYqiuMORJ9GKHfSRJmfUt01icJbVt+9D8aMcWMqy9IY0fxWo69ob0gy2yNJvlTSG+cvBUmAp8C5Q0Yy4GDg3yUz45exbkDfVTdMcaT7OOo7jFA+GpsfwDOn//jtY2qJlCY2Hx+pNa22CILjyiwczlG3mydx+agAAAABJRU5ErkJggg==" alt="facebook" is="icons"></img></a>
            <a href="https://t.me/autifynetwork" target="_blank" rel="noreferrer" className="mx-1 "><img src={tele} style={{width:"32px"}} alt="telegram" className="img-fluid" id="icons"></img></a>
                </div>
                <br/>
                <div className="row mx-auto .d-flex" style={{placeItems:"center",marginRight:"40%"}}>
                    <a href="#0" className="button11 current"><i className="mdi mdi-copyright"></i>2021 Autify Network. All Rights Reserved.</a></div> 
                                </div>
              
                      
        </>
    )
}

export default Footer
