<template>
    <div>
         <div class="card card-green">
              <div class="card-header">
                <h3 class="card-title" style="margin-left:500px;">modification Adhérant</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form class="form-horizontal">
                <div class="card-body">
                  <div class="form-group row" >
                    <label for="" class="col-sm-2 col-form-label" style=""></label>
                    <div class="col-sm-4">
                      <input type="text" v-model="editAdherant.nom_adherant" class="form-control" id="" placeholder="Saisir le Nom">
                    </div>
                     <label for="" class=" col-form-label" ></label>
                    <div class="col-sm-4">
                      <input type="text" v-model="editAdherant.prenom_adherant" class="form-control" id="" placeholder=" Saisir le Prenom">
                    </div>
                  </div>

                   <div class="form-group row">
                    <label for="" class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-4">
                      <input type="text" v-model="editAdherant.montant_adherant" class="form-control" id="" placeholder="Saisir le montant">
                    </div>
                     <label for="" class=" col-form-label"></label>
                    <div class="col-sm-4">
                      <input type="text" v-model="editAdherant.numero_telephone" class="form-control" id="" placeholder="Saisir le contact">
                    </div>
                  </div>
                  

                 
                    <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-3">
                      <input type="text"  v-model="editAdherant.profession" class="form-control" id="inputPassword3" placeholder="Saisir la profession">
                    </div>
                     <label for="" class="col-sm- col-form-label">DAte Naissance</label>
                    <div class="col-sm-2">
                      <input type="date" v-model="editAdherant.date_naissance" class="form-control" id="" placeholder="">
                    </div>
                     <label for="" class=" col-form-label">Date d'adhésion</label>
                    <div class="col-sm-">
                      <input type="date" v-model="editAdherant.date_creation" class="form-control" id="" placeholder="">
                    </div>
                  </div>
                   <div class="form-group row" style="margin-left:300px;">
                   <div class="col-sm-10">
                        <label></label>
                        <textarea v-model="editAdherant.message" class="form-control" rows="3" placeholder="Entrer message"></textarea>
                      </div>
                  </div>
                 
                </div>
                <!-- /.card-body        -->
                <div class="card-footer">
                  <button type="" @click.prevent="modifierAdhesionLocal" class="btn btn-info" style="margin-left:300px;">Modifier</button>
                  <button type=""  class="btn btn-danger" style="margin-left:50px;" @click.prevent="allerPage">Fermer</button>
                </div>
                <!-- /.card-footer -->
              </form>
            </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex"
export default {
    data() {
        return{

            editAdherant:{
              nom_adherant:"",
              prenom_adherant:"",
              montant_adherant:"",
              numero_telephone:"",
              profession:"",
              date_naissance:"",
              date_creation:"",
              message:""
            },
            detailEdit:""
       
        }
        
    },
      created(){
        //this.getDetail()
      this.editAdherant = this.gettersListeAderhent.find(
   item => item.id == this.$route.params.id
 )
},
computed:{
   ...mapGetters("Utilisateurs",[ "gettersListeAderhent"]),
},
methods:{
  ...mapActions("Utilisateurs",["modifierAdherant"]),

  modifierAdhesionLocal(){
  this.modifierAdherant(this.editAdherant)
  this.editAdherant={
               nom_adherant:"",
              prenom_adherant:"",
              montant_adherant:"",
              numero_telephone:"",
              profession:"",
              date_naissance:"",
              date_creation:"",
              message:""
  }
  this.$router.push({
      name:'liste_aderhent'
    });
  },

  allerPage(){
    this.$router.push({
      name:'liste_aderhent'
    });
  }
}

}
</script>