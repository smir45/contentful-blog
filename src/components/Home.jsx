import * as React from "react"
import client from './client'
import Posts from './Posts'

class Home extends React.Component {
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
          <header>
            <div className="wrapper">
              <h1>Demo Blog</h1>
            </div>
          </header>
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
export default Home;