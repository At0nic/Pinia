<template>
  <v-container>
    <h1 class="text-center text-h4 font-weight-medium mb-10">
      Vyber si kategorii
    </h1>

    <v-row justify="center" align="center" dense>
      <v-col
        v-for="category in categories"
        :key="category"
        cols="12" sm="6" md="4"
      >
        <v-card
          class="pa-6 text-center hoverable"
          color="blue-grey lighten-5"
          elevation="3"
          @click="goToQuiz(category)"
        >
          <v-icon color="indigo" size="36" class="mb-3">mdi-school</v-icon>
          <h2 class="text-h6">{{ category }}</h2>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'

const categories = ['Historie', 'Programování', 'Geografie']
const router = useRouter()

function goToQuiz(category) {
  router.push(`/quiz/${category}`)
}
</script>

<style scoped>
.hoverable {
  cursor: pointer;
  transition: 0.3s ease;
  border-radius: 16px;
}
.hoverable:hover {
  background-color: #e3f2fd !important;
  transform: scale(1.02);
}
</style>
