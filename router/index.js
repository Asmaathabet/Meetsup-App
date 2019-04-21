import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Meetups from '../components/Meetup/Meetups.vue'
import CreateMeetup from '../components/Meetup/CreateMeetup.vue'
import Profile from '../components/User/Profile.vue'
import Signin from '../components/User/Signin.vue'
import Signup from '../components/User/Signup.vue'

// The meta data for your routes
const meta = require('./meta.json')

// Function to create routes
// Is default lazy but can be changed
function route (path, view) {
  return {
    path: path,
    meta: meta[path],
    component: resolve => import(`pages/${view}View.vue`).then(resolve)
  }
}

Vue.use(Router)

export function createRouter () {
    const router = new Router({
      base: __dirname,
      mode: 'history',
      scrollBehavior: () => ({ y: 0 }),
      routes: [
      //  route('/', 'Welcome'),
        route('/inspire', 'Inspire'),
        
        {
          path:'/',
          name:'Home',
          component: Home
        },
        {
          path:'/meetups',
          name:'Meetups',
          component: Meetups
        },
        {
          path:'/meetups/new',
          name:'CreateMeetup',
          component: CreateMeetup
        },
        {
          path:'/profile',
          name:'Profile',
          component: Profile
        },
        {
          path:'/Signup',
          name:'Signup',
          component: Signup
        },
        {
          path:'/Signin',
          name:'Signin',
          component: Signin
        }
        // , // Global redirect for 404
        // { path: '*', redirect: '/' }
      ]
    })

    // Send a pageview to Google Analytics
    router.beforeEach((to, from, next) => {
        if (typeof ga !== 'undefined') {
            ga('set', 'page', to.path)
            ga('send', 'pageview')
        }
        next()
    })

    return router
}
