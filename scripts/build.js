/*eslint-disable no-undef*/
/*jslint white:true*/
function build_hut() {
    $("#task . .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        hut.count += 1;
        villager.max += 2;
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Hütte wurde fertiggestellt.</p>");
        check_msg();
        $("#task .hut").remove();
    }
}
$("#build").on("click", "#btn_hut", function () {
    task.append(`<tr class='hut'>
				<td>&#x2716;</td>
                <td>Bau einer Hütte</td>
                <td class='time'></td>
                </tr>`);
    wood -= hut.costs.wood;
    stone -= hut.costs.stone;
    slot_build = true;
    timer = hut.curr_time * (speed / 1000);
    interval_build = setInterval(build_hut, 100);
});

function build_huntinghut() {
    $("#task . .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        huntinghut.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Jagdhütte wurde fertiggestellt.</p>");
        check_msg();
        $("#task .huntinghut").remove();
    }
}
$("#build").on("click", "#btn_huntinghut", function () {
    task.append(`<tr class='huntinghut'>
				<td>&#x2716;</td>
                <td>Bau einer Jagdhütte</td>
                <td class='time'></td>
                </tr>`);
    wood -= huntinghut.costs.wood;
    stone -= huntinghut.costs.stone;
    slot_build = true;
    timer = huntinghut.curr_time * (speed / 1000);
    interval_build = setInterval(build_huntinghut, 100);
});

function build_storage() {
    $("#task . .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        storage.count = true;
        supplies_max += 400;
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Lager wurde fertiggestellt.</p>");
        check_msg();
        $("#task .storage").remove();
    }
}
$("#build").on("click", "#btn_storage", function () {
    task.append(`<tr class='storage'>
				<td>&#x2716;</td>
                <td>Bau eines Lager</td>
                <td class='time'></td>
                </tr>`);
    wood -= storage.costs.wood;
    stone -= storage.costs.stone;
    slot_build = true;
    timer = storage.curr_time * (speed / 1000);
    interval_build = setInterval(build_storage, 100);
});

function build_lumberjackhut() {
    $("#task . .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        lumberjackhut.count = true;
        wood_bonus += 1;
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Holzfällerhütte wurde fertiggestellt.</p>");
        check_msg();
        $("#task .lumberjackhut").remove();
    }
}
$("#build").on("click", "#btn_lumberjackhut", function () {
    task.append(`<tr class='lumberjackhut'>
				<td>&#x2716;</td>
                <td>Bau einer Holzfällerhütte</td>
                <td class='time'></td>
                </tr>`);
    wood -= lumberjackhut.costs.wood;
    stone -= lumberjackhut.costs.stone;
    slot_build = true;
    timer = lumberjackhut.curr_time * (speed / 1000);
    interval_build = setInterval(build_lumberjackhut, 100);
});

function build_sheepstall() {
    $("#task . .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        sheepstall.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Schafstall wurde fertiggestellt.</p>");
        check_msg();
        $("#task .sheepstall").remove();
    }
}
$("#build").on("click", "#btn_sheepstall", function () {
    task.append(`<tr class='sheepstall'>
				<td>&#x2716;</td>
                <td>Bau eines Schafstall</td>
                <td class='time'></td>
                </tr>`);
    wood -= sheepstall.costs.wood;
    stone -= sheepstall.costs.stone;
    slot_build = true;
    timer = sheepstall.curr_time * (speed / 1000);
    interval_build = setInterval(build_sheepstall, 100);
});

function build_quarry() {
    $("#task . .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        quarry.count = true;
        stone_bonus += 1;
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Steinbruch wurde fertiggestellt.</p>");
        check_msg();
        $("#task .quarry").remove();
    }
}
$("#build").on("click", "#btn_quarry", function () {
    task.append(`<tr class='quarry'>
				<td>&#x2716;</td>
                <td>Bau eines Steinbruch</td>
                <td class='time'></td>
                </tr>`);
    wood -= quarry.costs.wood;
    stone -= quarry.costs.stone;
    slot_build = true;
    timer = quarry.curr_time * (speed / 1000);
    interval_build = setInterval(build_quarry, 100);
});

function build_coalmine() {
    $("#task . .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        coalmine.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Kohlemine wurde fertiggestellt.</p>");
        check_msg();
        $("#task .coalmine").remove();
    }
}
$("#build").on("click", "#btn_coalmine", function () {
    task.append(`<tr class='coalmine'>
				<td>&#x2716;</td>
                <td>Bau einer Kohlemine</td>
                <td class='time'></td>
                </tr>`);
    wood -= coalmine.costs.wood;
    stone -= coalmine.costs.stone;
    slot_build = true;
    timer = coalmine.curr_time * (speed / 1000);
    interval_build = setInterval(build_coalmine, 100);
});

function build_ironmine() {
    $("#task . .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        ironmine.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Eisenmine wurde fertiggestellt.</p>");
        check_msg();
        $("#task .ironmine").remove();
    }
}
$("#build").on("click", "#btn_ironmine", function () {
    task.append(`<tr class='ironmine'>
				<td>&#x2716;</td>
                <td>Bau einer Eisenmine</td>
                <td class='time'></td>
                </tr>`);
    wood -= ironmine.costs.wood;
    stone -= ironmine.costs.stone;
    coal -= ironmine.costs.coal;
    slot_build = true;
    timer = ironmine.curr_time * (speed / 1000);
    interval_build = setInterval(build_ironmine, 100);
});

