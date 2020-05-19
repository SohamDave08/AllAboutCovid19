<template>
    <div>
        <b-container>
            <b-row class="justify-content-center">
                <div class="text-center col-md-10 pt-4 pb-3">
                    <div class="head">
                        Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority. <br/> Most countries around the world have seen cases of COVID-19 and many are experiencing outbreaks. <br/> However, the situation is unpredictable so check the WHO website regularly for the latest news.
                    </div>
                </div>
            </b-row>
            <br> <br>
            <center><hr style="width: 60vw;"></center>
            <br><br>
            <h4 class="text-center pt-4 pb-5" style="word-spacing: 2px;">Protect yourself from the spread of Novel Coronavirus</h4>

            <section id="team" class="home-section bg-gray py-3 pt-4">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-offset-2 col-md-8">
                            <div class="section-heading">
                                <div class="row align-items-center how-it-works d-flex wow fadeInUp">
                                    <div class="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
                                    <div class="circle font-weight-bold">
                                        <img :src="handWash" alt="icon" style="max-width: 70px; height: 40px;">
                                    </div>
                                    </div>
                                    <div class="col-8 text-left p-3">
                                    <h5>TIP&nbsp;1</h5>
                                    <p class="tip">Wash your hands often with soap and water for at least <br/> 20 seconds or use hand sanitizer with at least 60% alcohol.</p>
                                    </div>
                                </div>
                                <!--path between 1-2-->
                                <div class="row timeline wow fadeInUp">
                                    <div class="col-2">
                                    <div class="corner top-right"></div>
                                    </div>
                                    <div class="col-8">
                                    <hr/>
                                    </div>
                                    <div class="col-2">
                                    <div class="corner left-bottom"></div>
                                    </div>
                                </div>
                                <!--second section-->
                                <div class="row align-items-center justify-content-end how-it-works d-flex wow fadeInUp">
                                    <div class="col-8 text-right mt-3 mb-3 p-3">
                                    <h5>TIP&nbsp;2</h5>
                                    <p class="tip">Cover your nose and mouth with handkerchief/tissue <br/>while sneezing or coughing. Dump used tissue immediately after use.</p>
                                    </div>
                                    <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                                    <div class="circle font-weight-bold">
                                        <img :src="sneeze" alt="icon" style="max-width: 70px; height: 40px;">
                                    </div>
                                    </div>
                                </div>
                                <!--path between 2-3-->
                                <div class="row timeline wow fadeInUp">
                                    <div class="col-2">
                                    <div class="corner right-bottom"></div>
                                    </div>
                                    <div class="col-8">
                                    <hr/>
                                    </div>
                                    <div class="col-2">
                                    <div class="corner top-left"></div>
                                    </div>
                                </div>
                                <!--third section-->
                                <div class="row align-items-center how-it-works d-flex wow fadeInUp" style="padding-left: 3.5px;">
                                    <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                                    <div class="circle font-weight-bold">
                                        <img :src="mask" alt="icon" style="max-width: 70px; height: 40px;">
                                    </div>
                                    </div>                      
                                    <div class="col-8 text-left mt-3 mb-3 p-3">
                                    <h5>TIP&nbsp;3</h5>
                                    <p class="tip">Wear a cloth mask covering your<br/> mouth and nose when around others.</p>
                                    </div>                      
                                </div>
                                <!--path between 3 and 4-->
                                <div class="row timeline wow fadeInUp">
                                    <div class="col-2">
                                        <div class="corner top-right"></div>
                                    </div>
                                    <div class="col-8">
                                        <hr/>
                                    </div>
                                    <div class="col-2">
                                        <div class="corner left-bottom"></div>
                                    </div>
                                </div>
                                <!-- Fourth section-->
                                <div class="row align-items-center justify-content-end how-it-works d-flex wow fadeInUp">
                                    <div class="col-8 text-right mt-3 mb-3 p-3">
                                    <h5>TIP&nbsp;4</h5>
                                    <p class="tip">If you have fever, cough, and difficulty in breathing <br/> longer then a week, seek medical attention immediately.</p>
                                    </div>
                                    <div class="col-2 text-center full d-inline-flex justify-content-center align-items-center">
                                    <div class="circle font-weight-bold">
                                        <img :src="doctor" alt="icon" style="max-width: 70px; height: 40px;">
                                    </div>
                                    </div>
                                </div>
                                <!-- path between 4-5 -->
                                <div class="row timeline wow fadeInUp">
                                    <div class="col-2">
                                    <div class="corner right-bottom"></div>
                                    </div>
                                    <div class="col-8">
                                    <hr/>
                                    </div>
                                    <div class="col-2">
                                    <div class="corner top-left"></div>
                                    </div>
                                </div>
                                <!-- Fifth Section -->
                                <div class="row align-items-center how-it-works d-flex wow fadeInUp" style="padding-left: 3.5px;">
                                    <div class="col-2 text-center top d-inline-flex justify-content-center align-items-center">
                                    <div class="circle font-weight-bold">
                                        <img :src="publicImg" alt="icon" style="max-width: 80px; height: 50px;">
                                    </div>
                                    </div>                      
                                    <div class="col-8 text-left mt-3 mb-3 p-3">
                                    <h5>TIP&nbsp;5</h5>
                                    <p class="tip">keep at least 6 feet of distance between <br/> yourself and others if you're in public.</p>
                                    </div>                      
                                </div>                   
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <center>
                <div class="pt-5 py-3">
                    <md-button class="md-raised md-primary p-2 m-2" v-b-modal.Mask>When and how to use masks</md-button>
                </div>
            </center>
            <center>
                <md-button class="md-raised md-primary p-2 m-2" v-b-modal.Myths>Myth busters</md-button>
            </center>             
            
        </b-container>

        <!-- Myth Buster Modal -->
        <b-modal id="Myths" ok-only no-stacking button-size="md" title="Myth busters">
            <div class="col-md-12">
                <h5 class="text-center pt-5">There are currently no drugs licensed for the treatment or prevention of COVID-19</h5>
                <p class="text-center py-4">
                            While several drug trials are ongoing, there is currently no proof that hydroxychloroquine or any other drug can cure or prevent COVID-19. The misuse of hydroxychloroquine can cause serious side effects and illness and even lead to death. WHO is coordinating efforts to develop and evaluate medicines to treat COVID-19.
                </p>
                <center><div style="border-bottom: 1px solid black; width: 10vw"></div></center>

                <h5 class="text-center pt-5">Exposing yourself to the sun or to temperatures higher than 25C degrees DOES NOT prevent the coronavirus disease (COVID-19)</h5>
                <p class="text-center py-4">
                            You can catch COVID-19, no matter how sunny or hot the weather is. Countries with hot weather have reported cases of COVID-19. To protect yourself, make sure you clean your hands frequently and thoroughly and avoid touching your eyes, mouth, and nose.  
                </p>
                <center><div style="border-bottom: 1px solid black; width: 10vw"></div></center>

                <h5 class="text-center pt-5">Taking a hot bath does not prevent the new coronavirus disease</h5>
                <p class="text-center py-4">
                            Taking a hot bath will not prevent you from catching COVID-19. Your normal body temperature remains around 36.5°C to 37°C, regardless of the temperature of your bath or shower. Actually, taking a hot bath with extremely hot water can be harmful, as it can burn you. The best way to protect yourself against COVID-19 is by frequently cleaning your hands. By doing this you eliminate viruses that may be on your hands and avoid infection that could occur by then touching your eyes, mouth, and nose.  
                </p>
                <center><div style="border-bottom: 1px solid black; width: 10vw"></div></center>

                <h5 class="text-center pt-5">Does the new coronavirus affect older people, or are younger people also susceptible?</h5>
                <p class="text-center py-4">
                            People of all ages can be infected by the new coronavirus (2019-nCoV). Older people, and people with pre-existing medical conditions (such as asthma, diabetes, heart disease) appear to be more vulnerable to becoming severely ill with the virus. WHO advises people of all ages to take steps to protect themselves from the virus, for example by following good hand hygiene and good respiratory hygiene.
                </p>
            </div>
        </b-modal>

        <!-- Mask Modal -->
        <b-modal id="Mask" ok-only no-stacking button-size="md" title="When and how to use masks">
            <div class="my-4">
                <h5 class="text-center">When and how to wear medical masks to protect against coronavirus?</h5>
                <br>
                <b-embed
                    type="iframe"
                    aspect="4by3"
                    src="https://www.youtube.com/embed/M4olt47pr_o"
                >
                </b-embed>
                <br><br>
                <h5 class="text-center">Can wearing a mask protect you against coronavirus?</h5>
                <br>
                <b-embed
                    type="iframe"
                    aspect="4by3"
                    src="https://www.youtube.com/embed/Ded_AxFfJoQ"
                >
                </b-embed>
            </div>
        </b-modal>
    </div>
