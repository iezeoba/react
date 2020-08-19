import React from 'react';
import CityGenerator from './CityGeneratorComp.js';
import CitySearch from './CitySearchComp.js';
import CityEnquiry from './CityEnquiryComp.js';
import CityCard from './CityCardComp.js';
import CityMap from './CityMapComp.js';
import { Community, City } from '../../business/City_Community.js';
import './City_Community.css';


class CityApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: "",
            latitude: "",
            longitude: "",
            population: "",
            selectedCity: "Airdrie",
            movedInMovedOut: "",
            enquiryResponse: "",
            cities: [],
            checked: false
        }
        this.myCommunity = new Community();
        this.myCity = new City();
    }

    checkBox = () => {
        if (this.state.checked) {
            this.setState({
                checked: false
            })
        } else
            this.setState({
                checked: true
            })
    }

    async componentDidMount() {
        let newCity = await this.myCommunity.getCities();
        this.setState({ cities: this.myCommunity.allCities })
        console.log(newCity);
    }

    handleCreateCity = () => {
        this.myCommunity.createCity(this.state.cityName, this.state.latitude, this.state.longitude, this.state.population, this.state.checked)
        this.setState({ cities: this.myCommunity.allCities })
        console.log(this.myCommunity.allCities);
    }

    handleCityName = (e) => {
        this.setState({
            cityName: e.target.value
        })
    }

    handleLatitude = (e) => {
        this.setState({
            latitude: e.target.value
        })
    }

    handleLongitude = (e) => {
        this.setState({
            longitude: e.target.value
        })
    }

    handlePopulation = (e) => {
        this.setState({
            population: e.target.value
        })
    }

    handleMigration = (e) => {
        this.setState({
            movedInMovedOut: e.target.value
        })
    }

    handleMovements = (e) => {
        if (e.target.id === "idHowBig") {
            let size = this.myCity.howBig(this.state.selectedCity, this.myCommunity.allCities)
            this.setState({ enquiryResponse: size })
        } else if (e.target.id === "idWhichSphere") {
            let sphere = this.myCommunity.whichSphere(this.state.selectedCity, this.myCommunity.allCities)
            this.setState({ enquiryResponse: sphere })
        } else if (e.target.id === "idMostNorthern") {
            let northMost = this.myCommunity.getMostNorthern(this.myCommunity.allCities)
            this.setState({ enquiryResponse: `${northMost} is the most northern location` })
        } else if (e.target.id === "idMostSouthern") {
            let southMost = this.myCommunity.getMostSouthern(this.myCommunity.allCities)
            this.setState({ enquiryResponse: `${southMost} is the most southern location` })
        }

        else if (e.target.id === "idMovedOut") {
            let getCityPopulation = this.myCommunity.cityFinder(this.state.selectedCity, this.myCommunity.allCities).population;

            let newPopulation = this.myCity.movedOut(getCityPopulation, this.state.movedInMovedOut);
            this.myCommunity.cityFinder(this.state.selectedCity, this.myCommunity.allCities).population = newPopulation
            this.setState({ enquiryResponse: `The current population of ${this.state.selectedCity} is ${newPopulation}`, cities: this.myCommunity.allCities })
        }
        else if (e.target.id === "idMovedIn") {
            let getCityPopulation = this.myCommunity.cityFinder(this.state.selectedCity, this.myCommunity.allCities).population;
            let newPopulation = this.myCity.movedIn(getCityPopulation, this.state.movedInMovedOut);
            this.myCommunity.cityFinder(this.state.selectedCity, this.myCommunity.allCities).population = newPopulation
            this.setState({ enquiryResponse: `The current population of ${this.state.selectedCity} is ${newPopulation}`, cities: this.myCommunity.allCities })
        }
        //you can set more than one state variable in one setState object
    }

    handleRetrieveCity = (e) => {
        this.setState({ selectedCity: e.target.id })
    }

    handleDelete = () => {
        this.myCommunity.deleteCity(this.state.selectedCity, this.myCommunity.allCities)
        this.setState({ cities: this.myCommunity.allCities, selectedCity: "" })
    }

    render() {
        return (
            <div className="clCityContainer">
                <CityGenerator onChange={this.checkBox}
                    cityName={this.handleCityName}
                    latitude={this.handleLatitude}
                    longitude={this.handleLongitude}
                    population={this.handlePopulation}
                    checked={this.state.checkBox}
                    createCity={this.handleCreateCity} />
                <CityEnquiry allCities={this.state.cities}
                    selectedCity={this.state.selectedCity}
                    enquiryResponse={this.state.enquiryResponse}
                    movedInMovedOut={this.state.movedInMovedOut}
                    migration={this.handleMigration}
                    movements={this.handleMovements} />
                <div style={{ display: "grid", gridTemplateColumns: "70% 30%" }}>
                    <CityCard
                        cities={this.state.cities}
                        retrieveCity={this.handleRetrieveCity} />
                    <CityMap selectedCity={this.state.selectedCity} />
                </div>
                <CitySearch delete={this.handleDelete} selectToDelete={this.state.selectedCity} />
            </div>
        );
    }
}
export default CityApp