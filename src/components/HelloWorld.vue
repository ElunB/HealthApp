<template>
  <v-container>
    <v-bottom-navigation
    :value ="value"
    color="teal"
    grow
    >
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
    <v-btn @click="FetchRecipe">
      Hämta recept
    </v-btn>
    </v-row>
    <RecipeSummary/>
  </v-container>
</template>

<script>
import RecipeSummary from './RecipeSummary.vue'
  export default {
  components: { RecipeSummary },
    name: 'HelloWorld',

    data: () => ({
      
    }),
    methods: {
      FetchRecipe(){
        console.log("fetches");
   fetch("https://asos2.p.rapidapi.com/products/list?store=2&categoryId=27871&limit=48&offset=0&currency=USD&sizeSchema=US&sort=freshness&lang=en-US&country=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b185780084msh992016afbdb58b2p1bbd2bjsnda73a1ef68f8",
		"x-rapidapi-host": "asos2.p.rapidapi.com"
	}
})
.then(response => {
  console.log(response);

})
.catch(err => {
	console.error(err);
});
      }
    }
  }
</script>
