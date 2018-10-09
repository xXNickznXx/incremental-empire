/*eslint-disable no-undef*/
/*jslint white:true*/
$("#btn_brew").click(function () {
    $("#content_brew").slideToggle();
});
$("#btn_armor").click(function () {
    $("#content_armor").slideToggle();
});
$("#btn_weapons").click(function () {
    $("#content_weapons").slideToggle();
});
$("#btn_melee").click(function () {
    $("#content_melee").slideToggle();
});
$("#btn_ranged").click(function () {
    $("#content_ranged").slideToggle();
});
$("#btn_gifts").click(function () {
    $("#content_gifts").slideToggle();
});

function brew_medicine() {
    $("#task .medicine.time").text(secondsTommss(brewer.toFixed(1)));
    brewer -= 0.1;
    if (brewer < 0) {
        medicine += prod_medicine.count;
        clearInterval(brew);
        slot_brew = false;
        msg.prepend("<p>Medizin wurde fertiggestellt.</p>");
        check_msg();
        $("#task .medicine").remove();
    }
}
$("#btn_medicine").click(function () {
    task.append(`<tr>
                <td class='medicine'>Herstellung von Medizin</td>
                <td class='medicine time'></td>
                </tr>`);
    food -= prod_medicine.costs.food * prod_medicine.count;
    stone -= prod_medicine.costs.stone * prod_medicine.count;
    cloth -= prod_medicine.costs.cloth * prod_medicine.count;
    slot_brew = true;
    brewer = prod_medicine.curr_time;
    brew = setInterval(brew_medicine, speed / 10);
});
var medicine_p,
    medicine_m,
    medicine_t;
function medicine_plus() {
    prod_medicine.count += 1;
    $("#num_medicine").text(prod_medicine.count);
}
$("#up_medicine").click(function () {
    medicine_plus();
});
$("#up_medicine").mousedown(function () {
    medicine_t = setTimeout(function () {medicine_p = setInterval(medicine_plus, 50);}, 500);
});

function medicine_minus() {
    prod_medicine.count -= 1;
    $("#num_medicine").text(prod_medicine.count);
}
$("#dwn_medicine").click(function () {
    medicine_minus();
});
$("#dwn_medicine").mousedown(function () {
    medicine_t = setTimeout(function () {medicine_m = setInterval(medicine_minus, 50);}, 500);
});

function brew_poison() {
    $("#task .poison.time").text(secondsTommss(brewer.toFixed(1)));
    brewer -= 0.1;
    if (brewer < 0) {
        poison += prod_poison.count;
        clearInterval(brew);
        slot_brew = false;
        msg.prepend("<p>Gift wurde fertiggestellt.</p>");
        check_msg();
        $("#task .poison").remove();
    }
}
$("#btn_poison").click(function () {
    task.append(`<tr>
                <td class='poison'>Herstellung von Gift</td>
                <td class='poison time'></td>
                </tr>`);
    food -= prod_poison.costs.food * prod_poison.count;
    stone -= prod_poison.costs.stone * prod_poison.count;
    cloth -= prod_poison.costs.cloth * prod_poison.count;
    coal -= prod_poison.costs.coal * prod_poison.count;
    iron -= prod_poison.costs.iron * prod_poison.count;
    slot_brew = true;
    brewer = prod_poison.curr_time;
    brew = setInterval(brew_poison, speed / 10);
});
var poison_p,
    poison_m,
    poison_t;
function poison_plus() {
    prod_poison.count += 1;
    $("#num_poison").text(prod_poison.count);
}
$("#up_poison").click(function () {
    poison_plus();
});
$("#up_poison").mousedown(function () {
    poison_t = setTimeout(function () {poison_p = setInterval(poison_plus, 50);}, 500);
});

function poison_minus() {
    prod_poison.count -= 1;
    $("#num_poison").text(prod_poison.count);
}
$("#dwn_poison").click(function () {
    poison_minus();
});
$("#dwn_poison").mousedown(function () {
    poison_t = setTimeout(function () {poison_m = setInterval(poison_minus, 50);}, 500);
});

function craft_leatherarmor() {
    $("#task .leatherarmor.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        leatherarmor += prod_leatherarmor.count;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Lederrüstung wurde fertiggestellt.</p>");
        check_msg();
        $("#task .leatherarmor").remove();
    }
}
$("#btn_leatherarmor").click(function () {
    task.append(`<tr>
                <td class='leatherarmor'>Herstellung von Lederrüstung</td>
                <td class='leatherarmor time'></td>
                </tr>`);
    leather -= prod_leatherarmor.costs.leather * prod_leatherarmor.count;
    slot_craft = true;
    crafter = prod_leatherarmor.curr_time;
    craft = setInterval(craft_leatherarmor, speed / 10);
});
var leatherarmor_p,
    leatherarmor_m,
    leatherarmor_t;
