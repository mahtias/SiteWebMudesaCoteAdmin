
import Login from '../../views/auth/Login.vue'
import Logout from '../../views/auth/Logout.vue'
//import users from "../../views/dossierUsers/users.vue"
import TableauBordGenerale from "../../views/dashbord/TableauBordGenerale.vue";
import messageInfo from "../../views/auth/DossierInfo/messageInfo.vue"
import fichierJoint from "../../views/auth/DossierFichier/fichierJoint.vue"

const AuthRoutes = [
    {
        path: '/connexion',
       name:"Login",
       meta: {layout: "no-sidebar"},
       component: Login
     },
     {
      path: '/logout',
     name:"Logout",
     component: Logout,
     meta: { requiresAuth: true }  

   },
  //  {
  //    path:"/creation-user",
  //    name:"uesr",
  //    component:users
  //  },

   {
    path: "/table-de-bord",
    name: "TableauBordGenerale",
    component: TableauBordGenerale
},
{
    path:"/message-info",
    name:"message",
    component:messageInfo
  },
  {
    path:"/fichier-joint",
    name:"fichier_join",
    component:fichierJoint
  }

  
   
]

export default AuthRoutes;
