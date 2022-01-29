module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
         backgroundColor: () => ({
             'primary'      : '#0d0d0f',
             'secondary'    : '#1b1c20',
             'toggle'       : '#5d97ff',
             'card-box'     : '#222327'
         }),

         ringColor: () => ({
             'primary' : '#222325',
         })

     },
  },
  variants: {
     extend: {},
  },
  plugins: [
      require('@headlessui/react')
  ],
}