module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: {
        standard: ['outline-none'],
      },
    },
  },
  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
      },
      maxWidth: {
        '4.5xl': '62rem',
        '8xl': '1920px',
      },
      colors: {
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        'primary-3': 'var(--primary-3)',
        'primary-4': 'var(--primary-4)',
        secondary: 'var(--secondary)',
        'secondary-2': 'var(--secondary-2)',
        hover: 'var(--hover)',
        'hover-1': 'var(--hover-1)',
        'hover-2': 'var(--hover-2)',
        'accent-0': 'var(--accent-0)',
        'accent-1': 'var(--accent-1)',
        'accent-2': 'var(--accent-2)',
        cyan: 'var(--cyan)',
        blue: 'var(--blue)',
        green: 'var(--green)',
      },
      textColor: {
        base: 'var(--text-base)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      boxShadow: {
        inner: 'inset 0px 4px 4px rgba(0, 0, 0, 0.12)',
        1: '0px 0px 15px rgba(0, 0, 0, 0.15)',
        2: '3px 3px 4px rgba(0, 0, 0, 0.06)',
        3: '3px 5px 15px rgba(0, 0, 0, 0.1)',
        4: '10px 3px 15px rgba(0, 0, 0, 0.05)',
      },
    },
  },
}
