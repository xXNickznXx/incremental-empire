var timer_half;

function build_hut() {
    $("#task .hut .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= hut.costs.wood / 2;
		stone -= hut.costs.stone / 2;
        hut.count += 1;
        villager.max += 2;
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Hütte wurde fertiggestellt.</p>");
        check_msg();
        $("#task .hut").remove();
    } else if (timer === timer_half) {
		wood -= hut.costs.wood / 2;
		stone -= hut.costs.stone / 2;
	}
}
$("#build").on("click", "#btn_hut", function () {
    task.append(`<div class='tr hut'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Bau einer Hütte</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = hut.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_build = setInterval(build_hut, 100);
});
$("#task").on("click", ".hut td:first-child", function () {
	clearInterval(interval_build);
	slot_build = false;
	msg.prepend("<p>Hütte wurde abgebrochen.</p>");
	check_msg();
	$("#task .hut").remove();
});

function build_huntinghut() {
    $("#task .huntinghut .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= huntinghut.costs.wood / 2;
		stone -= huntinghut.costs.stone / 2;
        huntinghut.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Jagdhütte wurde fertiggestellt.</p>");
        check_msg();
        $("#task .huntinghut").remove();
    } else if (timer === timer_half) {
		wood -= huntinghut.costs.wood / 2;
		stone -= huntinghut.costs.stone / 2;
	}
}
$("#build").on("click", "#btn_huntinghut", function () {
    task.append(`<div class='tr huntinghut'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Bau einer Jagdhütte</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = huntinghut.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_build = setInterval(build_huntinghut, 100);
});
$("#task").on("click", ".huntinghut td:first-child", function () {
	clearInterval(interval_build);
	slot_build = false;
	msg.prepend("<p>Jagdhütte wurde abgebrochen.</p>");
	check_msg();
	$("#task .huntinghut").remove();
});

function build_storage() {
    $("#task .storage .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= storage.costs.wood / 2;
		stone -= storage.costs.stone / 2;
        storage.count = true;
        supplies_max += 400;
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Lager wurde fertiggestellt.</p>");
        check_msg();
        $("#task .storage").remove();
    } else if (timer === timer_half) {
		wood -= storage.costs.wood / 2;
		stone -= storage.costs.stone / 2;
	}
}
$("#build").on("click", "#btn_storage", function () {
    task.append(`<div class='tr storage'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Bau eines Lager</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = storage.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_build = setInterval(build_storage, 100);
});
$("#task").on("click", ".storage td:first-child", function () {
	clearInterval(interval_build);
	slot_build = false;
	msg.prepend("<p>Lager wurde abgebrochen.</p>");
	check_msg();
	$("#task .storage").remove();
});

function build_lumberjackhut() {
    $("#task .lumberjackhut .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= lumberjackhut.costs.wood / 2;
		stone -= lumberjackhut.costs.stone / 2;
        lumberjackhut.count = true;
        wood_bonus += 1;
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Holzfällerhütte wurde fertiggestellt.</p>");
        check_msg();
        $("#task .lumberjackhut").remove();
    } else if (timer === timer_half) {
		wood -= lumberjackhut.costs.wood / 2;
		stone -= lumberjackhut.costs.stone / 2;
	}
}
$("#build").on("click", "#btn_lumberjackhut", function () {
    task.append(`<div class='tr lumberjackhut'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Bau einer Holzfällerhütte</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = lumberjackhut.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_build = setInterval(build_lumberjackhut, 100);
});
$("#task").on("click", ".lumberjackhut td:first-child", function () {
	clearInterval(interval_build);
	slot_build = false;
	msg.prepend("<p>Holzfällerhütte wurde abgebrochen.</p>");
	check_msg();
	$("#task .lumberjackhut").remove();
});

function build_sheepstall() {
    $("#task .sheepstall .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= sheepstall.costs.wood / 2;
		stone -= sheepstall.costs.stone / 2;
        sheepstall.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Schafstall wurde fertiggestellt.</p>");
        check_msg();
        $("#task .sheepstall").remove();
    } else if (timer === timer_half) {
		wood -= sheepstall.costs.wood / 2;
		stone -= sheepstall.costs.stone / 2;
	}
}
$("#build").on("click", "#btn_sheepstall", function () {
    task.append(`<div class='tr sheepstall'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Bau eines Schafstall</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = sheepstall.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_build = setInterval(build_sheepstall, 100);
});
$("#task").on("click", ".sheepstall td:first-child", function () {
	clearInterval(interval_build);
	slot_build = false;
	msg.prepend("<p>Schafstall wurde abgebrochen.</p>");
	check_msg();
	$("#task .sheepstall").remove();
});

function build_quarry() {
    $("#task .quarry .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= quarry.costs.wood / 2;
		stone -= quarry.costs.stone / 2;
        quarry.count = true;
        stone_bonus += 1;
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Steinbruch wurde fertiggestellt.</p>");
        check_msg();
        $("#task .quarry").remove();
    } else if (timer === timer_half) {
		wood -= quarry.costs.wood / 2;
		stone -= quarry.costs.stone / 2;
	}
}
$("#build").on("click", "#btn_quarry", function () {
    task.append(`<div class='tr quarry'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Bau eines Steinbruch</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = quarry.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_build = setInterval(build_quarry, 100);
});
$("#task").on("click", ".quarry td:first-child", function () {
	clearInterval(interval_build);
	slot_build = false;
	msg.prepend("<p>Steinbruch wurde abgebrochen.</p>");
	check_msg();
	$("#task .quarry").remove();
});

function build_coalmine() {
    $("#task .coalmine .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= coalmine.costs.wood / 2;
		stone -= coalmine.costs.stone / 2;
        coalmine.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Kohlemine wurde fertiggestellt.</p>");
        check_msg();
        $("#task .coalmine").remove();
    } else if (timer === timer_half) {
		wood -= coalmine.costs.wood / 2;
		stone -= coalmine.costs.stone / 2;
	}
}
$("#build").on("click", "#btn_coalmine", function () {
    task.append(`<div class='tr coalmine'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Bau einer Kohlemine</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = coalmine.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_build = setInterval(build_coalmine, 100);
});
$("#task").on("click", ".coalmine td:first-child", function () {
	clearInterval(interval_build);
	slot_build = false;
	msg.prepend("<p>Kohlemine wurde abgebrochen.</p>");
	check_msg();
	$("#task .coalmine").remove();
});

function build_ironmine() {
    $("#task .ironmine .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= ironmine.costs.wood / 2;
		stone -= ironmine.costs.stone / 2;
		coal -= ironmine.costs.coal / 2;
        ironmine.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Eisenmine wurde fertiggestellt.</p>");
        check_msg();
        $("#task .ironmine").remove();
    } else if (timer === timer_half) {
		wood -= ironmine.costs.wood / 2;
		stone -= ironmine.costs.stone / 2;
		coal -= ironmine.costs.coal / 2;
	}
}
$("#build").on("click", "#btn_ironmine", function () {
    task.append(`<div class='tr ironmine'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Bau einer Eisenmine</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = ironmine.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_build = setInterval(build_ironmine, 100);
});
$("#task").on("click", ".ironmine td:first-child", function () {
	clearInterval(interval_build);
	slot_build = false;
	msg.prepend("<p>Eisenmine wurde abgebrochen.</p>");
	check_msg();
	$("#task .ironmine").remove();
});

function build_tailorhouse() {
    $("#task .tailorhouse .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= tailorhouse.costs.wood / 2;
		stone -= tailorhouse.costs.stone / 2;
		coal -= tailorhouse.costs.coal / 2;
        tailorhouse.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Schneiderhaus wurde fertiggestellt.</p>");
        check_msg();
        $("#task .tailorhouse").remove();
    } else if (timer === timer_half) {
		wood -= tailorhouse.costs.wood / 2;
		stone -= tailorhouse.costs.stone / 2;
		coal -= tailorhouse.costs.coal / 2;
	}
}
$("#build").on("click", "#btn_tailorhouse", function () {
    task.append(`<div class='tr tailorhouse'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Bau eines Schneiderhaus</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = tailorhouse.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_build = setInterval(build_tailorhouse, 100);
});
$("#task").on("click", ".tailorhouse td:first-child", function () {
	clearInterval(interval_build);
	slot_build = false;
	msg.prepend("<p>Schneiderhaus wurde abgebrochen.</p>");
	check_msg();
	$("#task .tailorhouse").remove();
});

function build_alchemisthut() {
    $("#task .alchemisthut .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= alchemisthut.costs.wood / 2;
		stone -= alchemisthut.costs.stone / 2;
		coal -= alchemisthut.costs.coal / 2;
		iron -= alchemisthut.costs.iron / 2;
        alchemisthut.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Alchemistenhütte wurde fertiggestellt.</p>");
        check_msg();
        $("#task .alchemisthut").remove();
    } else if (timer === timer_half) {
		wood -= alchemisthut.costs.wood / 2;
		stone -= alchemisthut.costs.stone / 2;
		coal -= alchemisthut.costs.coal / 2;
		iron -= alchemisthut.costs.iron / 2;
	}
}
$("#build").on("click", "#btn_alchemisthut", function () {
    task.append(`<div class='tr alchemisthut'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Bau einer Alchemistenhütte</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = alchemisthut.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_build = setInterval(build_alchemisthut, 100);
});
$("#task").on("click", ".alchemisthut td:first-child", function () {
	clearInterval(interval_build);
	slot_build = false;
	msg.prepend("<p>Alchemistenhütte wurde abgebrochen.</p>");
	check_msg();
	$("#task .alchemisthut").remove();
});

function build_forge() {
    $("#task .forge .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= forge.costs.wood / 2;
		stone -= forge.costs.stone / 2;
		coal -= forge.costs.coal / 2;
		iron -= forge.costs.iron / 2;
        forge.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Schmiede wurde fertiggestellt.</p>");
        check_msg();
        $("#task .forge").remove();
    } else if (timer === timer_half) {
		wood -= forge.costs.wood / 2;
		stone -= forge.costs.stone / 2;
		coal -= forge.costs.coal / 2;
		iron -= forge.costs.iron / 2;
	}
}
$("#build").on("click", "#btn_forge", function () {
    task.append(`<div class='tr forge'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Bau einer Schmiede</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = forge.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_build = setInterval(build_forge, 100);
});
$("#task").on("click", ".forge td:first-child", function () {
	clearInterval(interval_build);
	slot_build = false;
	msg.prepend("<p>Schmiede wurde abgebrochen.</p>");
	check_msg();
	$("#task .forge").remove();
});

function build_market() {
    $("#task .market .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= market.costs.wood / 2;
		stone -= market.costs.stone / 2;
		coal -= market.costs.coal / 2;
		iron -= market.costs.iron / 2;
        market.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Markt wurde fertiggestellt.</p>");
        check_msg();
        $("#task .market").remove();
    } else if (timer === timer_half) {
		wood -= market.costs.wood / 2;
		stone -= market.costs.stone / 2;
		coal -= market.costs.coal / 2;
		iron -= market.costs.iron / 2;
	}
}
$("#build").on("click", "#btn_market", function () {
    task.append(`<div class='tr market'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Bau eines Markt</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = market.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_build = setInterval(build_market, 100);
});
$("#task").on("click", ".market td:first-child", function () {
	clearInterval(interval_build);
	slot_build = false;
	msg.prepend("<p>Markt wurde abgebrochen.</p>");
	check_msg();
	$("#task .market").remove();
});

function build_scoutpost() {
    $("#task .scoutpost .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= scoutpost.costs.wood / 2;
		stone -= scoutpost.costs.stone / 2;
		coal -= scoutpost.costs.coal / 2;
		iron -= scoutpost.costs.iron / 2;
        scoutpost.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Erkundungsposten wurde fertiggestellt.</p>");
        check_msg();
        $("#task .scoutpost").remove();
    } else if (timer === timer_half) {
		wood -= scoutpost.costs.wood / 2;
		stone -= scoutpost.costs.stone / 2;
		coal -= scoutpost.costs.coal / 2;
		iron -= scoutpost.costs.iron / 2;
	}
}
$("#build").on("click", "#btn_scoutpost", function () {
    task.append(`<div class='tr scoutpost'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Bau eines Erkundungsposten</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = scoutpost.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_build = setInterval(build_scoutpost, 100);
});
$("#task").on("click", ".scoutpost td:first-child", function () {
	clearInterval(interval_build);
	slot_build = false;
	msg.prepend("<p>Erkundungsposten wurde abgebrochen.</p>");
	check_msg();
	$("#task .scoutpost").remove();
});

function build_barracks() {
    $("#task .barracks .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= barracks.costs.wood / 2;
		stone -= barracks.costs.stone / 2;
		coal -= barracks.costs.coal / 2;
		iron -= barracks.costs.iron / 2;
        barracks.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Kaserne wurde fertiggestellt.</p>");
        check_msg();
        $("#task .barracks").remove();
    } else if (timer === timer_half) {
		wood -= barracks.costs.wood / 2;
		stone -= barracks.costs.stone / 2;
		coal -= barracks.costs.coal / 2;
		iron -= barracks.costs.iron / 2;
	}
}
$("#build").on("click", "#btn_barracks", function () {
    task.append(`<div class='tr barracks'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Bau einer Kaserne</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = barracks.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_build = setInterval(build_barracks, 100);
});
$("#task").on("click", ".barracks td:first-child", function () {
	clearInterval(interval_build);
	slot_build = false;
	msg.prepend("<p>Kaserne wurde abgebrochen.</p>");
	check_msg();
	$("#task .barracks").remove();
});

function build_stable() {
    $("#task .stable .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
		wood -= stable.costs.wood / 2;
		stone -= stable.costs.stone / 2;
		coal -= stable.costs.coal / 2;
		iron -= stable.costs.iron / 2;
        stable.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Pferdestall wurde fertiggestellt.</p>");
        check_msg();
        $("#task .stable").remove();
    } else if (timer === timer_half) {
		wood -= stable.costs.wood / 2;
		stone -= stable.costs.stone / 2;
		coal -= stable.costs.coal / 2;
		iron -= stable.costs.iron / 2;
	}
}
$("#build").on("click", "#btn_stable", function () {
    task.append(`<div class='tr stable'>
				<div class='td'>&#x2716;</div>
                <div class='td'>Bau eines Pferdestall</div>
                </div class='td time'></div>
                </div>`);
    slot_build = true;
    timer = stable.curr_time * (speed / 1000);
	timer_half = Number((timer / 2).toFixed(1));
    interval_build = setInterval(build_stable, 100);
});
$("#task").on("click", ".stable td:first-child", function () {
	clearInterval(interval_build);
	slot_build = false;
	msg.prepend("<p>Pferdestall wurde abgebrochen.</p>");
	check_msg();
	$("#task .stable").remove();
});