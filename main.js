// problemas ao importar json
// import json from './data.json' assert {type: 'json'};
const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

const daily = document.querySelector('.filter__daily');
// const weekly = document.querySelector('.filter__weekly');
// const monthly = document.querySelector('.filter__monthly');

const filterItens = document.querySelectorAll('.filter__item');


var main = document.querySelector('main');
main.innerHTML = data.map(function (json) {
	return (
        `<section 
            class="card ${json.title === 'Work' ? 'card__work' 
                : json.title === 'Play' ? 'card__play'
                : json.title === 'Study' ? 'card__study'
                : json.title === 'Exercise' ? 'card__exercise'
                : json.title === 'Social' ? 'card__social'
                : 'card__selfCare'    
            }"
        >
            <div class="container__card">
                <article class="first-row">
                    <h2 class="card__name">${json.title}</h2>
                    <img class="more-options" src="./assets/icon-ellipsis.svg" alt="More option">
                </article>
                <article class="second-row">
                    <h3 class="card__hours">${json.timeframes.weekly.current}hrs</h3>
                    <p class="card__lastWeek">Last Week - ${json.timeframes.weekly.previous}hrs</p>
                </article>
            </div>
        </section>` 
    )
}).join('')

const pai = document.querySelector('.filter__time');
// const filho = pai.children




//iterando sobre os itens que tem a classe 'filter__item' em comum
filterItens.forEach(itens => {
  //adicionando evento onClick nos itens resultantes da iteração
  itens.addEventListener('click', event => {
    //iterando os itens novamente mas agora dentro do evento onClick para remover a classe de item selecionado caso esteja
    filterItens.forEach(elem => {
      elem.classList.contains('filter__selected') ? elem.classList.remove('filter__selected') : ''
    })
    //adicionando classe de selecionado para o filtro (item) clicado
    event.target.classList.add('filter__selected');
    //começa-se a renderização dos "Time-tracking"
    main.innerHTML = '';
    event.target.classList.contains('filter__daily') ? 
    main.innerHTML = data.map(function (json) {
      return (
            `<section 
                class="card ${json.title === 'Work' ? 'card__work' 
                    : json.title === 'Play' ? 'card__play'
                    : json.title === 'Study' ? 'card__study'
                    : json.title === 'Exercise' ? 'card__exercise'
                    : json.title === 'Social' ? 'card__social'
                    : 'card__selfCare'    
                }"
            >
                <div class="container__card">
                    <article class="first-row">
                        <h2 class="card__name">${json.title}</h2>
                        <div class="container__more-options">
                          <img class="more-options" src="./assets/icon-ellipsis.svg" alt="More options">
                        </div>
                    </article>
                    <article class="second-row">
                        <h3 class="card__hours">${json.timeframes.daily.current}hrs</h3>
                        <p class="card__lastWeek">Last Week - ${json.timeframes.daily.previous}hrs</p>
                    </article>
                </div>
            </section>` 
        )
    }).join('')
    : event.target.classList.contains('filter__weekly') ? 
    main.innerHTML = data.map(function (json) {
      return (
            `<section 
                class="card ${json.title === 'Work' ? 'card__work' 
                    : json.title === 'Play' ? 'card__play'
                    : json.title === 'Study' ? 'card__study'
                    : json.title === 'Exercise' ? 'card__exercise'
                    : json.title === 'Social' ? 'card__social'
                    : 'card__selfCare'    
                }"
            >
                <div class="container__card">
                    <article class="first-row">
                        <h2 class="card__name">${json.title}</h2>
                        <div class="container__more-options">
                          <img class="more-options" src="./assets/icon-ellipsis.svg" alt="More options">
                        </div>
                    </article>
                    <article class="second-row">
                        <h3 class="card__hours">${json.timeframes.weekly.current}hrs</h3>
                        <p class="card__lastWeek">Last Week - ${json.timeframes.weekly.previous}hrs</p>
                    </article>
                </div>
            </section>` 
        )
    }).join('')
    : 
    main.innerHTML = data.map(function (json) {
      return (
            `<section 
                class="card ${json.title === 'Work' ? 'card__work' 
                    : json.title === 'Play' ? 'card__play'
                    : json.title === 'Study' ? 'card__study'
                    : json.title === 'Exercise' ? 'card__exercise'
                    : json.title === 'Social' ? 'card__social'
                    : 'card__selfCare'    
                }"
            >
                <div class="container__card">
                    <article class="first-row">
                        <h2 class="card__name">${json.title}</h2>
                        <div class="container__more-options">
                          <img class="more-options" src="./assets/icon-ellipsis.svg" alt="More options">
                        </div>
                    </article>
                    <article class="second-row">
                        <h3 class="card__hours">${json.timeframes.monthly.current}hrs</h3>
                        <p class="card__lastWeek">Last Week - ${json.timeframes.monthly.previous}hrs</p>
                    </article>
                </div>
            </section>` 
        )
    }).join('')
  })
})



