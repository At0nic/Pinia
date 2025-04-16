<template>
  <v-container v-if="question && !quizStore.quizCompleted">
    <v-fade-transition>
      <v-card elevation="4" class="pa-4" key="question">
        <v-card-title>{{ question.question }}</v-card-title>

        <v-card-text>
          <v-btn
            v-for="option in question.options"
            :key="option"
            class="ma-2"
            block
            :color="getColor(option)"
            @click="selectOption(option)"
            :disabled="answered"
          >
            {{ option }}
          </v-btn>
        </v-card-text>

        <v-card-actions>
          <v-btn
            v-if="answered && !quizStore.quizCompleted"
            color="primary"
            @click="nextQuestion"
          >
            Další
          </v-btn>
        </v-card-actions>

        <v-progress-linear
          :model-value="progress"
          height="6"
          color="blue"
          class="mt-6"
        />
      </v-card>
    </v-fade-transition>
  </v-container>

  <v-container v-else>
    <router-link to="/result">
      <v-btn color="primary">Zobrazit výsledek</v-btn>
    </router-link>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuizStore } from '../store/quizStore'

const route = useRoute()
const router = useRouter()
const quizStore = useQuizStore()

const selectedOption = ref(null)
const answered = ref(false)

onMounted(() => {
  const category = route.params.category
  if (quizStore.selectedCategory !== category) {
    quizStore.selectCategory(category)
  }
})

watch(() => quizStore.currentQuestionIndex, () => {
  selectedOption.value = null
  answered.value = false
})

const question = computed(() => quizStore.currentQuestion)
const progress = computed(() =>
  (quizStore.currentQuestionIndex / quizStore.totalQuestions) * 100
)

function selectOption(option) {
  if (answered.value) return
  selectedOption.value = option
  answered.value = true
  quizStore.answerQuestion(option)
}

function getColor(option) {
  if (!answered.value) return 'primary'
  const correct = question.value.correct
  if (option === correct) return 'green'
  if (option === selectedOption.value && option !== correct) return 'red'
  return 'primary'
}

function nextQuestion() {
  if (quizStore.quizCompleted) {
    router.push('/result')
  }
}
</script>
