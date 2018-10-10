/*eslint-disable no-undef*/
/*jslint white:true*/
function upgrade_hut() {
    $("#task .hut.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        hut -= 1;
        villager_max += 3;
        clearInterval(upgrade);
        slot_build = false;
        msg.prepend("<p>Hütte wurde ausgebaut.</p>");
        check_msg();
        $("#task .hut").remove();
    }
}
$("#btn_upgrade_hut").click(function () {
    task.append(`<tr>
                <td class='hut'>Ausbau einer Hütte</td>
                <td class='hut time'></td>
                </tr>`);
    wood -= 100;
    stone -= 20;
    slot_build = true;
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
        slot_build = false;
        msg.prepend("<p>Jagdhütte wurde ausgebaut.</p>");
        check_msg();
        $("#task .huntinghut").remove();
    }
}
$("#btn_upgrade_huntinghut").click(function () {
    task.append(`<tr>
                <td class='huntinghut'>Ausbau einer Jagdhütte</td>
                <td class='huntinghut time'></td>
                </tr>`);
    wood -= 300;
    stone -= 60;
    slot_build = true;
    timer = curr_time_upgrade_huntinghut;
    upgrade = setInterval(upgrade_huntinghut, speed / 10);
});

function upgrade_storage() {
    $("#task .storage.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        supplies_max += 500;
        up_storage += 1;
        clearInterval(upgrade);
        slot_build = false;
        msg.prepend("<p>Lager wurde ausgebaut.</p>");
        check_msg();
        $("#task .storage").remove();
    }
}
$("#btn_upgrade_storage").click(function () {
    task.append(`<tr>
                <td class='storage'>Ausbau eines Lager</td>
                <td class='storage time'></td>
                </tr>`);
    wood -= 300;
    stone -= 300;
    slot_build = true;
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
        slot_build = false;
        msg.prepend("<p>Holzfällerhütte wurde ausgebaut.</p>");
        check_msg();
        $("#task .lumberjackhut").remove();
    }
}
$("#btn_upgrade_lumberjackhut").click(function () {
    task.append(`<tr>
                <td class='lumberjackhut'>Ausbau einer Holzfällerhütte</td>
                <td class='lumberjackhut time'></td>
                </tr>`);
    wood -= 400;
    stone -= 100;
    slot_build = true;
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
        slot_build = false;
        msg.prepend("<p>Schafstall wurde ausgebaut.</p>");
        check_msg();
        $("#task .sheepstall").remove();
    }
}
$("#btn_upgrade_sheepstall").click(function () {
    task.append(`<tr>
                <td class='sheepstall'>Ausbau eines Schafstall</td>
                <td class='sheepstall time'></td>
                </tr>`);
    wood -= 500;
    stone -= 150;
    slot_build = true;
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
        slot_build = false;
        msg.prepend("<p>Steinbruch wurde ausgebaut.</p>");
        check_msg();
        $("#task .quarry").remove();
    }
}
$("#btn_upgrade_quarry").click(function () {
    task.append(`<tr>
                <td class='quarry'>Ausbau eines Steinbruch</td>
                <td class='quarry time'></td>
                </tr>`);
    wood -= 600;
    stone -= 200;
    slot_build = true;
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
        slot_build = false;
        msg.prepend("<p>Kohlemine wurde ausgebaut.</p>");
        check_msg();
        $("#task .coalmine").remove();
    }
}
$("#btn_upgrade_coalmine").click(function () {
    task.append(`<tr>
                <td class='coalmine'>Ausbau einer Kohlemine</td>
                <td class='coalmine time'></td>
                </tr>`);
    wood -= 600;
    stone -= 300;
    slot_build = true;
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
        slot_build = false;
        msg.prepend("<p>Eisenmine wurde ausgebaut.</p>");
        check_msg();
        $("#task .ironmine").remove();
    }
}
$("#btn_upgrade_ironmine").click(function () {
    task.append(`<tr>
                <td class='ironmine'>Ausbau einer Eisenmine</td>
                <td class='ironmine time'></td>
                </tr>`);
    wood -= 800;
    stone -= 400;
    coal -= 100;
    slot_build = true;
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
        slot_build = false;
        msg.prepend("<p>Schneiderhaus wurde ausgebaut.</p>");
        check_msg();
        $("#task .tailorhouse").remove();
    }
}
$("#btn_upgrade_tailorhouse").click(function () {
    task.append(`<tr>
                <td class='tailorhouse'>Ausbau eines Schneiderhaus</td>
                <td class='tailorhouse time'></td>
                </tr>`);
    wood -= 1000;
    stone -= 800;
    coal -= 400;
    slot_build = true;
    timer = curr_time_upgrade_tailorhouse;
    upgrade = setInterval(upgrade_tailorhouse, speed / 10);
});

