<template>
    <div class="wrapper">
        <div class="">
        <the-logo-header></the-logo-header>
        <the-header></the-header>
        </div>
        <the-nav-bar></the-nav-bar>

        <div class="main-panel">
            <div class="content">
                <slot />
            </div>

           <footer class="main-footer">
    <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.0.1
    </div>
  </footer>
        </div>

     
    </div>
</template>

<script>
    import TheHeader from "./TheHeader";
    import TheNavBar from "./TheNavBar";
    import TheLogoHeader from "./TheLogoHeader";

    export default {
        name: "TheDefault",
        components: {
            TheHeader,
            TheNavBar,
            TheLogoHeader
        },
    }
</script>

<style scoped>

</style>