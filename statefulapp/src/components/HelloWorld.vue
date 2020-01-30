<template>
  <div class="hello">
    <ul>
      <li v-for="(link, index) in links" v-bind:key="index">{{ link }}
        <button @click='removeLink(index)'>boom</button>
      </li>
    </ul>
    <form v-on:submit.prevent="addLink">
      <input required type="url" placeholder="add a link" v-model="newLink" />
      <button>ET phone home</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "../../../vuex/types";
export default {
  name: "HelloWorld",
  data() {
    //treat as mutable private
    return { newLink: "" };
  },
  props: {
    //treat as immutable public
    msg: String
  },
  computed: {
    myValue() {
      return true;
    },
    ...mapState(["title", "links"])
  },
  methods: {
    // ... means add these actions to any existing methods
    ...mapActions(["removeLink"]), //this will invoke a mutation

    ...mapMutations(["ADD_LINK"]), // we can call this directly
    addLink() {
      this.ADD_LINK(this.newLink);
      this.newLink = "";
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
