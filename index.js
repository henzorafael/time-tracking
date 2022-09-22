import json from './data.json' assert {type: 'json'};

var main = document.querySelector('main');
main.innerHTML = json.map(function (json) {
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









