import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'btn': 'w-26 bg-dark text-lighter shadow-[4px_4px_0] cursor-pointer text-lg border-0 rounded-xl px-4 py-2 transition-all hover:translate--0.5 hover:shadow-[6px_6px_0] active:translate-1 active:shadow-[0px_0px_0]',
    'feature': 'bg-dark px-4 py-2 rounded-6 w-270px',
    'feature-title': 'flex gap-3 items-center',
    'feature-col': 'flex flex-col gap-3',
    'link': 'inline-block text-pink visited:text-purple hover:text-lighter active:text-light',
    'nav-item': 'decoration-none text-lighter font-bold text-xl hover:scale-110 transition-all rounded-full py-1 px-2',
    'nav-item-active': 'bg-lighter text-darker hover:scale-100',
  },
  theme: {
    colors: {
      black: '#1B1B1F',
      darker: '#25262D',
      dark: '#2B2F36',
      light: '#98989F',
      lighter: '#DFDFD6',
    },
  },
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:400,700',
      },
    }),
  ],
  preflights: [
    {
      getCSS: () => `html {
  padding: 0;
  margin: 0;
  height: 100dvh;
  width: 100dvw;
  overflow-x: hidden;
}
      `,
    },
  ],
  cli: {
    entry: [
      {
        patterns: ['*.html', 'pages/*.html', '*.ts'],
        outFile: 'public/style.css',
      },
    ],
  },
})
