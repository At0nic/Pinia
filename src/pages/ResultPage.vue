<template>
  <div>
    <h1>Výsledek</h1>
    <p>Správně zodpovězeno: {{ quizStore.correctAnswers }} / {{ quizStore.totalQuestions }}</p>
    <router-link to="/" @click="quizStore.restartQuiz()">Zkusit jiný kvíz</router-link>
  </div>
</template>

<script setup>
import { useQuizStore } from '../store/quizStore'

const quizStore = useQuizStore()
</script>
