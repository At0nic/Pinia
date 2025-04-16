<template>
  <v-container class="text-center">
    <h2 class="text-h5 mb-6">Tvé skóre</h2>

    <v-progress-circular
      :model-value="quizStore.scorePercentage"
      size="120"
      width="10"
      color="deep-purple accent-4"
      rotate="360"
    >
      {{ quizStore.correctAnswers }} / {{ quizStore.totalQuestions }}
    </v-progress-circular>

    <div class="mt-6">
      <v-btn color="primary" @click="restart">Hrát znovu</v-btn>
    </div>

    <v-text-field
      class="mt-4"
      label="Odkaz ke sdílení"
      v-model="quizStore.shareableLink"
      append-icon="mdi-content-copy"
      @click:append="copyLink"
      readonly
    />
  </v-container>
</template>

<script setup>
import { useQuizStore } from '../store/quizStore'
import { useRouter } from 'vue-router'

const quizStore = useQuizStore()
const router = useRouter()

function restart() {
  quizStore.restartQuiz()
  router.push('/')
}

function copyLink() {
  navigator.clipboard.writeText(quizStore.shareableLink)
}
</script>
