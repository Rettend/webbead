// REFERENCE ONLY. THIS IS THE SOURCE OF index.js

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

function watch(selector: string, callback: () => void) {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(selector).forEach((node) => {
      node.addEventListener('click', callback)
    })
  })
}

watch('.img-magnifier-node', () => document.documentElement.classList.add('hide-scrollbar'))
watch('.img-magnifier', () => document.documentElement.classList.remove('hide-scrollbar'))