function leatherarmor_plus() {
    prod_leatherarmor.count += 1;
    $("#num_leatherarmor").text(prod_leatherarmor.count);
}
$("#up_leatherarmor").click(function () {
    leatherarmor_plus();
});
$("#up_leatherarmor").mousedown(function () {
    leatherarmor_t = setTimeout(function () {leatherarmor_p = setInterval(leatherarmor_plus, 50);}, 500);
});

function leatherarmor_minus() {
    prod_leatherarmor.count -= 1;
    $("#num_leatherarmor").text(prod_leatherarmor.count);
}
$("#dwn_leatherarmor").click(function () {
    leatherarmor_minus();
});
$("#dwn_leatherarmor").mousedown(function () {
    leatherarmor_t = setTimeout(function () {leatherarmor_m = setInterval(leatherarmor_minus, 50);}, 500);
});

function craft_ironarmor() {
    $("#task .ironarmor.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        ironarmor += prod_ironarmor.count;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Eisenrüstung wurde fertiggestellt.</p>");
        check_msg();
        $("#task .ironarmor").remove();
    }
}
$("#btn_ironarmor").click(function () {
    task.append(`<tr>
                <td class='ironarmor'>Herstellung von Eisenrüstung</td>
                <td class='ironarmor time'></td>
                </tr>`);
    iron -= prod_ironarmor.costs.iron * prod_ironarmor.count;
    slot_craft = true;
    crafter = prod_ironarmor.curr_time;
    craft = setInterval(craft_ironarmor, speed / 10);
});
var ironarmor_p,
    ironarmor_m,
    ironarmor_t;
function ironarmor_plus() {
    prod_ironarmor.count += 1;
    $("#num_ironarmor").text(prod_ironarmor.count);
}
$("#up_ironarmor").click(function () {
    ironarmor_plus();
});
$("#up_ironarmor").mousedown(function () {
    ironarmor_t = setTimeout(function () {ironarmor_p = setInterval(ironarmor_plus, 50);}, 500);
});

function ironarmor_minus() {
    prod_ironarmor.count -= 1;
    $("#num_ironarmor").text(prod_ironarmor.count);
}
$("#dwn_ironarmor").click(function () {
    ironarmor_minus();
});
$("#dwn_ironarmor").mousedown(function () {
    ironarmor_t = setTimeout(function () {ironarmor_m = setInterval(ironarmor_minus, 50);}, 500);
});

function craft_axe() {
    $("#task .axe.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        axe += prod_axe.count;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Axt wurde fertiggestellt.</p>");
        check_msg();
        $("#task .axe").remove();
    }
}
$("#btn_axe").click(function () {
    task.append(`<tr>
                <td class='axe'>Herstellung von Axt</td>
                <td class='axe time'></td>
                </tr>`);
    wood -= prod_axe.costs.wood * prod_axe.count;
    iron -= prod_axe.costs.iron * prod_axe.count;
    slot_craft = true;
    crafter = prod_axe.curr_time;
    craft = setInterval(craft_axe, speed / 10);
});
var axe_p,
    axe_m,
    axe_t;
function axe_plus() {
    prod_axe.count += 1;
    $("#num_axe").text(prod_axe.count);
}
$("#up_axe").click(function () {
    axe_plus();
});
$("#up_axe").mousedown(function () {
    axe_t = setTimeout(function () {axe_p = setInterval(axe_plus, 50);}, 500);
});

function axe_minus() {
    prod_axe.count -= 1;
    $("#num_axe").text(prod_axe.count);
}
$("#dwn_axe").click(function () {
    axe_minus();
});
$("#dwn_axe").mousedown(function () {
    axe_t = setTimeout(function () {axe_m = setInterval(axe_minus, 50);}, 500);
});

function craft_sword() {
    $("#task .sword.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        sword += prod_sword.count;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Schwert wurde fertiggestellt.</p>");
        check_msg();
        $("#task .sword").remove();
    }
}
$("#btn_sword").click(function () {
    task.append(`<tr>
                <td class='sword'>Herstellung von Schwert</td>
                <td class='sword time'></td>
                </tr>`);
    wood -= prod_sword.costs.wood * prod_sword.count;
    iron -= prod_sword.costs.iron * prod_sword.count;
    slot_craft = true;
    crafter = prod_sword.curr_time;
    craft = setInterval(craft_sword, speed / 10);
});
var sword_p,
    sword_m,
    sword_t;
