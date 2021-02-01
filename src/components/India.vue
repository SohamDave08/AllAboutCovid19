<template>
  <b-container>
    <h3 class="text-center m-3">
      Report for INDIA
        <span class="card" style="background:rgba(255,255, 255, 0); border:none; ">
            <center>
              <img class="card-img-top" :src="flag" alt="Card image cap" style=" width: 80px;">
            </center>
        </span>
    </h3>
    <br><br>
    <h5 class="text-center">Select State:</h5>
    <b-row class="justify-content-center py-3">
      <b-form-group id="input-group-3" label-for="input-3" class="col-md-6 col-sm-12">
        <b-form-select
          id="input-3"
          :options="stateZone"
          v-model="currState"
          required
        ></b-form-select>
      </b-form-group>
    </b-row>
    <b-row class="justify-content-center" >
      <b-card class="m-3 col-md-4 col-10 card cases" style="color: red">
        <center>
          <h5 class="py-3" style="font-size: large">Confirmed Cases</h5>
          <b-card-text class="case-count" v-if="cardData" style="font-size: medium">
          <i class="fas fa-sort-amount-up case-count"></i>
          <ICountUp
            class="pl-2"
            :endVal="confirmedCasesIndia"
            :options="options"
          /> 
          </b-card-text>
          <b-card-text class="case-count" v-else>
            <div class="loader-confirmed"></div>
            <h4 class="pt-2" style="font-size: large">Loading...</h4>
          </b-card-text>
        </center>
      </b-card>
      <b-card class="m-3 col-md-4 col-10 card cases" style="color: orange">
        <center>
          <h5 class="py-3" style="font-size: large">Active Cases</h5>
          <b-card-text class="case-count" v-if="cardData" style="font-size: medium">
            <i class="fas fa-wave-square case-count"></i>
            <ICountUp 
              class="pl-2"
              :endVal="activeCasesIndia"
              :options="options"
            /> 
          </b-card-text>
          <b-card-text class="case-count" v-else>
            <div class="loader-active"></div>
            <h4 class="pt-2" style="font-size: large">Loading...</h4>
          </b-card-text>
        </center>
      </b-card>
    </b-row>
    <b-row class="justify-content-center mb-5" style="color: green">
      <b-card class="m-3 col-md-4 col-10 card cases">
        <center>
          <h5 class="py-3" style="font-size: large">Recoveries</h5>
          <b-card-text class="case-count" v-if="cardData" style="font-size: medium">
            <i class="fas fa-heartbeat case-count"></i>
            <ICountUp
              class="pl-2"
              :endVal="recoveredIndia"
              :options="options"
            /> 
          </b-card-text>
          <b-card-text class="case-count" v-else>
            <div class="loader-recoveries"></div>
            <h4 class="pt-2" style="font-size: large">Loading...</h4>
          </b-card-text>
        </center>
      </b-card>
      <b-card class="m-3 col-md-4 col-10 card cases" style="color: #666a6d">
        <center>
          <h5 class="py-3" style="font-size: large">Deaths</h5>
          <b-card-text class="case-count" v-if="cardData" style="font-size: medium">
            <i class="fas fa-sort-amount-down-alt case-count"></i>
            <ICountUp
              class="pl-2"
              :endVal="deathsIndia"
              :options="options"
            /> 
          </b-card-text>
          <b-card-text class="case-count" v-else>
            <div class="loader-deaths"></div>
            <h4 class="pt-2" style="font-size: large">Loading...</h4>
          </b-card-text>
        </center>
      </b-card>
    </b-row>
    <h5 class="text-center pb-2" style="color: green" v-if="lastUpdate">Last Update: &nbsp; {{ lastUpdate }}</h5>
    

    <h5 class="text-center pt-5 m-4" v-if="isZone">District wise zones in {{ currState }}</h5>
    <center>
      
        <md-table v-model="zones" md-sort="zone" md-sort-order="asc" md-card md-fixed-header class="mb-4" v-if="isZone">
          <md-table-row slot="md-table-row" class="items" slot-scope="{ item }" >
            <md-table-cell md-label="Name of District" md-center md-sort-by="district" >
              <span v-if="item.redZone" style="color: red;">{{ item.district }}</span>
              <span v-if="item.orangeZone" style="color: orange;">{{ item.district }}</span>
              <span v-if="item.greenZone" style="color: green;">{{ item.district }}</span>
            </md-table-cell>
          </md-table-row>
        </md-table>
      
    </center>
    <h5 class="pt-5 pb-3 text-center" style="color: red;">Central Helpline Number:<br> <a class="pt-1" href="tel:+91-11-239780461" style="color: red; text-decoration: none;">+91-11-23978046</a></h5>
    <center><a href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf" target="_Blank"><b-button variant="primary p-2" size="sm" >Helpline Numbers of States & Union Territories (UTs)</b-button></a></center>
    <br><br><br>


    <h5 class="text-center" v-if="isCat">Essentials & Resources in {{ currState }}</h5>
    <center>
      <div class="justify-content-center py-3" v-if="isCat">
        <b-form-group id="input-group-3" label-for="input-3" class="col-md-6 col-sm-12">
          <b-form-select
            id="input-3"
            :options="catRes"
            v-model="currCat"
            required
          ></b-form-select>
        </b-form-group>
      </div>
    </center>


    <b-row class="justify-content-center pt-3">
      <!-- Essentials -->
      <div v-if="isRes">   
        <div v-for="(items,i) in resourceResult" :key="i">
          <md-card md-with-hover class="m-4 newsCard">
            <md-card-area>
                            
              <md-card-header>
                <div class="md-title pb-2">{{ items.title }}</div>
                <div class="md-subhead pb-3">City: &nbsp;<span style="font-weight: 500; font-size: 14px;">{{ items.author }}</span></div>
              </md-card-header>

              <md-card-content>
                {{items.description}}
              </md-card-content>
            </md-card-area>

            <md-card-actions  class="p-3">
              <span class="mr-auto"><span class="md-subhead" style="font-weight: 500;">Contact: </span>{{items.phone}}</span>
              <md-button class="md-primary" md-alignment="right" @click="contact(items.contact)">Reach Us</md-button>
            </md-card-actions>
          </md-card>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
  import ICountUp from 'vue-countup-v2';
  import flagIcon from '../assets/india.png';
  // const newAPI = ``;
  var zoneAPI;
  var indiaAPI;
  var resAPI;
  export default {
    name: 'India',
    data: () => ({
      flag: flagIcon,
      currState: 'Total',
      stateZone: [],
      zones: [],
      istable: false,
      isZone: false,
      cardData: false,
      confirmedCasesIndia: 0,
      recoveredIndia: 0,
      activeCasesIndia: 0,
      deathsIndia: 0,
      lastUpdate: null,
      options: {seperator: ','},
      isRes: false,
      resourceResult: [],
      catRes: [],
      currCat: 'Select Category',
      isCat: false
    }),
    methods: {
      contact(url)
      {
        window.open(url);
      },
      fetchIndia()
      {
        indiaAPI.forEach(element => {
          if(element.state == 'Total')
          {
            this.confirmedCasesIndia = Number(element.confirmed);
            this.activeCasesIndia = Number(element.active);
            this.recoveredIndia = Number(element.recovered);
            this.deathsIndia = Number(element.deaths);
            this.lastUpdate = element.lastupdatedtime;
          }
        });
        this.cardData = true;
      },
      fetchState()
      {
        indiaAPI.forEach(element => {
          if(element.state == this.currState)
          {
            this.confirmedCasesIndia = Number(element.confirmed);
            this.activeCasesIndia = Number(element.active);
            this.recoveredIndia = Number(element.recovered);
            this.deathsIndia = Number(element.deaths);
            this.lastUpdate = element.lastupdatedtime;
          }
        });
        this.zones = [];
        zoneAPI.forEach(element => {
          if(element.state == this.currState)
          {
            var user = {};
            user.district = element.district;
            if(element.zone == 'Red')
            {
              user.redZone = 1;
              user.greenZone = 0;
              user.orangeZone = 0;
            }
            else if(element.zone == 'Orange')
            {
              user.redZone = 0;
              user.greenZone = 0;
              user.orangeZone = 1;
            }
            else if(element.zone == 'Green')
            {
              user.redZone = 0;
              user.greenZone = 1;
              user.orangeZone = 0;
            } 
            this.zones.push(user);
          }
        });
        this.catRes = [];
        resAPI.forEach(element => {
          if(element.state == this.currState)
          {
            if(!this.catRes.includes(element.category))
              this.catRes.push(element.category);

            this.currCat = this.catRes[0];
            this.isCat = true;
          }
        });
        this.cardData = true;
        this.isZone = true;
        this.isRes = true;
      },
    },
    watch: {
      currState: function(newState) {
        if(newState == 'Total')
        {
          this.isZone = false;
          this.cardData = false;
          this.isRes = false;
          this.isCat = false;
          this.fetchIndia();
        }
        else
        {
          this.cardData = false;
          this.isRes = false;
          this.isCat = false;
          this.resourceResult = [];
          this.fetchState();
        }
      },
      currCat: function() {
        this.resourceResult = [];
        resAPI.forEach(element => {
          if(element.state == this.currState && element.category == this.currCat)
          {
            var temp = {};
            temp['title'] = element.nameoftheorganisation;
            temp['author'] = element.city;
            temp['description'] = element.descriptionandorserviceprovided;
            temp['contact'] = element.contact;
            temp['phone'] = element.phonenumber;
            this.resourceResult.push(temp);
          }
        });
      }
    },
    components: {
      ICountUp
    },
    created () {
      fetch('https://covid19-server.chrismichael.now.sh/api/v1/IndiaCasesByStates')
      .then(response => response.json())
      .then(data => {
        indiaAPI = data.data[0].table;
        indiaAPI.forEach(element => {
          this.stateZone.push(element.state);
          if(element.state == 'Total' )
          {
            this.confirmedCasesIndia = Number(element.confirmed);
            this.activeCasesIndia = Number(element.active);
            this.recoveredIndia = Number(element.recovered);
            this.deathsIndia = Number(element.deaths);
            this.lastUpdate = element.lastupdatedtime;
          } 
        });
        this.tableDataCase = true;
        this.searchedCase = this.cases;
        this.cardData = true;
      });
      fetch('https://api.covid19india.org/zones.json')
      .then(response => response.json())
      .then(data =>  zoneAPI = data.zones);

      fetch('https://api.covid19india.org/resources/resources.json')
      .then(response => response.json())
      .then(data => {
        resAPI = data.resources;
      });
    }
  }
</script>

<style scoped>
  .items {
    max-height: 100vh;
  }
  .cases{
    -webkit-box-shadow: 0 6px 6px -6px rgb(0,0,0,0.7);
    -moz-box-shadow: 0 6px 6px -6px rgb(0,0,0,0.7);
    box-shadow: 0 6px 6px -6px rgb(0,0,0,0.7);
    border-radius: 10px;
    border: none;
    width: 70vw;
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
