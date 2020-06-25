<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="white" class="pl-5  pr-3 one-edge-shadow">
      
      <b-navbar-brand href="/">
        <img :src="image" style="height: 30px; width: 150px;" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto pt-2">
          <b-nav-item><router-link to="/" class="link-nav">Home</router-link></b-nav-item>
          <b-nav-item><router-link to="/india" class="link-nav">India</router-link></b-nav-item>
          <b-nav-item><router-link to="/news" class="link-nav">News</router-link></b-nav-item>
          <b-nav-item><router-link to="/guidelines" class="link-nav">Preventative Measures</router-link></b-nav-item>
          <b-nav-item><router-link to="/blog" class="link-nav last-nav">Outlive Covid</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="pt-4">
      <router-view></router-view>
    </div>
    
    <br><br><br>
    <div class="footer py-3">
      <b-container>
        <br>
        <h4 class="text-center mt-2">Connect with us:</h4>
        <b-row class="justify-content-center pt-1">
          <div class="col-md-6 col-sm-12 col-12">
            <b-row class="justify-content-center">
              <div class="card" style="background(255,255,255,0); border: none; width: max-content">
                <div class="card-body">
                  <h5 class="card-title text-center pb-3">Rudra Dave</h5>
                  <a class="mx-3" href="https://github.com/rdave97" target="_blank">
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                  <a class="mx-3" href="https://www.linkedin.com/in/rudra-dave/" target="_blank">
                    <i class="fab fa-linkedin fa-2x"></i>
                  </a>
                  <a class="mx-3" href="mailto:dave.rudra97@gmail.com">
                    <i class="fas fa-envelope fab fa-2x"></i>
                  </a>
                </div>
              </div>
            </b-row>
          </div>
          <div class="col-md-6 col-sm-12 col-12 pt-1">
            <b-row class="justify-content-center">
              <div class="card" style="background(255,255,255,0); border: none; width: max-content">
                <div class="card-body">
                  <h5 class="card-title text-center pb-3">Soham Dave</h5>
                  <a class="mx-3" href="https://github.com/DaveSoham08" target="_blank">
                    <i class="fab fa-github fa-2x"></i>
                  </a>
                  <a class="mx-3" href="https://www.linkedin.com/in/soham-dave-115206189/" target="_blank">
                    <i class="fab fa-linkedin fa-2x"></i>
                  </a>
                  <a class="mx-3" href="mailto:dave.soham2000@gmail.com">
                    <i class="fas fa-envelope fab fa-2x"></i>
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
        <h5 style="  font-size: 15px;">Developed with <span style="color:#ff3333">❤</span> by <a href="https://www.linkedin.com/in/rudra-dave/" target="_blank" style="color:white; text-decoration: none;">Rudra Dave</a> & <a href="https://www.linkedin.com/in/soham-dave-115206189/" target="_blank" style="color:white; text-decoration: none;">Soham Dave</a></h5>
      </div>
    </div>
  </div>
</template>

<script>
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
        blog: false,
      }
    }
  }
</script>

<style>
  .link-nav{
    letter-spacing: 1px !important;
    padding-right: 15px !important;
    font-weight: 500 !important;
    color: rgba(0,0,0,0.5) !important;
    text-decoration: none;
    border: none;
    border-bottom: none;
  }
  .last-nav{
    padding-right: 50px !important;
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
  a.router-link-exact-active {
    color: black !important;
  }
</style>
