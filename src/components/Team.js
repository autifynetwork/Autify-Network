/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
import "./Team.css";
import team1 from "..//assets/Team Pictures web/Team New/Nabarun Chakraborty1.png";
import team2 from "..//assets/Team Pictures web/Joel Dsouza.png";
import team3 from "..//assets/Team Pictures web/Sanjana.webp";
import team4 from "..//assets/Team Pictures web/Team New/Reshmi Mitra 1.png";
import team5 from "..//assets/Team Pictures web/Team New/Shreejata Neogi1.png";
import team6 from "..//assets/Team Pictures web/Ashwathy Ramachandran.webp";
import team7 from "..//assets/Team Pictures web/Viiny.png";
import team8 from "..//assets/Team Pictures web/Shrey Chopra.webp";
import team9 from "..//assets/Team Pictures web/Preetish Biswal.webp";
import team10 from "..//assets/Team Pictures web/Team New/Wasim Bari.png";
import team11 from "../assets/Team Pictures web/Team New/Kunal-Goyal.png";
import team12 from "../assets/Team Pictures web/Team New/Rahul Manoj 1.png";
import team13 from "../assets/Team Pictures web/Team New/Kundan Mishra 1.png";
import team14 from "../assets/Team Pictures web/Team New/Keshava Varmaa S 1.jpg";

class Team extends Component {
  constructor(props) {
    super(props);
    // React Ref is created here
    this.navRef = React.createRef();
    scroll({
      behavior: "smooth",
    });
  }
  handleNav = (direction) => {
    if (direction === "left") {
      return this.navRef ? (this.navRef.current.scrollLeft -= 1100) : null;
    } else {
      return this.navRef ? (this.navRef.current.scrollLeft += 1100) : null;
    }
  };

