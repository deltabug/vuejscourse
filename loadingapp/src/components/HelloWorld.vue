<template>
  <div class="hello">
    <pre>&pound;{{ info.data.bpi.GBP.rate }}</pre>
    <pre>&dollar;{{ info.data.bpi.USD.rate }}</pre>
    <pre>&euro;{{ info.data.bpi.EUR.rate }}</pre>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      info: null
    };
  },
  props: {
    msg: String
  },
  // mounted is a lifecycle even when component has finished mounting
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response));
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