function sword_plus() {
    prod_sword.count += 1;
    $("#num_sword").text(prod_sword.count);
}
$("#up_sword").click(function () {
    sword_plus();
});
$("#up_sword").mousedown(function () {
    sword_t = setTimeout(function () {sword_p = setInterval(sword_plus, 50);}, 500);
});

function sword_minus() {
    prod_sword.count -= 1;
    $("#num_sword").text(prod_sword.count);
}
$("#dwn_sword").click(function () {
    sword_minus();
});
$("#dwn_sword").mousedown(function () {
    sword_t = setTimeout(function () {sword_m = setInterval(sword_minus, 50);}, 500);
});

function craft_morningstar() {
    $("#task .morningstar.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        morningstar += prod_morningstar.count;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Morgenstern wurde fertiggestellt.</p>");
        check_msg();
        $("#task .morningstar").remove();
    }
}
$("#btn_morningstar").click(function () {
    task.append(`<tr>
                <td class='morningstar'>Herstellung von Morgenstern</td>
                <td class='morningstar time'></td>
                </tr>`);
    wood -= prod_morningstar.costs.wood * prod_morningstar.count;
    iron -= prod_morningstar.costs.iron * prod_morningstar.count;
    slot_craft = true;
    crafter = prod_morningstar.curr_time;
    craft = setInterval(craft_morningstar, speed / 10);
});
var morningstar_p,
    morningstar_m,
    morningstar_t;
function morningstar_plus() {
    prod_morningstar.count += 1;
    $("#num_morningstar").text(prod_morningstar.count);
}
$("#up_morningstar").click(function () {
    morningstar_plus();
});
$("#up_morningstar").mousedown(function () {
    morningstar_t = setTimeout(function () {morningstar_p = setInterval(morningstar_plus, 50);}, 500);
});

function morningstar_minus() {
    prod_morningstar.count -= 1;
    $("#num_morningstar").text(prod_morningstar.count);
}
$("#dwn_morningstar").click(function () {
    morningstar_minus();
});
$("#dwn_morningstar").mousedown(function () {
    morningstar_t = setTimeout(function () {morningstar_m = setInterval(morningstar_minus, 50);}, 500);
});

function craft_shortbow() {
    $("#task .shortbow.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        shortbow += shortbow_num;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Kurzbogen wurde fertiggestellt.</p>");
        check_msg();
        $("#task .shortbow").remove();
    }
}
$("#btn_shortbow").click(function () {
    task.append(`<tr>
                <td class='shortbow'>Herstellung von Kurzbogen</td>
                <td class='shortbow time'></td>
                </tr>`);
    wood -= 20 * shortbow_num;
    iron -= 5 * shortbow_num;
    slot_craft = true;
    crafter = curr_time_shortbow;
    craft = setInterval(craft_shortbow, speed / 10);
});
var shortbow_p,
    shortbow_m,
    shortbow_t;
$("#up_shortbow").click(function () {
    shortbow_num += 1;
    $("#num_shortbow").text(shortbow_num);
});
function shortbow_plus() {
    shortbow_num += 1;
    $("#num_shortbow").text(shortbow_num);
}
$("#up_shortbow").mousedown(function () {
    shortbow_t = setTimeout(function () {shortbow_p = setInterval(shortbow_plus, 50);}, 500);
});

$("#dwn_shortbow").click(function () {
    shortbow_num -= 1;
    $("#num_shortbow").text(shortbow_num);
});
function shortbow_minus() {
    shortbow_num -= 1;
    $("#num_shortbow").text(shortbow_num);
}
$("#dwn_shortbow").mousedown(function () {
    shortbow_t = setTimeout(function () {shortbow_m = setInterval(shortbow_minus, 50);}, 500);
});

function craft_longbow() {
    $("#task .longbow.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        longbow += longbow_num;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Langbogen wurde fertiggestellt.</p>");
        check_msg();
        $("#task .longbow").remove();
    }
}
$("#btn_longbow").click(function () {
    task.append(`<tr>
                <td class='longbow'>Herstellung von Langbogen</td>
                <td class='longbow time'></td>
                </tr>`);
    wood -= 25 * longbow_num;
    iron -= 5 * longbow_num;
    slot_craft = true;
    crafter = curr_time_longbow;
    craft = setInterval(craft_longbow, speed / 10);
});
var longbow_p,
    longbow_m,
    longbow_t;
