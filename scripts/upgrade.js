function upgrade_hut() {
    $("#task .hut .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        hut.count -= 1;
        villager.max += 3;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Hütte wurde ausgebaut.</p>");
        check_msg();
        $("#task .hut").remove();
    }
}
$("#upgrade").on("click", "#btn_upgrade_hut", function () {
    task.append(`<tr class='hut'>
				<td>&#x2716;</td>
                <td>Ausbau einer Hütte</td>
                <td class='time'></td>
                </tr>`);
    wood -= hut_up.costs.wood;
    stone -= hut_up.costs.stone;
    slot_build = true;
    timer = hut_up.curr_time * (speed / 1000);
    interval_upgrade = setInterval(upgrade_hut, 100);
});

function upgrade_huntinghut() {
    $("#task .huntinghut .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        huntinghut_up.count = true;
        leather_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Jagdhütte wurde ausgebaut.</p>");
        check_msg();
        $("#task .huntinghut").remove();
    }
}
$("#upgrade").on("click", "#btn_upgrade_huntinghut", function () {
    task.append(`<tr class='huntinghut'>
				<td>&#x2716;</td>
                <td>Ausbau einer Jagdhütte</td>
                <td class='time'></td>
                </tr>`);
    wood -= huntinghut_up.costs.wood;
    stone -= huntinghut_up.costs.stone;
    slot_build = true;
    timer = huntinghut_up.curr_time * (speed / 1000);
    interval_upgrade = setInterval(upgrade_huntinghut, 100);
});

function upgrade_storage() {
    $("#task .storage .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        supplies_max += 500;
        storage_up.count += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Lager wurde ausgebaut.</p>");
        check_msg();
        $("#task .storage").remove();
    }
}
$("#upgrade").on("click", "#btn_upgrade_storage", function () {
    task.append(`<tr class='storage'>
				<td>&#x2716;</td>
                <td>Ausbau eines Lager</td>
                <td class='time'></td>
                </tr>`);
    wood -= storage_up.costs.wood;
    stone -= storage_up.costs.stone;
    slot_build = true;
    timer = storage_up.curr_time * (speed / 1000);
    interval_upgrade = setInterval(upgrade_storage, 100);
});

function upgrade_lumberjackhut() {
    $("#task .lumberjackhut .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        lumberjackhut_up.count = true;
        wood_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Holzfällerhütte wurde ausgebaut.</p>");
        check_msg();
        $("#task .lumberjackhut").remove();
    }
}
$("#upgrade").on("click", "#btn_upgrade_lumberjackhut", function () {
    task.append(`<tr class='lumberjackhut'>
				<td>&#x2716;</td>
                <td>Ausbau einer Holzfällerhütte</td>
                <td class='time'></td>
                </tr>`);
    wood -= lumberjackhut_up.costs.wood;
    stone -= lumberjackhut_up.costs.stone;
    slot_build = true;
    timer = lumberjackhut_up.curr_time * (speed / 1000);
    interval_upgrade = setInterval(upgrade_lumberjackhut, 100);
});

function upgrade_sheepstall() {
    $("#task .sheepstall .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        sheepstall_up.count = true;
        cloth_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Schafstall wurde ausgebaut.</p>");
        check_msg();
        $("#task .sheepstall").remove();
    }
}
$("#upgrade").on("click", "#btn_upgrade_sheepstall", function () {
    task.append(`<tr class='sheepstall'>
				<td>&#x2716;</td>
                <td>Ausbau eines Schafstall</td>
                <td class='time'></td>
                </tr>`);
    wood -= sheepstall_up.costs.wood;
    stone -= sheepstall_up.costs.stone;
    slot_build = true;
    timer = sheepstall_up.curr_time * (speed / 1000);
    interval_upgrade = setInterval(upgrade_sheepstall, 100);
});

