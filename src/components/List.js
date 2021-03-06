import React, { Component } from "react";
import Loading from "./Loading";
import Header from "./Header";
import Footer from "./Footer";
import Item from "./Item";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      videos: [],
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({
        isLoading: false,
        videos: [
          {
            id: 0,
            title:
              "¿Qué es CodelyTV? 🍄🔝 - Formación para programadores y divulgación del mundo del desarrollo",
            url: "https://www.youtube.com/watch?v=rpMQd2DazTc",
            thumbnail:
              "https://img.youtube.com/vi/rpMQd2DazTc/maxresdefault.jpg",
          },
          {
            id: 1,
            title:
              "Introducción a PHP: Cómo configurar tu entorno de desarrollo 🐘",
            url: "https://www.youtube.com/embed/watch?v=v2IjMrpZog4",
            thumbnail:
              "https://img.youtube.com/vi/v2IjMrpZog4/maxresdefault.jpg",
          },
        ],
      });
    }, 2000);
  }
  render() {
    const { videos, isLoading } = this.state;
    if (isLoading) {
      return <Loading message="Loading..." />;
    }

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="grid-container">
            <h1>{this.state.msg}</h1>
            {videos.map((video, index) => {
              return <Item key={index} data={video} />;
            })}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default List;
