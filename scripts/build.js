/*eslint-disable no-undef*/
/*jslint white:true*/
function build_hut() {
    $("#task .hut.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        hut += 1;
        villager_max += 2;
        clearInterval(build);
        slot_build = false;
        msg.prepend("<p>Hütte wurde fertiggestellt.</p>");
        check_msg();
        $("#task .hut").remove();
    }
}
$("#btn_hut").click(function () {
    task.append("<td class='hut'>Bau einer Hütte</td>");
    task.append("<td class='hut time'></td>");
    wood -= 50;
    stone -= 10;
    slot_build = true;
    timer = curr_time_hut;
    build = setInterval(build_hut, speed / 10);
});

function build_huntinghut() {
    $("#task .huntinghut.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        huntinghut = true;
        clearInterval(build);
        slot_build = false;
        msg.prepend("<p>Jagdhütte wurde fertiggestellt.</p>");
        check_msg();
        $("#task .huntinghut").remove();
    }
}
$("#btn_huntinghut").click(function () {
    task.append("<td class='huntinghut'>Bau einer Jagdhütte</td>");
    task.append("<td class='huntinghut time'></td>");
    wood -= 150;
    stone -= 30;
    slot_build = true;
    timer = curr_time_huntinghut;
    build = setInterval(build_huntinghut, speed / 10);
});

function build_storage() {
    $("#task .storage.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        storage = true;
        supplies_max += 400;
        clearInterval(build);
        slot_build = false;
        msg.prepend("<p>Lager wurde fertiggestellt.</p>");
        check_msg();
        $("#task .storage").remove();
    }
}
$("#btn_storage").click(function () {
    task.append("<td class='storage'>Bau eines Lager</td>");
    task.append("<td class='storage time'></td>");
    wood -= 100;
    stone -= 100;
    slot_build = true;
    timer = curr_time_storage;
    build = setInterval(build_storage, speed / 10);
});

function build_lumberjackhut() {
    $("#task .lumberjackhut.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        lumberjackhut = true;
        wood_bonus += 1;
        clearInterval(build);
        slot_build = false;
        msg.prepend("<p>Holzfällerhütte wurde fertiggestellt.</p>");
        check_msg();
        $("#task .lumberjackhut").remove();
    }
}
$("#btn_lumberjackhut").click(function () {
    task.append("<td class='lumberjackhut'>Bau einer Holzfällerhütte</td>");
    task.append("<td class='lumberjackhut time'></td>");
    wood -= 200;
    stone -= 50;
    slot_build = true;
    timer = curr_time_lumberjackhut;
    build = setInterval(build_lumberjackhut, speed / 10);
});

function build_sheepstall() {
    $("#task .sheepstall.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        sheepstall = true;
        clearInterval(build);
        slot_build = false;
        msg.prepend("<p>Schafstall wurde fertiggestellt.</p>");
        check_msg();
        $("#task .sheepstall").remove();
    }
}
$("#btn_sheepstall").click(function () {
    task.append("<td class='sheepstall'>Bau eines Schafstall</td>");
    task.append("<td class='sheepstall time'></td>");
    wood -= 250;
    stone -= 75;
    slot_build = true;
    timer = curr_time_sheepstall;
    build = setInterval(build_sheepstall, speed / 10);
});

function build_quarry() {
    $("#task .quarry.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        quarry = true;
        stone_bonus += 1;
        clearInterval(build);
        slot_build = false;
        msg.prepend("<p>Steinbruch wurde fertiggestellt.</p>");
        check_msg();
        $("#task .quarry").remove();
    }
}
$("#btn_quarry").click(function () {
    task.append("<td class='quarry'>Bau eines Steinbruch</td>");
    task.append("<td class='quarry time'></td>");
    wood -= 300;
    stone -= 100;
    slot_build = true;
    timer = curr_time_quarry;
    build = setInterval(build_quarry, speed / 10);
});

function build_coalmine() {
    $("#task .coalmine.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        coalmine = true;
        clearInterval(build);
        slot_build = false;
        msg.prepend("<p>Kohlemine wurde fertiggestellt.</p>");
        check_msg();
        $("#task .coalmine").remove();
    }
}
$("#btn_coalmine").click(function () {
    task.append("<td class='coalmine'>Bau einer Kohlemine</td>");
    task.append("<td class='coalmine time'></td>");
    wood -= 300;
    stone -= 150;
    slot_build = true;
    timer = curr_time_coalmine;
    build = setInterval(build_coalmine, speed / 10);
});

function build_ironmine() {
    $("#task .ironmine.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        ironmine = true;
        clearInterval(build);
        slot_build = false;
        msg.prepend("<p>Eisenmine wurde fertiggestellt.</p>");
        check_msg();
        $("#task .ironmine").remove();
    }
}
$("#btn_ironmine").click(function () {
    task.append("<td class='ironmine'>Bau einer Eisenmine</td>");
    task.append("<td class='ironmine time'></td>");
    wood -= 400;
    stone -= 200;
    coal -= 50;
    slot_build = true;
    timer = curr_time_ironmine;
    build = setInterval(build_ironmine, speed / 10);
});

