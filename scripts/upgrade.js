/*eslint-disable no-undef*/
/*jslint white:true*/
function upgrade_hut() {
    $("#task .hut.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        hut -= 1;
        villager_max += 3;
        clearInterval(upgrade);
        slot_building = false;
        msg.prepend("<p>Hütte wurde ausgebaut.</p>");
        $("#task .hut").remove();
    }
}
$("#btn_upgrade_hut").click(function () {
    task.append("<td class='hut'>Ausbau einer Hütte</td>");
    task.append("<td class='hut time'></td>");
    wood -= 100;
    stone -= 20;
    slot_building = true;
    timer = curr_time_upgrade_hut;
    upgrade = setInterval(upgrade_hut, speed / 10);
});

function upgrade_huntinghut() {
    $("#task .huntinghut.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        up_huntinghut = true;
        leather_bonus += 1;
        clearInterval(upgrade);
        slot_building = false;
        msg.prepend("<p>Jagdhütte wurde ausgebaut.</p>");
        $("#task .huntinghut").remove();
    }
}
$("#btn_upgrade_huntinghut").click(function () {
    task.append("<td class='huntinghut'>Ausbau einer Jagdhütte</td>");
    task.append("<td class='huntinghut time'></td>");
    wood -= 300;
    stone -= 60;
    slot_building = true;
    timer = curr_time_upgrade_huntinghut;
    upgrade = setInterval(upgrade_huntinghut, speed / 10);
});

function upgrade_storage() {
    $("#task .storage.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        resources_max += 500;
        lvl_storage += 1;
        clearInterval(upgrade);
        slot_building = false;
        msg.prepend("<p>Lager wurde ausgebaut.</p>");
        $("#task .storage").remove();
    }
}
$("#btn_upgrade_storage").click(function () {
    task.append("<td class='storage'>Ausbau eines Lager</td>");
    task.append("<td class='storage time'></td>");
    wood -= 300;
    stone -= 300;
    slot_building = true;
    timer = curr_time_upgrade_storage;
    upgrade = setInterval(upgrade_storage, speed / 10);
});

function upgrade_lumberjackhut() {
    $("#task .lumberjackhut.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        up_lumberjackhut = true;
        wood_bonus += 1;
        clearInterval(upgrade);
        slot_building = false;
        msg.prepend("<p>Holzfällerhütte wurde ausgebaut.</p>");
        $("#task .lumberjackhut").remove();
    }
}
$("#btn_upgrade_lumberjackhut").click(function () {
    task.append("<td class='lumberjackhut'>Ausbau einer Holzfällerhütte</td>");
    task.append("<td class='lumberjackhut time'></td>");
    wood -= 400;
    stone -= 100;
    slot_building = true;
    timer = curr_time_upgrade_lumberjackhut;
    upgrade = setInterval(upgrade_lumberjackhut, speed / 10);
});

function upgrade_sheepstall() {
    $("#task .sheepstall.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        up_sheepstall = true;
        cloth_bonus += 1;
        clearInterval(upgrade);
        slot_building = false;
        msg.prepend("<p>Schafstall wurde ausgebaut.</p>");
        $("#task .sheepstall").remove();
    }
}
$("#btn_upgrade_sheepstall").click(function () {
    task.append("<td class='sheepstall'>Ausbau eines Schafstall</td>");
    task.append("<td class='sheepstall time'></td>");
    wood -= 500;
    stone -= 150;
    slot_building = true;
    timer = curr_time_upgrade_sheepstall;
    upgrade = setInterval(upgrade_sheepstall, speed / 10);
});

function upgrade_quarry() {
    $("#task .quarry.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        up_quarry = true;
        stone_bonus += 1;
        clearInterval(upgrade);
        slot_building = false;
        msg.prepend("<p>Steinbruch wurde ausgebaut.</p>");
        $("#task .quarry").remove();
    }
}
$("#btn_upgrade_quarry").click(function () {
    task.append("<td class='quarry'>Ausbau eines Steinbruch</td>");
    task.append("<td class='quarry time'></td>");
    wood -= 600;
    stone -= 200;
    slot_building = true;
    timer = curr_time_upgrade_quarry;
    upgrade = setInterval(upgrade_quarry, speed / 10);
});

function upgrade_coalmine() {
    $("#task .coalmine.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        up_coalmine = true;
        coal_bonus += 1;
        clearInterval(upgrade);
        slot_building = false;
        msg.prepend("<p>Kohlemine wurde ausgebaut.</p>");
        $("#task .coalmine").remove();
    }
}
$("#btn_upgrade_coalmine").click(function () {
    task.append("<td class='coalmine'>Ausbau einer Kohlemine</td>");
    task.append("<td class='coalmine time'></td>");
    wood -= 600;
    stone -= 300;
    slot_building = true;
    timer = curr_time_upgrade_coalmine;
    upgrade = setInterval(upgrade_coalmine, speed / 10);
});

