<template>
    <div>
        <router-link :to="{name:'ajouter_ceremonie'}" tag="a" type="button" style="margin-left:1000px;" class="btn btn-success" data-toggle="modal" data-target="#modal-success">
                  Ajouter nouveau
        </router-link>
        <div class="card-body table-responsive p-0">
                <table class="table table-hover" >
                  <thead >
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      <th>Date début</th>
                      <th>Heure début</th>
                      <th>Date fin</th>
                      <th>Heure fin</th>
                      <th>Objet</th>
                       <th>fichier</th>
                      <th >Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in gettersListeCeremonie" :key="item.id">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     <td >{{item.date_debut || 'Non renseigné'}}</td>
                     <td>{{item.heure_debut || 'Non renseigné'}}</td>
                      <td >{{item.date_fin || 'Non renseigné'}}</td>
                     <td>{{item.heure_fin || 'Non renseigné'}}</td>
                     <td>{{item.objet_ceremonie || 'Non renseigné'}}</td>
                       <td >
        <!-- {{rapport.fichier_join}} -->
                           <a v-if="item.fichier" :href="item.fichier" class="btn btn-default" target="__bank">
                            <span class=""> <i class="far fa-folder-open"></i> </span>
                             </a>
                      </td>
                    
                     <td class="text-right py-0 align-middle">
                      <div class="btn-group btn-group-sm" style="margin-left:-30px;">

                            <!-- <button @click.prevent="modificationModal(index)" type="button" data-toggle="modification"  title="modifier" class="btn btn-link btn-primary btn-lg" >
                                <i class="fas fa-eye" ></i>
                            </button> -->

            
                        <button @click.prevent="modificationModal(item.id)" class="btn btn-info" type="button"  title="modifier"  @click="modificationModal(index)">
                            <i class="fas fa-eye" ></i>
                        </button>
                        
                        <button href="#" class="btn btn-outline-danger" @click.prevent="supprimerCeremonie(item.id)"><i class="fas fa-trash-alt"></i></button>
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
     imagePDF:"",
      namePDF:"",
      fichierPDF:"",
      selectedFile:"",

        }
        
    },
    created(){

    },
    computed:{
...mapGetters("Utilisateurs",["gettersListeCeremonie"]),

    },
    methods:{
        ...mapActions("Utilisateurs",["supprimerCeremonie"]),

    }
}
</script>