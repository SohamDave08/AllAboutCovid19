<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="white" class="pl-5  pr-3 one-edge-shadow">
      
      <b-navbar-brand href="#" @click="homeComp">
        <img :src="image" style="height: 30px; width: 150px;" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto pt-2"> 
          <b-nav-item class="link-nav" @click="homeComp">Home</b-nav-item>
          <b-nav-item class="link-nav" @click="indiaComp">India</b-nav-item>
          <b-nav-item class="link-nav" @click="newsComp">News</b-nav-item>
          <b-nav-item class="link-nav last-nav" @click="guidelineComp">Preventative Measures</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    
    <div>
      <Home v-if="home" class="pt-4"/>
      <India v-if="india" class="pt-4"/>
      <News v-if="news" class="pt-4" />
      <Guidelines v-if="guidelines" class="pt-4" />
    </div>
    <br><br><br>
    <div class="footer py-3">
      <b-container>
        <b-row class="justify-content-center">
          <div class="col-md-6 p-2">
            <center>
              <i class="fa fa-phone fa-3x"></i>
              <h5 class="p-2">Call</h5>
              <p>
                Soham Dave :&nbsp;<strong><a href="tel:+919820145991" style="color: black; text-decoration: none;">+91-9820145991</a></strong>&nbsp;(IND)<br>
                Rudra Dave :&nbsp;<strong><a href="tel:+18482520030" style="color: black; text-decoration: none;">+1(848)2520030</a></strong>&nbsp;(USA)
              </p>
            </center>
          </div>
          <div class="col-md-6 p-2">
            <center>
              <i class="fa fa-envelope fa-3x"></i>
              <h5 class="p-2">Email us</h5>
              <p>
                <a href="mailto:dave.soham2000@gmail.com" style="color: black; text-decoration: none;">dave.soham2000@gmail.com</a><br>
                <a href="mailto:dave.rudra97@gmail.com" style="color: black; text-decoration: none;">dave.rudra97@gmail.com</a>
              </p>
            </center>
          </div>
        </b-row>
        <br>
        <h5 class="text-center mt-2">Connect with us:</h5>
        <b-row class="justify-content-center pt-1">
          
          <div class="col-md-4 col-6">
            <b-row class="justify-content-center">
              <div class="card" style="background(255,255,255,0); border: none; width: max-content">
                <div class="card-body">
                  <h6 class="card-title text-center">Soham Dave</h6>
                  <a class="mx-3" href="https://github.com/DaveSoham08" target="_blank">
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                  <a class="mx-3" href="https://www.linkedin.com/in/soham-dave-115206189/" target="_blank">
                    <i class="fab fa-linkedin fa-2x"></i>
                  </a>
                </div>
              </div>
            </b-row>
          </div>
          <div class="col-md-4 col-6">
            <b-row class="justify-content-center">
              <div class="card" style="background(255,255,255,0); border: none; width: max-content">
                <div class="card-body">
                  <h6 class="card-title text-center">Rudra Dave</h6>
                  <a class="mx-3" href="https://github.com/rdave97" target="_blank">
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                  <a class="mx-3" href="https://www.linkedin.com/in/rudra-dave/" target="_blank">
                    <i class="fab fa-linkedin fa-2x"></i>
                  </a>
                </div>
              </div>
            </b-row>
          </div>
        </b-row>
      </b-container>
    </div>
    
    <div class="credits">
      <div class="col-md-12 py-3 text-center">
        <div style="font-size: 14px;"><i>Remember, The sun always shines after a storm</i></div> <br>
        <h5 style="  font-size: 15px;">Developed with <span style="color:#ff3333">❤</span> by <a href="https://www.linkedin.com/in/soham-dave-115206189/" target="_blank" style="color:white; text-decoration: none;">Soham Dave</a> & <a href="https://www.linkedin.com/in/rudra-dave/" target="_blank" style="color:white; text-decoration: none;">Rudra Dave</a></h5>
      </div>
    </div>
  </div>
</template>

<script>
  import Home from './components/Home.vue';
  import India from './components/India.vue';
  import News from './components/News.vue';
  import Guidelines from './components/Guidelines.vue';
  import image from './assets/image.png';
  export default {
    name: 'app',
    data () {
      return {
        image: image,
        home: true,
        india: false,
        news: false,
        guidelines: false,
      }
    },
    components:{
      Home: Home,
      India: India,
      News: News,
      Guidelines: Guidelines
    },
    methods: {
      homeComp()
      {
        this.home = true;
        this.india = false;
        this.news = false;
        this.guidelines = false;
      },
      indiaComp()
      {
        this.india = true;
        this.home = false;
        this.news = false;
        this.guidelines = false;
      },
      newsComp()
      {
        this.news= true;
        this.india = false;
        this.home = false;
        this.guidelines = false;
      },
      guidelineComp()
      {
        this.news= false;
        this.india = false;
        this.home = false;
        this.guidelines = true;
      }
    }
  }
</script>

<style>
  .link-nav{
    letter-spacing: 1px;
    padding-right: 15px;
    font-weight: 500;
  }
  .last-nav{
    padding-right: 50px;
  }
  .one-edge-shadow {
    -webkit-box-shadow: 0 6px 6px -6px rgb(0,0,0,0.7);
    -moz-box-shadow: 0 6px 6px -6px rgb(0,0,0,0.7);
    box-shadow: 0 2px 2px -2px rgb(0,0,0,0.7);
  }
  .footer{
    background: white;
  }
  .fab, .fa{
    color: black !important;
  }
  .credits{
    background: black;
    color: white;
  }
</style>