function build_tailorhouse() {
    $("#task .tailorhouse.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        tailorhouse = true;
        clearInterval(build);
        slot_build = false;
        msg.prepend("<p>Schneiderhaus wurde fertiggestellt.</p>");
        check_msg();
        $("#task .tailorhouse").remove();
    }
}
$("#btn_tailorhouse").click(function () {
    task.append("<td class='tailorhouse'>Bau eines Schneiderhaus</td>");
    task.append("<td class='tailorhouse time'></td>");
    wood -= 500;
    stone -= 400;
    coal -= 200;
    slot_build = true;
    timer = curr_time_tailorhouse;
    build = setInterval(build_tailorhouse, speed / 10);
});

function build_alchemisthut() {
    $("#task .alchemisthut.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        alchemisthut = true;
        clearInterval(build);
        slot_build = false;
        msg.prepend("<p>Alchemistenhütte wurde fertiggestellt.</p>");
        check_msg();
        $("#task .alchemisthut").remove();
    }
}
$("#btn_alchemisthut").click(function () {
    task.append("<td class='alchemisthut'>Bau einer Alchemistenhütte</td>");
    task.append("<td class='alchemisthut time'></td>");
    wood -= 550;
    stone -= 450;
    coal -= 250;
    iron -= 50;
    slot_build = true;
    timer = curr_time_alchemisthut;
    build = setInterval(build_alchemisthut, speed / 10);
});

function build_forge() {
    $("#task .forge.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        forge = true;
        clearInterval(build);
        slot_build = false;
        msg.prepend("<p>Schmiede wurde fertiggestellt.</p>");
        check_msg();
        $("#task .forge").remove();
    }
}
$("#btn_forge").click(function () {
    task.append("<td class='forge'>Bau einer Schmiede</td>");
    task.append("<td class='forge time'></td>");
    wood -= 600;
    stone -= 450;
    coal -= 250;
    iron -= 50;
    slot_build = true;
    timer = curr_time_forge;
    build = setInterval(build_forge, speed / 10);
});

function build_market() {
    $("#task .market.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        market = true;
        clearInterval(build);
        slot_build = false;
        msg.prepend("<p>Markt wurde fertiggestellt.</p>");
        check_msg();
        $("#task .market").remove();
    }
}
$("#btn_market").click(function () {
    task.append("<td class='market'>Bau eines Markt</td>");
    task.append("<td class='market time'></td>");
    wood -= 750;
    stone -= 500;
    coal -= 300;
    iron -= 100;
    slot_build = true;
    timer = curr_time_market;
    build = setInterval(build_market, speed / 10);
});

function build_scoutpost() {
    $("#task .scoutpost.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        scoutpost = true;
        clearInterval(build);
        slot_build = false;
        msg.prepend("<p>Erkundungsposten wurde fertiggestellt.</p>");
        check_msg();
        $("#task .scoutpost").remove();
    }
}
$("#btn_scoutpost").click(function () {
    task.append("<td class='scoutpost'>Bau eines Erkundungsposten</td>");
    task.append("<td class='scoutpost time'></td>");
    wood -= 1000;
    stone -= 750;
    coal -= 400;
    iron -= 250;
    slot_build = true;
    timer = curr_time_scoutpost;
    build = setInterval(build_scoutpost, speed / 10);
});

function build_barracks() {
    $("#task .barracks.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        barracks = true;
        clearInterval(build);
        slot_build = false;
        msg.prepend("<p>Kaserne wurde fertiggestellt.</p>");
        check_msg();
        $("#task .barracks").remove();
    }
}
$("#btn_barracks").click(function () {
    task.append("<td class='barracks'>Bau einer Kaserne</td>");
    task.append("<td class='barracks time'></td>");
    wood -= 1500;
    stone -= 1200;
    coal -= 1000;
    iron -= 800;
    slot_build = true;
    timer = curr_time_barracks;
    build = setInterval(build_barracks, speed / 10);
});

function build_stable() {
    $("#task .stable.time").text(secondsTommss(timer.toFixed(1)));
    timer -= 0.1;
    if (timer < 0) {
        stable = true;
        clearInterval(build);
        slot_build = false;
        msg.prepend("<p>Pferdestall wurde fertiggestellt.</p>");
        check_msg();
        $("#task .stable").remove();
    }
}
$("#btn_stable").click(function () {
    task.append("<td class='stable'>Bau eines Pferdestall</td>");
    task.append("<td class='stable time'></td>");
    wood -= 2500;
    stone -= 2000;
    coal -= 1500;
    iron -= 1200;
    slot_build = true;
    timer = curr_time_stable;
    build = setInterval(build_stable, speed / 10);
});