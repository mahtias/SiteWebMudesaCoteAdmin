<template>
    <div>
        <router-link :to="{name:'video'}" tag="a" type="button" style="margin-left:1200px;" class="btn btn-success" data-toggle="modal" data-target="#modal-success">
                  Ajouter video
        </router-link>
        <div class="card-body table-responsive p-0">
          <h3 style="margin-left:800px;">Liste des vidéos</h3>
          <br><br>
                <table class="table table-hover" >
                  <thead >
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      <th>Date</th>
                     <th>Video</th>
                      <th >Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in gettersListeVideo" :key="item.id">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     <td >{{item.date || 'Non renseigné'}}</td>
                       <td >
        <!-- {{rapport.fichier_join}} -->
        <div class="widget-content"> <video v-bind:src="item.fichier" name="aboutme" class="avatar1"></video>

        </div>
                           <!-- <a v-if="item.fichier" :href="item.fichier" class="btn btn-default" target="__bank">
                            <span class=""> <i class="far fa-folder-open"></i> </span>
                             </a> -->
                      </td>
                    
                     <td class="text-right py-0 align-middle" >
                      <div class="btn-group btn-group-sm" >

                            <!-- <button @click.prevent="modificationModal(index)" type="button" data-toggle="modification"  title="modifier" class="btn btn-link btn-primary btn-lg" >
                                <i class="fas fa-eye" ></i>
                            </button> -->

            
                        <button @click.prevent="modificationModal(item.id)" style="margin-left:-100px;"  class="btn btn-info" type="button"  title="modifier"  @click="modificationModal(index)">
                            <i class="fas fa-eye" ></i>
                        </button>
                        
                        <button href="#" class="btn btn-outline-danger" @click.prevent="supprimerVideo(item.id)"><i class="fas fa-trash-alt"></i></button>
                      </div>
                    </td>
                    </tr>
                  </tbody>
                </table>
              </div>
        <notifications />
    </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex"
export default {
    data() {
        return{
     formImg:{
         date_rapport:"",
         heure_rapport:""
     },
    //  imagePDF:"",
    //   namePDF:"",
    //   fichierPDF:"",
    //   selectedFile:"",

        }
        
    },
    created(){

    },
    computed:{
...mapGetters("Utilisateurs",["gettersListeVideo"]),

// AffichePhoto() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.gettersListeImage.find(qtreel => qtreel.id == id);

//       if (qtereel) {
        
//    //let url=process.env.VUE_APP_BIEN_SERVICE_URL
//         return url+'/imagemarches/'+qtereel.fichier;
//       }
//       return "Pas d'image "
//         }
//       };
//     },

    },
    methods:{
        ...mapActions("Utilisateurs",["supprimerVideo"]),

        

    }
}
</script>
<style scoped>
video{
    width:150px;
    height:150px;
}
</style>