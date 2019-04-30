<template>
    <v-container class="middle">
        <v-layout row wrap>
            <v-flex xs12 sm6 offset-3>
                <h2 class="primary--text"> Create a New Meetup</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap >
            <v-flex xs12>
                <form @submit.prevent="OnCreateMeetup">
                    <v-layout row >
                        <v-flex xs12 sm6 offset-sm-3>
                            <v-text-field
                            name="title"
                            label="Title"
                            id="title"
                            v-model="title"
                            required>
                            </v-text-field>              
                        </v-flex>
                    </v-layout> 
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm-3>
                            <v-text-field
                            name="location"
                            label="Location"
                            id="location"
                            v-model="location"
                            required>
                            </v-text-field>              
                        </v-flex>
                    </v-layout> 
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm-3>
                            <v-text-field
                            name="imageUrl"
                            label="Image URL"
                            id="image-url"
                            v-model="imageUrl"
                            required>
                            </v-text-field>              
                        </v-flex>
                    </v-layout> 
                     <v-layout row>
                        <v-flex xs12>
                       <img :src="imageUrl" height="300px">       
                        </v-flex>
                    </v-layout> 
                     <v-layout row>
                        <v-flex xs12 sm6 offset-sm-3>
                            <v-textarea
                            name="description"
                            label="Description"
                            id="description"
                            v-model="description"
                            required>
                            </v-textarea>              
                        </v-flex>
                    </v-layout> 
                     <v-layout row>
                        <v-flex xs12 sm6 offset-sm-3>
                            <v-btn 
                            class="primary" 
                            :disabled="!formIsVaild"
                            type="submit"> Create Meetup</v-btn>
                        </v-flex>
                     </v-layout>        
                </form>
          </v-flex>
        </v-layout>           
    </v-container>
</template>

<script>
export default {
    data (){
        return {
            title: '',
            location: '',
            imageUrl:'',
            description:'',
        }
    } ,
    computed:{
        formIsVaild() {
          return this.title !== ''
           &&  this.location !== ''
           &&  this.imageUrl !== ''
           &&  this.description !== ''
        }
    },
    methods:{
        OnCreateMeetup(){
            const meetupData ={
                title : this.title,
                location: this.location,
                imageUrl: this.imageUrl, 
                description: this.description,
                date: new Date()
            }
            this.$store.dispatch('createMeetup', meetupData)
        }
    }
}
</script>

<style>
.middle{   
   margin-left: 500px;
}
</style>