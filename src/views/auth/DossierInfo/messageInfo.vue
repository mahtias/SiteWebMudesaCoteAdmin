<template>
    <div>
         <div class="row" style="margin-left:400px;">
                    <div class="col-sm-6">
                      <!-- textarea -->
                      <div class="form-group">
                        <label>Textarea</label>
                        <textarea class="form-control" v-model="formData.libelle" rows="3" placeholder="Enter ..."></textarea>
                      </div>
                    </div>
                    <!-- <div class="col-sm-6">
                      <div class="form-group">
                        <label>Textarea Disabled</label>
                        <textarea class="form-control" rows="3" placeholder="Enter ..." disabled></textarea>
                      </div>
                    </div> -->

                    <div style="margin-top:90px;">
                  <button type="submit" class="btn btn-primary" @click.prevent="ajouterMessgeLocal">Valider</button>
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
        formData:{
          libelle:""
        }
      }
        
    },
    created(){

    },
    computed:{
...mapGetters("Utilisateurs",["gettersMessages","getMessage"]),
    },
    methods:{
...mapActions("Utilisateurs",["ajouterMessage"]),

ajouterMessgeLocal(){
  this.ajouterMessage(this.formData)
  this.formData={
    libelle:""
  }
}
    }
}
</script>