function build_tailorhouse() {
    $("#task . .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        tailorhouse.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Schneiderhaus wurde fertiggestellt.</p>");
        check_msg();
        $("#task .tailorhouse").remove();
    }
}
$("#build").on("click", "#btn_tailorhouse", function () {
    task.append(`<tr class='tailorhouse'>
				<td>&#x2716;</td>
                <td>Bau eines Schneiderhaus</td>
                <td class='time'></td>
                </tr>`);
    wood -= tailorhouse.costs.wood;
    stone -= tailorhouse.costs.stone;
    coal -= tailorhouse.costs.coal;
    slot_build = true;
    timer = tailorhouse.curr_time * (speed / 1000);
    interval_build = setInterval(build_tailorhouse, 100);
});

function build_alchemisthut() {
    $("#task . .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        alchemisthut.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Alchemistenhütte wurde fertiggestellt.</p>");
        check_msg();
        $("#task .alchemisthut").remove();
    }
}
$("#build").on("click", "#btn_alchemisthut", function () {
    task.append(`<tr class='quarry'>
				<td>&#x2716;</td>
                <td class='alchemisthut'>Bau einer Alchemistenhütte</td>
                <td class='alchemisthut time'></td>
                </tr>`);
    wood -= alchemisthut.costs.wood;
    stone -= alchemisthut.costs.stone;
    coal -= alchemisthut.costs.coal;
    iron -= alchemisthut.costs.iron;
    slot_build = true;
    timer = alchemisthut.curr_time * (speed / 1000);
    interval_build = setInterval(build_alchemisthut, 100);
});

function build_forge() {
    $("#task . .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        forge.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Schmiede wurde fertiggestellt.</p>");
        check_msg();
        $("#task .forge").remove();
    }
}
$("#build").on("click", "#btn_forge", function () {
    task.append(`<tr class='forge'>
				<td>&#x2716;</td>
                <td>Bau einer Schmiede</td>
                <td class='time'></td>
                </tr>`);
    wood -= forge.costs.wood;
    stone -= forge.costs.stone;
    coal -= forge.costs.coal;
    iron -= forge.costs.iron;
    slot_build = true;
    timer = forge.curr_time * (speed / 1000);
    interval_build = setInterval(build_forge, 100);
});

function build_market() {
    $("#task . .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        market.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Markt wurde fertiggestellt.</p>");
        check_msg();
        $("#task .market").remove();
    }
}
$("#build").on("click", "#btn_market", function () {
    task.append(`<tr class='market'>
				<td>&#x2716;</td>
                <td>Bau eines Markt</td>
                <td class='time'></td>
                </tr>`);
    wood -= market.costs.wood;
    stone -= market.costs.stone;
    coal -= market.costs.coal;
    iron -= market.costs.iron;
    slot_build = true;
    timer = market.curr_time * (speed / 1000);
    interval_build = setInterval(build_market, 100);
});

function build_scoutpost() {
    $("#task . .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        scoutpost.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Erkundungsposten wurde fertiggestellt.</p>");
        check_msg();
        $("#task .scoutpost").remove();
    }
}
$("#build").on("click", "#btn_scoutpost", function () {
    task.append(`<tr class='scoutpost'>
				<td>&#x2716;</td>
                <td>Bau eines Erkundungsposten</td>
                <td class='time'></td>
                </tr>`);
    wood -= scoutpost.costs.wood;
    stone -= scoutpost.costs.stone;
    coal -= scoutpost.costs.coal;
    iron -= scoutpost.costs.iron;
    slot_build = true;
    timer = scoutpost.curr_time * (speed / 1000);
    interval_build = setInterval(build_scoutpost, 100);
});

function build_barracks() {
    $("#task . .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        barracks.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Kaserne wurde fertiggestellt.</p>");
        check_msg();
        $("#task .barracks").remove();
    }
}
$("#build").on("click", "#btn_barracks", function () {
    task.append(`<tr class='barracks'>
				<td>&#x2716;</td>
                <td>Bau einer Kaserne</td>
                <td class='time'></td>
                </tr>`);
    wood -= barracks.costs.wood;
    stone -= barracks.costs.stone;
    coal -= barracks.costs.coal;
    iron -= barracks.costs.iron;
    slot_build = true;
    timer = barracks.curr_time * (speed / 1000);
    interval_build = setInterval(build_barracks, 100);
});

function build_stable() {
    $("#task . .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        stable.count = true;
        show_related();
        clearInterval(interval_build);
        slot_build = false;
        msg.prepend("<p>Pferdestall wurde fertiggestellt.</p>");
        check_msg();
        $("#task .stable").remove();
    }
}
$("#build").on("click", "#btn_stable", function () {
    task.append(`<tr class='stable'>
				<td>&#x2716;</td>
                <td>Bau eines Pferdestall</td>
                <td class='time'></td>
                </tr>`);
    wood -= stable.costs.wood;
    stone -= stable.costs.stone;
    coal -= stable.costs.coal;
    iron -= stable.costs.iron;
    slot_build = true;
    timer = stable.curr_time * (speed / 1000);
    interval_build = setInterval(build_stable, 100);
});