</template>

<script>
import handWash from '../assets/water.png';
import mask from '../assets/mask.png';
import doctor from '../assets/doctor.png';
import publicImg from '../assets/public.png';
import sneeze from '../assets/sneeze.png';
export default {
    name: 'guidelines',
    data() {
        return{
            handWash: handWash,
            doctor: doctor,
            publicImg: publicImg,
            sneeze: sneeze,
            mask: mask
        }
    }
}
</script>

<style scoped>
    .head{
        font-weight: bold;
        font-size: 16px;
        /* word-spacing: 2px;
         letter-spacing: 2px;  */
    }
    .tip{
        font-size:16px; 
        color: grey;
    }
    .circle {
        padding: 16px 19px;
        border-radius: 100%;
        background-color: rgb(244, 246, 248);
        border: 2px solid grey;
        color: #fff;
        max-height: 100px;
        z-index: 2;
    }
    .how-it-works.row .col-2 {
        align-self: stretch;
        margin-left: 0.5px;
    }
    .how-it-works.row .col-2::after {
        content: "";
        position: absolute;
        border-left: 3px solid grey;
        z-index: 1;
    }
    .how-it-works.row .col-2.bottom::after {
        height: 50%;
        left: 50%;
        top: 50%;
    }
    .how-it-works.row .col-2.full::after {
        height: 100%;
        left: calc(50% - 3.5px);
    }
    .how-it-works.row .col-2.top::after {
        height: 50%;
        left: 47.5%;
        top: 0;
    }
    .timeline div {
        padding: 0;
        height: 40px;
    }
    .timeline hr {
        border-top: 3.5px solid grey;
        margin: 0;
        top: 17px;
        position: relative;
    }
    .timeline .col-2 {
        display: flex;
        overflow: hidden;
    }
    .timeline .corner {
        border: 3.5px solid grey;
        width: 100%;
        position: relative;
        border-radius: 15px;
    }
    .timeline .top-right {
        left: 50%;
        top: calc(-50% + 0.5px);
    }
    .timeline .left-bottom {
        left: -50%;
        top: calc(50% - 3px);
    }
    .timeline .top-left {
        left: -50%;
        top: calc(-50% + 0.5px);
    }
    .timeline .right-bottom {
        left: 50%;
        top: calc(50% - 3px);
    }
    @media (max-width: 667px) {
        .head{
            font-size: 14px;
        }
        .tip{
            font-size: 14px;
        }
    }
</style>
