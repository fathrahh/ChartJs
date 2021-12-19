module.exports = {
  content: ["./public/index.html",
    "./public/template.html",
    "./public/reviewPage.html",
    "./public/hasilPage.html",
    "./public/login.html",
    "./public/register.html",
    "./public/pengajuan.html",
    "./public/pascaPengajuan.html",
  ],
  theme: {
    extend: {
      colors: {
        'navbar': '#4e4f57',
        'section': '#363740',
        'aside': '#1F1F21',
        'success': '#1BB55C',
        'danger': '#B51B1B',
        'blue-custom': '#00C2FF',
      },
      spacing: {
        '20vw': '20vw'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
