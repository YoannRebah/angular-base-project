/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "black": 'hsl(0, 0%, 13%)',
        "black-transparent-dark": 'hsla(0, 0%, 0%, 0.75)',
        "black-transparent-light": 'hsla(0, 0%, 0%, 0.3)',
        "blue": 'hsl(234, 100%, 50%)',
        "blue-dark": 'hsl(240, 100%, 25%)',
        "body": 'hsl(249, 88%, 5%)',
        "cyan": 'hsl(172, 85%, 49%)',
        "cyan-dark": 'hsl(170, 79%, 33%)',
        "footer": 'hsl(249, 88%, 8%)',
        "green": 'hsl(89, 73%, 54%)',
        "grey": 'hsl(210, 7%, 78%)',
        "grey-dark": 'hsl(300, 3%, 26%)',
        "orange": 'hsl(18, 81%, 54%)',
        "orange-dark": 'hsl(18, 81%, 25%)',
        "pink": 'hsl(330, 72%, 69%)',
        "pink-dark": 'hsl(330, 72%, 25%)',
        "red": 'hsl(358, 75%, 55%)',
        "red-dark": 'hsl(358, 75%, 25%)',
        "white": 'hsl(0, 0%, 100%)',
        "white-dark": 'hsl(300, 37%, 96%)',
        "yellow": 'hsl(53, 87%, 53%)',
        "yellow-dark": 'hsl(53, 87%, 30%)'
      },
      textShadow: {
        "chromatic-glitch": '2px 3px 2px hsl(0, 0%, 13%), 4px -3px 2px rgba(255, 52, 52, 0.3), 5px -5px 2px rgba(52, 255, 120, 0.3)',
        "chromatic-glitch-strong": '2px 3px 2px hsl(0, 0%, 13%), 5px -3px 2px rgba(255, 52, 52, 0.6), 6px -5px 2px rgba(52, 255, 120, 0.6)',
        "milked-pink": '2px 3px 2px hsl(0, 0%, 13%), 4px -3px 2px rgba(255, 255, 255, 0.75), 5px -5px 2px rgb(192, 99, 153, 1)'
      }
    }
  },
  plugins: [
    require('tailwindcss-textshadow')
  ]
};