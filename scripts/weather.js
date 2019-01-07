function weath() {
	for (var x = 0; x < 3; x++) {
		var w_min = weather.tempr.min[x],
			w_max = weather.tempr.max[x];
		weather.tempr.current[x] = Math.floor(Math.random() * (w_max - w_min + 1) + w_min);
		if (x == 0 && weather.tempr.current[x] < 10) {
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
		} else if (x == 0) {
			if (typeof interval_freeze !== 'undefined') {
				clearInterval(interval_freeze);
				interval_freeze = undefined;
			}
		}
		
		$("#phase").append(`<div style="float: left">
								<p>` + date.day[x] + `. ` + date.month.names[date.month.current[x]] + ` ` + date.year[x] + `</p>
								<p>` + weather.tempr.current[x] + `</p>
								<p>` + weather.season.names[weather.season.current[x]] + `</p>
							</div>`);
		if (date.day[x] == date.month.count[date.month.current[x]]) {
			date.day[x] = 1;
			if (date.month.current[x] == 11) {
				date.month.current[x] = 0;
				date.year[x] += 1;
			} else {
				date.month.current[x] += 1;
			}
		} else {
			date.day[x] += 1;
		}
		if ((date.day[x] == 1 && date.month.current[x] == 2) || (date.day[x] == 1 && date.month.current[x] == 5) || (date.day[x] == 1 && date.month.current[x] == 8) || (date.day[x] == 1 && date.month.current[x] == 11)) {
			if (weather.season.current[x] == 0) {
				weather.season.current[x] = 1;
				weather.tempr.min[x] = 5;
				weather.tempr.max[x] = 20;
			} else if (weather.season.current[x] == 1) {
				weather.season.current[x] = 2;
				weather.tempr.min[x] = 20;
				weather.tempr.max[x] = 35;
			} else if (weather.season.current[x] == 2) {
				weather.season.current[x] = 3;
				weather.tempr.min[x] = 5;
				weather.tempr.max[x] = 20;
			} else {
				weather.season.current[x] = 0;
				weather.tempr.min[x] = -10;
				weather.tempr.max[x] = 5;
			}
		}
	}
	check_weather();
}