import React, { useEffect, useState } from "react";
// import logo from "../public/assets/white logo horizontal.png";
import logo2 from "../public/assets/Content Pics/Logo/Logo 2.png";
import externalLink from "../public/assets/External_link_font_awesome.png";
import { Wallet } from "../utils/near-wallet";
import tele from "../public/assets/pngegg.png";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  const [scrollTopValue, setScrollTopValue] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollTopValue(document.documentElement.scrollTop);
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  const [walletName, setWalletName] = useState("Near Wallet");
  const [signedIn, setSignedIn] = useState(false);
  const wallet = new Wallet({});

  const connectToWallet = async () => {
    if (!signedIn) {
      let isSignedIn = await wallet.startUp();
      console.log(isSignedIn);
      if (isSignedIn) {
        setSignedIn(true);
        const accountId =
          wallet.walletSelector.store.getState().accounts[0].accountId;
        console.log(
          wallet.walletSelector.store.getState().accounts[0].accountId
        );
        setWalletName(accountId);
      } else {
        wallet.signIn();
      }
    } else {
      setWalletName("Near Wallet");
      setSignedIn(false);
    }
  };

  return (
    <>
      <section id="landing">
        <div className="hellobar">
          <div className="hellobar-links">
            <a
              href="https://bit.ly/autify-network-funding"
              target="_blank"
              rel="noreferrer"
            >
              Autify Network is Raising a $1.5 Million Funding Led by Loop
              Ventures
              <Image
                src={externalLink}
                className="external-link"
                alt="external-link"
              />
            </a>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-lg navbar-toggleable-sm fixed-top"
          id="nav"
          style={{
            top: scrollTopValue > 80 && "0",
            backgroundColor: scrollTopValue > 80 ? "#121638" : "transparent",
          }}
        >
          <a className="navbar-brand ml-lg-5 pl-xs-0 pl-lg-4" href="/">
            <Image
              src={logo2}
              alt=""
              style={{ width: "130px" }}
              className="img-fluid"
              id="logo_img"
            ></Image>
          </a>

          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item active mx-4 my-3">
                <a
                  href="/#team"
                  data-target="#team"
                  className="button current"
                  style={{ fontWeight: "500" }}
                >
                  About Us
                </a>
              </li>

              <li className="nav-item mx-4 my-3 current">
                <a
                  className="button"
                  href="/#solution"
                  data-target="#solution"
                  style={{ fontWeight: "500" }}
                >
                  Solutions{" "}
                </a>
              </li>

              <li className="nav-item mx-4 my-3 current">
                <Link
                  className="button"
                  href="/ContactPage"
                  // data-target="#footer_m"
                  style={{ fontWeight: "500" }}
                >
                  Contact Us{" "}
                </Link>
              </li>
              <li className="nav-item mx-4 my-3">
                <a
                  href="https://autifynetwork.docsend.com/view/3wf843i5z4rrcmc3"
                  target="_blank"
                  rel="noreferrer"
                  className="button current"
                  style={{ fontWeight: "500" }}
                >
                  Lightpaper
                </a>
              </li>
              {/* <li className="nav-item my-2 mx-2  ">
                <button className="button1" onClick={connectToWallet}>
                  {walletName}
                </button>
              </li> */}
              <li className="nav-item mx-md-2 mx-3 my-3">
                <a
                  href="https://twitter.com/autifynetwork"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  <img
                    style={{ width: "20px" }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII="
                    alt="twitter"
                    id="icons"
                  ></img>
                </a>
              </li>
              <li className="nav-item mx-md-2 mx-3 my-3">
                <a
                  href="https://www.linkedin.com/company/autify-network/"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  <img
                    style={{ width: "20px" }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC"
                    alt="linkedin"
                    id="icons"
                  ></img>
                </a>
              </li>
              <li className="nav-item mx-md-2 mx-3 my-3">
                <a
                  href="https://www.facebook.com/autifynetwork"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2"
                >
                  <img
                    style={{ width: "20px" }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgB7ZXNEYJADIWzCwVYAiXI3x0r0RLswLUStRM8M4Ad2AIF8OOL4zpclIhw4zsACy/JvOwyUfQiy7LEcZxD13VrLFc0EqVU2rbtOYqiy3PNlzzPDW4HmpZjGIZGIfkOixPNAJxsNCxtaSa45S56ngj1FbQGQRff9yv7Eh3oPgXwfrokBOK93bgfWGmpckTyJ2IHfYqiuMORJ9GKHfSRJmfUt01icJbVt+9D8aMcWMqy9IY0fxWo69ob0gy2yNJvlTSG+cvBUmAp8C5Q0Yy4GDg3yUz45exbkDfVTdMcaT7OOo7jFA+GpsfwDOn//jtY2qJlCY2Hx+pNa22CILjyiwczlG3mydx+agAAAABJRU5ErkJggg=="
                    alt="facebook"
                    is="icons"
                  ></img>
                </a>
              </li>
              <li className="nav-item mx-md-2 mx-3 my-3">
                <a
                  href="https://t.me/autifynetwork"
                  target="_blank"
                  rel="noreferrer"
                  className="mx-2 "
                >
                  <Image
                    src={tele}
                    style={{ width: "24px" }}
                    alt="telegram"
                    className="img-fluid"
                    id="icons"
                  ></Image>
                </a>
              </li>
              {/* <li className="nav-item mx-4 my-3" id="ss">
                <a
                  className="button1"
                  href="#contact"
                  data-target="#contact"
                  style={{ fontWeight: "500" }}
                >
                  Contact Us
                </a>
              </li> */}
            </ul>
            {/* <ul className="navbar-nav mr-5 row" id="ul">

            <a href="https://twitter.com/autifynetwork" target="_blank" rel="noreferrer" className="mx-3"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII=" alt="twitter"></img></a>
            <a href="https://www.linkedin.com/company/autify-network/" target="_blank" rel="noreferrer" className="mx-3"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC" alt="linkedin"></img></a>
           <a href="https://www.facebook.com/autifynetwork" target="_blank" rel="noreferrer" className="mx-3"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgB7ZXNEYJADIWzCwVYAiXI3x0r0RLswLUStRM8M4Ad2AIF8OOL4zpclIhw4zsACy/JvOwyUfQiy7LEcZxD13VrLFc0EqVU2rbtOYqiy3PNlzzPDW4HmpZjGIZGIfkOixPNAJxsNCxtaSa45S56ngj1FbQGQRff9yv7Eh3oPgXwfrokBOK93bgfWGmpckTyJ2IHfYqiuMORJ9GKHfSRJmfUt01icJbVt+9D8aMcWMqy9IY0fxWo69ob0gy2yNJvlTSG+cvBUmAp8C5Q0Yy4GDg3yUz45exbkDfVTdMcaT7OOo7jFA+GpsfwDOn//jtY2qJlCY2Hx+pNa22CILjyiwczlG3mydx+agAAAABJRU5ErkJggg==" alt="facebook"></img></a>
         
            </ul> */}
          </div>
        </nav>
        {/* <Intro /> */}
      </section>
    </>
  );
}

export default Nav;
