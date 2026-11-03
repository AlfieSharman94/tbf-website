/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        turquoise: '#1ABCD4',
        'turquoise-dark': '#0F7A8A',
        ink: '#0A0A0A',
        'ink-soft': '#3A3A3A',
        'ink-muted': '#6B6B6B',
        'off-white': '#FAFAFA',
        line: '#E5E5E5',
        error: '#B23A3A',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['80px', { lineHeight: '0.98', letterSpacing: '-0.02em', fontWeight: '700' }],
        h2:      ['48px', { lineHeight: '1.05', letterSpacing: '-0.01em', fontWeight: '700' }],
        h3:      ['30px', { lineHeight: '1.2',  fontWeight: '700' }],
        lead:    ['22px', { lineHeight: '1.4',  fontWeight: '500' }],
        body:    ['17px', { lineHeight: '1.55', fontWeight: '400' }],
        eyebrow: ['13px', { lineHeight: '1.2',  letterSpacing: '0.08em', fontWeight: '600' }],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