function upgrade_quarry() {
    $("#task .quarry .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        quarry_up.count = true;
        stone_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Steinbruch wurde ausgebaut.</p>");
        check_msg();
        $("#task .quarry").remove();
    }
}
$("#upgrade").on("click", "#btn_upgrade_quarry", function () {
    task.append(`<tr class='quarry'>
				<td>&#x2716;</td>
                <td>Ausbau eines Steinbruch</td>
                <td class='time'></td>
                </tr>`);
    wood -= quarry_up.costs.wood;
    stone -= quarry_up.costs.stone;
    slot_build = true;
    timer = quarry_up.curr_time * (speed / 1000);
    interval_upgrade = setInterval(upgrade_quarry, 100);
});

function upgrade_coalmine() {
    $("#task .coalmine .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        coalmine_up.count = true;
        coal_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Kohlemine wurde ausgebaut.</p>");
        check_msg();
        $("#task .coalmine").remove();
    }
}
$("#upgrade").on("click", "#btn_upgrade_coalmine", function () {
    task.append(`<tr class='coalmine'>
				<td>&#x2716;</td>
                <td>Ausbau einer Kohlemine</td>
                <td class='time'></td>
                </tr>`);
    wood -= coalmine_up.costs.wood;
    stone -= coalmine_up.costs.stone;
    slot_build = true;
    timer = coalmine_up.curr_time * (speed / 1000);
    interval_upgrade = setInterval(upgrade_coalmine, 100);
});

function upgrade_ironmine() {
    $("#task .ironmine .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        ironmine_up.count = true;
        iron_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Eisenmine wurde ausgebaut.</p>");
        check_msg();
        $("#task .ironmine").remove();
    }
}
$("#upgrade").on("click", "#btn_upgrade_ironmine", function () {
    task.append(`<tr class='ironmine'>
				<td>&#x2716;</td>
                <td>Ausbau einer Eisenmine</td>
                <td class='time'></td>
                </tr>`);
    wood -= ironmine_up.costs.wood;
    stone -= ironmine_up.costs.stone;
    coal -= ironmine_up.costs.coal;
    slot_build = true;
    timer = ironmine_up.curr_time * (speed / 1000);
    interval_upgrade = setInterval(upgrade_ironmine, 100);
});

function upgrade_tailorhouse() {
    $("#task .tailorhouse .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        tailorhouse_up.count = true;
        clothes_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Schneiderhaus wurde ausgebaut.</p>");
        check_msg();
        $("#task .tailorhouse").remove();
    }
}
$("#upgrade").on("click", "#btn_upgrade_tailorhouse", function () {
    task.append(`<tr class='tailorhouse'>
				<td>&#x2716;</td>
                <td>Ausbau eines Schneiderhaus</td>
                <td class='time'></td>
                </tr>`);
    wood -= tailorhouse_up.costs.wood;
    stone -= tailorhouse_up.costs.stone;
    coal -= tailorhouse_up.costs.coal;
    slot_build = true;
    timer = tailorhouse_up.curr_time * (speed / 1000);
    interval_upgrade = setInterval(upgrade_tailorhouse, 100);
});

function upgrade_alchemisthut() {
    $("#task .alchemisthut .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        alchemisthut_up.count = true;
        brew_time += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Alchemistenhütte wurde ausgebaut.</p>");
        check_msg();
        $("#task .alchemisthut").remove();
    }
}
$("#upgrade").on("click", "#btn_upgrade_alchemisthut", function () {
    task.append(`<tr class='alchemisthut'>
				<td>&#x2716;</td>
                <td>Ausbau einer Alchemistenhütte</td>
                <td class='time'></td>
                </tr>`);
    wood -= alchemisthut_up.costs.wood;
    stone -= alchemisthut_up.costs.stone;
    coal -= alchemisthut_up.costs.coal;
    iron -= alchemisthut_up.costs.iron;
    slot_build = true;
    timer = alchemisthut_up.curr_time * (speed / 1000);
    interval_upgrade = setInterval(upgrade_alchemisthut, 100);
});

