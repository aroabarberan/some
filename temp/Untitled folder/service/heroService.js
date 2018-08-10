export const getHeroes = async () => {
  return {
    status: 200,
    pageSize: 5,
    page: 1,
    results: [
      {
        id: 1,
        name: 'Hulk',
        power: 'Inmortal',
      }, {
        id: 2,
        name: 'Thor',
        power: 'Thunderstruck',
      }, {
        id: 3,
        name: 'Spiderman',
        power: 'Sticky',
      }, {
        id: 4,
        name: 'Captain America',
        power: 'Has a shield and eat drugs',
      }, {
        id: 5,
        name: 'Vision',
        power: 'Ethereal',
      },
    ]
  }
}

let id = 5

export const createHero = hero => ({
  id: ++id,
  ...hero,
})
