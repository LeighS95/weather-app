import React from 'react';

import Layout from './components/pagelayout'
import Header from './components/header'
import Titles from './components/titles'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = "1edaf112947a54bc27ff937dc42e76d3";

class App extends React.Component {
  state = {
    isLoaded: undefined,
    city: "",
    country: "",
    temperature: "",
    humidity: "",
    description: "",
    error: ""
  }

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`).then(this.setState({
      isLoaded: false
    }));

    const data = await api_call.json();

    if(city && country) {

      this.setState({
        isLoaded: true,
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].main,
        error: ""
      });

    } else {
      this.setState({
        isLoaded: undefined,
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please enter a city and country"
      });
    }
  }

  render(){
    return (
      <div style={{height: '100%', width: '100%', overflowX: 'hidden'}}>
        <Layout>
          <Header />
          <Titles />
          <Form getWeather={this.getWeather} />
          <Weather 
            isLoaded={this.state.isLoaded}
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
