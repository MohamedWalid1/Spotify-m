import React, { Component } from "react";
//import PremiumCreddd from "./PremiumCreddd";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Prem.css";
class Prem extends Component {
  render() {
    return (
      <div className="Prem">
        <React.Fragment>
          <div>
            <div>
              <div className="firstBackground" role="banner">
                <header className="firstHeader">
                  Get Premium free for 1 month
                </header>
                <h1 className="secondHeader">
                  Just EGP 49.99 / month after. Cancel anytime.
                </h1>
                <Link
                  to="/Premium/Credentials"
                  style={{ textDecoration: "None" }}
                >
                  <button className="roundButton"> GET PREMIUM </button>
                </Link>
                <h5 className="thirdHeader">
                  <a
                    href="https://www.spotify.com/eg-en/legal/premium-promotional-offer-terms/"
                    className="anchorTag"
                  >
                    Terms and conditions apply.
                  </a>
                  1 month free not available for users who have already tried
                  Premium.
                </h5>
              </div>

              <div className="secondBackground">
                <h1 className="premiumHeader"> Why go Premium? </h1>
                <article class="NQKvj">
                  <article class="OPfqc">
                    <div
                      class="lmgtMj"
                      src="https://campaigns.scdn.co/images/benefit-1.png"
                      alt="Download music."
                    ></div>
                    <article class="ftKOfM">
                      <header class="cUlOMl">Download music.</header>
                      <p class="fxERSB">Listen anywhere.</p>
                    </article>
                  </article>
                  <article class="OPfqc">
                    <div
                      class="ivnBGW"
                      src="https://campaigns.scdn.co/images/benefit-2.png"
                      alt="No ad interruptions."
                    ></div>
                    <article class="ftKOfM">
                      <header class="cUlOMl">No ad interruptions.</header>
                      <p class="fxERSB">Enjoy nonstop music.</p>
                    </article>
                  </article>
                  <article class="OPfqc">
                    <div
                      class="KQlQB"
                      src="https://campaigns.scdn.co/images/benefit-3.png"
                      alt="Play any song."
                    ></div>
                    <article class="ftKOfM">
                      <header class="cUlOMl">Play any song.</header>
                      <p class="fxERSB">Even on mobile.</p>
                    </article>
                  </article>
                  <article class="OPfqc">
                    <div
                      class="iAcIjI"
                      src="https://campaigns.scdn.co/images/benefit-4.png"
                      alt="Unlimited skips."
                    ></div>
                    <article class="ftKOfM">
                      <header class="cUlOMl">Unlimited skips.</header>
                      <p class="fxERSB">Just hit next.</p>
                    </article>
                  </article>
                </article>

                <section class="idMKBf" id="PLANS">
                  <article class="jDStqx" color="">
                    <article class="joRmZW">
                      <article class="foTIcp iRmvtI">
                        <h3 class="fiLspg">Spotify Premium</h3>
                        <h4 class="UsCqL">
                          <span>EGP&nbsp;49.99</span>
                          <span class="dlWkXV"> / month</span>
                        </h4>
                        <p class="fPuNfw">1 month free </p>
                        <ul class="jXZCdJ">
                          <li class="bZgILq">Play any song</li>
                          <li class="bZgILq">Listen offline</li>
                          <li class="bZgILq">No ad interruptions.</li>
                          <li class="bZgILq">Unlimited skips</li>
                          <li class="bZgILq">High audio quality</li>
                        </ul>
                        <Link
                          to="/Premium/Credentials"
                          style={{ textDecoration: "None" }}
                        >
                          <button className="ezXcOn eifmih">
                            {" "}
                            GET PREMIUM{" "}
                          </button>
                        </Link>
                      </article>
                    </article>
                    <article class="hzrJtj">
                      <a href="/legal/premium-promotional-offer-terms">
                        Terms and conditions
                      </a>{" "}
                      apply.
                    </article>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
export default Prem;
