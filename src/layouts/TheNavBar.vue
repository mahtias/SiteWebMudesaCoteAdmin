<template>
    <div>
        <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <!-- <a href="index3.html" class="brand-link">
      <img src="../../public/lien/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a> -->

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="../../public/lien/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">{{afficherNameuser}}</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item has-treeview menu-open">
            <router-link :to="{name:'TableauBordGenerale'}" tag="a" href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Tableau de bord
                <i class="right fas fa-angle-left"></i>
              </p>
            </router-link>
            <!-- <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="./index.html" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./index2.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./index3.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul> -->
          </li>
     
          <li class="nav-item has-treeview">
            <router-link :to="{name:'liste_aderhent'}" tag="a" href="#" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Liste des adhérants
              </p>
            </router-link>
            <!-- <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/layout/top-nav.html" class="nav-link">
               
                  <p></p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/boxed.html" class="nav-link">
                 
                  <p></p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/fixed-sidebar.html" class="nav-link">
                 
                  <p></p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/fixed-topnav.html" class="nav-link">
                 
                  <p></p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/fixed-footer.html" class="nav-link">
                 

                  <p></p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/layout/collapsed-sidebar.html" class="nav-link">
                 
                  <p></p>
                </a>
              </li>
            </ul> -->
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-chart-pie"></i>
              <p>
                Liste de tous les projets
               
              </p>
            </a>
           
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tree"></i>
              <p>
                Autres
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{name:'message'}" tag="a" href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Message defilant</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'liste_fichier'}" tag="a" href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Ajoute fichier joint</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'ceremonie'}" tag="a" href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p> Liste des activités / cérémonies </p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'liste_socio'}" tag="a" href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p> Liste des activités / Socio</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'image'}" tag="a" href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p> Liste d'évenement/ des images </p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name:'liste_video'}" tag="a" href="#" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p> Liste d'évenement/ des vidéo</p>
                </router-link>
              </li>
              
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-edit"></i>
              <p>
                Forms
               
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/forms/general.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>General Elements</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/forms/advanced.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Advanced Elements</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/forms/editors.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Editors</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
                INFORMATION
                
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/tables/simple.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Simple Tables</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/data.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>DataTables</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/tables/jsgrid.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>jsGrid</p>
                </a>
              </li>
            </ul>
          </li>

        
          <li class="nav-header"></li>
          <li class="nav-item">
            <a href="pages/calendar.html" class="nav-link">
              <i class="nav-icon far fa-calendar-alt"></i>
              <p>
                Calendar
                
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="pages/gallery.html" class="nav-link">
              <i class="nav-icon far fa-image"></i>
              <p>
                Gallery
              </p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-envelope"></i>
              <p>
                Mailbox
               
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="pages/mailbox/mailbox.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inbox</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/mailbox/compose.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Compose</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="pages/mailbox/read-mail.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Read</p>
                </a>
              </li>
            </ul>
          </li>
         
             
          <li class="nav-header">  
             <a href="#edit" @click.prevent="logoutUser()">
                       <i class="flaticon-power" style=""></i>
                      <span>Se deconnecter</span>
                         </a>
            </li>
          <li class="nav-item">
            <a href="https://adminlte.io/docs/3.0" class="nav-link">
              <i class="nav-icon fas fa-file"></i>
              <p></p>
            </a>
          </li>
          <li class="nav-header"></li>
          <li class="nav-item">
            <a href="#" class="nav-link">
             
              <p></p>
            </a>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
            
              <p>
                
                
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" class="nav-link">
                 
                  <p></p>
                </a>
              </li>
              <li class="nav-item has-treeview">
                <a href="#" class="nav-link">
                 
                  <p>
                    
                   
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                   
                      <p></p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                   
                      <p></p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                   
                      <p></p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                 
                  <p></p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
             
              <p></p>
            </a>
          </li>
          <li class="nav-header"></li>
          <li class="nav-item">
            <a href="#" class="nav-link">
           
              <p class="text"></p>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
           
              <p></p>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              
              <p></p>
            </a>
          </li>
        </ul>
      </nav>
     
    </div>
 
  </aside>
    </div>
</template>

<script>
import { mapActions} from "vuex"
import {admin, user} from "../../src/repositories/Auth"
    export default {
        name: "TheNavBar",

        created(){
          this.getListeAderhent()
          this.getMessage()
          this.getCeremonie()
          this.getOrgsocio()
          this.getImage()
          this.getVideo()
          this.getFichier()
        },
         computed:{
            
 
afficherNameuser(){
  let objetName = localStorage.getItem('Users');
  let objetJson = JSON.parse(objetName);
  return objetJson.name
},
afficherRoleUser(){
  let objet = localStorage.getItem('Users');
  let objetJson = JSON.parse(objet);
  return objetJson.user_role.role.libelle
}, 
        },
        methods:{
           // ...mapMutations('MenuPara', ['activate']),
            ...mapActions('Utilisateurs', ['logoutUser','getListeAderhent','getMessage','getCeremonie',
            'getOrgsocio','getImage','getVideo','getFichier']),
            admin:admin,
            user:user,


        }

    }
</script>

<style scoped>

</style>