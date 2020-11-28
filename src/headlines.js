class Headlines {
  constructor(element, client) {
    this.element = element
    this.client = client
    this.setup()
  }

  setup() {

    window.addEventListener('hashchange', (event) => {
      event.preventDefault()
      this.client.get(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${location.hash.split("#")[1]}`)
        .then(data => {
          this.element.innerHTML = data.text
        })
    })

    this.client.get("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=christmas")
      .then(data => {
        this.items = data.response.results
        this.render()
      })

  }

  render() {
    this.element.innerHTML = this.items.map(item => `<p><a href="#${item.webUrl}">${item.webTitle}</a></p>`).join('')
  }

}
