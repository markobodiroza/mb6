/** @type {import('tailwindcss').Config} */
const token = (name) => `var(--${name})`

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: token('paper'),
        sunken: token('sunken'),
        rule: token('rule'),
        ink: token('ink'),
        graphite: token('graphite'),
        muted: token('muted'),
        brand: token('brand'),
        'brand-line': token('brand-line'),
        'on-brand': token('on-brand'),
        'on-brand-muted': token('on-brand-muted'),
        action: token('action'),
        'action-hover': token('action-hover'),
        'action-fg': token('action-fg'),
        link: token('link'),
        focus: token('focus'),
        field: token('field'),
        danger: token('danger'),
        'danger-line': token('danger-line'),
        citron: token('citron'),
        'on-citron': token('on-citron'),
        night: token('night'),
        'on-night': token('on-night'),
        'on-night-muted': token('on-night-muted'),
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
      },
      maxWidth: {
        prose: '60ch',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
      },
    },
  },
}