$("#up_longbow").click(function () {
    longbow_num += 1;
    $("#num_longbow").text(longbow_num);
});
function longbow_plus() {
    longbow_num += 1;
    $("#num_longbow").text(longbow_num);
}
$("#up_longbow").mousedown(function () {
    longbow_t = setTimeout(function () {longbow_p = setInterval(longbow_plus, 50);}, 500);
});

$("#dwn_longbow").click(function () {
    longbow_num -= 1;
    $("#num_longbow").text(longbow_num);
});
function longbow_minus() {
    longbow_num -= 1;
    $("#num_longbow").text(longbow_num);
}
$("#dwn_longbow").mousedown(function () {
    longbow_t = setTimeout(function () {longbow_m = setInterval(longbow_minus, 50);}, 500);
});

function craft_crossbow() {
    $("#task .crossbow.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        crossbow += crossbow_num;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Armbrust wurde fertiggestellt.</p>");
        check_msg();
        $("#task .crossbow").remove();
    }
}
$("#btn_crossbow").click(function () {
    task.append(`<tr>
                <td class='crossbow'>Herstellung von Armbrust</td>
                <td class='crossbow time'></td>
                </tr>`);
    wood -= 30 * crossbow_num;
    iron -= 5 * crossbow_num;
    slot_craft = true;
    crafter = curr_time_crossbow;
    craft = setInterval(craft_crossbow, speed / 10);
});
var crossbow_p,
    crossbow_m,
    crossbow_t;
$("#up_crossbow").click(function () {
    crossbow_num += 1;
    $("#num_crossbow").text(crossbow_num);
});
function crossbow_plus() {
    crossbow_num += 1;
    $("#num_crossbow").text(crossbow_num);
}
$("#up_crossbow").mousedown(function () {
    crossbow_t = setTimeout(function () {crossbow_p = setInterval(crossbow_plus, 50);}, 500);
});

$("#dwn_crossbow").click(function () {
    crossbow_num -= 1;
    $("#num_crossbow").text(crossbow_num);
});
function crossbow_minus() {
    crossbow_num -= 1;
    $("#num_crossbow").text(crossbow_num);
}
$("#dwn_crossbow").mousedown(function () {
    crossbow_t = setTimeout(function () {crossbow_m = setInterval(crossbow_minus, 50);}, 500);
});

function craft_tradegift() {
    $("#task .tradegift.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        tradegift += tradegift_num;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Handelsgeschenk wurde fertiggestellt.</p>");
        check_msg();
        $("#task .tradegift").remove();
    }
}
$("#btn_tradegift").click(function () {
    task.append(`<tr>
                <td class='tradegift'>Herstellung von Handelsgeschenk</td>
                <td class='tradegift time'></td>
                </tr>`);
    food -= 25 * tradegift_num;
    wood -= 25 * tradegift_num;
    leather -= 25 * tradegift_num;
    cloth -= 25 * tradegift_num;
    iron -= 25 * tradegift_num;
    clothes -= 25 * tradegift_num;
    slot_craft = true;
    crafter = curr_time_tradegift;
    craft = setInterval(craft_tradegift, speed / 10);
});
var tradegift_p,
    tradegift_m,
    tradegift_t;
$("#up_tradegift").click(function () {
    tradegift_num += 1;
    $("#num_tradegift").text(tradegift_num);
});
function tradegift_plus() {
    tradegift_num += 1;
    $("#num_tradegift").text(tradegift_num);
}
$("#up_tradegift").mousedown(function () {
    tradegift_t = setTimeout(function () {tradegift_p = setInterval(tradegift_plus, 50);}, 500);
});

$("#dwn_tradegift").click(function () {
    tradegift_num -= 1;
    $("#num_tradegift").text(tradegift_num);
});
function tradegift_minus() {
    tradegift_num -= 1;
    $("#num_tradegift").text(tradegift_num);
}
$("#dwn_tradegift").mousedown(function () {
    tradegift_t = setTimeout(function () {tradegift_m = setInterval(tradegift_minus, 50);}, 500);
});

