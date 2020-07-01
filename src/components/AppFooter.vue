<template>
<v-container fluid>
    <v-card height="100px">
    <v-footer
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="blue-grey darken-2 text-center"
      >
        <v-card-text>
          <v-btn
            href="/"
            class="mx-4"
            icon
          >
            <v-icon size="24px">mdi-home</v-icon>
          </v-btn>

          <v-btn
            href="https://www.instagram.com/casa.pitagoras/?hl=es-la"
            target="_blank"
            class="mx-4"
            icon
          >
            <v-icon size="24px">mdi-instagram</v-icon>
          </v-btn>

          <v-btn
          href="/contacto"
            class="mx-4"
            icon
          >
            <v-icon size="24px">mdi-email</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>German De Luca</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  
  </v-card>
</v-container>
  
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-instagram',
        'mdi-email',
        
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: false,
      variant: 'default',
    }),
    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },
  }
</script>