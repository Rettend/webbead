import { Signal } from 'signal-polyfill'
import { effect } from './effect.js'

const isDesktop = window.matchMedia('(min-width: 1024px)').matches
const isNavVisible = new Signal.State(isDesktop)

document.getElementById('menu')?.addEventListener('click', () => {
  isNavVisible.set(!isNavVisible.get())
})

effect(() => {
  const nav = document.getElementById('nav')
  if (!nav)
    return

  if (isNavVisible.get())
    nav.style.display = 'flex'
  else
    nav.style.display = 'none'
})
