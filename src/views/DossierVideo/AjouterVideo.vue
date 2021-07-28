<template>
    <div>
        <div class="row" style="margin-left:500px;">
          <!-- left column -->
          <div class="col-md-6" >
         <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Ajout de la video</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form role="form">
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Date</label>
                    <input type="date" v-model="formImg.date" class="form-control" id="exampleInputEmail1" placeholder="">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputFile">fichier video</label>
                    <div class="input-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="exampleInputFile"  @change="OnchangeFichier">
                        <label class="custom-file-label" for="exampleInputFile">Choisir la video</label>
                      </div>
                      <div class="input-group-append">
                        <span class="input-group-text" id="">Uploader la video</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="" class="btn btn-primary" @click.prevent="ajouterVideoLocal">Valider</button>

                  <button  style="margin-left:300px;" class="btn btn-danger" @click.prevent="allerPage">Fermer</button>
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
         date:"",
         //heure_rapport:""
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
...mapGetters("Utilisateurs",["gettersListeImage"]),

    },
    methods:{
        ...mapActions("Utilisateurs",["ajouterVideo"]),

         ajouterVideoLocal(){
                const formData = new FormData();
                formData.append('fichier', this.selectedFile, this.selectedFile.name);
                formData.append('date', this.formImg.date);
               
                let config = {
                    header : {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
                this.ajouterVideo(formData,config)
                this.formImg= {
                   date:"",
                  // heure_rapport:""
                }
                this.$router.push({
                name:"liste_video"
                });
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
            allerPage(){
            this.$router.push({
                name:"liste_video"
                });
            },

    }
}
</script>