export const openAppHelp = () => {
  setTimeout(() => {
    const appHelpBtn = document.getElementById('appHelpModal')
    if (!appHelpBtn) {
      openAppHelp()
      return
    }

    appHelpBtn.click()
  }, 1000)
}
