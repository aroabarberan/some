const fakeFetch = async (url, obj) => {
  return {
    json: async () => {
      return {
        status: 'ok',
        results: {
          count: 20,
          page: 1,
          total: 1218,
          data: [
            {
              name: 'Iron Man',
              series: [
                'Iron Man',
                'The Avengers'
              ]
            }, {
              name: 'Agent Zero',
              series: [
                'Weapon X',
                'X-Men'
              ]
            }, {
              name: 'Captain America',
              series: [
                'The Avengers',
                'Captain America'
              ]
            }, {
              name: 'Hulk',
              series: [
                'The Avengers'
              ]
            }, {
              name: 'Wolverine',
              series: [
                'Wolverine',
                'X-Men'
              ]
            }
          ]
        }
      }
    }
  }
}
fakeFetch()
  .then(data => data.json())
  .then(results => results.results.data)
  .then(heroes => heroes.filter(hero => hero.series.includes('The Avengers')))
  .then(console.log)

// FINAL RESULT (Only heroes from 'The Avengers' series
  //
  // [
  //   {
  //     "name": "Iron Man",
  //     "series": [
  //       "Iron Man",
  //       "The Avengers"
  //     ]
  //   },
  //   {
  //     "name": "Captain America",
  //     "series": [
  //       "The Avengers",
  //       "Captain America"
  //     ]
  //   },
  //   {
  //     "name": "Hulk",
  //     "series": [
  //       "The Avengers"
  //     ]
  //   }
  // ]
