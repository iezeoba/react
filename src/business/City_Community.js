export class City {
    constructor(key, name, latitude, longitude, population) {
        this.key = key
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }

    show(cityname, arr) {
        let index;
        for (let i = 0; i < arr.length; i++) {
            if (cityname === arr[i].name) {
                index = i
            }
        }
        let string = arr[index];

        return `${string.name} is located at latitude ${parseFloat(string.latitude).toFixed(2)} and longitude ${parseFloat(string.longitude).toFixed(2)} and has a population of about ${string.population}`;
    }

    movedIn(population, immigrants) {
        return population + Number(immigrants);
    }

    movedOut(population, exits) {
        return population - Number(exits);
    }

    howBig(cityname, arr) {
        let index;
        for (let i = 0; i < arr.length; i++) {
            if (cityname === arr[i].name) {
                index = i
            }
        }

        if (arr[index].population > 100000) {
            return `${arr[index].name} is a City`;
        } else if (arr[index].population > 19999 && arr[index].population <= 100000) {
            return `${arr[index].name} is a Large Town`;
        } else if (arr[index].population > 999 && arr[index].population <= 19999) {
            return `${arr[index].name} is a Town`;
        } else if (arr[index].population > 100 && arr[index].population <= 999) {
            return `${arr[index].name} is a Village`;
        } else {
            return `${arr[index].name} is a Hamlet`;
        }
    }
}

export class Community {
    constructor() {
        this.newCity = new City();
        this.url = "http://127.0.0.1:5000/";
        this.allCities = [];
    }

    nextKey() {
        return this.allCities.length;
    }

    async getCities(url = '', data = {}) {
        let cityData = await fetch("http://127.0.0.1:5000/clear");
        cityData = await fetch("http://127.0.0.1:5000/load");
        cityData = await fetch("http://127.0.0.1:5000/all");
        let city = await cityData.json();
        for (let i = 0; i < city.length; i++) {
            this.allCities.push(city[i]);
        }
        return city;
    }

    async addCityToServer(city, checkbox) {
        if (checkbox) {
            let data = await this.postData(this.url + "add", city);
            data = await this.postData(this.url + "save", city);
            data = await fetch("http://127.0.0.1:5000/all")
            let allCities = await data.json();
            return allCities;
        } else {
            let data = await this.postData(this.url + "add", city);
            data = await fetch("http://127.0.0.1:5000/all")
            let allCities = await data.json();
            return allCities;
        }

    }

    async createCity(name, latitude, longitude, population, checkbox) {
        let key = this.nextKey();
        let lat = Number(latitude);
        let long = Number(longitude);
        let popu = Number(population);

        let city = new City(++key, name, lat, long, popu);
        // city.name = name;
        // city.latitude = Number(latitude);
        // city.longitude = Number(longitude);
        // city.population = Number(population);
        // city.key = ++key;
        //console.log(city.key)
        this.allCities.push(city);
        this.addCityToServer(city, checkbox);
        return city
    }

    cityFinder(cityname, arr) {
        let index;
        for (let i = 0; i < arr.length; i++) {
            if (cityname === arr[i].name) {
                index = i
            }
        }
        return arr[index];
    }

    whichSphere(cityname, arr) {
        let lat = this.cityFinder(cityname, arr).latitude;
        if (lat > 0) {
            return `This location is in the Northern Hemisphere`;
        } else if (lat < 0) {
            return `This location is in the Southern Hemisphere`;
        } else {
            return "This location is on the equator";
        }
    }
    getMostNorthern(arr) {
        let arrCityLat = [];
        for (let i = 0; i < arr.length; i++) {
            arrCityLat[i] = arr[i].latitude;
        }
        let cityIndex = arrCityLat.indexOf(Math.max(...arrCityLat));
        return arr[cityIndex].name;
    }

    getMostSouthern(arr) {
        let arrCityLat = [];
        for (let i = 0; i < arr.length; i++) {
            arrCityLat[i] = arr[i].latitude;
        }
        let cityIndex = arrCityLat.indexOf(Math.min(...arrCityLat));
        return arr[cityIndex].name;
    }

    getPopulation(city, arr) {
        let index;
        for (var i = 0; i < arr.length; i++) {
            if (city === arr[i].name) {
                index = i
            }
        }
        return arr[index].population;
    }

    increasePopulation(cityname, amount) {
        this.cityFinder(cityname).population = this.newCity.movedIn(this.cityFinder(cityname).population, amount);
        return this.cityFinder(cityname).population;
    }

    decreasePopulation(cityname, amount) {
        this.cityFinder(cityname).population = this.newCity.movedOut(this.cityFinder(cityname).population, amount);
        return this.cityFinder(cityname).population;
    }

    async deleteCity(cityname, arr) {
        let index, jindex;
        for (var i = 0; i < arr.length; i++) {
            if (cityname === arr[i].name) {
                index = i
            }
        }
        jindex = (this.allCities[index].key).toString();
        console.log(jindex);

        const getKey = this.allCities[index];
        let deleteCity = await this.postData(this.url + 'delete', getKey);
        deleteCity = await fetch(this.url + 'all');
        let response = await deleteCity.json();
        console.log(response);

        arr.splice(index, 1);
        return arr;
    }
    async postData(URL = '', data = {}) { //postData can be used to GET or POST data. if the parameter required is only a url, it is getting. if a url and another parameter, it is posting
        // Default options are marked with *
        const response = await fetch(URL, {
            method: 'POST',     // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',       // no-cors, *cors, same-origin
            cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',         // manual, *follow, error
            referrer: 'no-referrer',    // no-referrer, *client
            body: JSON.stringify(data)  // body data type must match "Content-Type" header
        });

        const json = await response.json();    // parses JSON response into native JavaScript objects
        json.status = response.status;
        json.statusText = response.statusText;
        // console.log(json, typeof(json));
        return json;
    }
};
// export default {Community, City}; //this collective export method is an alternative to the private export method used in this file. both are valid.