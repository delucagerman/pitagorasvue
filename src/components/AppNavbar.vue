<template>
  <v-app-bar app color="blue-grey darken-2" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
      <div>
        <h1>LA COCINA DE ROMI</h1>
        <h3>Viandas</h3>
      </div>
    </div>

    <v-spacer></v-spacer>

    <router-link to="/">
      <v-btn target="_blank" text>
        <span class="mr-2">Principal</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </router-link>

    <router-link to="/platos">
      <v-btn text>
        <span class="mr-2">Platos</span>
        <v-icon>mdi-food</v-icon>
      </v-btn>
    </router-link>

    <router-link to="/viandas">
      <v-btn text>
        <span class="mr-2">Viandas</span>
        <v-icon>mdi-food</v-icon>
      </v-btn>
    </router-link>

    <router-link to="/contacto">
      <v-btn text>
        <span class="mr-2">Contacto</span>
        <v-icon>mdi-contacts</v-icon>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>