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
    $("#phase").append(`<div style="float: left">
                            <p>` + date.day + `. ` + date.month.names[date.month.current] + ` ` + date.year + `</p>
                            <p>` + weather.tempr.current + `</p>
                            <p>` + weather.season.names[weather.season.current] + `</p>
                        </div>`);
    check_weather();
    if (date.day == date.month.count[date.month.current]) {
        date.day = 1;
        if (date.month.current == 11) {
            date.month.current = 0;
            date.year += 1;
        } else {
            date.month.current += 1;
        }
    } else {
        date.day += 1;
    }
    if ((date.day == 1 && date.month.current == 2) || (date.day == 1 && date.month.current == 5) || (date.day == 1 && date.month.current == 8) || (date.day == 1 && date.month.current == 11)) {
        if (weather.season.current == 0) {
            weather.season.current = 1;
            weather.tempr.min = 5;
            weather.tempr.max = 20;
        } else if (weather.season.current == 1) {
            weather.season.current = 2;
            weather.tempr.min = 20;
            weather.tempr.max = 35;
        } else if (weather.season.current == 2) {
            weather.season.current = 3;
            weather.tempr.min = 5;
            weather.tempr.max = 20;
        } else {
            weather.season.current = 0;
            weather.tempr.min = -10;
            weather.tempr.max = 5;
        }
    }
}