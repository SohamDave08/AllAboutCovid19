<template>
    <div>
        <b-container>
            <h3 class="text-center">Select Country:</h3>
            <b-row class="justify-content-center pt-3 pb-5">
                <b-form-group id="input-group-3" label-for="input-3" class="col-md-6 col-sm-12">
                    <b-form-select
                        id="input-3"
                        :options="countries"
                        v-model="currCountry"
                        required
                    ></b-form-select>
                </b-form-group>
            </b-row>
            <h3 class="text-center m-3">Report for {{currCountry}}</h3>
            <b-row class="justify-content-center" >
                <b-card class="m-3 col-md-4 col-10 card" style="color: red;">
                    <center>
                        <h4 class="pb-3 pt-2" style="font-size: large">Confirmed Cases</h4>
                        <b-card-text class="case-count" v-if="dataCollected" style="font-size: medium">
                            <i class="fas fa-sort-amount-up case-count"></i>
                                <ICountUp
                                class="pl-2"
                                :endVal="confirmedCases"
                                :options="options"
                                /> 
                            
                            <div class="text-center mt-3" style="font-size: 14px; color:red">{{ newCases }}</div>
                        </b-card-text>
                        <b-card-text class="case-count" v-else>
                            <div class="loader-confirmed"></div>
                            <h4 class="pt-2" style="font-size: large">Loading...</h4>
                            <!-- <md-progress-bar class="" md-mode="indeterminate" style="color: orange"></md-progress-bar> -->
                        </b-card-text>
                    </center>
                </b-card>
                <b-card class="m-3 col-md-4 col-10 card" style="color: orange;">
                    <center>
                        <h5 class="pb-3 pt-3" style="font-size: large">Active Cases</h5>
                        <b-card-text class="case-count" v-if="dataCollected" style="font-size: medium">
                            <i class="fas fa-wave-square case-count"></i>
                            <ICountUp 
                            class="pl-2"
                            :endVal="activeCases"
                            :options="options"
                            /> 
                            <!-- <div class="text-center mt-3" style="font-size: 14px; color: red">{{ criticalCases }}</div> -->
                        </b-card-text>
                        <b-card-text class="case-count" v-else>
                            <div class="loader-active"></div>
                            <h4 class="pt-2" style="font-size: large">Loading...</h4>
                        </b-card-text>
                    </center>
                </b-card>
            </b-row>
            <b-row class="justify-content-center">
                <b-card class="m-3 col-md-4 col-10 card" style="color: green">
                    <center>
                        <h5 class="pb-3 pt-3" style="font-size: large">Recoveries</h5>
                        <b-card-text class="case-count" v-if="dataCollected" style="font-size: medium">
                            <i class="fas fa-heartbeat case-count"></i>
                            <ICountUp
                            class="pl-2"
                            :endVal="recovered"
                            :options="options"
                            /> 
                            <div class="text-center mt-3" style="font-size: 14px; color:green">{{ newRecovery }}</div>
                        </b-card-text>
                        <b-card-text class="case-count" v-else>
                            <div class="loader-recoveries"></div>
                            <h4 class="pt-2" style="font-size: large">Loading...</h4>
                        </b-card-text>
                    </center>
                </b-card>
                <b-card class="m-3 col-md-4 col-10 card" style="color: #666a6d">
                    <center>
                        <h5 class="pb-3 pt-2" style="font-size: large">Deaths</h5>
                        <b-card-text class="case-count" v-if="dataCollected" style="font-size: medium">
                            <i class="fas fa-sort-amount-down-alt case-count"></i>
                            <ICountUp
                            class="pl-2"
                            :endVal="deaths"
                            :options="options"
                            /> 
                            <div class="text-center mt-3" style="font-size: 14px">{{ newDeaths }}</div>
                        </b-card-text>
                        <b-card-text class="case-count" v-else>
                            <div class="loader-deaths"></div>
                            <h4 class="pt-2" style="font-size: large">Loading...</h4>
                        </b-card-text>
                    </center>
                </b-card>
            </b-row>
            <h5 class="text-center pt-3 pb-5" style="color: green" v-if="totalTest">Total Tests: &nbsp; <span style="letter-spacing : 2px">{{ totalTest }}</span></h5>
            
            <div class="my-4 mx-2">
                
                <div v-if="lineChart">
                    <div v-if="displayChart">
                        <b-container>
                            <div v-if="worldBarData">
                                <br>
                                <column-chart :data="barData" class="my-5"/>
                            </div>
                            <br>
                            <line-chart :data="lineData" class="my-5"/>
                        </b-container>
                    </div>
                </div> 
               
                <div v-else>
                    <div v-show="displayBar">
                        <column-chart :data="barData" />
                    </div>
                </div>
            </div>
        </b-container>
        <div class="mx-5 mb-4"> 
            <h3 class="text-center pb-3 pt-5">GeoMap </h3>
            <b-row class="justify-content-center">
                <div id="map" ref="map" style="width: 90vw; height: 70vh;"></div>
            </b-row>
        </div>
    </div>
