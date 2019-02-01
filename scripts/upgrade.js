var timer_half;

function upgrade_hut() {
    $("#task .hut .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= hut_up.costs.wood / 2;
		stone -= hut_up.costs.stone / 2;
        hut.count -= 1;
        villager.max += 3;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Hütte wurde ausgebaut.</p>");
        check_msg();
        $("#task .hut").remove();
    } else if (timer === timer_half) {
		wood -= hut_up.costs.wood / 2;
		stone -= hut_up.costs.stone / 2;
	}
}
$("#upgrade").on("click", "#btn_upgrade_hut", function () {
    task.append(`<div class='tr hut'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Ausbau einer Hütte</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = hut_up.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_upgrade = setInterval(upgrade_hut, 100);
});
$("#task").on("click", ".hut td:first-child", function () {
	clearInterval(interval_upgrade);
	slot_build = false;
	msg.prepend("<p>Hütte wurde abgebrochen.</p>");
	check_msg();
	$("#task .hut").remove();
});

function upgrade_huntinghut() {
    $("#task .huntinghut .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= huntinghut_up.costs.wood / 2;
		stone -= huntinghut_up.costs.stone / 2;
        huntinghut_up.count = true;
        leather_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Jagdhütte wurde ausgebaut.</p>");
        check_msg();
        $("#task .huntinghut").remove();
    } else if (timer === timer_half) {
		wood -= huntinghut_up.costs.wood / 2;
		stone -= huntinghut_up.costs.stone / 2;
	}
}
$("#upgrade").on("click", "#btn_upgrade_huntinghut", function () {
    task.append(`<div class='tr huntinghut'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Ausbau einer Jagdhütte</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = huntinghut_up.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_upgrade = setInterval(upgrade_huntinghut, 100);
});
$("#task").on("click", ".huntinghut td:first-child", function () {
	clearInterval(interval_upgrade);
	slot_build = false;
	msg.prepend("<p>Jagdhütte wurde abgebrochen.</p>");
	check_msg();
	$("#task .huntinghut").remove();
});

function upgrade_storage() {
    $("#task .storage .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= storage_up.costs.wood / 2;
		stone -= storage_up.costs.stone / 2;
        supplies_max += 500;
        storage_up.count += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Lager wurde ausgebaut.</p>");
        check_msg();
        $("#task .storage").remove();
    } else if (timer === timer_half) {
		wood -= storage_up.costs.wood / 2;
		stone -= storage_up.costs.stone / 2;
	}
}
$("#upgrade").on("click", "#btn_upgrade_storage", function () {
    task.append(`<div class='tr storage'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Ausbau eines Lager</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = storage_up.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_upgrade = setInterval(upgrade_storage, 100);
});
$("#task").on("click", ".storage td:first-child", function () {
	clearInterval(interval_upgrade);
	slot_build = false;
	msg.prepend("<p>Lager wurde abgebrochen.</p>");
	check_msg();
	$("#task .storage").remove();
});

function upgrade_lumberjackhut() {
    $("#task .lumberjackhut .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= lumberjackhut_up.costs.wood / 2;
		stone -= lumberjackhut_up.costs.stone / 2;
        lumberjackhut_up.count = true;
        wood_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Holzfällerhütte wurde ausgebaut.</p>");
        check_msg();
        $("#task .lumberjackhut").remove();
    } else if (timer === timer_half) {
		wood -= lumberjackhut_up.costs.wood / 2;
		stone -= lumberjackhut_up.costs.stone / 2;
	}
}
$("#upgrade").on("click", "#btn_upgrade_lumberjackhut", function () {
    task.append(`<div class='tr lumberjackhut'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Ausbau einer Holzfällerhütte</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = lumberjackhut_up.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_upgrade = setInterval(upgrade_lumberjackhut, 100);
});
$("#task").on("click", ".lumberjackhut td:first-child", function () {
	clearInterval(interval_upgrade);
	slot_build = false;
	msg.prepend("<p>Holzfällerhütte wurde abgebrochen.</p>");
	check_msg();
	$("#task .lumberjackhut").remove();
});

function upgrade_sheepstall() {
    $("#task .sheepstall .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= sheepstall_up.costs.wood / 2;
		stone -= sheepstall_up.costs.stone / 2;
        sheepstall_up.count = true;
        cloth_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Schafstall wurde ausgebaut.</p>");
        check_msg();
        $("#task .sheepstall").remove();
    } else if (timer === timer_half) {
		wood -= sheepstall_up.costs.wood / 2;
		stone -= sheepstall_up.costs.stone / 2;
	}
}
$("#upgrade").on("click", "#btn_upgrade_sheepstall", function () {
    task.append(`<div class='tr sheepstall'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Ausbau eines Schafstall</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = sheepstall_up.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_upgrade = setInterval(upgrade_sheepstall, 100);
});
$("#task").on("click", ".sheepstall td:first-child", function () {
	clearInterval(interval_upgrade);
	slot_build = false;
	msg.prepend("<p>Schafstall wurde abgebrochen.</p>");
	check_msg();
	$("#task .sheepstall").remove();
});

function upgrade_quarry() {
    $("#task .quarry .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= quarry_up.costs.wood / 2;
		stone -= quarry_up.costs.stone / 2;
        quarry_up.count = true;
        stone_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Steinbruch wurde ausgebaut.</p>");
        check_msg();
        $("#task .quarry").remove();
    } else if (timer === timer_half) {
		wood -= quarry_up.costs.wood / 2;
		stone -= quarry_up.costs.stone / 2;
	}
}
$("#upgrade").on("click", "#btn_upgrade_quarry", function () {
    task.append(`<div class='tr quarry'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Ausbau eines Steinbruch</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = quarry_up.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_upgrade = setInterval(upgrade_quarry, 100);
});
$("#task").on("click", ".quarry td:first-child", function () {
	clearInterval(interval_upgrade);
	slot_build = false;
	msg.prepend("<p>Steinbruch wurde abgebrochen.</p>");
	check_msg();
	$("#task .quarry").remove();
});

function upgrade_coalmine() {
    $("#task .coalmine .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= coalmine_up.costs.wood / 2;
		stone -= coalmine_up.costs.stone / 2;
        coalmine_up.count = true;
        coal_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Kohlemine wurde ausgebaut.</p>");
        check_msg();
        $("#task .coalmine").remove();
    } else if (timer === timer_half) {
		wood -= coalmine_up.costs.wood / 2;
		stone -= coalmine_up.costs.stone / 2;
	}
}
$("#upgrade").on("click", "#btn_upgrade_coalmine", function () {
    task.append(`<div class='tr coalmine'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Ausbau einer Kohlemine</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = coalmine_up.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_upgrade = setInterval(upgrade_coalmine, 100);
});
$("#task").on("click", ".coalmine td:first-child", function () {
	clearInterval(interval_upgrade);
	slot_build = false;
	msg.prepend("<p>Kohlemine wurde abgebrochen.</p>");
	check_msg();
	$("#task .coalmine").remove();
});

function upgrade_ironmine() {
    $("#task .ironmine .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= ironmine_up.costs.wood / 2;
		stone -= ironmine_up.costs.stone / 2;
		coal -= ironmine_up.costs.coal / 2;
        ironmine_up.count = true;
        iron_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Eisenmine wurde ausgebaut.</p>");
        check_msg();
        $("#task .ironmine").remove();
    } else if (timer === timer_half) {
		wood -= ironmine_up.costs.wood / 2;
		stone -= ironmine_up.costs.stone / 2;
		coal -= ironmine_up.costs.coal / 2;
	}
}
$("#upgrade").on("click", "#btn_upgrade_ironmine", function () {
    task.append(`<div class='tr ironmine'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Ausbau einer Eisenmine</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = ironmine_up.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_upgrade = setInterval(upgrade_ironmine, 100);
});
$("#task").on("click", ".ironmine td:first-child", function () {
	clearInterval(interval_upgrade);
	slot_build = false;
	msg.prepend("<p>Eisenmine wurde abgebrochen.</p>");
	check_msg();
	$("#task .ironmine").remove();
});

function upgrade_tailorhouse() {
    $("#task .tailorhouse .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= tailorhouse_up.costs.wood / 2;
		stone -= tailorhouse_up.costs.stone / 2;
		coal -= tailorhouse_up.costs.coal / 2;
        tailorhouse_up.count = true;
        clothes_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Schneiderhaus wurde ausgebaut.</p>");
        check_msg();
        $("#task .tailorhouse").remove();
    } else if (timer === timer_half) {
		wood -= tailorhouse_up.costs.wood / 2;
		stone -= tailorhouse_up.costs.stone / 2;
		coal -= tailorhouse_up.costs.coal / 2;
	}
}
$("#upgrade").on("click", "#btn_upgrade_tailorhouse", function () {
    task.append(`<div class='tr tailorhouse'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Ausbau eines Schneiderhaus</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = tailorhouse_up.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_upgrade = setInterval(upgrade_tailorhouse, 100);
});
$("#task").on("click", ".tailorhouse td:first-child", function () {
	clearInterval(interval_upgrade);
	slot_build = false;
	msg.prepend("<p>Schneiderhaus wurde abgebrochen.</p>");
	check_msg();
	$("#task .tailorhouse").remove();
});

function upgrade_alchemisthut() {
    $("#task .alchemisthut .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= alchemisthut_up.costs.wood / 2;
		stone -= alchemisthut_up.costs.stone / 2;
		coal -= alchemisthut_up.costs.coal / 2;
		iron -= alchemisthut_up.costs.iron / 2;
        alchemisthut_up.count = true;
        brew_time += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Alchemistenhütte wurde ausgebaut.</p>");
        check_msg();
        $("#task .alchemisthut").remove();
    } else if (timer === timer_half) {
		wood -= alchemisthut_up.costs.wood / 2;
		stone -= alchemisthut_up.costs.stone / 2;
		coal -= alchemisthut_up.costs.coal / 2;
		iron -= alchemisthut_up.costs.iron / 2;
	}
}
$("#upgrade").on("click", "#btn_upgrade_alchemisthut", function () {
    task.append(`<div class='tr alchemisthut'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Ausbau einer Alchemistenhütte</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = alchemisthut_up.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_upgrade = setInterval(upgrade_alchemisthut, 100);
});
$("#task").on("click", ".alchemisthut td:first-child", function () {
	clearInterval(interval_upgrade);
	slot_build = false;
	msg.prepend("<p>Alchemistenhütte wurde abgebrochen.</p>");
	check_msg();
	$("#task .alchemisthut").remove();
});

function upgrade_forge() {
    $("#task .forge .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= forge_up.costs.wood / 2;
		stone -= forge_up.costs.stone / 2;
		coal -= forge_up.costs.coal / 2;
		iron -= forge_up.costs.iron / 2;
        forge_up.count = true;
        craft_time += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Schmiede wurde ausgebaut.</p>");
        check_msg();
        $("#task .forge").remove();
    } else if (timer === timer_half) {
		wood -= forge_up.costs.wood / 2;
		stone -= forge_up.costs.stone / 2;
		coal -= forge_up.costs.coal / 2;
		iron -= forge_up.costs.iron / 2;
	}
}
$("#upgrade").on("click", "#btn_upgrade_forge", function () {
    task.append(`<div class='tr forge'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Ausbau einer Schmiede</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = forge_up.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_upgrade = setInterval(upgrade_forge, 100);
});
$("#task").on("click", ".forge td:first-child", function () {
	clearInterval(interval_upgrade);
	slot_build = false;
	msg.prepend("<p>Schmiede wurde abgebrochen.</p>");
	check_msg();
	$("#task .forge").remove();
});

function upgrade_market() {
    $("#task .market .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= market_up.costs.wood / 2;
		stone -= market_up.costs.stone / 2;
		coal -= market_up.costs.coal / 2;
		iron -= market_up.costs.iron / 2;
        market_up.count = true;
        trade_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Markt wurde ausgebaut.</p>");
        check_msg();
        $("#task .market").remove();
    } else if (timer === timer_half) {
		wood -= market_up.costs.wood / 2;
		stone -= market_up.costs.stone / 2;
		coal -= market_up.costs.coal / 2;
		iron -= market_up.costs.iron / 2;
	}
}
$("#upgrade").on("click", "#btn_upgrade_market", function () {
    task.append(`<div class='tr market'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Ausbau eines Markt</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = market_up.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_upgrade = setInterval(upgrade_market, 100);
});
$("#task").on("click", ".market td:first-child", function () {
	clearInterval(interval_upgrade);
	slot_build = false;
	msg.prepend("<p>Markt wurde abgebrochen.</p>");
	check_msg();
	$("#task .market").remove();
});

function upgrade_scoutpost() {
    $("#task .scoutpost .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= scoutpost_up.costs.wood / 2;
		stone -= scoutpost_up.costs.stone / 2;
		coal -= scoutpost_up.costs.coal / 2;
		iron -= scoutpost_up.costs.iron / 2;
        scoutpost_up.count = true;
        travel_time += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Erkundungsposten wurde ausgebaut.</p>");
        check_msg();
        $("#task .scoutpost").remove();
    } else if (timer === timer_half) {
		wood -= scoutpost_up.costs.wood / 2;
		stone -= scoutpost_up.costs.stone / 2;
		coal -= scoutpost_up.costs.coal / 2;
		iron -= scoutpost_up.costs.iron / 2;
	}
}
$("#upgrade").on("click", "#btn_upgrade_scoutpost", function () {
    task.append(`<div class='tr scoutpost'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Ausbau eines Erkundungsposten</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = scoutpost_up.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_upgrade = setInterval(upgrade_scoutpost, 100);
});
$("#task").on("click", ".scoutpost td:first-child", function () {
	clearInterval(interval_upgrade);
	slot_build = false;
	msg.prepend("<p>Erkundungsposten wurde abgebrochen.</p>");
	check_msg();
	$("#task .scoutpost").remove();
});

function upgrade_barracks() {
    $("#task .barracks .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= barracks_up.costs.wood / 2;
		stone -= barracks_up.costs.stone / 2;
		coal -= barracks_up.costs.coal / 2;
		iron -= barracks_up.costs.iron / 2;
        barracks_up.count = true;
        damage_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Kaserne wurde ausgebaut.</p>");
        check_msg();
        $("#task .barracks").remove();
    } else if (timer === timer_half) {
		wood -= barracks_up.costs.wood / 2;
		stone -= barracks_up.costs.stone / 2;
		coal -= barracks_up.costs.coal / 2;
		iron -= barracks_up.costs.iron / 2;
	}
}
$("#upgrade").on("click", "#btn_upgrade_barracks", function () {
    task.append(`<div class='tr barracks'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Ausbau einer Kaserne</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = barracks_up.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_upgrade = setInterval(upgrade_barracks, 100);
});
$("#task").on("click", ".barracks td:first-child", function () {
	clearInterval(interval_upgrade);
	slot_build = false;
	msg.prepend("<p>Kaserne wurde abgebrochen.</p>");
	check_msg();
	$("#task .barracks").remove();
});

function upgrade_stable() {
    $("#task .stable .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= stable_up.costs.wood / 2;
		stone -= stable_up.costs.stone / 2;
		coal -= stable_up.costs.coal / 2;
		iron -= stable_up.costs.iron / 2;
        stable_up.count = true;
        breed_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Pferdestall wurde ausgebaut.</p>");
        check_msg();
        $("#task .stable").remove();
    } else if (timer === timer_half) {
		wood -= stable_up.costs.wood / 2;
		stone -= stable_up.costs.stone / 2;
		coal -= stable_up.costs.coal / 2;
		iron -= stable_up.costs.iron / 2;
	}
}
$("#upgrade").on("click", "#btn_upgrade_stable", function () {
    task.append(`<div class='tr stable'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Ausbau eines Pferdestall</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = stable_up.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_upgrade = setInterval(upgrade_stable, 100);
});
$("#task").on("click", ".stable td:first-child", function () {
	clearInterval(interval_upgrade);
	slot_build = false;
	msg.prepend("<p>Pferdestall wurde abgebrochen.</p>");
	check_msg();
	$("#task .stable").remove();
});