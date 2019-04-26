<template>
    <v-container>
        <v-layout row wrap class="mb-2">
           <v-flex xs12 sm6 class="text-xs-center text-sm-right">
               <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
           </v-flex>
           <v-flex xs12 sm6 class="text-xs-center text-sm-left" >
               <v-btn large router to="/meetup/new" class="info">Organize Meetups</v-btn>
           </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 sm6 offset-sm3 >
               <v-carousel>
                <v-carousel-item
                v-for="meetup in meetups"
                :key="meetup.id"
                :src="meetup.ImageURL"
                >
                <div class="title">
                    {{ meetup.title}}
                </div>
                </v-carousel-item>
            </v-carousel>
            </v-flex>
        </v-layout>

        <v-layout row wrap class="mt-2">
           <v-flex xs12 class="text-xs-center">
             <p>Join our awesome meetups</p>  
           </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

  export default {
    data () {
      return {
        meetups: [
          {
            ImageURL: 'https://100resilientcities.org/wp-content/uploads/2017/06/Paris-hero-crop-e1539202545467.jpg', id : 'kjfdgfdjjlaj', title: 'Meetup in Paris'
          },
          {
            ImageURL: 'https://media.architecturaldigest.com/photos/5c116b315ed1df490d899801/16:9/w_1280,c_limit/An%2520aerial%2520view%2520of%2520Hudson%2520Yards-%2520courtesy%2520of%2520Related-Oxford%2520(1).jpg', id : 'gflsglsflgf', title: 'Meetup in New York'
          },
          {
            ImageURL: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/28/32/untitled-design-207.jpg',id : 'gfdgdfgdflerw', title: 'Meetup in England'
          },
          {
            ImageURL: 'https://cdn-wp.s3-eu-central-1.amazonaws.com/wp-content/uploads/sites/3/2018/06/Amsterdam_City_Canals11.jpg',id : 'fdslfjsdfowr', title: 'Meetup in Amestrdam'
          }
        ]
      }
    }
  }

</script>

<style scoped>
.title {
    position: absolute;
    bottom:50px;
    background-color:rgba(0,0,0,0.5);
    color:#fff; 
    size:2em;
    padding:15px;
    margin-left: 110px;
    text-align: center
}
</style>
