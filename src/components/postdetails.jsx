import * as React from "react"
import client from './client'
import Posts from './Posts'
import '../styles/singlepost.css';

class PostDetails extends React.Component {
  state = {
    articles: [],
  }

  componentDidMount(){
    client.getEntries()
    .then((response) => {
      console.log(response)
      this.setState({ 
        articles: response.items
      })
    })
    .catch(console.error)
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <main>
            <div className="wrapper">
                <Posts posts={this.state.articles} />
            </div>
          </main>
        </div>
      </div>
    );
  }
}
export default PostDetails;