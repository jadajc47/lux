/** Web fonts loaded here - only in a browser */
if (typeof window !== 'undefined') {
  // tslint:disable-next-line:no-var-requires
  const WebFontLoader = require('webfontloader')
  WebFontLoader.load({
    google: {
      families: [
        'Arimo:700',
        'Archivo Black',
        'Arimo:400',
        'Lora:700',
        'Lora:400',
        'PT Serif:400',
        'Source Sans Pro:900',
      ],
    },
  })
}

/** Reusable common CSS attributes */
/** Colors */
export const gray = 'rgb(197, 197, 197)'
export const lightGray = 'rgb(242, 242, 242)'
export const black = '#000'
export const white = '#fff'
export const darkGray = 'rgb(100, 100, 100)'
export const dailyBruinBlue = '#0080C6'

/** Font families */
export const headlineFont = 'Arimo'
export const storyListFont = 'Lora'
export const bodyFont = 'PT Serif'
export const topBarFont = 'Source Sans Pro'

/** Card attributes */
export const cardInnerPadding = '11px 14px 15px'
export const cardShadow = '0px 2px 4px 0px rgba(0,0,0,0.2)'

/** Font weights */
export const regularFont = 400
export const boldFont = 700

/** Font sizes */
export const headlineFontSize = '2em'
export const subInfoFontSize = '1em'
export const smallInfoFontSize = '0.9em'
export const bodyTextSize = '1.1em'
export const bodyLineHeight = '1.45em'

/** CSS breakpoints */
export const mediaMobileBreakpoint = '@media (max-width: 600px)'
export const secheadMobileBreakpoint = '@sechead (max-width: 600px)'
