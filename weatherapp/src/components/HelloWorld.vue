<template>
  <div class="hello">
    <input v-model="loc.city" placeholder="Berlin" />
    <br />
    <select v-model="loc.country">
      <option enabled value>Country</option>
      <option
        v-for="option in countries"
        v-bind:value="option.value"
        v-bind:key="option.key"
        >{{ option.text }}</option
      >
    </select>
    <br />
    <button
      v-bind:enabled="loc.city === '' || loc.country === ''"
      v-on:click="onClick"
    >
      Show me weather
    </button>
    <p>{{ description }}</p>
    <p>{{ weather }}</p>
    <p>{{ temperature }}</p>
    <p>{{ feelslike }}</p>
    <p>{{ pressure }}</p>
    <p>{{ humidity }}</p>
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
      loc: { id: 2, city: "Berlin", country: "Germany" },
      arrLoc: [],
      countries: [
        { id: 0, text: "United Kingdom", value: "uk" },
        { id: 1, text: "France", value: "fr" },
        { id: 2, text: "Germany", value: "de" },
        { id: 3, text: "Ireland", value: "ie" },
        { id: 4, text: "Italy", value: "it" },
        { id: 5, text: "Australia", value: "aus" },
        { id: 9, text: "Nigeria", value: "ng" }
      ],
      weather: "",
      description: "",
      temperature: "",
      feelslike: "",
      pressure: "",
      humidity: ""
    };
  },
  methods: {
    onClick() {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${this.loc.city},${this.loc.country}&APPID=48f2d5e18b0d2bc50519b58cce6409f1`
        )
        .then(
          response => (
          (this.description = response.data.weather[0].description, this.weather = response.data.weather[0].main, 
          this.temperature = response.data.main.temp, this.feelslike = response.data.main.feels_like,
            (this.pressure = response.data.main.pressue),
            (this.humidity = response.data.main.humidity)
          )
        ));
    }
  }
};
</script>