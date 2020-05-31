<template>
    <b-container>
        <h3 class="text-center pt-3">Get latest news for: </h3>
        <b-row class="justify-content-center pt-3">
            <b-form-group id="input-group-3" label-for="input-3" class="col-md-6 col-sm-12">
                <b-form-select
                    id="input-3"
                    :options="select"
                    v-model="selectNews"
                    required
                >
                </b-form-select>
            </b-form-group>
        </b-row>
        
        <b-row class="justify-content-center pt-3">
            <!-- India -->
            <div v-if="indiaNews">   
                <div v-for="(items,i) in indiaNewsResult" :key="i">
                    <md-card md-with-hover class="m-4 newsCard">
                        <md-card-area>
                            <md-card-media >
                                <img :src="items.image" alt="img">
                            </md-card-media>
                            
                            <md-card-header>
                            <div class="md-title pb-2">{{ items.title }}</div>
                            <div class="md-subhead"><span style="font-weight: 500; font-size: 14px;">{{ items.author }}</span></div>
                            </md-card-header>

                            <md-card-content>
                                {{items.description}}
                            </md-card-content>
                        </md-card-area>

                        <md-card-actions  class="p-3">
                            <span class="mr-auto"><span class="md-subhead" style="font-weight: 500;">Source: </span>{{items.source}}</span>
                            <md-button class="md-primary" md-alignment="right" @click="readMore(items.url)">Read More</md-button>
                        </md-card-actions>
                    </md-card>
                </div>
            </div>

            <!-- World- COVID -->
            <div v-if="covidNews">   
                <div v-for="(items,i) in covidNewsResult" :key="i">
                    <md-card md-with-hover class="m-4 newsCard">
                        <md-card-area>
                            <md-card-media v-if="items.image">
                                <img :src="items.image" alt="img">
                            </md-card-media>

                            <md-card-header>
                            <div class="md-title pb-2">{{ items.title }}</div>
                            <div class="md-subhead"><span style="font-weight: 500; font-size: 14px;">{{ items.author }}</span></div>
                            </md-card-header>

                            <md-card-content>
                                {{items.description}}
                            </md-card-content>
                        </md-card-area>

                        <md-card-actions  class="p-3">
                            <span class="mr-auto"><span class="md-subhead" style="font-weight: 500;">Source: </span>{{items.source}}</span>
                            <md-button class="md-primary" md-alignment="right" @click="readMore(items.url)">Read More</md-button>
                        </md-card-actions>
                    </md-card>
                </div>
            </div>
        </b-row>
    </b-container>
</template>

<script>    
    // const IndiaAPI = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f0ef8a0a3a3240f3b5d4b7c9165fd281";
    //const IndiaAPI = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?q=india&pageSize=40&apiKey=f0ef8a0a3a3240f3b5d4b7c9165fd281";
    // const CoronaAPI = "https://newsapi.org/v2/top-headlines?q=coronavirus&apiKey=f0ef8a0a3a3240f3b5d4b7c9165fd281"
    //const CoronaAPI = "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?q=coronavirus&language=en&pageSize=40&apiKey=f0ef8a0a3a3240f3b5d4b7c9165fd281";
    const IndiaAPI = "https://gnews.io/api/v3/search?q=india&country=in&token=10c6c254293575e30c56d63c0486776e";
    const CoronaAPI = "https://gnews.io/api/v3/search?q=coronavirus&max=100&token=10c6c254293575e30c56d63c0486776e";
    export default {
        name:'News',
        data(){
            return{
                select: ['Global COVID-19','India'],
                selectNews: 'India',
                covidNews: false,
                covidNewsResult: [],
                indiaNews: false,
                indiaNewsResult: []
            }
        },
        created()
        {
            fetch(IndiaAPI, {credentials: 'same-origin', mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                data.articles.forEach(element => {
                    var temp = {};
                    temp['title'] = element.title;
                    temp['author'] = element.publishedAt;
                    temp['description'] = element.description;
                    temp['url'] = element.url;
                    temp['source'] = element.source.name;
                    temp['image'] = element.image;
                    this.indiaNewsResult.push(temp);
                });
                this.indiaNews = true;
            });

            fetch(CoronaAPI, {credentials: 'same-origin', mode: 'cors'})
            .then(response => response.json())
            .then(data => {
                data.articles.forEach(element => {
                    var temp = {};
                    temp['title'] = element.title;
                    temp['author'] = element.publishedAt;
                    temp['description'] = element.description;
                    temp['url'] = element.url;
                    temp['source'] = element.source.name;
                    temp['image'] = element.image;
                    this.covidNewsResult.push(temp);
                });
                this.covidNews = true;
            });
        },
        watch: {
            selectNews: function(currNews)
            {
                if(currNews == 'India')
                {
                    this.covidNews = false;
                    this.indiaNews = true;
                }
                else
                {
                    this.covidNews = true;
                    this.indiaNews = false;
                }
            }
        },
        methods: {
            readMore(url)
            {
                window.open(url);
            }
        }  
    }
</script>

<style scoped>
    .newsCard{
        width: 50vw;
        font-family: "Roboto", sans-serif;
    }
    @media (max-width: 667px) {
        .newsCard{
            width: 85vw;
        }
    }
</style>
