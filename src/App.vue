<template>
  <v-app>
    <v-container fluid>
      <AppNavbar></AppNavbar>
    </v-container>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-container fluid>
      <AppFooter></AppFooter>
    </v-container>
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter'
import AppNavbar from './components/AppNavbar'


export default {
  name: "App",

  components: {
    AppFooter,
    AppNavbar
   
  },

  data: () => ({
    //
  })
};
</script>

