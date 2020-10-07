import React, { useState, useEffect, Component } from "react";
import Layout from "../components/layout";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import SideBar from "../components/sideBar";
import { getMovies } from "../actions";

class Index extends Component {
  static async getInitialProps() {
    const movies = await getMovies();

    return {
      movies,
    };
  }

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     movies: [],
  //     errorMessage: "",
  //   };
  // }

  // Run only on client
  // componentDidMount() {
  //   getMovies()
  //     .then((movies) => {
  //       this.setState({ movies });
  //     })
  //     .catch((e) => {
  //       this.setState({ errorMessage: e });
  //     });
  // }

  render() {
    const { movies } = this.props;
    return (
      <Layout>
        <div className="row">
          <div className="col-lg-3">
            <SideBar appName="Movie DB" />
          </div>

          <div className="col-lg-9">
            <Carousel />

            {/* {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )} */}
            <MovieList movies={movies} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;
