export const onClickOutside = (element: HTMLElement, fn: () => void) => {
  const outsideClickListener = (event: MouseEvent) => {
    if (!element.contains(event.target as any)) {
      fn()
      removeClickListener()
    }
  }

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
  }

  document.addEventListener('click', outsideClickListener)
}
