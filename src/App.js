import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    totalWordsList: [],
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newTextSection = {
      id: uuidv4(),
      item: searchInput,
    }
    this.setState(prevState => ({
      totalWordsList: [...prevState.totalWordsList, newTextSection],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput, totalWordsList} = this.state
    return (
      <div className="app-container">
        <div className="container-1">
          <h1 className="main-heading">Count the characters like a Boss...</h1>
          <div className="main-container">
            {totalWordsList.length > 0 ? (
              <ul className="list-section-items">
                {totalWordsList.map(each => (
                  <li key={each.id}>
                    <p key={each.id} className="list-element">
                      {each.item} : {each.item.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no-user-image"
              />
            )}
          </div>
        </div>
        <div className="container-2">
          <h1 className="second-heading">Character Counter</h1>
          <div className="container-section">
            <form onSubmit={this.onSubmitForm}>
              <div className="input-section">
                <input
                  type="text"
                  value={searchInput}
                  placeholder="Enter the Characters here"
                  onChange={this.onChangeSearch}
                  className="search-input"
                />
                <button
                  type="submit"
                  className="button"
                  onClick={this.onClickSubmitStart}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
