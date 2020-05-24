<template>
  <b-container>
    <h3 class="text-center m-3">
      Report for INDIA
      <center>
        <span class="card" style="background:rgba(255,255, 255, 0); border:none; ">
            <img class="card-img-top" :src="flag" alt="Card image cap" style=" width: 80px;">
	</span>
      </center>
    </h3> 
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
    <h5 class="text-center pt-3 pb-5" style="color: green" v-if="lastUpdate">Last Update: &nbsp; {{ lastUpdate }}</h5>
    <h3 class="text-center pt-3 m-4">State wise cases in India</h3>
    <md-table v-model="searchedCase" md-sort="confirmed" md-sort-order="asc" md-card md-fixed-header class="mb-4">
      <md-table-toolbar>
        <md-field md-clearable class="md-toolbar-section-end pl-2" style="max-width: 300px">
          <md-input placeholder="Search by State" v-model="searchCase" @input="searchOnTableCase" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No record found"
        :md-description="`No state found for this '${searchCase}' query. Try a different search term`">
      </md-table-empty-state>

      <md-table-row slot="md-table-row" class="items" slot-scope="{ item }">
        <md-table-cell md-label="Name of State" md-sort-by="state" style="width: 70px;">{{ item.state }}</md-table-cell>
        <md-table-cell md-label="Confirmed Cases" md-sort-by="confirmed" style="width: 70px; color: red">{{ item.confirmed }}</md-table-cell>
        <md-table-cell md-label="Active Cases" md-sort-by="active" style="width: 70px;">{{ item.active }}</md-table-cell>
        <md-table-cell md-label="Recovered Cases" md-sort-by="recovered" style="width: 70px; color:green">{{ item.recovered }}</md-table-cell>
        <md-table-cell md-label="Decreased" md-sort-by="deaths" style="width: 70px;">{{ item.deaths }}</md-table-cell>
      </md-table-row>
    </md-table>

    <!-- <h3 class="text-center pt-5 m-4">District wise zones in India</h3>
    <md-table v-model="searchedZone" md-sort="zone" md-sort-order="asc" md-card md-fixed-header class="mb-4">
      <md-table-toolbar>
        <md-field md-clearable class="md-toolbar-section-end pl-2" style="max-width: 300px">
          <md-input placeholder="Search by State" v-model="searchZone" @input="searchOnTableZone" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No record found"
        :md-description="`No state found for this '${searchZone}' query. Try a different search term`">
      </md-table-empty-state>

      <md-table-row slot="md-table-row" class="items" slot-scope="{ item }" >
        <md-table-cell md-label="Name of District" md-sort-by="district" >
          <span v-if="item.redZone" style="color: red;">{{ item.district }}</span>
          <span v-if="item.orangeZone" style="color: orange;">{{ item.district }}</span>
          <span v-if="item.greenZone" style="color: green;">{{ item.district }}</span>
        </md-table-cell>
        <md-table-cell md-label="State" md-sort-by="state" >
          <span v-if="item.redZone" style="color: red;">{{ item.state }}</span>
          <span v-if="item.orangeZone" style="color: orange;">{{ item.state }}</span>
          <span v-if="item.greenZone" style="color: green;">{{ item.state }}</span>
        </md-table-cell>
        <md-table-cell md-label="Zone" md-sort-by="zone" style="width: 30px">
          <span v-if="item.redZone" style="color: red;">{{ item.zone }}</span>
          <span v-if="item.orangeZone" style="color: orange;">{{ item.zone }}</span>
          <span v-if="item.greenZone" style="color: green;">{{ item.zone }}</span>
        </md-table-cell>
      </md-table-row>
    </md-table> -->
    <h5 class="pt-5 pb-3 text-center" style="color: red;">Central Helpline Number:<br> <a class="pt-1" href="tel:+91-11-239780461" style="color: red; text-decoration: none;">+91-11-23978046</a></h5>
    <center><a href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf" target="_Blank"><b-button variant="primary p-2" size="sm" >Helpline Numbers of States & Union Territories (UTs)</b-button></a></center>
  </b-container>
</template>

<script>
  import ICountUp from 'vue-countup-v2';
  import flagIcon from '../assets/india.png';

  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByState = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.state).includes(toLower(term)))
    }

    return items
  }

  // const searchByZone = (items, term) => {
  //   if (term) {
  //     return items.filter(item => toLower(item.state).includes(toLower(term)))
  //   }

  //   return items
  // }

  export default {
    name: 'India',
    data: () => ({
      flag: flagIcon,
      searchCase: null,
      searchedCase: [],
      tableDataCase: false,
      cases: [],
      // searchZone: null,
      // searchedZone: [],
      // tableDataZone: false,
      // zones: [],
      cardData: false,
      confirmedCasesIndia: 0,
      recoveredIndia: 0,
      activeCasesIndia: 0,
      deathsIndia: 0,
      lastUpdate: null,
      options: {seperator: ','}
    }),
    methods: {
      searchOnTableCase () {
        this.searchedCase = searchByState(this.cases, this.searchCase)
      },
      // searchOnTableZone () {
      //   this.searchedZone = searchByZone(this.zones, this.searchZone)
      // }
    },
    components: {
      ICountUp
    },
    created () {
      fetch('https://covid19-server.chrismichael.now.sh/api/v1/IndiaCasesByStates')
      .then(response => response.json())
      .then(data => {
        data.data[0].table.forEach(element => {
          if(element.state != 'Total' )
          {
            if(element.state == 'Dadra and Nagar Haveli and Daman and Diu')
            {
              element.state = 'Dadar & Nagar Haveli';
            }
            var user = {};
            user.state = element.state;
            user.confirmed = Number(element.confirmed);
            user.active = Number(element.active);
            user.recovered = Number(element.recovered);
            user.deaths = Number(element.deaths);
            this.cases.push(user);
          }
          else
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
      // fetch('https://api.covid19india.org/zones.json')
      // .then(response => response.json())
      // .then(data => {
      //   data.zones.forEach(element => {
      //     var user = {};
      //     user.district = element.district;
      //     user.state = element.state;
      //     user.zone = element.zone;
      //     if(element.zone == 'Red')
      //     {
      //       user.redZone = 1;
      //       user.greenZone = 0;
      //       user.orangeZone = 0;
      //       console.log('red');
      //     }
      //     else if(element.zone == 'Orange')
      //     {
      //       user.redZone = 0;
      //       user.greenZone = 0;
      //       user.orangeZone = 1;
      //       console.log('orange');
      //     }
      //     else if(element.zone == 'Green')
      //     {
      //       user.redZone = 0;
      //       user.greenZone = 1;
      //       user.orangeZone = 0;
      //       console.log('green');
      //     } 
          
      //     this.zones.push(user);
      //   });
      //   this.tableDataZone = true;
      //   this.searchedZone = this.zones;
      // });
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
