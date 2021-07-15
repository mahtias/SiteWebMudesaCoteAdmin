
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