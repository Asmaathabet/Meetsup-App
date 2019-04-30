import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      loadedMeetups: [
        {
          ImageURL: 'https://100resilientcities.org/wp-content/uploads/2017/06/Paris-hero-crop-e1539202545467.jpg',
           id : 'kjfdgfdjjlaj', 
           title: 'Meetup in Paris',
           date:'2017-08-18'
        },
        {
          ImageURL: 'https://media.architecturaldigest.com/photos/5c116b315ed1df490d899801/16:9/w_1280,c_limit/An%2520aerial%2520view%2520of%2520Hudson%2520Yards-%2520courtesy%2520of%2520Related-Oxford%2520(1).jpg',
           id : 'gflsglsflgf',
           title: 'Meetup in New York',
           date:'2017-10-22'
        },
        {
          ImageURL: 'https://www.worldatlas.com/r/w728-h425-c728x425/upload/c7/28/32/untitled-design-207.jpg',
          id : 'gfdgdfgdflerw', 
          title: 'Meetup in England',
          date:'2018-05-03'
        },
        {
          ImageURL: 'https://cdn-wp.s3-eu-central-1.amazonaws.com/wp-content/uploads/sites/3/2018/06/Amsterdam_City_Canals11.jpg',
          id : 'fdslfjsdfowr',
           title: 'Meetup in Amestrdam',
           date:'2018-08-23'
        }
      ],
      user:{
         id: "adasklflsgeh",
         registeredMeetups:[
           'fdslfjsdfowr'
         ]
      }

  
    },

    actions: {
      createMeetup ({commit},payload){
          const meetup = {
             title : payload.title,
             location : payload.location,
             imageUrl : payload.imageUrl,
             description : payload.description,
             date: payload.date,
             id: 'vffykhjll1122'
          }

          // Reach out to Firebase and Store it 
          commit('createMeetup',meetup)
      }
    },

    mutations: {
      createMeetup(state, payload){
           state.loadedMeetups.push(payload)
      }
    },

    getters: {
      loadedMeetups(state){
        return state.loadedMeetups.sort((meetupA,meetupB) => {
          return meetupA.date > meetupB.date ; 
        })
      },
      feauterdMeetups(getters){
         return getters.loadedMeetups.slice(0,5)
      },
      loadedMeetup(state){
        return (meetupId) =>{
          return state.loadedMeetups.find((meetup)=>{
            return meetup.id === meetupId
          })
        }
      }

    }
  })
}