function upgrade_alchemisthut() {
    $("#task .alchemisthut.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        up_alchemisthut = true;
        brew_time += 1;
        clearInterval(upgrade);
        slot_build = false;
        msg.prepend("<p>Alchemistenhütte wurde ausgebaut.</p>");
        check_msg();
        $("#task .alchemisthut").remove();
    }
}
$("#btn_upgrade_alchemisthut").click(function () {
    task.append(`<tr>
                <td class='alchemisthut'>Ausbau einer Alchemistenhütte</td>
                <td class='alchemisthut time'></td>
                </tr>`);
    wood -= 1100;
    stone -= 900;
    coal -= 500;
    iron -= 100;
    slot_build = true;
    timer = curr_time_upgrade_alchemisthut;
    upgrade = setInterval(upgrade_alchemisthut, speed / 10);
});

function upgrade_forge() {
    $("#task .forge.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        up_forge = true;
        craft_time += 1;
        clearInterval(upgrade);
        slot_build = false;
        msg.prepend("<p>Schmiede wurde ausgebaut.</p>");
        check_msg();
        $("#task .forge").remove();
    }
}
$("#btn_upgrade_forge").click(function () {
    task.append(`<tr>
                <td class='forge'>Ausbau einer Schmiede</td>
                <td class='forge time'></td>
                </tr>`);
    wood -= 1200;
    stone -= 900;
    coal -= 500;
    iron -= 100;
    slot_build = true;
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
        slot_build = false;
        msg.prepend("<p>Markt wurde ausgebaut.</p>");
        check_msg();
        $("#task .market").remove();
    }
}
$("#btn_upgrade_market").click(function () {
    task.append(`<tr>
                <td class='market'>Ausbau eines Markt</td>
                <td class='market time'></td>
                </tr>`);
    wood -= 1500;
    stone -= 1000;
    coal -= 600;
    iron -= 200;
    slot_build = true;
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
        slot_build = false;
        msg.prepend("<p>Erkundungsposten wurde ausgebaut.</p>");
        check_msg();
        $("#task .scoutpost").remove();
    }
}
$("#btn_upgrade_scoutpost").click(function () {
    task.append(`<tr>
                <td class='scoutpost'>Ausbau eines Erkundungsposten</td>
                <td class='scoutpost time'></td>
                </tr>`);
    wood -= 2000;
    stone -= 1500;
    coal -= 800;
    iron -= 500;
    slot_build = true;
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
        slot_build = false;
        msg.prepend("<p>Kaserne wurde ausgebaut.</p>");
        check_msg();
        $("#task .barracks").remove();
    }
}
$("#btn_upgrade_barracks").click(function () {
    task.append(`<tr>
                <td class='barracks'>Ausbau einer Kaserne</td>
                <td class='barracks time'></td>
                </tr>`);
    wood -= 3000;
    stone -= 2400;
    coal -= 2000;
    iron -= 1600;
    slot_build = true;
    timer = curr_time_upgrade_barracks;
    upgrade = setInterval(upgrade_barracks, speed / 10);
});

function upgrade_stable() {
    $("#task .stable.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        up_stable = true;
        breed_bonus += 1;
        clearInterval(upgrade);
        slot_build = false;
        msg.prepend("<p>Pferdestall wurde ausgebaut.</p>");
        check_msg();
        $("#task .stable").remove();
    }
}
$("#btn_upgrade_stable").click(function () {
    task.append(`<tr>
                <td class='stable'>Ausbau eines Pferdestall</td>
                <td class='stable time'></td>
                </tr>`);
    wood -= 5000;
    stone -= 4000;
    coal -= 3000;
    iron -= 2400;
    slot_build = true;
    timer = curr_time_upgrade_stable;
    upgrade = setInterval(upgrade_stable, speed / 10);
});