function craft_peacegift() {
    $("#task .peacegift.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        peacegift += peacegift_num;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Friedensgeschenk wurde fertiggestellt.</p>");
        check_msg();
        $("#task .peacegift").remove();
    }
}
$("#btn_peacegift").click(function () {
    task.append(`<tr>
                <td class='peacegift'>Herstellung von Friedensgeschenk</td>
                <td class='peacegift time'></td>
                </tr>`);
    food -= 50 * peacegift_num;
    wood -= 50 * peacegift_num;
    leather -= 50 * peacegift_num;
    cloth -= 50 * peacegift_num;
    iron -= 50 * peacegift_num;
    clothes -= 50 * peacegift_num;
    slot_craft = true;
    crafter = curr_time_peacegift;
    craft = setInterval(craft_peacegift, speed / 10);
});
var peacegift_p,
    peacegift_m,
    peacegift_t;
$("#up_peacegift").click(function () {
    peacegift_num += 1;
    $("#num_peacegift").text(peacegift_num);
});
function peacegift_plus() {
    peacegift_num += 1;
    $("#num_peacegift").text(peacegift_num);
}
$("#up_peacegift").mousedown(function () {
    peacegift_t = setTimeout(function () {peacegift_p = setInterval(peacegift_plus, 50);}, 500);
});

$("#dwn_peacegift").click(function () {
    peacegift_num -= 1;
    $("#num_peacegift").text(peacegift_num);
});
function peacegift_minus() {
    peacegift_num -= 1;
    $("#num_peacegift").text(peacegift_num);
}
$("#dwn_peacegift").mousedown(function () {
    peacegift_t = setTimeout(function () {peacegift_m = setInterval(peacegift_minus, 50);}, 500);
});

function craft_poisongift() {
    $("#task .poisongift.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        poisongift += poisongift_num;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Giftgeschenk wurde fertiggestellt.</p>");
        check_msg();
        $("#task .poisongift").remove();
    }
}
$("#btn_poisongift").click(function () {
    task.append(`<tr>
                <td class='poisongift'>Herstellung von Giftgeschenk</td>
                <td class='poisongift time'></td>
                </tr>`);
    food -= 50 * poisongift_num;
    wood -= 50 * poisongift_num;
    leather -= 50 * poisongift_num;
    cloth -= 50 * poisongift_num;
    iron -= 50 * poisongift_num;
    clothes -= 50 * poisongift_num;
    poison -= 5 * poisongift_num;
    slot_craft = true;
    crafter = curr_time_poisongift;
    craft = setInterval(craft_poisongift, speed / 10);
});
var poisongift_p,
    poisongift_m,
    poisongift_t;
$("#up_poisongift").click(function () {
    poisongift_num += 1;
    $("#num_poisongift").text(poisongift_num);
});
function poisongift_plus() {
    poisongift_num += 1;
    $("#num_poisongift").text(poisongift_num);
}
$("#up_poisongift").mousedown(function () {
    poisongift_t = setTimeout(function () {poisongift_p = setInterval(poisongift_plus, 50);}, 500);
});

$("#dwn_poisongift").click(function () {
    poisongift_num -= 1;
    $("#num_poisongift").text(poisongift_num);
});
function poisongift_minus() {
    poisongift_num -= 1;
    $("#num_poisongift").text(poisongift_num);
}
$("#dwn_poisongift").mousedown(function () {
    poisongift_t = setTimeout(function () {poisongift_m = setInterval(poisongift_minus, 50);}, 500);
});

$("html").mouseup(function () {
    clearInterval(medicine_p);
    clearInterval(medicine_m);
    clearInterval(medicine_t);
    clearInterval(poison_p);
    clearInterval(poison_m);
    clearInterval(poison_t);
    clearInterval(leatherarmor_p);
    clearInterval(leatherarmor_m);
    clearInterval(leatherarmor_t);
    clearInterval(ironarmor_p);
    clearInterval(ironarmor_m);
    clearInterval(ironarmor_t);
    clearInterval(sword_p);
    clearInterval(sword_m);
    clearInterval(sword_t);
    clearInterval(axe_p);
    clearInterval(axe_m);
    clearInterval(axe_t);
    clearInterval(morningstar_p);
    clearInterval(morningstar_m);
    clearInterval(morningstar_t);
    clearInterval(shortbow_p);
    clearInterval(shortbow_m);
    clearInterval(shortbow_t);
    clearInterval(longbow_p);
    clearInterval(longbow_m);
    clearInterval(longbow_t);
    clearInterval(crossbow_p);
    clearInterval(crossbow_m);
    clearInterval(crossbow_t);
    clearInterval(tradegift_p);
    clearInterval(tradegift_m);
    clearInterval(tradegift_t);
    clearInterval(peacegift_p);
    clearInterval(peacegift_m);
    clearInterval(peacegift_t);
    clearInterval(poisongift_p);
    clearInterval(poisongift_m);
    clearInterval(poisongift_t);
});