/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0D6ECC',
        teriary: {
          100: '#1D1A27',
        },
        gray: {
          100: '#252626',
          200: '#434444',
          300: '#626263',
          400: '#808181',
          500: '#9F9F9F',
          600: '#BDBDBD',
          700: '#DBDCDC',
          800: '#FAFAFA',
          admin: '#676376',
        },
        red: {
          700: '#CC154A',
        },
        blue: {
          light: '#00B9F1',
          dark: '#162233',
        },
        green: {
          700: '#05816C',
        },
        purple: {
          dark: '#2E1673',
          medium: '#765DBF',
          pale: '#F5F2FF',
          disabled: '#4F4A60',
        },
        viola: '#4F4A60',
        common: '#1eff00',
        uncommon: '#0070dd',
        rare: '#a335ee',
        epic: '#ff8000',
        legendary: '#FF0000',
        magenta: '#676376',
        border: {
          input: '#AEACB8',
          table: '#DEDDE4',
        },
        opaquewhite: 'rgba(0, 0, 0, 0.1)',
        opaqueinactive: 'rgba(255,255, 255, 0.1)',
        uploadBoxBg: 'rgba(46, 22, 115, 0.7)',
      },
      fontSize: {
        sm: ['14px', '16px'],
        base: ['16px', '20px'],
        xl: ['23px', '28px'],
        '3xl': ['34px', '40px'],
        '4xl': ['48px', '64px'],
        body2: ['16px', '24px'],
        body3Admin: ['14px', '20px'],
        h2: ['32px', '36px'],
        h4: ['20px', '24px'],
        h5: ['24px', '28px'],
        h5Admin: ['16px', '20px'],
        cta: ['20px', '20px'],
        timer: ['36px', '40px'],
        h1Admin: ['36px', '40px'],
        h2Admin: ['32px', '36px'],
      },
      backgroundImage: {
        gradient: 'linear-gradient(315deg, #2E1673 0%, #765DBF 50.52%, #C8B5FF 100%)',
        default: "url('/bg.png')",
        blurred: "url('/blurred_bg.png')",
        box: "url('/content_box_bg.png')",
        ctaPrimary: "url('/btn_primary_bg.png')",
        ctaOutline: "url('/btn_outline_bg.png')",
        playingTimer: "url('/number_bg.png')",
        prizeFrame: "url('/prize_frame_bg.svg')",
        toggle: "url('/toggle_bg.png')",
        winner: "url('/winner_bg.png')",
        prizeWon: "url('/prize_won_bg.png')",
        prizeWonLegendary: "url('/prize_won_legendary_bg.png')",
        prizeWonBorder: "url('/prize_won_border_bg.png')",
      },
      dropShadow: {
        sm: '0px 8px 16px -4px rgba(22, 34, 51, 0.12)',
        prizeWon: '3px 4px 4px rgba(0, 0, 0, 0.55)',
        prizeWonTitle: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {
        sm: '0px 8px 16px -4px rgba(22, 34, 51, 0.12)',
        ctaPrimary:
          '0px 16px 20px 0px rgba(22, 34, 51, 0.08), 0px 4px 8px -4px rgba(22, 34, 51, 0.12), 0px 0px 8px 0px rgba(118, 93, 191, 1)',
        ctaOutline: '0px 4px 8px -4px rgba(22, 34, 51, 0.12), 0px 16px 20px rgba(22, 34, 51, 0.08)',
        playingTimer:
          '0px 0px 8px #765DBF, 0px 4px 8px -4px rgba(22, 34, 51, 0.12), 0px 16px 20px rgba(22, 34, 51, 0.08)',
        prizeWon: '4px 4px 24px rgba(0, 0, 0, 0.6), inset 0px 0px 11px rgba(0, 0, 0, 0.55)',
      },
      fontFamily: {
        sans: ['Bahnschrift', 'sans-serif'],
      },
      fontWeight: {
        seminormal: 350,
      },
    },
  },
  daisyui: {
    themes: [
      {
        extended: {
          primary: '#2E1673',
          secondary: '#765DBF',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('tailwind-scrollbar-hide')],
}
