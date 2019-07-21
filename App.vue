<template>
  <div id="app">
    <transition
			mode="out-in"
			name="slide-right">
			<router-view/>
		</transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.title {
		text-align: center;
	}

	.highlight {
		font-weight: 700;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
