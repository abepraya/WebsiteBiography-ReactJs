import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import ReactPaginate from "react-paginate";

const URL = "https://dummyapi.io/data/api/post?limit=25";
const APP_ID = "601de7e6f1dfc646cf2b2cd4";

const mapStateToProps = (state) => {
  return {
    blog: state.blog.blog,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAPI: () => {
      axios
        .get(`${URL}`, { headers: { "app-id": APP_ID } }, { delayed: true })
        .then(function (response) {
          dispatch({ type: "BLOG", payload: response.data.data });
        })
        .catch(function (error) {
          console.log(error.response);
        });
    },
  };
};

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: this.props.blog,
      perPage: 5,
      currentPage: 1,
      pageCount: 5,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset,
      pageCount: Math.ceil(this.props.blog.length / this.state.perPage),
    });
  };

  componentDidMount() {
    this.props.getAPI();
  }

  render() {
    const slice = this.props.blog.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    return (
      <div>
        <div className="section-vcardbody section-page" id="page-blog">
          <div className="section-blog">
            
            <h2 className="section-title">Blog</h2>
           
            <div className="blog-posts">
             
              {slice.map((data, key) => {
                return (
                  <div className="blog-item" key={key}>
                    <div className="blog-item-wrapper">
                      
                      <div className="blog-item-thumb">
                        <img style={{ height: 200 }} src={data.image} alt="" />
                      </div>
                      
                      <div className="blog-item-infos">
                        
                        <div className="blog-item-title-wrapper">
                          <h2 className="blog-item-title title-border">
                            {data.id}
                          </h2>
                        </div>
                        
                        <div className="blog-item-description">
                          <p>{data.text}</p>
                        </div>
                        
                        <div className="blog-item-link">
                          
                        </div>
                        
                      </div>
                      
                    </div>
                  </div>
                );
              })}
            </div>
            
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
            
          </div>
        </div>
        {/* <BlogIsi /> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
