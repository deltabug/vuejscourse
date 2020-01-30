<template>
  <div class="hello">
    <button
      color="blue" dark large @click="loadNextImage" >
      Another &nbsp;
    </button>
    <p>
    <img :src="image.url" contain>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => {
    return {
      image: { url: "" }
    };
  },
  methods: {
    async loadNextImage()
      {
          axios.defaults.headers.common['2a924b65-6487-4475-8789-b051599c5c93']
          let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } )
             
          this.image = response.data[0]

          }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
