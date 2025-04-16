<template>
  <div v-if="question">
    <h2>{{ question.question }}</h2>
    <ul>
      <li v-for="option in question.options" :key="option">
        <button @click="submitAnswer(option)">{{ option }}</button>
      </li>
    </ul>
  </div>
  <div v-else>
    <router-link to="/result">Zobrazit výsledek</router-link>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useQuizStore } from '../store/quizStore'

const quizStore = useQuizStore()
const router = useRouter()
const question = quizStore.currentQuestion

function submitAnswer(option) {
  quizStore.answerQuestion(option)
  if (quizStore.currentQuestionIndex >= quizStore.totalQuestions) {
    router.push('/result')
  }
}
</script>
