<template>
    <div>
        <h2>Why hello there</h2>
        <button v-on:click='clickHome'>GET ME OUT OF HERE</button>
        <aside>User {{ $route.params.who }}</aside>
        <br>
        <section>
            <img src="../assets/plane.gif"/>
        </section>
    </div>
</template>

<script>
export default {
    methods: {
        clickHome(){
            this.$router.push('home')
        }
    }
}
</script>