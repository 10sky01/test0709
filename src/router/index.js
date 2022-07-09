import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/LogIn.vue'
import MonthTask from '../components/MonthTask.vue'
import WelCome from '../components/WelCome.vue'
import UserList from '../components/UserList.vue'
import HomeModal from '../components/HomeModal.vue'
import PatrolRules from '../components/PatrolRules.vue'
import ScoreRules from '../components/ScoreRules.vue'
import WatchRules from '../components/WatchRules'
import StationMsg from '../components/StationMsg'
import AddWork from '../components/AddWork'
import MonthScore from '../components/MonthScore'
import WorkSearch from '../components/WorkSearch'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/MonthTask', component: MonthTask },
  {
    path: '/HomeModal',
    component: HomeModal,
    redirect: '/WelCome',
    children: [{ path: '/WelCome', component: WelCome },
      { path: '/UserList', component: UserList },
      { path: '/PatrolRules', component: PatrolRules },
      { path: '/ScoreRules', component: ScoreRules },
      { path: '/WatchRules', component: WatchRules },
      { path: '/StationMsg', component: StationMsg },
      { path: '/AddWork', component: AddWork },
      { path: '/MonthScore', component: MonthScore },
      { path: '/WorkSearch', component: WorkSearch }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
