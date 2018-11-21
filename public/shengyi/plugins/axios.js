export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    if (error.code === 400) {
      redirect('/400')
    }
  })
}