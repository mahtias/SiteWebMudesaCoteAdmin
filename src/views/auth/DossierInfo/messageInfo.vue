<template>
    <div>

       <!-- /.modal -->
        <button type="button" style="margin-left:1000px;" class="btn btn-success" data-toggle="modal" data-target="#modal-success">
                  Ajouter nouveau
                </button>

      <div class="modal fade" id="modal-success" >
        <div class="modal-dialog">
          <div class="modal-content bg-success">
            <div class="modal-header">
              <h4 class="modal-title" >Ajouter message</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
              <div class="col-sm-6">
                <div class="form-group">
                        <label>Date</label>
                        <input type="date" v-model="formData.date" class="form-control">
                      </div>
              </div>
               <div class="col-sm-12">
                    
                      <div class="form-group">
                        <label>Textarea</label>
                        <textarea class="form-control" v-model="formData.libelle" rows="3" placeholder="Enter ..."></textarea>
                      </div>
                    </div>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-outline-light" data-dismiss="modal">Fermer</button>
              <button type="button" @click.prevent="ajouterMessgeLocal" class="btn btn-outline-light">Valider</button>
            </div>
          </div>
         
        </div>
       
      </div>




        <div class="modal fade" id="modification" >
        <div class="modal-dialog">
          <div class="modal-content bg-success">
            <div class="modal-header">
              <h4 class="modal-title" >Modification message</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
              <div class="col-sm-6">
                <div class="form-group">
                        <label>Date</label>
                        <input type="date" v-model="editMessage.date" class="form-control">
                      </div>
              </div>
               <div class="col-sm-12">
                    
                      <div class="form-group">
                        <label>Textarea</label>
                        <textarea class="form-control" v-model="editMessage.libelle" rows="3" placeholder="Enter ..."></textarea>
                      </div>
                    </div>
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-outline-light" data-dismiss="modal">Fermer</button>
              <button type="button" @click.prevent="ajouterMessgeLocal" class="btn btn-outline-light">Valider</button>
            </div>
          </div>
         
        </div>
       
      </div>
     
    <br>

                   <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      <th>Date</th>
                      <th>Libelle</th>
                      
                      <th >Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in gettersMessages" :key="item.id">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     <td >{{item.date || 'Non renseigné'}}</td>
                     <td>{{item.libelle || 'Non renseigné'}}</td>
                    
                     <td class="text-right py-0 align-middle">
                      <div class="btn-group btn-group-sm" style="margin-left:-30px;">

                      <!-- <button @click.prevent="modificationModal(index)" type="button" data-toggle="modification"  title="modifier" class="btn btn-link btn-primary btn-lg" >
																<i class="btn btn-outline-info fa fa-edit"></i>
															</button> -->

            
                        <button href="#" class="btn btn-info"><i class="fas fa-eye" @click.prevent="modificationModal(index)"></i></button>
                        
                        <button href="#" class="btn btn-outline-danger" @click.prevent="supprimerMessage(item.id)"><i class="fas fa-trash-alt"></i></button>
                      </div>
                    </td>
                    </tr>
                  </tbody>
                </table>
              </div>
          <notifications/>          
    </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex"
export default {
    data() {
      return{
        formData:{
          libelle:"",
          date:""
        },
        editMessage:{}
      }
        
    },
    created(){

    },
    computed:{
...mapGetters("Utilisateurs",["gettersMessages"]),
    },
    methods:{
...mapActions("Utilisateurs",["ajouterMessage","supprimerMessage"]),


modificationModal(index){
       this.editMessage = this.gettersMessages[index]
     },

ajouterMessgeLocal(){
  this.ajouterMessage(this.formData)
  this.formData={
    libelle:"",
    date:""
  }
}
    }
}
</script>