
import Login from '../../views/auth/Login.vue'
import Logout from '../../views/auth/Logout.vue'
//import users from "../../views/dossierUsers/users.vue"
import TableauBordGenerale from "../../views/dashbord/TableauBordGenerale.vue";
import messageInfo from "../../views/auth/DossierInfo/messageInfo.vue"
import fichierJoint from "../../views/auth/DossierFichier/fichierJoint.vue"
import listeAderhent from "../../views/DossierListeAdehrent/listeAderhent.vue"
import ModifieAdherant from "../../views/DossierListeAdehrent/ModifieAdherant.vue"
import listeCeremonie from "../../views/DossierActivité/listeCeremonie.vue"
import ajouterCeremonie from "../../views/DossierActivité/ajouterCeremonie.vue"
import listeOrgSocio from "../../views/DossierOrgSocio/listeOrgSocio.vue"
import ajouterOrgSocio from "../../views/DossierOrgSocio/ajouterOrgSocio.vue"
import listeImage from "../../views/DossierImage/listeImage.vue"
import AjoutImage from "../../views/DossierImage/AjoutImage.vue"
import listeVideo from "../../views/DossierVideo/listeVideo.vue"
import AjouterVideo from "../../views/DossierVideo/AjouterVideo.vue"
import listeFichier from "../../views/auth/DossierFichier/listeFichier.vue"
import modifierFichierJoint from "../../views/auth/DossierFichier/modifierFichierJoint.vue"

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
   {
     path:"/liste-video",
     name:"liste_video",
     component:listeVideo
   },
   {
     path:"/ajouter-video",
     name:"video",
     component:AjouterVideo
   },

   {
     path:"/liste-image",
     name:"image",
     component:listeImage
   },
   {
     path:"/ajout-image",
     name:"ajout_image",
     component:AjoutImage
   },
   {
     path:"/liste-socio",
     name:"liste_socio",
     component:listeOrgSocio
   },
   {
     path:"/liste-ceremonie",
     name:"ceremonie",
     component:listeCeremonie
   },
   {
     path:"/creation-socio",
     name:"ajouter_socio",
     component:ajouterOrgSocio
   },
   {
     path:"/ajouter-ceremonie",
     name:"ajouter_ceremonie",
     component:ajouterCeremonie
   },
   {
     path:"/liste-aderhent",
     name:"liste_aderhent",
     component:listeAderhent
   },
   {
     path:"/modif-adherant/:id",
     name:"modif_adherant",
     component:ModifieAdherant
   },

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
    path:"/liste-fichier",
    name:"liste_fichier",
    component:listeFichier
  },
  {
    path:"/fichier-joint",
    name:"fichier_join",
    component:fichierJoint
  },
  {
    path:"/modif-fichier/:id",
    name:"modifier_fichier",
    component:modifierFichierJoint
  }

  
   
]

export default AuthRoutes;
