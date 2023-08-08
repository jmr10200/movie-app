import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {

  state = {
    isLoading: true,
    results: [],
  };
  
  getMovies = async () => {
    const {
      data: { results }
    } = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
      {headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODFkMjU5ODkzMDQ3Y2E5ZjZiMjdiYjc3MThmMzQ0ZSIsInN1YiI6IjY0Y2YxNTIzMzAzYzg1MDExZGQzZGY3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9F4oNXgCAMxXsNsOmXB0bN0TZSxPDM6ensHWsrzifRY'
      }
    });
      
    this.setState({results, isLoading: false});

  };

  componentDidMount() {
    // 영화 데이터 로딩
    this.getMovies();
  }

  render() {
    const { isLoading, results } = this.state;
    return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
          <div className="movies">
            {results.map((movie) => (
              <Movie 
                key={movie.id}
                id={movie.id}
                year={movie.release_date}
                title={movie.original_title}
                summary={movie.overview}
                poster={"https://image.tmdb.org/t/p/w500" && movie.poster_path}
                //genres={movie.genres}
              />)
            )}
          </div>
        )
      }
    </section>
    );
  }
}

export default Home;
