import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    categories: ['Historie', 'Programování', 'Geografie'],
    questions: {
      Historie: [
        {
          question: 'Kdy byla bitva na Bílé hoře?',
          options: ['1620', '1415', '1914', '1968'],
          correct: '1620'
        },
        {
          question: 'Kdy začala druhá světová válka?',
          options: ['1939', '1914', '1945', '1961'],
          correct: '1939'
        }
      ],
      Programování: [
        {
          question: 'Co znamená zkratka HTML?',
          options: [
            'HyperText Markup Language',
            'HighText Machine Language',
            'Hyperloop Machine Language',
            'HyperTransfer Text Module'
          ],
          correct: 'HyperText Markup Language'
        },
        {
          question: 'Který jazyk se používá pro stylování webových stránek?',
          options: ['HTML', 'Python', 'CSS', 'Java'],
          correct: 'CSS'
        }
      ],
      Geografie: [
        {
          question: 'Jaké je hlavní město Austrálie?',
          options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
          correct: 'Canberra'
        },
        {
          question: 'Který oceán je největší?',
          options: ['Atlantský', 'Indický', 'Tichý', 'Severní ledový'],
          correct: 'Tichý'
        }
      ]
    },
    selectedCategory: null,
    currentQuestionIndex: 0,
    correctAnswers: 0,
    userAnswers: [],
  }),
  getters: {
    currentQuestion(state) {
      return state.questions[state.selectedCategory]?.[state.currentQuestionIndex]
    },
    totalQuestions(state) {
      return state.questions[state.selectedCategory]?.length || 0
    },
    quizCompleted(state) {
      return state.currentQuestionIndex >= (state.questions[state.selectedCategory]?.length || 0)
    },
    scorePercentage(state) {
      return state.totalQuestions > 0
        ? Math.round((state.correctAnswers / state.totalQuestions) * 100)
        : 0
    },
    shareableLink(state) {
      return `${window.location.origin}/result?score=${state.correctAnswers}&total=${state.totalQuestions}`
    }
  },
  actions: {
    selectCategory(category) {
      this.selectedCategory = category
      this.currentQuestionIndex = 0
      this.correctAnswers = 0
      this.userAnswers = []
    },
    answerQuestion(selectedOption) {
      const current = this.currentQuestion
      if (!current) return

      this.userAnswers.push({
        question: current.question,
        selected: selectedOption,
        correct: current.correct,
        isCorrect: selectedOption === current.correct
      })

      if (selectedOption === current.correct) {
        this.correctAnswers++
      }

      this.currentQuestionIndex++
    },
    restartQuiz() {
      this.selectedCategory = null
      this.correctAnswers = 0
      this.currentQuestionIndex = 0
      this.userAnswers = []
    }
  }
})
