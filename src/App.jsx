import React, { Component } from "react";
import "./styles/App.css";

import { Weather } from "./component/weather";
import { Form } from "./component/form";
import { Footer } from "./component/footer";
import Load from "./component/load";

const api_Key = "5eae8fa1b4bbb7c57264c547b3f18ee5";

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null,
      country: null,
      icons: null,
      tempmin: null,
      tempmax: null,
      celcius: null,
      descriptions: "",
      error: false,
      isLoading: false
    };
    // this.getData();
    this.iconsData = {
      Rain: "fa-cloud-showers-heavy",
      Snow: "fa-snowflake",
      Drizle: "fa-cloud-rain",
      Clear: "fa-sun",
      Thunderstrom: "fa-bolt",
      Fog: "fa-cloud-meatball",
      Cloud: "fa-cloud"
    };
  }

  getCelcius = temp => {
    let celc = Math.floor(temp - 273);
    return celc;
  };

  getweatherIcons = (icon, Id) => {
    switch (true) {
      case Id >= 200 && Id <= 232:
        this.setState({
          icons: this.iconsData.Thunderstrom
        });
        break;
      case Id >= 300 && Id <= 321:
        this.setState({
          icons: this.iconsData.Drizle
        });
        break;
      case Id >= 500 && Id <= 531:
        this.setState({
          icons: this.iconsData.Rain
        });
        break;
      case Id >= 600 && Id <= 622:
        this.setState({
          icons: this.iconsData.Snow
        });
        break;
      case Id >= 700 && Id <= 781:
        this.setState({
          icons: this.iconsData.Fog
        });
        break;
      case Id === 800:
        this.setState({
          icons: this.iconsData.Clear
        });
        break;
      case Id >= 801 && Id <= 804:
        this.setState({
          icons: this.iconsData.Cloud
        });
        break;
      default:
        this.setState({
          icons: this.iconsData.Cloud
        });
    }
  };

  getData = async e => {
    this.setState({
      isLoading: true
    });

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {
      const api_Call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_Key}`
      );

      const response = await api_Call.json();

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        celcius: this.getCelcius(response.main.temp),
        tempmin: this.getCelcius(response.main.temp_min),
        tempmax: this.getCelcius(response.main.temp_max),
        descriptions: response.weather[0].description,
        isLoading: false
      });

      this.getweatherIcons(this.iconsData, response.weather[0].id);
      const idform = document.getElementById("idform");
      const idbutton = document.getElementById("idbutton");

      idform.style.display = "none";
      idbutton.style.display = "inline-block";
    } else {
      this.setState({
        error: true,
        isLoading: false
      });
    }
  };

  backClick = () => {
    const idform = document.getElementById("idform");
    const idweather = document.getElementById("idweather");

    idform.style.display = "block";
    idweather.style.display = "none";
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <Load />;
    }
    return (
      <React.Fragment>
        <div className="App">
          <Form
            searchweather={this.getData}
            error={this.state.error}
            idform="idform"
          />
          <Weather
            idweather="idweather"
            city={this.state.city}
            icons={this.state.icons}
            country={this.state.country}
            celcius={this.state.celcius}
            tempmin={this.state.tempmin}
            tempmax={this.state.tempmax}
            descriptions={this.state.descriptions}
            idbutton="idbutton"
            backclick={this.backClick}
          />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
