<template>
    <div>
        <div class="row" style="margin-left:500px;">
          <!-- left column -->
          <div class="col-md-6" >
         <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Ajouter le rapport de la reunion</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Date du rapport</label>
                    <input type="date" v-model="formImg.date_rapport" class="form-control" id="exampleInputEmail1" placeholder="">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Heure du rapport</label>
                    <input type="time" v-model="formImg.heure_rapport" class="form-control" id="exampleInputPassword1" placeholder="">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputFile">fichier joind</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="exampleInputFile"  @change="OnchangeFichier">
                        <label class="custom-file-label" for="exampleInputFile">Choisir le fichier</label>
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text" id="">Uploader le fichier</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="" class="btn btn-primary" @click.prevent="ajouterFichierJoinLocal">Valider</button>
                </div>
              </form>
            </div>
          </div>
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
...mapGetters("Utilisateurs",["gettersFichierJoints"," getFichier"]),

    },
    methods:{
        ...mapActions("Utilisateurs",["ajouterFichier","modifierFichier","supprimerFichier"]),

         ajouterFichierJoinLocal(){
                const formData = new FormData();
                formData.append('fichier_join', this.selectedFile, this.selectedFile.name);
                formData.append('date_rapport', this.formImg.date_rapport);
                formData.append('heure_rapport', this.formImg.heure_rapport);
               
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterFichier(formData,config)
                this.formImg= {
                   date_rapport:"",
                   heure_rapport:""
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