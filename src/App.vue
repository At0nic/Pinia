<template>
  <v-app>
    <v-app-bar app color="indigo darken-4" dark flat>
      <v-container class="d-flex align-center justify-space-between">
        <v-toolbar-title class="text-h5">🧠 KvízApp</v-toolbar-title>
        <div>
          <v-btn to="/" variant="text" class="mx-2" color="white">Domů</v-btn>
          <v-btn to="/result" variant="text" class="mx-2" color="white">Výsledky</v-btn>
        </div>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container class="py-10">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
body {
  font-family: 'Segoe UI', 'Roboto', sans-serif;
  background-color: #f4f6fa;
  margin: 0;
}
</style>