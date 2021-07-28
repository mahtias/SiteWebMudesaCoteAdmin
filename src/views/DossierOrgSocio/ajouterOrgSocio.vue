<template>
    <div>
          <div class="row-grd" style="margin-left:500px;">
          <!-- left column -->
          <div class="col-md-6" >
         <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">info sur les organisations socio-culturel</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start --> 
              <form role="form">
                <div class="card-body">
                   <div class="row">
                  
                      <div class="col-sm-6">
                    <label for="">Date début</label>
                    <input type="date" v-model="formImg.date_debut" class="form-control" id="" placeholder="">
                     </div>
                     <div class="col-sm-6">
                    <label for="">Heure début</label>
                     <input type="time" v-model="formImg.heure_debut" class="form-control" id="" placeholder="">
                  </div>

                   <div class="col-sm-6">
                    <label for="">Date fin</label>
                    <input type="date" v-model="formImg.date_fin" class="form-control" id="" placeholder="">
                     </div>
                     <div class="col-sm-6">
                    <label for="">Heure fin</label>
                     <input type="time" v-model="formImg.heure_fin" class="form-control" id="" placeholder="">
                  </div>
                 
                  </div>
                  
                  <div class="form-group">
                      <div class="col-sm-12">
                    <label for="">Description</label>
                    <textarea type="time" v-model="formImg.objet" class="form-control" rows="2" placeholder=""></textarea>
                   </div>
                  </div>
                  <div class="form-group">
                    <label for="">fichier de l'image</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id=""  @change="OnchangeFichier">
                        <label class="custom-file-label" for="">Choisir le fichier</label>
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text" id="">Uploader le fichier</span>
                      </div>
                    </div>
                  </div>

                   <div class="form-group">
                    <label for="">fichier de la vidéo</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id=""  >
                        <label class="custom-file-label" for="">Choisir la vidéo</label>
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text" id="">Uploader la vidéo</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="" class="btn btn-primary" @click.prevent="ajouterOrgLocal">Valider</button>
                   <button style="margin-left:350px;" class="btn btn-danger" @click.prevent="allerPage">Fermer</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <notifications />
    </div>
</template>
<script>
import {mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return{
           formImg:{
             date_debut:"",
             heure_debut:"",
             date_fin:"",
             heure_fin:"",
             objet:"",

           } ,
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
   ...mapActions("Utilisateurs",["ajouterOrgaSocio"]),

   allerPage(){
      this.$router.push({
      name:"liste_socio"
      });
   },

      ajouterOrgLocal(){
                const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                formData.append('date_debut', this.formImg.date_debut);
                formData.append('heure_debut', this.formImg.heure_debut);
                 formData.append('date_fin', this.formImg.date_fin);
                formData.append('heure_fin', this.formImg.heure_fin);
                formData.append('objet', this.formImg.objet);
               
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterOrgaSocio(formData,config)
                  this.$router.push({
                name:"liste_socio"
                  });
                this.formImg= {
                    date_debut:"",
             heure_debut:"",
             date_fin:"",
             heure_fin:"",
             objet:"",
                }
            },
   
    OnchangeFichier(e) {
                const files = e.target.files;
                this.selectedFile = event.target.files[0];
                console.log(this.selectedFile)
                Array.from(files).forEach(file => this.addFichierPDF(file));
            },
            addFichierPDF(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = e => {
                    vm.imagePDF = "pdf.png";
                    vm.namePDF = file.name;
                    vm.fichierPDF = e.target.result;
                };
                reader.readAsDataURL(file);
            },
    }
}
</script>

<style scoped>
.row-grd{
    width:1200px;
}
</style>