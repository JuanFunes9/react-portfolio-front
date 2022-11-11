import React from "react";

//import stock
import stock from "../img/ecommerce.jpg";
import stock1 from "../img/ecommerce-profile.jpg";
import stock2 from "../img/ecommerce-product.jpg";
import stock3 from "../img/ecommerce-cart.jpg";
class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio &#128188;</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="work-box">
                <a href={stock} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Functional E-Commerce</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 - CSS3 - Material UI - MERN
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
              <a href='https://ch-final-ecommerce.vercel.app/' target="_blank" rel="noreferrer">
                <h4>• Ir al Sitio</h4>
              </a>
              <a href="https://github.com/JuanFunes9/ch-final-backend" target="_blank" rel="noreferrer">
                <h4>• Ver en GitHub</h4>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
