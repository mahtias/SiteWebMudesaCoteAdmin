<template>
    <div>
        <div class="row" style="margin-left:500px;">
          <!-- left column -->
          <div class="col-md-6" >
         <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Modification de rapport de la reunion</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Date du rapport</label>
                    <input type="date" v-model="editFichier.date_rapport" class="form-control" id="exampleInputEmail1" placeholder="">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Heure du rapport</label>
                    <input type="time" v-model="editFichier.heure_rapport" class="form-control" id="exampleInputPassword1" placeholder="">
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
                  <button type="" class="btn btn-primary" @click.prevent="modificationLocal">Modifier</button>

                  <button style="margin-left:250px;" class="btn btn-danger" @click.prevent="allerPage">Fermer</button>
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
     editFichier:{
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
     this.editFichier=this.gettersFichierJoints.find(item => item.id== this.$route.params.id)
    },
    computed:{
...mapGetters("Utilisateurs",["gettersFichierJoints"]),

    },
    methods:{
        ...mapActions("Utilisateurs",["modifierFichier"]),

        allerPage(){
          this.$router.push({
            name:'liste_fichier'
          })
        },

         modificationLocal(){
                const formData = new FormData();
                formData.append('fichier_join', this.selectedFile, this.selectedFile.name);
                formData.append('date_rapport', this.editFichier.date_rapport);
                formData.append('heure_rapport', this.editFichier.heure_rapport);
               
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.modifierFichier(formData,config)
                this.editFichier= {
                   date_rapport:"",
                   heure_rapport:""
                }
                this.$router.push({
                  name:'liste_fichier'
                })
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