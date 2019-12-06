import React, { Component } from 'react';
import Loading from './components/ui/Loading/Loading'
import TopSection from './components/TopSection/TopSection'
import Flag from './components/Flag/Flag'
import './App.css';

const API_URL = 'https://restcountries.eu/rest/v2/all'
const COUNTRY_OPTIONS = 4

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.getRandomCountries = this.getRandomCountries.bind(this)
    this.getRandomCountry = this.getRandomCountry.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  componentDidMount() {
    fetch(API_URL)
      .then(data => data.json())
      .then(data => {
        const countries = data.map((c, idx) => (
          { id: idx, flag: c.flag, name: c.name }
        ))
        this.setState({ countries }, () => this.getRandomCountries())
      })
  }

  getRandomCountries() {
    if (this.state.countries) {
      const countries = this.state.countries.slice()

      const countryOptions = this.getRandomCountry(countries)

      const selectedCountry = countryOptions[Math.floor(Math.random() * countryOptions.length)]

      this.setState({ countryOptions, selectedCountry })
    }
  }

  getRandomCountry(countries, countryOptions = []) {
    if (countryOptions.length === COUNTRY_OPTIONS) {
      return countryOptions
    }

    const randIdx = Math.floor(Math.random() * countries.length)

    if (countryOptions.every(c => c.id !== countries[randIdx].id)) {
      countryOptions.push(countries[randIdx])
    }
    return this.getRandomCountry(countries, countryOptions)
  }

  handleSubmit(e) {
    e.preventDefault()

    this.setState({
      isAttempted: true,
      isCorrect: this.state.selectedOption === this.state.selectedCountry.id
    })
  }

  handleChange(countryId) {
    this.setState({ selectedOption: countryId })
  }

  handleNext() {
    this.setState({
      isAttempted: undefined,
      isCorrect: undefined,
      selectedOption: undefined
    }, this.getRandomCountries)
  }

  render() {
    const {
      countryOptions, 
      selectedCountry,
      isAttempted,
      isCorrect
    } = this.state

    const styles = {
      headerStyles: {
        backgroundImage: `url(world.jpg)`
      }
    }

    return (
      <div className="App">
        <div className="header" style={styles.headerStyles}>
          <h1> Guess The Flag</h1>
        </div>
        <div className="main">
          {!this.state.countries && <Loading />}
          <TopSection
            isAttempted={isAttempted}
            handleSubmit={this.handleSubmit}
            countryOptions={countryOptions}
            handleChange={this.handleChange}
            isCorrect={isCorrect}
            selectedCountry={selectedCountry}
            handleNext={this.handleNext} 
          />
          <Flag 
            src={selectedCountry ? selectedCountry.flag : null} 
            alt={selectedCountry ? selectedCountry.name : null} 
          />
        </div>
      </div>
    )
  }
}

export default App;
