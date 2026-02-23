export default defineNuxtPlugin((nuxtApp) => {
  const userType = ref('')
  const isLoggedIn = ref(false)
  const token = ref('')
  const loggedInDate = ref('')

  const storageAuth = JSON.parse(localStorage.getItem('auth'))
  if (storageAuth) {
    userType.value = storageAuth.userType
    isLoggedIn.value = storageAuth.isLoggedIn
    token.value = storageAuth.token
    loggedInDate.value = storageAuth.loggedInDate
  }

  return {
    provide: {
      auth: {
        userType,
        isLoggedIn,
        token,
        loggedInDate
      }
    }
  }
})