function upgrade_forge() {
    $("#task .forge .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        forge_up.count = true;
        craft_time += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Schmiede wurde ausgebaut.</p>");
        check_msg();
        $("#task .forge").remove();
    }
}
$("#upgrade").on("click", "#btn_upgrade_forge", function () {
    task.append(`<tr class='forge'>
				<td>&#x2716;</td>
                <td>Ausbau einer Schmiede</td>
                <td class='time'></td>
                </tr>`);
    wood -= forge_up.costs.wood;
    stone -= forge_up.costs.stone;
    coal -= forge_up.costs.coal;
    iron -= forge_up.costs.iron;
    slot_build = true;
    timer = forge_up.curr_time * (speed / 1000);
    interval_upgrade = setInterval(upgrade_forge, 100);
});

function upgrade_market() {
    $("#task .market .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        market_up.count = true;
        trade_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Markt wurde ausgebaut.</p>");
        check_msg();
        $("#task .market").remove();
    }
}
$("#upgrade").on("click", "#btn_upgrade_market", function () {
    task.append(`<tr class='market'>
				<td>&#x2716;</td>
                <td>Ausbau eines Markt</td>
                <td class='time'></td>
                </tr>`);
    wood -= market_up.costs.wood;
    stone -= market_up.costs.stone;
    coal -= market_up.costs.coal;
    iron -= market_up.costs.iron;
    slot_build = true;
    timer = market_up.curr_time * (speed / 1000);
    interval_upgrade = setInterval(upgrade_market, 100);
});

function upgrade_scoutpost() {
    $("#task .scoutpost .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        scoutpost_up.count = true;
        travel_time += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Erkundungsposten wurde ausgebaut.</p>");
        check_msg();
        $("#task .scoutpost").remove();
    }
}
$("#upgrade").on("click", "#btn_upgrade_scoutpost", function () {
    task.append(`<tr class='scoutpost'>
				<td>&#x2716;</td>
                <td>Ausbau eines Erkundungsposten</td>
                <td class='time'></td>
                </tr>`);
    wood -= scoutpost_up.costs.wood;
    stone -= scoutpost_up.costs.stone;
    coal -= scoutpost_up.costs.coal;
    iron -= scoutpost_up.costs.iron;
    slot_build = true;
    timer = scoutpost_up.curr_time * (speed / 1000);
    interval_upgrade = setInterval(upgrade_scoutpost, 100);
});

function upgrade_barracks() {
    $("#task .barracks .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        barracks_up.count = true;
        damage_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Kaserne wurde ausgebaut.</p>");
        check_msg();
        $("#task .barracks").remove();
    }
}
$("#upgrade").on("click", "#btn_upgrade_barracks", function () {
    task.append(`<tr class='barracks'>
				<td>&#x2716;</td>
                <td>Ausbau einer Kaserne</td>
                <td class='time'></td>
                </tr>`);
    wood -= barracks_up.costs.wood;
    stone -= barracks_up.costs.stone;
    coal -= barracks_up.costs.coal;
    iron -= barracks_up.costs.iron;
    slot_build = true;
    timer = barracks_up.curr_time * (speed / 1000);
    interval_upgrade = setInterval(upgrade_barracks, 100);
});

function upgrade_stable() {
    $("#task .stable .time").text(secondsTommss(timer));
    timer = Number((timer - 0.1).toFixed(1));
    if (timer < 0) {
        stable_up.count = true;
        breed_bonus += 1;
        clearInterval(interval_upgrade);
        slot_build = false;
        msg.prepend("<p>Pferdestall wurde ausgebaut.</p>");
        check_msg();
        $("#task .stable").remove();
    }
}
$("#upgrade").on("click", "#btn_upgrade_stable", function () {
    task.append(`<tr class='stable'>
				<td>&#x2716;</td>
                <td>Ausbau eines Pferdestall</td>
                <td class='time'></td>
                </tr>`);
    wood -= stable_up.costs.wood;
    stone -= stable_up.costs.stone;
    coal -= stable_up.costs.coal;
    iron -= stable_up.costs.iron;
    slot_build = true;
    timer = stable_up.curr_time * (speed / 1000);
    interval_upgrade = setInterval(upgrade_stable, 100);
});