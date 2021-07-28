
export const LOGIN_USER = (state, user) => {
    state.isLoggedIn = true
    state.user = user;
};

export const LOGOUT_USER = (state) => {
    state.isLoggedIn = false
   // state.user = user;
};

export const SET_ERROR_MESSAGE = (state, message) => {
    state.errorMessage = message
}


export const SET_CHAMP_VIDE_TRUE = state => state.champVide = true

export const SET_CHAMP_VIDE_FALSE = state => state.champVide = false

export const SET_LOADER_FALSE = state => state.loader = false

export const SET_LOADER_TRUE = state => state.loader = true

export const SET_ERROR_FALSE = state => state.error = false

export const SET_ERROR_TRUE = state => state.error = true


export const GET_ALL_UTILISATEUR = (state, tableau_utilisateur) => {
    state.utilisateurs = tableau_utilisateur
}

export const AJOUTER_UTILISATEUR = (state, elementAjouter) => {
    state.utilisateurs.unshift(elementAjouter)
}

// update all document
export const MODIFIER_UTILISATEUR = (state, elementModif) => {
    state.utilisateurs = state.utilisateurs.map(response => {
        if (response.id == elementModif.id) {
            response = { ...elementModif }
        }
        return response
    })
}

export const SUPPRIMER_UTILISATEUR = (state, id) => {
    state.utilisateurs = state.utilisateurs.filter(prest => prest.id != id)
}



//  mutation pour le role //

export const GET_ALL_ROLE = (state, tableau_role) =>{
   state.roles = tableau_role 
}

export const AJOUTER_ROLE = (state, elementAjouter) =>{
    state.roles.unshift(elementAjouter)
}

export const MODIFIER_ROLE = (state, elementModif) =>{
    state.roles = state.roles.map(response =>{
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}
   

export const SUPPRIMER_ROLE = (state,id) =>{
  state.roles = state.roles.filter(res => res.id!=id)
}

// mutation pour user_role

export const GET_ALL_USER_ROLE = (state, tableau_user_role) =>{
    state.userRole = tableau_user_role
}

// mutation pour user //

export const GET_ALL_USER = (state, tableau_user) =>{
    state.users = tableau_user 
 }
 
 export const AJOUTER_USER = (state, elementAjouter) =>{
     state.users.unshift(elementAjouter)
 }
 
 export const MODIFIER_USER = (state, elementModif) =>{
     state.users = state.users.map(response =>{
         if(response.id == elementModif.id){
             response = {...elementModif}
         }
         return response
     })
 }
    
 
 export const SUPPRIMER_USER = (state,id) =>{
   state.users = state.users.filter(res => res.id!=id)
 }



 export const GET_ALL_MESSAGE = (state, tableau_message) =>{
    state.messages = tableau_message 
 }
 
 export const AJOUTER_MESSAGE = (state, elementAjouter) =>{
     state.messages.unshift(elementAjouter)
 }
 
 export const MODIFIER_MESSAGE = (state, elementModif) =>{
     state.messages = state.messages.map(response =>{
         if(response.id == elementModif.id){
             response = {...elementModif}
         }
         return response
     })
 }

 export const SUPPRIMER_MESSAGE = (state,id) =>{
    state.messages = state.messages.filter(res => res.id!=id)
  }

 export const GET_ALL_FICHIER = (state, tableau_fichier) =>{
    state.fichierJoints = tableau_fichier 
 }
 
 export const AJOUTER_FICHIER = (state, elementAjouter) =>{
     state.fichierJoints.unshift(elementAjouter)
 }
 
 export const MODIFIER_FICHIER = (state, elementModif) =>{
     state.fichierJoints = state.fichierJoints.map(response =>{
         if(response.id == elementModif.id){
             response = {...elementModif}
         }
         return response
     })
 }

 
export const SUPPRIMER_FICHIER = (state, id) => {
    state.fichierJoints = state.fichierJoints.filter(prest => prest.id != id)
}

export const GET_ALL_LISTE_ADERHENT = (state, tableau_aderhent) =>{
    state.listeAderents = tableau_aderhent 
 }

 export const AJOUTER_LISTE_ADERHENT  = (state, elementAjouter) =>{
    state.listeAderents.unshift(elementAjouter)
}

export const MODIFIER_LISTE_ADERHENT  = (state, elementModif) =>{
    state.listeAderents = state.listeAderents.map(response =>{
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


export const SUPPRIMER_LISTE_ADERHENT  = (state, id) => {
   state.listeAderents = state.listeAderents.filter(prest => prest.id != id)
}


// mutation pour les ceremonies

        export const GET_ALL_CEREMONIE = (state, tableau_ceremonie) =>{
            state.listeCeremonies = tableau_ceremonie 
        }

        export const AJOUTER_CEREMONIE  = (state, elementAjouter) =>{
            state.listeCeremonies.unshift(elementAjouter)
        }

        export const MODIFIER_CEREMONIE  = (state, elementModif) =>{
            state.listeCeremonies = state.listeCeremonies.map(response =>{
                if(response.id == elementModif.id){
                    response = {...elementModif}
                }
                return response
            })
        }


        export const SUPPRIMER_CEREMONIE  = (state, id) => {
        state.listeCeremonies = state.listeCeremonies.filter(prest => prest.id != id)
        }

// listeOrgSocios mutation pour la liste organisation

                export const GET_ALL_ORG_SOCIO = (state, tableau_org_socio) =>{
                    state.listeOrgSocios = tableau_org_socio 
                }

                export const AJOUTER_ORG_SOCIO  = (state, elementAjouter) =>{
                    state.listeOrgSocios.unshift(elementAjouter)
                }

                export const MODIFIER_ORG_SOCIO  = (state, elementModif) =>{
                    state.listeOrgSocios = state.listeOrgSocios.map(response =>{
                        if(response.id == elementModif.id){
                            response = {...elementModif}
                        }
                        return response
                    })
                }


                export const SUPPRIMER_ORG_SOCIO  = (state, id) => {
                state.listeOrgSocios = state.listeOrgSocios.filter(prest => prest.id != id)
                }


                // mutation des images

                        export const GET_ALL_IMAGE = (state, tableau_image) =>{
                            state.listeImages = tableau_image 
                        }

                        export const AJOUTER_IMAGE  = (state, elementAjouter) =>{
                            state.listeImages.unshift(elementAjouter)
                        }

                        export const MODIFIER_IMAGE  = (state, elementModif) =>{
                            state.listeImages = state.listeImages.map(response =>{
                                if(response.id == elementModif.id){
                                    response = {...elementModif}
                                }
                                return response
                            })
                        }


                        export const SUPPRIMER_IMAGE  = (state, id) => {
                        state.listeImages = state.listeImages.filter(prest => prest.id != id)
                        }

                        // mutation pour la video

                        export const GET_ALL_VIDEO = (state, tableau_video) =>{
                            state.listeVideos = tableau_video 
                        }

                        export const AJOUTER_VIDEO  = (state, elementAjouter) =>{
                            state.listeVideos.unshift(elementAjouter)
                        }

                        export const MODIFIER_VIDEO  = (state, elementModif) =>{
                            state.listeVideos = state.listeVideos.map(response =>{
                                if(response.id == elementModif.id){
                                    response = {...elementModif}
                                }
                                return response
                            })
                        }


                        export const SUPPRIMER_VIDEO  = (state, id) => {
                        state.listeVideos = state.listeVideos.filter(prest => prest.id != id)
                        }
 
 