</template>

<script>
    import ICountUp from 'vue-countup-v2';
    import mapIcon from '../assets/contamination.png';
    const NewAPI = `https://api.covid19api.com/summary`;
    let newAPIData;
    export default {
        name: 'world',
        data() {
            return{
                confirmedCases: 0,
                newCases: 0,
                newRecovery: 0,
                activeCases: 0,
                recovered: 0,
                deaths: 0,
                newDeaths: 0,
                criticalCases: 0,
                ArrangedData : {},
                totalTest: 0,
                options: {seperator: ','},
                countries: [],
                currCountry: 'Global',
                dataCollected: false,
                displayChart: false,
                displayBar: false,
                lineChart: true,
                barData: {},
                worldBarData: false,
                lineData: [
                    {name: 'Infected', data: {}},
                    {name: 'Deaths', data: {}}
                ]
            }
        },
        components: {
            ICountUp
        },
        created() {
            fetch(NewAPI)
            .then(response => response.json())
            .then(data => {
                newAPIData = data;

                this.ArrangedData["Global"] = newAPIData.Global;
                this.countries.push("Global");
                
                newAPIData.Countries.forEach(val => {
                    this.countries.push(val.Country);
                    this.ArrangedData[val.Country] = val;
                });
                console.log(this.ArrangedData);
                this.countLoad();
                this.worldBar();
            });
            this.chartLineLoad('https://covid19.mathdro.id/api/daily');
            this.loadMap('https://covid19.mathdro.id/api/confirmed');
        },
        watch: {
            currCountry: function(newCountry) {
                if(newCountry == 'Global')
                {
                    this.dataCollected = false;
                    this.lineChart = true;
                    this.countLoad();
                    this.worldBar();
                    this.chartLineLoad('https://covid19.mathdro.id/api/daily');
                }
                else
                {   
                    this.dataCollected = false;
                    this.displayChart = false;
                    this.lineChart = false;
                    this.worldBarData = false;
                    this.countLoadCountry();
                    this.displayBar = false;
                    this.barData = {};
                    this.barChartLoad();
                }
            }
        },
        methods:{
            countLoad()
            {
                this.confirmedCases = this.ArrangedData.Global.TotalConfirmed;
                this.activeCases = this.ArrangedData.Global.TotalConfirmed - this.ArrangedData.Global.TotalDeaths;
                this.recovered = this.ArrangedData.Global.TotalRecovered;
                this.deaths = this.ArrangedData.Global.TotalDeaths;
                this.newCases = this.ArrangedData.Global.NewConfirmed;
                this.newDeaths = this.ArrangedData.Global.NewDeaths;
                this. newRecovery = this.ArrangedData.Global.NewRecovered;
                this.dataCollected = true;
            },
            countLoadCountry()
            {
                this.confirmedCases = this.ArrangedData[this.currCountry].TotalConfirmed;
                this.activeCases = this.ArrangedData[this.currCountry].TotalConfirmed - this.ArrangedData.Global.TotalDeaths;
                this.recovered = this.ArrangedData[this.currCountry].TotalRecovered;
                this.deaths = this.ArrangedData[this.currCountry].TotalDeaths;
                this.newCases = this.ArrangedData[this.currCountry].NewConfirmed;
                this.newDeaths = this.ArrangedData[this.currCountry].NewDeaths;
                this. newRecovery = this.ArrangedData[this.currCountry].NewRecovered;
                this.dataCollected = true;
            },
            chartLineLoad(url)
            {
                this.$http.get(url)
                .then(function(dailyResponse) {
                    var date = '';
                    dailyResponse.body.forEach((dailyElement) => {
                        date = dailyElement.reportDate;
                        this.lineData[0].data[date] = dailyElement.confirmed.total;
                        this.lineData[1].data[date] = dailyElement.deaths.total;
                    });
                    this.displayChart = true;
                })
                .catch(function(error){
                    console.log(error);
                })
            },
            barChartLoad()
            {
                this.displayBar = false;
                this.barData['Infected'] = this.ArrangedData[this.currCountry].TotalConfirmed;
                this.barData['Recovered'] = this.ArrangedData[this.currCountry].TotalRecovered;
                this.barData['Deaths'] = this.ArrangedData[this.currCountry].TotalDeaths;
                this.displayBar = true;
            },
            worldBar() 
            {
                let element = this.ArrangedData[this.currCountry];
                this.barData['Infected'] = element.TotalConfirmed;
                this.barData['Recovered'] = element.TotalRecovered;
                this.barData['Deaths'] = element.TotalDeaths;
                this.worldBarData = true;
            },
            loadMap(api_url)
            {
                var L = window.L;
                fetch(api_url)
                .then(response => response.json())
                .then((data) => {
                    const container = document.getElementById('map')
                    const mymap = L.map(container).setView([21, 78], 3);
                    const tileUrl = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';
                    const tiles = L.tileLayer(tileUrl);
                    
                    tiles.addTo(mymap);
                    var img = mapIcon;
                    const myIcon = L.icon({
                        iconUrl: img,
                        iconSize: [30,30],
                        iconAnchor: [15, 15]
                    });
                    data.forEach((element) => {
                        if(element.countryRegion != 'null')
                        { 
                            var popup;
                            if(element.provinceState != null)
                                popup = L.popup()
                                .setContent('<span style="font-size: 10px;font-weight: 700;letter-spacing: 2px; padding-right: 3px;">'+element.iso3+'</span><span style="border-left: thin solid black; padding-left: 5px; font-size: 14px; font-weight: 700;">'+element.countryRegion+'</span><br/><span style="color: #808080">'+element.provinceState+'</span><br/><br/><div style="margin-top: 5px;"><strong>Total Cases: </strong> &nbsp;'+element.confirmed.toString()+'</div><div style="margin-top: 5px;"><strong>Active Cases: </strong> &nbsp;'+element.active.toString()+'</div><div style="margin-top: 5px;"><strong>Deaths: </strong> &nbsp;'+element.deaths.toString()+'</div><div style="margin-top: 5px;"><strong>Recovered: </strong> &nbsp;'+element.recovered.toString()+'</div><br/>');
                            
                            else
                                popup = L.popup()
                                .setContent('<span style="font-size: 10px;font-weight: 700;letter-spacing: 2px; padding-right: 3px;">'+element.iso3+'</span><span style="border-left: 1px solid black; padding-left: 5px; font-size: 14px; font-weight: 700;">'+element.countryRegion+'</span><br/><br/><div style="margin-top: 5px;"><strong>Total Cases: </strong> &nbsp;'+element.confirmed.toString()+'</div><div style="margin-top: 5px;"><strong>Active Cases: </strong> &nbsp;'+element.active.toString()+'</div><div style="margin-top: 5px;"><strong>Deaths: </strong> &nbsp;'+element.deaths.toString()+'</div><div style="margin-top: 5px;"><strong>Recovered: </strong> &nbsp;'+element.recovered.toString()+'</div><br/>');
                            
                            new L.marker([element.lat,element.long], {icon: myIcon}).bindPopup(popup).addTo(mymap);
                        }
                    });
                });
            }
        }
    }     