// map.addEventListener('click', e => {
//   main.innerHTML = '';
//   console.log(teste)
// })


// daily.addEventListener('click', e => {
//   main.innerHTML = '';
//   main.innerHTML = data.map(function (json) {
//     return (
//           `<section 
//               class="card ${json.title === 'Work' ? 'card__work' 
//                   : json.title === 'Play' ? 'card__play'
//                   : json.title === 'Study' ? 'card__study'
//                   : json.title === 'Exercise' ? 'card__exercise'
//                   : json.title === 'Social' ? 'card__social'
//                   : 'card__selfCare'    
//               }"
//           >
//               <div class="container__card">
//                   <article class="first-row">
//                       <h2 class="card__name">${json.title}</h2>
//                       <img class="more-options" src="./assets/icon-ellipsis.svg" alt="More option">
//                   </article>
//                   <article class="second-row">
//                       <h3 class="card__hours">${json.timeframes.daily.current}hrs</h3>
//                       <p class="card__lastWeek">Last Week - ${json.timeframes.daily.previous}hrs</p>
//                   </article>
//               </div>
//           </section>` 
//       )
//   }).join('')
// })

// const loadDaily = () => {
//   main.innerHTML = '';
//   main.innerHTML = data.map(function (json) {
//     return (
//           `<section 
//               class="card ${json.title === 'Work' ? 'card__work' 
//                   : json.title === 'Play' ? 'card__play'
//                   : json.title === 'Study' ? 'card__study'
//                   : json.title === 'Exercise' ? 'card__exercise'
//                   : json.title === 'Social' ? 'card__social'
//                   : 'card__selfCare'    
//               }"
//           >
//               <div class="container__card">
//                   <article class="first-row">
//                       <h2 class="card__name">${json.title}</h2>
//                       <img class="more-options" src="./assets/icon-ellipsis.svg" alt="More option">
//                   </article>
//                   <article class="second-row">
//                       <h3 class="card__hours">${json.timeframes.daily.current}hrs</h3>
//                       <p class="card__lastWeek">Last Week - ${json.timeframes.daily.previous}hrs</p>
//                   </article>
//               </div>
//           </section>` 
//       )
//   }).join('')
// }

// const loadWeekly = () => {
//   main.innerHTML = '';
//   main.innerHTML = data.map(function (json) {
//     return (
//           `<section 
//               class="card ${json.title === 'Work' ? 'card__work' 
//                   : json.title === 'Play' ? 'card__play'
//                   : json.title === 'Study' ? 'card__study'
//                   : json.title === 'Exercise' ? 'card__exercise'
//                   : json.title === 'Social' ? 'card__social'
//                   : 'card__selfCare'    
//               }"
//           >
//               <div class="container__card">
//                   <article class="first-row">
//                       <h2 class="card__name">${json.title}</h2>
//                       <img class="more-options" src="./assets/icon-ellipsis.svg" alt="More option">
//                   </article>
//                   <article class="second-row">
//                       <h3 class="card__hours">${json.timeframes.weekly.current}hrs</h3>
//                       <p class="card__lastWeek">Last Week - ${json.timeframes.weekly.previous}hrs</p>
//                   </article>
//               </div>
//           </section>` 
//       )
//   }).join('')
// }