  render() {
    return (
      <section
        className="mb-5 mx-1 slider teams"
        style={{ backgroundColor: "transparent" }}
        id="team"
      >
        <div className="section text-center mx-lg-5 px-lg-5 px-2 mb-lg-5 pb-lg-5">
          <h2 className="title mt-5 mb-3 pt-5 mb-3" id="meet_the_team_h2">
            {" "}
            <strong style={{ color: "white" }}>
              {" "}
              The Team behind Autify Network
            </strong>
          </h2>
          <div className="mx-lg-5 px-lg-5 mx-3">
            {" "}
            <h4 className="py-3 mb-5 mx-lg-5" id="meet_the_team_h4">
              {" "}
              We are a team of entrepreneurs, blockchain engineers,
              cryptographers, operational and marketing experts eager to build
              real-world solutions.
            </h4>
          </div>

          <div
            className="grid-content mx-lg-5 px-lg-6 flex-row flex-nowrap x-scroll-disabled card-group py-2 rounded"
            id="phone1"
            ref={this.navRef}
          >
            <div className="col ">
              <div className="team-player">
                <div className="card card-plain">
                  <div className="row">
                    <div className="col">
                      <img
                        src={team1}
                        alt="ThumbnailImage"
                        className="img-raised rounded-circle mx-auto"
                        id="team_img1"
                      />
                    </div>
                  </div>
                  <h4 className="card-title mt-4" id="h4">
                    Nabarun Chakraborty
                    <br />
                    <small className="card-description text-muted"></small>
                  </h4>
                  <div className="card-body">
                    <p className="card-description" style={{ color: "white" }}>
                      Founder & CEO
                    </p>
                  </div>
                  <div className="card-footer justify-content-center">
                    <div
                      className="landing__foot__icons"
                      style={{ display: "block" }}
                    >
                      <a
                        href="https://twitter.com/Its_Nabarun"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII="
                          alt="twitter"
                        ></img>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/nabarunchakrabortty/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC"
                          alt="linkedin"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="team-player mr-auto ml-auto">
                <div className="card card-plain">
                  <div className="row">
                    <div className="col">
                      <img
                        src={team10}
                        alt="ThumbnailImage"
                        className="img-raised rounded-circle mx-auto"
                        id="team_img1"
                      />
                    </div>
                  </div>
                  <h4 className="card-title my-3 pt-2" id="h4">
                    Wasim Bari
                    <br />
                    <small className="card-description text-muted"></small>
                  </h4>
                  <div className="card-body">
                    <p className="card-description" style={{ color: "white" }}>
                      Blockchain Developer
                    </p>
                  </div>
                  <div className="card-footer justify-content-center">
                    <div
                      className="landing__foot__icons"
                      style={{ display: "block" }}
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII="
                        alt="twitter"
                      ></img>

                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/wasim-bari-it/"
                      >
                        {" "}
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC"
                          alt="linkedin"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="team-player mx-auto">
                <div className="card card-plain">
                  <div className="row">
                    <div className="col">
                      <img
                        src={team5}
                        alt="ThumbnailImage"
                        className="img-raised rounded-circle mx-auto"
                        id="team_img1"
                      />
                    </div>
                  </div>
                  <h4 className="card-title my-3" id="h4">
                    Shreejata Neogi
                    <br />
                    <small className="card-description text-muted"></small>
                  </h4>
                  <div className="card-body">
                    <p className="card-description" style={{ color: "white" }}>
                      Graphics & video lead
                    </p>
                  </div>
                  <div className="card-footer justify-content-center">
                    <div
                      className="landing__foot__icons"
                      style={{ display: "block" }}
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII="
                        alt="twitter"
                      ></img>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/shreejata-neogi-0b37b1165/"
                      >
                        {" "}
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC"
                          alt="linkedin"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="team-player mr-auto ml-auto">
                <div className="card card-plain">
                  <div className="row">
                    <div className="col">
                      <img
                        src={team11}
                        alt="ThumbnailImage"
                        className="img-raised rounded-circle mx-auto"
                        id="team_img1"
                      />
                    </div>
                  </div>
                  <h4 className="card-title my-3" id="h4">
                    Kunal goyal
                    <br />
                    <small className="card-description text-muted"></small>
                  </h4>
                  <div className="card-body">
                    <p className="card-description" style={{ color: "white" }}>
                      Blockchain Developer
                    </p>
                  </div>
                  <div className="card-footer justify-content-center">
                    <div
                      className="landing__foot__icons"
                      style={{ display: "block" }}
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII="
                        alt="twitter"
                      ></img>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/kunalgoyal9/"
                      >
                        {" "}
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC"
                          alt="linkedin"
                        />{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="team-player mx-auto">
                <div className="card card-plain">
                  <div className="row">
                    <div className="col">
                      <img
                        src={team4}
                        alt="ThumbnailImage"
                        className="img-raised rounded-circle mx-auto"
                        id="team_img1"
                      />
                    </div>
                  </div>
                  <h4 className="card-title my-3 pt-1" id="h4">
                    Reshmi Mitra
                    <br />
                    <small className="card-description text-muted"></small>
                  </h4>
                  <div className="card-body">
                    <p className="card-description" style={{ color: "white" }}>
                      PR Consultant
                    </p>
                  </div>
                  <div className="card-footer justify-content-center">
                    <div
                      className="landing__foot__icons"
                      style={{ display: "block" }}
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII="
                        alt="twitter"
                      ></img>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/reshmi-mitra/"
                      >
                        {" "}
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC"
                          alt="linkedin"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="team-player mx-auto">
                <div className="card card-plain">
                  <div className="row">
                    <div className="col mx-auto">
                      <img
                        src={team12}
                        alt="ThumbnailImage"
                        className="img-raised  rounded-circle mx-auto"
                        id="team_img1"
                      />
                    </div>
                  </div>
                  <h4 className="card-title my-3" id="h4">
                    Rahul Manoj
                    <br />
                    <small className="card-description text-muted"></small>
                  </h4>
                  <div className="card-body">
                    <p className="card-description" style={{ color: "white" }}>
                      Content Lead
                    </p>
                  </div>
                  <div className="card-footer justify-content-center">
                    <div
                      className="landing__foot__icons"
                      style={{ display: "block" }}
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII="
                        alt="twitter"
                      ></img>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/rahul-m-55b309174/"
                      >
                        {" "}
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC"
                          alt="linkedin"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col ">
              <div className="team-player mx-auto">
                <div className="card card-plain">
                  <div className="row">
                    <div className="col">
                      <img
                        src={team13}
                        alt="ThumbnailImage"
                        className="img-raised  rounded-circle mx-auto"
                        id="team_img1"
                      />
                    </div>
                  </div>
                  <h4 className="card-title my-3" id="h4">
                    Kundan Mishra
                    <br />
                    <small className="card-description text-muted"></small>
                  </h4>
                  <div className="card-body">
                    <p className="card-description" style={{ color: "white" }}>
                      Blockchain Developer
                    </p>
                  </div>
                  <div className="card-footer justify-content-center">
                    <div
                      className="landing__foot__icons"
                      style={{ display: "block" }}
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII="
                        alt="twitter"
                      ></img>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/kundan-mishra-83a7991bb/"
                      >
                        {" "}
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC"
                          alt="linkedin"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col ">
              <div className="team-player mr-auto ml-auto">
                <div className="card card-plain">
                  <div className="row">
                    <div className="col">
                      <img
                        src={team9}
                        alt="ThumbnailImage"
                        className="img-raised  rounded-circle mx-auto"
                        id="team_img1"
                      />
                    </div>
                  </div>
                  <h4 className="card-title my-3" id="h4">
                    Clevin Rodrigues
                    <br />
                    <small className="card-description text-muted"></small>
                  </h4>
                  <div className="card-body">
                    <p className="card-description" style={{ color: "white" }}>
                      Social Media Manager
                    </p>
                  </div>
                  <div className="card-footer justify-content-center">
                    <div
                      className="landing__foot__icons"
                      style={{ display: "block" }}
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII="
                        alt="twitter"
                      ></img>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="(https://www.linkedin.com/in/rodrigues49/"
                      >
                        {" "}
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC"
                          alt="linkedin"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="col ">
              <div className="team-player mr-auto ml-auto">
                <div className="card card-plain">
                  <div className="row">
                    <div className="col">
                      <img
                        src={team14}
                        alt="ThumbnailImage"
                        className="img-raised  rounded-circle mx-auto"
                        id="team_img1"
                      />
                    </div>
                  </div>
                  <h4 className="card-title my-3" id="h4">
                    Keshavavarmaa
                    <br />
                    <small className="card-description text-muted"></small>
                  </h4>
                  <div className="card-body">
                    <p className="card-description" style={{ color: "white" }}>
                      Full-Stack Developer
                    </p>
                  </div>
                  <div className="card-footer justify-content-center">
                    <div
                      className="landing__foot__icons"
                      style={{ display: "block" }}
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGnSURBVHgBtVbdbcIwED6bDMAGDRsQfh54ajpBuwGwARuQTEI6QdsJSl9BkHSDdILmHUH6HXKkNroEp5BPMpZP+Pt857tzFBlst1u/0+ks8zzvY9mlf0IptT6dTtFoNHo+r/lnt9sFmJZ0W4TD4TBQIJ9hsaIWAE8eNFyaUkvgkGvE3KeWwPepqV10RQGELa3bhZOt8R8fl6i01j2YIozMzH+5cMm5IOCb0AUCfwriXtkYx3EXl8qZOKNfaV4VIiYJMc/L3kA4kDZ4nscefFKphkQBkMx4hkgEAY+FOCyYM2RGJu2BBy4J6S6GiMkOh8N8MpmkZInNZtOHeFy2V3kQNiE/E2ntinbJyAVCDYFQPloLcAYhdKv9fn9H9gK+tYBBNhgMvsgC3CxxKLepwMJ02VqY7KkM6aVWsYTICxdRFTlO/l5H4Ai2FOMVG1NkRoIwfUgbIbwwlVv7OIl1UIiA4M1xnISrlL1AbbgQvcd4su3CLPBNVzyRl8APTkItgTuCPh6PIbWHSI/H4zXJbflaBPxloYoVP/5waVpVkZbIwJEgCYIi+34ATGDGNz/K05IAAAAASUVORK5CYII="
                        alt="twitter"
                      ></img>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/keshava-varmaa-896a441b0/"
                      >
                        {" "}
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFXSURBVHgB7VXdUYQwEE4CBWgHlCC/M7xhB1rB2cnlKtAO7uxAKxCf+ZES7ECemQH89gQHudwxBm588ZuBzH6EJN/uZpezDkmSRIZhrNu2vYJ5wTTBOY+bptl5nve4t+mVZZnEsGbLYuO6ruRY/A7Glp0BUHItIGml+PYAPsIo2QyQy0lBOyQRgwL+s3s7z/O3Li46KMWYwcnHAdYOOP1rKkgLqrY49TO5CaPFZuDARUtDqEikF++fI1yJRwohLsmu65pi9qRaS+WiSVRVZYdh+N7bQRAUGG6REC9wacSmFExhuPgQULIZc1oK0jS9QQLQ5SxxYtmXBdM0C1yuH3O1FMD39+wrfS1sJHvetu3yYC7TwCh1rVNztTb4Df43+PsNqBZ9sHkV8ySo4RTsTEA6x0J1vRfETvi+H7OZrfEI9iXkuxxT84ekVdeLdUG1qUApkY7jvBLxCYWygiQ7y9ArAAAAAElFTkSuQmCC"
                          alt="linkedin"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 btn_toggler">
            <button
              onClick={() => this.handleNav("left")}
              id="btn_toggler"
              className="mx-2"
            >
              {" "}
            </button>
            <button
              onClick={() => this.handleNav("right")}
              id="btn_toggler"
              className="mx-2"
            >
              {" "}
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
