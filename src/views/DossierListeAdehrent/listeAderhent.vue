<template>
    <div>

      <div class="card card-green">
              <div class="card-header">
                <h3 class="card-title" style="margin-left:500px;">Ajouter Adhérant</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form class="form-horizontal">
                <div class="card-body">
                  <div class="form-group row" >
                    <label for="" class="col-sm-2 col-form-label" style=""></label>
                    <div class="col-sm-4">
                      <input type="text" v-model="formAdhe.nom_adherant" class="form-control" id="" placeholder="Saisir le Nom">
                    </div>
                     <label for="" class=" col-form-label" ></label>
                    <div class="col-sm-4">
                      <input type="text" v-model="formAdhe.prenom_adherant" class="form-control" id="" placeholder=" Saisir le Prenom">
                    </div>
                  </div>

                   <div class="form-group row">
                    <label for="" class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-4">
                      <input type="text" v-model="formAdhe.montant_adherant" class="form-control" id="" placeholder="Saisir le montant">
                    </div>
                     <label for="" class=" col-form-label"></label>
                    <div class="col-sm-4">
                      <input type="text" v-model="formAdhe.numero_telephone" class="form-control" id="" placeholder="Saisir le contact">
                    </div>
                  </div>
                  

                 
                    <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-3">
                      <input type="text"  v-model="formAdhe.profession" class="form-control" id="inputPassword3" placeholder="Saisir la profession">
                    </div>
                     <label for="" class="col-sm- col-form-label">DAte Naissance</label>
                    <div class="col-sm-2">
                      <input type="date" v-model="formAdhe.date_naissance" class="form-control" id="" placeholder="">
                    </div>
                     <label for="" class=" col-form-label">Date d'adhésion</label>
                    <div class="col-sm-">
                      <input type="date" v-model="formAdhe.date_creation" class="form-control" id="" placeholder="">
                    </div>
                  </div>
                   <div class="form-group row" style="margin-left:300px;">
                   <div class="col-sm-10">
                        <label></label>
                        <textarea v-model="formAdhe.message" class="form-control" rows="3" placeholder="Entrer message"></textarea>
                      </div>
                  </div>
                 
                </div>
                <!-- /.card-body        -->
                <div class="card-footer">
                  <button type="" @click.prevent="ajouterLocal" class="btn btn-info" style="margin-left:300px;">Valider</button>
                  <!-- <button type=""  class="btn btn-danger" style="margin-left:60px;">Fermer</button> -->
                </div>
                <!-- /.card-footer -->
              </form>
            </div>

        <div class="row">
          <div class="col-12">
           <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title" style="margin-left:600px;">Liste des adhérants </h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
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
                      <th>Nom Adhérant</th>
                      <th>Prenom Adhérant</th>
                      <th>Date Naissance</th>
                      <th>Montant Adhérant</th>
                      <th>Profession </th>
                      <th>Contact</th>
                      <th >Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in gettersListeAderhent" :key="item.id">
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                     <td >{{item.nom_adherant || 'Non renseigné'}}</td>
                     <td>{{item.prenom_adherant || 'Non renseigné'}}</td>
                     <td>{{item.date_naissance || 'Non renseigné'}}</td>
                     <td>{{item.montant_adherant || 'Non renseigné'}}</td>
                     <td>{{item.profession ||   'Non renseigné'}}</td>
                     <td>{{item.numero_telephone || 'Non renseigné'}}</td>
                     <td class="text-right py-0 align-middle">
                      <div class="btn-group btn-group-sm" style="margin-left:-30px;">

                      <!-- <button @click.prevent="modificationModal(item.id)" type="button" data-toggle="modal"  title="modifier" class="btn btn-link btn-primary btn-lg"  @click="afficherModalmodifierTypeRessource(index)">
																<i class="btn btn-outline-info fa fa-edit"></i>
															</button> -->

            
                        <button  @click.prevent="modificationModal(item.id)" class="btn btn-info" @click="afficherModalmodifierTypeRessource(index)" ><i class="fas fa-eye"></i></button>
                        
                        <button href="#" class="btn btn-outline-danger" @click.prevent="supprimerAdherant(item.id)"><i class="fas fa-trash-alt"></i></button>
                      </div>
                    </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
        <notifications/>
    </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex"
export default {
    data() {
        return{

          formAdhe:{
            message:"",
            nom_adherant:"",
            prenom_adherant:"",
            date_naissance:"",
            date_creation:"",
            montant_adherant:"",
            numero_telephone:"",
            profession:"",
          
            
          },
          editAdherant:{}

      }
        
    },
    created(){

    },
    computed:{
    ...mapGetters("Utilisateurs",[ "gettersListeAderhent"]),
    },
    methods:{
     ...mapActions("Utilisateurs",["supprimerAdherant","ajouterAdherant"]) ,

     modificationModal(id){
		this.$router.push({
			path:"/modif-adherant/" + id
		});
	},

     afficherModalmodifierTypeRessource(index){
       this.editAdherant = this.gettersListeAderhent[index]
     },

ajouterLocal(){
  this.ajouterAdherant(this.formAdhe)
  this.formAdhe={
     message:"",
            nom_adherant:"",
            prenom_adherant:"",
            date_naissance:"",
            date_creation:"",
            montant_adherant:"",
            numero_telephone:"",
            profession:"",
  }
}
    }
}
</script>