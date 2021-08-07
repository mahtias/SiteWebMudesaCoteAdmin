import apiGuest from './urls/urlAdoni'
import router from '../../../routes/index'
import { asyncLoading } from 'vuejs-loading-plugin'
import {token} from "../../../repositories/Auth"
//import { Message } from 'iview'
import { Notice,nodesc } from 'view-design'

export function login({commit}, user){
    if(user.email && user.password){
       // this.loader = true;
      // commit('SET_LOADER_TRUE')
    //  this.error = false
        commit('SET_ERROR_FALSE')
            //   this.loginError = false;
               apiGuest.post('/login', {
                email: user.email,
                password: user.password
            }).then(response => {

                    commit('LOGIN_USER', response.data.user)

                    localStorage.setItem('token', response.data.access_token)
                    localStorage.setItem('Users',JSON.stringify(response.data.user))
                    this.$app.$notify({
                      title: 'success ',
                      text: 'connexion effectué avec success!',
                      type:"success"
                    })
                   // Message.succes('Felicitation vous etes connectés avec succès !')
                   router.push({ name: 'TableauBordGenerale' })

               }).catch((error) => {
                  // this.loginError = true

                   if (error.response.status === 401 || error.response.status === 403) {
                   commit('SET_ERROR_MESSAGE', error.response.data.message)
                     commit('SET_LOADER_FALSE')
                  //   //  this.error = false
                     commit('SET_ERROR_TRUE')
                    this.$router.push({name: 'login'})
                }

               });
      }else if(!user.email){
        commit('SET_CHAMP_VIDE_TRUE')
      }else if(!user.password){
        commit('SET_CHAMP_VIDE_TRUE')
      }
}

    export function logoutUser({commit}){
      localStorage.removeItem('token')
      localStorage.removeItem('Users')
      commit('LOGOUT_USER')
      router.push({ name: 'Login' })                   

    }


    export function getUtilisateur({ commit }) {
  
      console.log(token())
      apiGuest.get('/user',token()).then((response) => {
        commit('GET_ALL_UTILISATEUR', response.data)
        
      }).catch(error => console.log(error))
    
    }
    export function ajouterUtilisateur({ commit,dispatch }, formData) {
     asyncLoading (apiGuest.post('/register', formData,token())).then(response => {
        if (response.status == 201) {
          console.log(response.data)
          commit('AJOUTER_UTILISATEUR', response.data)
          dispatch('getUtilisateur')
       
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
        }
    
      }).catch(error => console.log(error))
    }
    
    // action pour modifier bailleur
    
    
    export function modifierUtilisateur({ commit }, element_modifie) {
     asyncLoading (apiGuest.put('/user/' + element_modifie.id, element_modifie,token())).then(response => {
        commit('MODIFIER_UTILISATEUR', response.data)
      //   Notice.success({
      //     title: 'Modification effectué ',
      //     desc: nodesc ? '' : 'avec success. '
      // });
        this.$app.$notify({
          title: 'success ',
          text: 'Modification effectué avec success!',
          type:"success"
        })
    
      }).catch(error => console.log(error))
    }

    export function supprimerUtilisateur({ commit }, id) {
      this.$app.$dialog
      .confirm("Voulez vouz vraiment supprimer ?.")
      .then(dialog => {
        commit('SUPPRIMER_UTILISATEUR', id)
      //   Notice.success({
      //     title: 'Suppression effectué ',
      //     desc: nodesc ? '' : 'avec success. '
      // });
        this.$app.$notify({
          title: 'success ',
          text: 'Suppression effectué avec success!',
          type:"success"
        })
      // // dialog.loading(false) // stops the proceed button's loader
      apiGuest.delete('/user/' + id,token()).then(() => dialog.close())
      }) 
    
    
    }





       

       /// action pour l'action le role

       export function getRole({ commit }) {
        // console.log(token())
         apiGuest.get('/role').then((response) => {
           commit('GET_ALL_ROLE', response.data)
           
         }).catch(error => console.log(error))
       
       }
  
       
       export function ajouterRole({ commit}, formData) {
        asyncLoading (apiGuest.post('/role', formData)).then(response => {
           if (response.status == 201) {
            // console.log("ok ok ok ok ok c'est la vie")
             commit('AJOUTER_ROLE', response.data)
            // dispatch('getPersonnel')
             this.$app.$notify({
               title: 'success ',
               text: 'Enregistrement effectué !',
               type:"success"
             })
           }
       
         }).catch(error => console.log(error))
       }
      
       // action pour modifier 
       
       
       export function modifierRole({ commit}, element_modifie) {
        asyncLoading (apiGuest.put('/role/' + element_modifie.id, element_modifie)).then(response => {
           commit('MODIFIER_ROLE', response.data)
         
           this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success!',
             type:"success"
           })
       
         }).catch(error => console.log(error))
       }
   
       export function supprimerRole({ commit }, id) {
         this.$app.$dialog
         .confirm("Voulez vouz vraiment supprimer ?.")
         .then(dialog => {
           commit('SUPPRIMER_ROLE', id)
           this.$app.$notify({
             title: 'success ',
             text: 'Suppression effectué avec success!',
             type:"success"
           })
         // // dialog.loading(false) // stops the proceed button's loader
         apiGuest.delete('/role/' + id).then(() => dialog.close())
         }) 
       
       
       }


       // action pour user_role

       
       export function getUserRole({ commit }) {
        // console.log(token())
         apiGuest.get('/userRole').then((response) => {
           commit('GET_ALL_USER_ROLE', response.data)
           
         }).catch(error => console.log(error))
       
       }

       // action pour l'user

       export function getUser({ commit }) {
        // console.log(token())
         apiGuest.get('/user').then((response) => {
           commit('GET_ALL_USER', response.data)
           
         }).catch(error => console.log(error))
       
       }
  
       
       export function ajouterUser({ commit}, formData) {
        asyncLoading (apiGuest.post('/user', formData)).then(response => {
           if (response.status == 201) {
            // console.log("ok ok ok ok ok c'est la vie")
             commit('AJOUTER_USER', response.data)
            // dispatch('getPersonnel')
             this.$app.$notify({
               title: 'success ',
               text: 'Enregistrement effectué !',
               type:"success"
             })
           }
       
         }).catch(error => console.log(error))
       }
      
       // action pour modifier 
       
       
       export function modifierUser({ commit}, element_modifie) {
        asyncLoading (apiGuest.put('/user/' + element_modifie.id, element_modifie)).then(response => {
           commit('MODIFIER_USER', response.data)
         
           this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success!',
             type:"success"
           })
       
         }).catch(error => console.log(error))
       }
   
       export function supprimerUser({ commit }, id) {
         this.$app.$dialog
         .confirm("Voulez vouz vraiment supprimer ?.")
         .then(dialog => {
           commit('SUPPRIMER_USER', id)
           this.$app.$notify({
             title: 'success ',
             text: 'Suppression effectué avec success!',
             type:"success"
           })
         // // dialog.loading(false) // stops the proceed button's loader
         apiGuest.delete('/user/' + id).then(() => dialog.close())
         }) 
       
       
       }



       export function getMessage({ commit }) {
        // console.log(token())
         apiGuest.get('/message').then((response) => {
           commit('GET_ALL_MESSAGE', response.data)
           
         }).catch(error => console.log(error))
       
       }
  
       
       export function ajouterMessage({ commit}, formData) {
        asyncLoading (apiGuest.post('/message', formData)).then(response => {
           if (response.status == 201) {
            // console.log("ok ok ok ok ok c'est la vie")
             commit('AJOUTER_MESSAGE', response.data)
            // dispatch('getPersonnel')
          //   Notice.success({
          //     title: 'Modification effectué avec success ',
          //     desc: nodesc ? '' : 'avec success. '
          // });
             this.$app.$notify({
               title: 'success ',
               text: 'Enregistrement effectué !',
               type:"success"
             })
           }
       
         }).catch(error => console.log(error))
       }

       export function modifierMessage({ commit}, element_modifie) {
        asyncLoading (apiGuest.put('/message/' + element_modifie.id, element_modifie)).then(response => {
           commit('MODIFIER_MESSAGE', response.data)
         
           this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success!',
             type:"success"
           })
       
         }).catch(error => console.log(error))
       }


       export function supprimerMessage({ commit }, id) {
        this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
          commit('SUPPRIMER_MESSAGE', id)
          this.$app.$notify({
            title: 'success ',
            text: 'Suppression effectué avec success!',
            type:"success"
          })
        // // dialog.loading(false) // stops the proceed button's loader
        apiGuest.delete('/message/' + id).then(() => dialog.close())
        }) 
      
      
      }



       export function getFichier({ commit }) {
        // console.log(token())
         apiGuest.get('/fichier').then((response) => {
           commit('GET_ALL_FICHIER', response.data)
           
         }).catch(error => console.log(error))
       
       }
  
       
       export function ajouterFichier({ commit}, formData) {
        asyncLoading (apiGuest.post('/fichier', formData)).then(response => {
           if (response.status == 201) {
            // console.log("ok ok ok ok ok c'est la vie")
             commit('AJOUTER_FICHIER', response.data)
            // dispatch('getPersonnel')
             this.$app.$notify({
               title: 'success ',
               text: 'Enregistrement effectué !',
               type:"success"
             })
           }
       
         }).catch(error => console.log(error))
       }

         
       export function modifierFichier({ commit}, element_modifie,config) {
        asyncLoading (apiGuest.post('/fichier', element_modifie, config)).then(response => {
           commit('MODIFIER_FICHIER', response.data)
         
           this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success!',
             type:"success"
           })
       
         }).catch(error => console.log(error))
       }
   
       export function supprimerFichier({ commit }, id) {
         this.$app.$dialog
         .confirm("Voulez vouz vraiment supprimer ?.")
         .then(dialog => {
           commit('SUPPRIMER_FICHIER', id)
           this.$app.$notify({
             title: 'success ',
             text: 'Suppression effectué avec success!',
             type:"success"
           })
         // // dialog.loading(false) // stops the proceed button's loader
         apiGuest.delete('/fichier/' + id).then(() => dialog.close())
         }) 
       }

       /////

       export function getListeAderhent({ commit }) {
        // console.log(token())
         apiGuest.get('/adhesion').then((response) => {
           commit('GET_ALL_LISTE_ADERHENT', response.data)
           
         }).catch(error => console.log(error))
       
       }

       export function ajouterAdherant({ commit}, formData) {
        asyncLoading (apiGuest.post('/adhesion', formData)).then(response => {
           if (response.status == 201) {
            // console.log("ok ok ok ok ok c'est la vie")
             commit('AJOUTER_LISTE_ADERHENT', response.data)
            // dispatch('getPersonnel')
             this.$app.$notify({
               title: 'success ',
               text: 'Enregistrement effectué !',
               type:"success"
             })
           }
       
         }).catch(error => console.log(error))
       }

         
       export function modifierAdherant({ commit}, element_modifie) {
        asyncLoading (apiGuest.put('/adhesion/' + element_modifie.id, element_modifie)).then(response => {
           commit('MODIFIER_LISTE_ADERHENT', response.data)
         
           this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec success!',
             type:"success"
           })
       
         }).catch(error => console.log(error))
       }

       export function supprimerAdherant({ commit }, id) {
        this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
          commit('SUPPRIMER_LISTE_ADERHENT', id)
          this.$app.$notify({
            title: 'success ',
            text: 'Suppression effectué avec success!',
            type:"success"
          })
        // // dialog.loading(false) // stops the proceed button's loader
        apiGuest.delete('/adhesion/' + id).then(() => dialog.close())
        })
      }


      // action pour les ceremonies

      export function getCeremonie({ commit }) {
        // console.log(token())
         apiGuest.get('/ceremonie').then((response) => {
           commit('GET_ALL_CEREMONIE', response.data)
         }).catch(error => console.log(error))
       
       }
  
       
       export function ajouterCeremonie({ commit}, formData) {
        asyncLoading (apiGuest.post('/ceremonie', formData)).then(response => {
           if (response.status == 201) {
            // console.log("ok ok ok ok ok c'est la vie")
             commit('AJOUTER_CEREMONIE', response.data)
            // dispatch('getPersonnel')
             this.$app.$notify({
               title: 'success ',
               text: 'Enregistrement effectué !',
               type:"success"
             })
           }
       
         }).catch(error => console.log(error))
       }

         
            export function modifierCeremonie({ commit}, element_modifie) {
              asyncLoading (apiGuest.put('/ceremonie/' + element_modifie.id, element_modifie)).then(response => {
                commit('MODIFIER_CEREMONIE', response.data)
                this.$app.$notify({
                  title: 'success ',
                  text: 'Modification effectué avec success!',
                  type:"success"
                })
            
              }).catch(error => console.log(error))
            }
   
          export function supprimerCeremonie({ commit }, id) {
            this.$app.$dialog
            .confirm("Voulez vouz vraiment supprimer ?.")
            .then(dialog => {
              commit('SUPPRIMER_CEREMONIE', id)
              this.$app.$notify({
                title: 'success ',
                text: 'Suppression effectué avec success!',
                type:"success"
              })
            // // dialog.loading(false) // stops the proceed button's loader
            apiGuest.delete('/ceremonie/' + id).then(() => dialog.close())
            }) 
          }

          // action pour la liste organisation socio

                    export function getOrgsocio({ commit }) {
                      // console.log(token())
                      apiGuest.get('/org').then((response) => {
                        commit('GET_ALL_ORG_SOCIO', response.data)
                      }).catch(error => console.log(error))
                    
                    }
                
                    
                    export function ajouterOrgaSocio({ commit}, formData) {
                      asyncLoading (apiGuest.post('/org', formData)).then(response => {
                        if (response.status == 201) {
                          // console.log("ok ok ok ok ok c'est la vie")
                          commit('AJOUTER_ORG_SOCIO', response.data)
                          // dispatch('getPersonnel')
                            Notice.success({
                              title: 'Modification effectué ',
                              desc: nodesc ? '' : 'ajout effectué  avec success. '
                          });
                          // this.$app.$notify({
                          //   title: 'success ',
                          //   text: 'Enregistrement effectué !',
                          //   type:"success"
                          // })
                        }
                    
                      }).catch(error => console.log(error))
                    }
              
                      
                          export function modifierOrgSocio({ commit}, element_modifie) {
                            asyncLoading (apiGuest.put('/org/' + element_modifie.id, element_modifie)).then(response => {
                              commit('MODIFIER_ORG_SOCIO', response.data)
                              this.$app.$notify({
                                title: 'success ',
                                text: 'Modification effectué avec success!',
                                type:"success"
                              })
                          
                            }).catch(error => console.log(error))
                          }
                
                        export function supprimerOrgSocio({ commit }, id) {
                          // this.$app.$dialog
                          // .confirm("Voulez vouz vraiment supprimer ?.")
                          // .then(dialog => {
                            commit('SUPPRIMER_ORG_SOCIO', id)
                            Notice.success({
                              title: 'Suppression effectué ',
                              desc: nodesc ? '' : 'Suppression effectué avec success. '
                          });
                            // this.$app.$notify({
                            //   title: 'success ',
                            //   text: 'Suppression effectué avec success!',
                            //   type:"success"
                            // })
                          // // dialog.loading(false) // stops the proceed button's loader
                          apiGuest.delete('/org/' + id)
                          //  .then(() => dialog.close())  }) 
                        }

                        // action pour image

                        export function getImage({ commit }) {
                          // console.log(token())
                          apiGuest.get('/image').then((response) => {
                            commit('GET_ALL_IMAGE', response.data)
                          }).catch(error => console.log(error))
                        
                        }
                    
                        
                        export function ajouterImage({ commit}, formData) {
                          asyncLoading (apiGuest.post('/image', formData)).then(response => {
                            if (response.status == 201) {
                              // console.log("ok ok ok ok ok c'est la vie")
                              commit('AJOUTER_IMAGE', response.data)
                              // dispatch('getPersonnel')
                                Notice.success({
                                  title: 'ajout effectué ',
                                  desc: nodesc ? '' : 'ajout effectué  avec success. '
                              });
                              // this.$app.$notify({
                              //   title: 'success ',
                              //   text: 'Enregistrement effectué !',
                              //   type:"success"
                              // })
                            }
                        
                          }).catch(error => console.log(error))
                        }
                  
                          
                              export function modifierImage({ commit}, element_modifie) {
                                asyncLoading (apiGuest.put('/image/' + element_modifie.id, element_modifie)).then(response => {
                                  commit('MODIFIER_IMAGE', response.data)
                                  Notice.success({
                                    title: 'Modification effectué ',
                                    desc: nodesc ? '' : 'Modification effectué avec success. '
                                });
                                  // this.$app.$notify({
                                  //   title: 'success ',
                                  //   text: 'Modification effectué avec success!',
                                  //   type:"success"
                                  // })
                              
                                }).catch(error => console.log(error))
                              }
                    
                            export function supprimerImage({ commit }, id) {
                              // this.$app.$dialog
                              // .confirm("Voulez vouz vraiment supprimer ?.")
                              // .then(dialog => {
                                commit('SUPPRIMER_IMAGE', id)
                                Notice.success({
                                  title: 'Suppression effectué ',
                                  desc: nodesc ? '' : 'Suppression effectué avec success. '
                              });
                              // // dialog.loading(false) // stops the proceed button's loader
                              apiGuest.delete('/org/' + id)
                              //  .then(() => dialog.close())  }) 
                            }


                            // action pour la video

                            export function getVideo({ commit }) {
                              // console.log(token())
                              apiGuest.get('/video').then((response) => {
                                commit('GET_ALL_VIDEO', response.data)
                              }).catch(error => console.log(error))
                            
                            }
                        
                            
                            export function ajouterVideo({ commit}, formData) {
                              asyncLoading (apiGuest.post('/video', formData)).then(response => {
                                if (response.status == 201) {
                                  // console.log("ok ok ok ok ok c'est la vie")
                                  commit('AJOUTER_VIDEO', response.data)
                                  // dispatch('getPersonnel')
                                    Notice.success({
                                      title: 'ajout effectué ',
                                      desc: nodesc ? '' : 'ajout effectué  avec success. '
                                  });
                                }
                            
                              }).catch(error => console.log(error))
                            }
                      
                              
                                  export function modifierVideo({ commit}, element_modifie) {
                                    asyncLoading (apiGuest.put('/video/' + element_modifie.id, element_modifie)).then(response => {
                                      commit('MODIFIER_VIDEO', response.data)
                                      Notice.success({
                                        title: 'Modification effectué ',
                                        desc: nodesc ? '' : 'Modification effectué avec success. '
                                    });
                                      // this.$app.$notify({
                                      //   title: 'success ',
                                      //   text: 'Modification effectué avec success!',
                                      //   type:"success"
                                      // })
                                  
                                    }).catch(error => console.log(error))
                                  }
                        
                                export function supprimerVideo({ commit }, id) {
                                  this.$app.$dialog
                                  .confirm("Voulez vouz vraiment supprimer ?.")
                                  .then(dialog => {
                                    commit('SUPPRIMER_VIDEO', id)
                                    Notice.success({
                                      title: 'Suppression effectué ',
                                      desc: nodesc ? '' : 'Suppression effectué avec success. '
                                  });
                                    // this.$app.$notify({
                                    //   title: 'success ',
                                    //   text: 'Suppression effectué avec success!',
                                    //   type:"success"
                                    // })
                                  // // dialog.loading(false) // stops the proceed button's loader
                                  apiGuest.delete('/video/' + id).then(() => dialog.close())
                                     }) 
                                }