</script>

<style scoped>
    .card{
        -webkit-box-shadow: 0 6px 6px -6px rgb(0,0,0,0.7);
        -moz-box-shadow: 0 6px 6px -6px rgb(0,0,0,0.7);
        box-shadow: 0 6px 6px -6px rgb(0,0,0,0.7);
        border-radius: 10px;
        border: none;
    }
    .case-count{
        font-size: 20px; 
        letter-spacing:1px; 
        font-weight:600;
    }
    .loader-confirmed {
        border: 4px solid #f3f3f3;
        border-radius: 50%;
        border-top: 4px solid red;
        width: 30px;
        height: 30px;
        -webkit-animation: spin 1s linear infinite; /* Safari */
        animation: spin 1s linear infinite;
    }
    .loader-active {
        border: 4px solid #f3f3f3;
        border-radius: 50%;
        border-top: 4px solid orange;
        width: 30px;
        height: 30px;
        -webkit-animation: spin 1s linear infinite; /* Safari */
        animation: spin 1s linear infinite;
    }
    .loader-recoveries {
        border: 4px solid #f3f3f3;
        border-radius: 50%;
        border-top: 4px solid green;
        width: 30px;
        height: 30px;
        -webkit-animation: spin 1s linear infinite; /* Safari */
        animation: spin 1s linear infinite;
    }
    .loader-deaths {
        border: 4px solid #f3f3f3;
        border-radius: 50%;
        border-top: 4px solid #666a6d;
        width: 30px;
        height: 30px;
        -webkit-animation: spin 1s linear infinite; /* Safari */
        animation: spin 1s linear infinite;
    }
    /* Safari */
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>