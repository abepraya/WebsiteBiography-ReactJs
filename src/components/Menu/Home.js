import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    foto: state.home.foto,
    nama: state.home.nama,
    job: state.home.job,
    about: state.home.about,
    email: state.home.email,
    phone: state.home.phone,
    instagram: state.home.instagram,
    facebook: state.home.facebook,
    linkedin: state.home.linkedin,
    youtube: state.home.youtube,
  };
};

class Home extends Component {
  render() {
    return (
      <div>
        <div className="section-vcardbody section-home" id="section-home">
          <div className="vcard-profile-pic">
            <img
              style={{ height: 200 }}
              src={this.props.foto}
              id="profile2"
              alt={this.props.foto}
            />
            <img
              style={{ height: 200, transform: "scaleX(-1)" }}
              src={this.props.foto}
              id="profile1"
              className="profileActive"
              alt={this.props.foto}
            />
          </div>

          <div className="vcard-profile-description">
            <h1 className="profile-title">
              Hi, i'm <span className="color1">{this.props.nama}</span>
            </h1>
            <h2 className="profile-subtitle">{this.props.job}</h2>

            <hr className="hr1" />
            <div className="vcard-profile-description-text">
              <p>{this.props.about}</p>
            </div>

            <div className="vcard-profile-description-feature">
              <div className="vcard-profile-description-ft-item">
                <p>
                  Email : {this.props.email} / Phone {this.props.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="vcard-footer">
            <div className="footer-social-icons">
              <a href={this.props.instagram} target="blank">
                <i className="fa fa-instagram" />
              </a>
              <a href={this.props.facebook} target="blank">
                <i className="fa fa-facebook" />
              </a>
              <a href={this.props.linkedin} target="blank">
                <i className="fa fa-linkedin" />
              </a>
              <a href={this.props.youtube} target="blank">
                <i className="fa fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
