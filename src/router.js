import group from './views/group.vue'
import groupDetail from './views/groupDetail.vue'
import ExtendExam from './views/extendExam.vue'
import Track from './views/track.vue'
import MainPage from './views/main.vue'


export default (router) => {
   router.map({
     '/': {
       component: MainPage,
       /*component (resolve) {
         require(['./views/main'], resolve)
       },*/
       subRoutes: {
         '/track/:id': {
           component: Track
         }
       }
     }
   })
 }
