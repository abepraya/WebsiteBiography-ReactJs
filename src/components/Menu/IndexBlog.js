import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    blog: state.blog.blog,
  };
};
function BlogIsi(props) {
  return (
    <div>
      <div
        className="section-vcardbody section-page section-page-single"
        id="page-blog-single"
      >
        <div className="section-blog-single">
          <div id="postHere" />
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(BlogIsi);
