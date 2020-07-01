<template>
  <v-container fluid class="home grey lighten-5">
    <v-row class=" mx-3">
      <v-col class="principal" cols="12" md="8">
        <h1 class="text-sm-center">PRINCIPAL</h1>
      </v-col>
      <v-col class=" cafe grey lighten-1" cols="12" md="4" justify-center>
        <h1 class="text-sm-center">Cafe de especialidad</h1>
        <p>
          La definición más extendida y básica, y también la avalada por la Specialty Coffee Association (SCA), es que el café de especialidad es aquel café de tipo Arábica con una puntuación en taza superior a 85 puntos, en una escala sobre 100, otorgada por un catador autorizado. Por lo que hay un proceso de certificación “oficial” que dice qué café es de especialidad y qué café no lo es.
          Pero si queremos ir un poco más allá y entender cómo se consigue que un café obtenga más de 85 puntos, debemos repasar todo su proceso:
          <br>
          1. La plantación: Como ya hemos comentado más arriba sólo las semillas de tipo arábica pueden dar café de especialidad, y este tipo de semilla requiere un clima especial que a menudo sólo pueden darse en alturas elevadas.
          <br>
          2. La recolección: Los caficultores de las fincas de café de especialidad tienen el ardúo trabajo de seleccionar sólo las cerezas de café que están en su punto óptimo de maduración, es decir, las que son de un color rojo vivo.
          <br>
          3. La selección: Una vez descascaradas las cerezas se selecciona el grano, excluyendo aquellos con defectos visibles en su forma. Esto es un proceso de nuevo manual y delicado.
          <br>
          4. El control de calidad: La SCA dicta que el café de especialidad debe tener un máximo de 5 defectos por cada 350 gramos, por eso los granos de café verde se someten a un segundo control manual para descartar cualquier grano defectuoso que pudiese haberse colado en la primera selección.
          <br>
          5. El tueste: La mano, ojo y olfato del tostador es clave para saber sacar todos los aromas y matices de un café de especialidad, por eso su labor es muy importante.
          <br>
          6. El barista: Como bien indica nuestro compañero Nito en una entrevista en CoffeeandBrunchBCN.es “el barista tiene la responsabilidad de desarrollar todo el potencial del café y saberlo presentar al cliente”, ¡casi nada!
         
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Contacto from "./Contacto";
export default {
  name: "Home",
  components: {
    // HelloWorld
    Contacto
  }
};
</script>

<style>
p {
  font-size: 13px;
}
.principal {
  background-image: url('../assets/fondo3.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
}

</style>