function upgrade_ironmine() {
    $("#task .ironmine.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        up_ironmine = true;
        iron_bonus += 1;
        clearInterval(upgrade);
        slot_building = false;
        msg.prepend("<p>Eisenmine wurde ausgebaut.</p>");
        $("#task .ironmine").remove();
    }
}
$("#btn_upgrade_ironmine").click(function () {
    task.append("<td class='ironmine'>Ausbau einer Eisenmine</td>");
    task.append("<td class='ironmine time'></td>");
    wood -= 800;
    stone -= 400;
    coal -= 100;
    slot_building = true;
    timer = curr_time_upgrade_ironmine;
    upgrade = setInterval(upgrade_ironmine, speed / 10);
});

function upgrade_tailorhouse() {
    $("#task .tailorhouse.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        up_tailorhouse = true;
        clothes_bonus += 1;
        clearInterval(upgrade);
        slot_building = false;
        msg.prepend("<p>Schneiderhaus wurde ausgebaut.</p>");
        $("#task .tailorhouse").remove();
    }
}
$("#btn_upgrade_tailorhouse").click(function () {
    task.append("<td class='tailorhouse'>Ausbau eines Schneiderhaus</td>");
    task.append("<td class='tailorhouse time'></td>");
    wood -= 1000;
    stone -= 800;
    coal -= 400;
    slot_building = true;
    timer = curr_time_upgrade_tailorhouse;
    upgrade = setInterval(upgrade_tailorhouse, speed / 10);
});

function upgrade_forge() {
    $("#task .forge.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        up_forge = true;
        craft_time += 1;
        clearInterval(upgrade);
        slot_building = false;
        msg.prepend("<p>Schmiede wurde ausgebaut.</p>");
        $("#task .forge").remove();
    }
}
$("#btn_upgrade_forge").click(function () {
    task.append("<td class='forge'>Ausbau einer Schmiede</td>");
    task.append("<td class='forge time'></td>");
    wood -= 1200;
    stone -= 900;
    coal -= 500;
    iron -= 100;
    slot_building = true;
    timer = curr_time_upgrade_forge;
    upgrade = setInterval(upgrade_forge, speed / 10);
});

function upgrade_market() {
    $("#task .market.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        up_market = true;
        trade_bonus += 1;
        clearInterval(upgrade);
        slot_building = false;
        msg.prepend("<p>Markt wurde ausgebaut.</p>");
        $("#task .market").remove();
    }
}
$("#btn_upgrade_market").click(function () {
    task.append("<td class='market'>Ausbau eines Markt</td>");
    task.append("<td class='market time'></td>");
    wood -= 1500;
    stone -= 1000;
    coal -= 600;
    iron -= 200;
    slot_building = true;
    timer = curr_time_upgrade_market;
    upgrade = setInterval(upgrade_market, speed / 10);
});

function upgrade_scoutpost() {
    $("#task .scoutpost.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        up_scoutpost = true;
        travel_time += 1;
        clearInterval(upgrade);
        slot_building = false;
        msg.prepend("<p>Erkundungsposten wurde ausgebaut.</p>");
        $("#task .scoutpost").remove();
    }
}
$("#btn_upgrade_scoutpost").click(function () {
    task.append("<td class='scoutpost'>Ausbau eines Erkundungsposten</td>");
    task.append("<td class='scoutpost time'></td>");
    wood -= 2000;
    stone -= 1500;
    coal -= 800;
    iron -= 500;
    slot_building = true;
    timer = curr_time_upgrade_scoutpost;
    upgrade = setInterval(upgrade_scoutpost, speed / 10);
});

function upgrade_barracks() {
    $("#task .barracks.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        up_barracks = true;
        damage_bonus += 1;
        clearInterval(upgrade);
        slot_building = false;
        msg.prepend("<p>Kaserne wurde ausgebaut.</p>");
        $("#task .barracks").remove();
    }
}
$("#btn_upgrade_barracks").click(function () {
    task.append("<td class='barracks'>Ausbau einer Kaserne</td>");
    task.append("<td class='barracks time'></td>");
    wood -= 3000;
    stone -= 2400;
    coal -= 2000;
    iron -= 1600;
    slot_building = true;
    timer = curr_time_upgrade_barracks;
    upgrade = setInterval(upgrade_barracks, speed / 10);
});