<template>
  <div>
    <h1>Vyber kategorii</h1>
    <ul>
      <li v-for="category in categories" :key="category">
        <router-link :to="`/quiz/${category}`" @click="selectCategory(category)">
          {{ category }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useQuizStore } from '../store/quizStore'

const quizStore = useQuizStore()
const categories = quizStore.categories
const selectCategory = quizStore.selectCategory
</script>
