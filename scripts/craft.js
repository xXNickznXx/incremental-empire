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
$("#craft").on("click", "#btn_medicine", function () {
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
$("#craft").on("click", "#up_medicine", function () {
    medicine_plus();
});
$("#craft").on("mousedown", "#up_medicine", function () {
    medicine_t = setTimeout(function () {medicine_p = setInterval(medicine_plus, 50);}, 500);
});

function medicine_minus() {
    if (prod_medicine.count > 0) {
        prod_medicine.count -= 1;
        $("#num_medicine").text(prod_medicine.count);
    }
}
$("#craft").on("click", "#dwn_medicine", function () {
    medicine_minus();
});
$("#craft").on("mousedown", "#dwn_medicine", function () {
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
$("#craft").on("click", "#btn_poison", function () {
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
$("#craft").on("click", "#up_poison", function () {
    poison_plus();
});
$("#craft").on("mousedown", "#up_poison", function () {
    poison_t = setTimeout(function () {poison_p = setInterval(poison_plus, 50);}, 500);
});

function poison_minus() {
    if (prod_poison.count > 0) {
        prod_poison.count -= 1;
        $("#num_poison").text(prod_poison.count);
    }
}
$("#craft").on("click", "#dwn_poison", function () {
    poison_minus();
});
$("#craft").on("mousedown", "#dwn_poison", function () {
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
$("#craft").on("click", "#btn_leatherarmor", function () {
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
$("#craft").on("click", "#up_leatherarmor", function () {
    leatherarmor_plus();
});
$("#craft").on("mousedown", "#up_leatherarmor", function () {
    leatherarmor_t = setTimeout(function () {leatherarmor_p = setInterval(leatherarmor_plus, 50);}, 500);
});

function leatherarmor_minus() {
    if (prod_leatherarmor.count > 0) {
        prod_leatherarmor.count -= 1;
        $("#num_leatherarmor").text(prod_leatherarmor.count);
    }
}
$("#craft").on("click", "#dwn_leatherarmor", function () {
    leatherarmor_minus();
});
$("#craft").on("mousedown", "#dwn_leatherarmor", function () {
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
$("#craft").on("click", "#btn_ironarmor", function () {
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
$("#craft").on("click", "#up_ironarmor", function () {
    ironarmor_plus();
});
$("#craft").on("mousedown", "#up_ironarmor", function () {
    ironarmor_t = setTimeout(function () {ironarmor_p = setInterval(ironarmor_plus, 50);}, 500);
});

function ironarmor_minus() {
    if (prod_ironarmor.count > 0) {
        prod_ironarmor.count -= 1;
        $("#num_ironarmor").text(prod_ironarmor.count);
    }
}
$("#craft").on("click", "#dwn_ironarmor", function () {
    ironarmor_minus();
});
$("#craft").on("mousedown", "#dwn_ironarmor", function () {
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
$("#craft").on("click", "#btn_axe", function () {
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
$("#craft").on("click", "#up_axe", function () {
    axe_plus();
});
$("#craft").on("mousedown", "#up_axe", function () {
    axe_t = setTimeout(function () {axe_p = setInterval(axe_plus, 50);}, 500);
});

function axe_minus() {
    if (prod_axe.count > 0) {
        prod_axe.count -= 1;
        $("#num_axe").text(prod_axe.count);
    }
}
$("#craft").on("click", "#dwn_axe", function () {
    axe_minus();
});
$("#craft").on("mousedown", "#dwn_axe", function () {
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
$("#craft").on("click", "#btn_sword", function () {
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
$("#craft").on("click", "#up_sword", function () {
    sword_plus();
});
$("#craft").on("mousedown", "#up_sword", function () {
    sword_t = setTimeout(function () {sword_p = setInterval(sword_plus, 50);}, 500);
});

function sword_minus() {
    if (prod_sword.count > 0) {
        prod_sword.count -= 1;
        $("#num_sword").text(prod_sword.count);
    }
}
$("#craft").on("click", "#dwn_sword", function () {
    sword_minus();
});
$("#craft").on("mousedown", "#dwn_sword", function () {
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
$("#craft").on("click", "#btn_morningstar", function () {
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
$("#craft").on("click", "#up_morningstar", function () {
    morningstar_plus();
});
$("#craft").on("mousedown", "#up_morningstar", function () {
    morningstar_t = setTimeout(function () {morningstar_p = setInterval(morningstar_plus, 50);}, 500);
});

function morningstar_minus() {
    if (prod_morningstar.count > 0) {
        prod_morningstar.count -= 1;
        $("#num_morningstar").text(prod_morningstar.count);
    }
}
$("#craft").on("click", "#dwn_morningstar", function () {
    morningstar_minus();
});
$("#craft").on("mousedown", "#dwn_morningstar", function () {
    morningstar_t = setTimeout(function () {morningstar_m = setInterval(morningstar_minus, 50);}, 500);
});

function craft_shortbow() {
    $("#task .shortbow.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        shortbow += prod_shortbow.count;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Kurzbogen wurde fertiggestellt.</p>");
        check_msg();
        $("#task .shortbow").remove();
    }
}
$("#craft").on("click", "#btn_shortbow", function () {
    task.append(`<tr>
                <td class='shortbow'>Herstellung von Kurzbogen</td>
                <td class='shortbow time'></td>
                </tr>`);
    wood -= prod_shortbow.costs.wood * prod_shortbow.count;
    iron -= prod_shortbow.costs.iron * prod_shortbow.count;
    slot_craft = true;
    crafter = prod_shortbow.curr_time;
    craft = setInterval(craft_shortbow, speed / 10);
});
var shortbow_p,
    shortbow_m,
    shortbow_t;
function shortbow_plus() {
    prod_shortbow.count += 1;
    $("#num_shortbow").text(prod_shortbow.count);
}
$("#craft").on("click", "#up_shortbow", function () {
    shortbow_plus();
});
$("#craft").on("setTimeout", "#up_shortbow", function () {
    shortbow_t = setTimeout(function () {shortbow_p = setInterval(shortbow_plus, 50);}, 500);
});

function shortbow_minus() {
    if (prod_shortbow.count > 0) {
        prod_shortbow.count -= 1;
        $("#num_shortbow").text(prod_shortbow.count);
    }
}
$("#craft").on("click", "#dwn_shortbow", function () {
    shortbow_minus();
});
$("#craft").on("setTimeout", "#dwn_shortbow", function () {
    shortbow_t = setTimeout(function () {shortbow_m = setInterval(shortbow_minus, 50);}, 500);
});

function craft_longbow() {
    $("#task .longbow.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        longbow += prod_longbow.count;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Langbogen wurde fertiggestellt.</p>");
        check_msg();
        $("#task .longbow").remove();
    }
}
$("#craft").on("click", "#btn_longbow", function () {
    task.append(`<tr>
                <td class='longbow'>Herstellung von Langbogen</td>
                <td class='longbow time'></td>
                </tr>`);
    wood -= prod_longbow.costs.wood * prod_longbow.count;
    iron -= prod_longbow.costs.iron * prod_longbow.count;
    slot_craft = true;
    crafter = prod_longbow.curr_time;
    craft = setInterval(craft_longbow, speed / 10);
});
var longbow_p,
    longbow_m,
    longbow_t;
function longbow_plus() {
    prod_longbow.count += 1;
    $("#num_longbow").text(prod_longbow.count);
}
$("#craft").on("click", "#up_longbow", function () {
    longbow_plus();
});
$("#craft").on("mousedown", "#up_longbow", function () {
    longbow_t = setTimeout(function () {longbow_p = setInterval(longbow_plus, 50);}, 500);
});

function longbow_minus() {
    if (prod_longbow.count > 0) {
        prod_longbow.count -= 1;
        $("#num_longbow").text(prod_longbow.count);
    }
}
$("#craft").on("click", "#dwn_longbow", function () {
    longbow_minus();
});
$("#craft").on("mousedown", "#dwn_longbow", function () {
    longbow_t = setTimeout(function () {longbow_m = setInterval(longbow_minus, 50);}, 500);
});

function craft_crossbow() {
    $("#task .crossbow.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        crossbow += prod_crossbow.count;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Armbrust wurde fertiggestellt.</p>");
        check_msg();
        $("#task .crossbow").remove();
    }
}
$("#craft").on("click", "#btn_crossbow", function () {
    task.append(`<tr>
                <td class='crossbow'>Herstellung von Armbrust</td>
                <td class='crossbow time'></td>
                </tr>`);
    wood -= prod_crossbow.costs.wood * prod_crossbow.count;
    iron -= prod_crossbow.costs.iron * prod_crossbow.count;
    slot_craft = true;
    crafter = prod_crossbow.curr_time;
    craft = setInterval(craft_crossbow, speed / 10);
});
var crossbow_p,
    crossbow_m,
    crossbow_t;
function crossbow_plus() {
    prod_crossbow.count += 1;
    $("#num_crossbow").text(prod_crossbow.count);
}
$("#craft").on("click", "#up_crossbow", function () {
    crossbow_plus();
});
$("#craft").on("mousedown", "#up_crossbow", function () {
    crossbow_t = setTimeout(function () {crossbow_p = setInterval(crossbow_plus, 50);}, 500);
});

function crossbow_minus() {
    if (prod_crossbow.count > 0) {
        prod_crossbow.count -= 1;
        $("#num_crossbow").text(prod_crossbow.count);
    }
}
$("#craft").on("click", "#dwn_crossbow", function () {
    crossbow_minus();
});
$("#craft").on("mousedown", "#dwn_crossbow", function () {
    crossbow_t = setTimeout(function () {crossbow_m = setInterval(crossbow_minus, 50);}, 500);
});

function craft_tradegift() {
    $("#task .tradegift.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        tradegift += prod_tradegift.count;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Handelsgeschenk wurde fertiggestellt.</p>");
        check_msg();
        $("#task .tradegift").remove();
    }
}
$("#craft").on("click", "#btn_tradegift", function () {
    task.append(`<tr>
                <td class='tradegift'>Herstellung von Handelsgeschenk</td>
                <td class='tradegift time'></td>
                </tr>`);
    food -= prod_tradegift.costs.food * prod_tradegift.count;
    wood -= prod_tradegift.costs.wood * prod_tradegift.count;
    leather -= prod_tradegift.costs.leather * prod_tradegift.count;
    cloth -= prod_tradegift.costs.cloth * prod_tradegift.count;
    iron -= prod_tradegift.costs.iron * prod_tradegift.count;
    clothes -= prod_tradegift.costs.clothes * prod_tradegift.count;
    slot_craft = true;
    crafter = prod_tradegift.curr_time;
    craft = setInterval(craft_tradegift, speed / 10);
});
var tradegift_p,
    tradegift_m,
    tradegift_t;
function tradegift_plus() {
    prod_tradegift.count += 1;
    $("#num_tradegift").text(prod_tradegift.count);
}
$("#craft").on("click", "#up_tradegift", function () {
    tradegift_plus();
});
$("#craft").on("mousedown", "#up_tradegift", function () {
    tradegift_t = setTimeout(function () {tradegift_p = setInterval(tradegift_plus, 50);}, 500);
});

function tradegift_minus() {
    if (prod_tradegift.count > 0) {
        prod_tradegift.count -= 1;
        $("#num_tradegift").text(prod_tradegift.count);
    }
}
$("#craft").on("click", "#dwn_tradegift", function () {
    tradegift_minus();
});
$("#craft").on("mousedown", "#dwn_tradegift", function () {
    tradegift_t = setTimeout(function () {tradegift_m = setInterval(tradegift_minus, 50);}, 500);
});

function craft_peacegift() {
    $("#task .peacegift.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        peacegift += prod_peacegift.count;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Friedensgeschenk wurde fertiggestellt.</p>");
        check_msg();
        $("#task .peacegift").remove();
    }
}
$("#craft").on("click", "#btn_peacegift", function () {
    task.append(`<tr>
                <td class='peacegift'>Herstellung von Friedensgeschenk</td>
                <td class='peacegift time'></td>
                </tr>`);
    food -= prod_peacegift.costs.food * prod_peacegift.count;
    wood -= prod_peacegift.costs.wood * prod_peacegift.count;
    leather -= prod_peacegift.costs.leather * prod_peacegift.count;
    cloth -= prod_peacegift.costs.cloth * prod_peacegift.count;
    iron -= prod_peacegift.costs.iron * prod_peacegift.count;
    clothes -= prod_peacegift.costs.clothes * prod_peacegift.count;
    slot_craft = true;
    crafter = prod_peacegift.curr_time;
    craft = setInterval(craft_peacegift, speed / 10);
});
var peacegift_p,
    peacegift_m,
    peacegift_t;
function peacegift_plus() {
    prod_peacegift.count += 1;
    $("#num_peacegift").text(prod_peacegift.count);
}
$("#craft").on("click", "#up_peacegift", function () {
    peacegift_plus();
});
$("#craft").on("mousedown", "#up_peacegift", function () {
    peacegift_t = setTimeout(function () {peacegift_p = setInterval(peacegift_plus, 50);}, 500);
});

function peacegift_minus() {
    if (prod_peacegift.count > 0) {
        prod_peacegift.count -= 1;
        $("#num_peacegift").text(prod_peacegift.count);
    }
}
$("#craft").on("click", "#dwn_peacegift", function () {
    peacegift_num -= 1;
    $("#num_peacegift").text(peacegift_num);
});
$("#craft").on("mousedown", "#dwn_peacegift", function () {
    peacegift_t = setTimeout(function () {peacegift_m = setInterval(peacegift_minus, 50);}, 500);
});

function craft_poisongift() {
    $("#task .poisongift.time").text(secondsTommss(crafter.toFixed(1)));
    crafter -= 0.1;
    if (crafter < 0) {
        poisongift += prod_poisongift.count;
        clearInterval(craft);
        slot_craft = false;
        msg.prepend("<p>Giftgeschenk wurde fertiggestellt.</p>");
        check_msg();
        $("#task .poisongift").remove();
    }
}
$("#craft").on("click", "#btn_poisongift", function () {
    task.append(`<tr>
                <td class='poisongift'>Herstellung von Giftgeschenk</td>
                <td class='poisongift time'></td>
                </tr>`);
    food -= prod_poisongift.costs.food * prod_poisongift.count;
    wood -= prod_poisongift.costs.wood * prod_poisongift.count;
    leather -= prod_poisongift.costs.leather * prod_poisongift.count;
    cloth -= prod_poisongift.costs.cloth * prod_poisongift.count;
    iron -= prod_poisongift.costs.iron * prod_poisongift.count;
    clothes -= prod_poisongift.costs.clothes * prod_poisongift.count;
    poison -= prod_poisongift.costs.poison * prod_poisongift.count;
    slot_craft = true;
    crafter = prod_poisongift.curr_time;
    craft = setInterval(craft_poisongift, speed / 10);
});
var poisongift_p,
    poisongift_m,
    poisongift_t;
function poisongift_plus() {
    prod_poisongift.count += 1;
    $("#num_poisongift").text(prod_poisongift.count);
}
$("#craft").on("click", "#up_poisongift", function () {
    poisongift_plus();
});
$("#craft").on("mousedown", "#up_poisongift", function () {
    poisongift_t = setTimeout(function () {poisongift_p = setInterval(poisongift_plus, 50);}, 500);
});

function poisongift_minus() {
    if (prod_poisongift.count > 0) {
        prod_poisongift.count -= 1;
        $("#num_poisongift").text(prod_poisongift.count);
    }
}
$("#craft").on("click", "#dwn_poisongift", function () {
    poisongift_minus();
});
$("#craft").on("mousedown", "#dwn_poisongift", function () {
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