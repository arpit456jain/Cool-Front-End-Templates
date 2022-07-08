import React from 'react';
import datafetching from './api';
import Cards from './card';
import Countries from './CountryPicker';
import styles from './App.module.css';
import image from './images/image.png';
import flame from './images/flame.gif';

class App extends React.Component {

  state = {
    data: {}, country: ''
  }

  async componentDidMount() {
    const data = await datafetching();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await datafetching(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div>
        <img className={styles.image} src={image} alt="COVID-19" />  <br />  <br />
        <Cards data={data} />
        <Countries handleCountryChange={this.handleCountryChange} /> <br /> <br />
        <img src={flame} alt="Graph" />
      </div>
    );
  }
}


export default App;
