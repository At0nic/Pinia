<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
// nic nepotřebuješ importovat, `router-view` se postará o vykreslení aktuální stránky
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  color: #333;
}

#app {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}

h1, h2 {
  text-align: center;
  color: #2c3e50;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
  text-align: center;
}

button, a {
  background-color: #3498db;
  color: white;
  padding: 0.8rem 1.2rem;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover, a:hover {
  background-color: #2980b9;
}

.router-link-active {
  font-weight: bold;
}

@media (max-width: 600px) {
  #app {
    padding: 1rem;
  }

  button, a {
    width: 100%;
    display: block;
  }
}
</style>

