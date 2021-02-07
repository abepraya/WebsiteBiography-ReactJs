import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    firstName: state.loader.firstName,
    lastName: state.loader.lastName,
    job: state.loader.job,
  };
};

class Loader extends Component {
  render() {
    return (
      <div>
        <div className="loader-container" id="page-loader">
          <div className="loading-wrapper">
            <div className="loader-animation" id="loader-animation">
              <span className="loader">
                <span className="loader-inner" />
              </span>
            </div>

            <div className="loader-name" id="loader-name">
              {this.props.firstName} <strong>{this.props.lastName}</strong>
            </div>

            <p className="loader-job" id="loader-job">
              {this.props.job}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Loader);
