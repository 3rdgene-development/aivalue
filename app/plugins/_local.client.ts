export default defineNuxtPlugin((nuxtApp) => {
  const { $ToastComponent } = useNuxtApp()

  const logout = () => {
    console.log('ログアウト新ルール')
    clearLocalStorage()
    const newToast = new $ToastComponent(
      'success',
      'ログアウト完了',
      ''
    )
    setTimeout(() => {
      return navigateTo('/', { external: true })
    }, 2000)
  }

  const clearLocalStorage = () => {
    const keys = [
      'auth',
      'historyDashboardTop',
      'historyDashboardServiceDetail',
      'historyDashboardMediaDetail',
      'historyDashboardCategory',
      'historyClientTop',
      'historyClientMediaDetail',
      'historyCategory'
    ]
    keys.forEach((key) => localStorage.removeItem(key))
  }

  return {
    provide: {
      logout,
      storage: {
        clear: clearLocalStorage
      }
    }
  }
})
