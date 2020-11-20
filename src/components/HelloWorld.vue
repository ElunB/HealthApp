<template>
  <v-container>
    <v-bottom-navigation :value="value" color="teal" grow>
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <v-row>
      <v-btn @click="FetchRecipe"> Hämta recept </v-btn>
    </v-row>
    <RecipeSummary />
  </v-container>
</template>

<script>
import RecipeSummary from "./RecipeSummary.vue";
export default {
  components: { RecipeSummary },
  name: "HelloWorld",

  data: () => ({}),
  methods: {
    FetchRecipe() {
      console.log("fetches");
      fetch(
        "http://localhost:8081/api",
        {
          method: "GET",
        }
      )
        .then((promise) => {
          console.log("ok");
          return promise.text();
        })
        .then((data) => {
          //Hantera svar
          console.log("andra");
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>