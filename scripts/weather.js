var x = 2;

function show_weather() {
	for (var y = 0; y <= x; y++) {
		$("#phase").append(`<div>
								<p>` + date.day[y] + `. ` + date.month.names[date.month.current[y]] + ` ` + date.year[y] + `</p>
								<p>` + weather.season.names[weather.season.current[y]] + `</p>` +
		(y == 0 ? `<p>` + weather.tempr.current + `</p>` : ``) +
		`</div>`);
		check_weather();
	}
}

function weath() {	
	var w_min = weather.tempr.min,
		w_max = weather.tempr.max;
	weather.tempr.current = Math.floor(Math.random() * (w_max - w_min + 1) + w_min);
	if (weather.tempr.current < 10) {
		if (clothes >= villager.count) {
			clothes -= villager.count;
			if (typeof interval_freeze !== 'undefined') {
				clearInterval(interval_freeze);
				interval_freeze = undefined;
			}
		} else {
			var rest = villager.count - clothes;
			clothes = 0;
			if (wood >= rest) {
				wood -= rest;
				if (typeof interval_freeze !== 'undefined') {
					clearInterval(interval_freeze);
					interval_freeze = undefined;
				}
			} else {
				wood = 0;
				if (typeof interval_freeze === 'undefined') {
					interval_freeze = setInterval(function () {die("freeze"); }, speed * 15);
				}
			}
		}
	} else {
		if (typeof interval_freeze !== 'undefined') {
			clearInterval(interval_freeze);
			interval_freeze = undefined;
		}
	}
	if (date.day[x] == date.month.count[date.month.current[x]]) {
		date.day.shift();
		date.day[x] = 1;
		date.month.current[x] += 1;
		if (date.month.current[x] == 12) {
			date.month.current[x] = 0;
			date.year[x] += 1;
		}
	} else {
		date.day.shift();
		date.day[x] = date.day[x-1] + 1;
		date.month.current.shift();
		date.month.current[x] = date.month.current[x-1];
		date.year.shift();
		date.year[x] = date.year[x-1];
	}
	
	if (date.day[x] == 1 && date.month.current[x] == 2) {
		weather.season.current[x] = 1;
		weather.tempr.min = 5;
		weather.tempr.max = 20;
	} else if (date.day[x] == 1 && date.month.current[x] == 5) {
		weather.season.current[x] = 2;
		weather.tempr.min = 20;
		weather.tempr.max = 35;
	} else if (date.day[x] == 1 && date.month.current[x] == 8) {
		weather.season.current[x] = 3;
		weather.tempr.min = 5;
		weather.tempr.max = 20;
	} else if (date.day[x] == 1 && date.month.current[x] == 11) {
		weather.season.current[x] = 0;
		weather.tempr.min = -10;
		weather.tempr.max = 5;
	} else {
		weather.season.current.shift();
		weather.season.current[x] = weather.season.current[x-1];
	}
	show_weather();
}