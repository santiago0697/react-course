import React, {Component} from 'react';
import Loading from './Loading'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      videos: [],
    };
  }
  componentDidMount() {
    this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({
        isLoading: false,
        videos: [
          { id: 1 },
          { id: 2 },
          { id: 3 }
        ]
      })
    }, 2000);
  }
  render(){
    const {videos, isLoading} = this.state;
    if(isLoading) {
      return <Loading message="Loading..."/>;
    }

    return (
      <React.Fragment>
        <div className="container">
          <div className="grid-container">
            <h1>{this.state.msg}</h1>
            {
              videos.map((video) =>{
                return (<span>#{video.id}</span>);
              })
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default List;
