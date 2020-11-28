describe('headlines', () => {
  let headlines, element, client;
  beforeEach(() => {
    element = {}
    client = {
      get: () => Promise.resolve(data)
    }
  })

  it('renders on page', async () => {
    headlines = await new Headlines(element, client)
    expect(headlines.element.innerHTML).toContain("Christmas gift ideas for food lovers 2020")
  })
})
