import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    portofolio: state.portofolio.portofolio,
  };
};

class Portofolio extends Component {
  render() {
    return (
      <div>
        <div className="section-vcardbody section-page" id="page-portfolio">
          <div className="section-portfolio">
            <h2 className="section-title">Portfolio</h2>

            <div className="projects-list">
              {this.props.portofolio.map((data, key) => {
                return (
                  <div className="project-item" key={key}>
                    <a
                      href={data.gambar}
                      className="project-thumbnail nivobox"
                      data-lightbox-gallery="portfolio"
                      style={{ backgroundImage: `url(${data.thumbnail})` }}
                    >
                      <div className="project-description-wrapper">
                        <div className="project-description">
                          <h2 className="project-title">{data.title}</h2>

                          <span className="see-more">{data.tag}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Portofolio);
