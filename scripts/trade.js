/*eslint-disable no-undef*/
/*jslint white:true*/
function gen_market() {
    for (var key in a_market) {
        if (a_market.hasOwnProperty(key)) {
            $("#trade tbody").append(`<tr>
                                    <td>` + a_market[key].name + `</td>
                                    <td>` + a_market[key].number + `</td>
                                    <td><button id="btn_buy_` + key + `" class="btn_content">` + a_market[key].buy_price + `</button></td>
                                    <td><button id="btn_sell_` + key + `" class="btn_content">` + a_market[key].sell_price + `</button></td>
                                    </tr>`);
        }
    }
}

$("#trade").on("click", "#btn_buy_food", function () {
    iecoin -= a_market.food.buy_price;
    if (a_market.food.buy_price < 50) {
        a_market.food.buy_price += 1;
        a_market.food.sell_price += 1;
    }
    food += a_market.food.number;
});
$("#trade").on("click", "#btn_sell_food", function () {
    iecoin += a_market.food.sell_price;
    if (a_market.food.sell_price > 10) {
        a_market.food.sell_price -= 1;
        a_market.food.buy_price -= 1;
    }
    food -= a_market.food.number;
});

$("#trade").on("click", "#btn_buy_wood", function () {
    iecoin -= a_market.wood.buy_price;
    if (a_market.wood.buy_price < 40) {
        a_market.wood.buy_price += 1;
        a_market.wood.sell_price += 1;
    }
    wood += a_market.wood.number;
});
$("#trade").on("click", "#btn_sell_wood", function () {
    iecoin += a_market.wood.sell_price;
    if (a_market.wood.sell_price > 5) {
        a_market.wood.sell_price -= 1;
        a_market.wood.buy_price -= 1;
    }
    wood -= a_market.wood.number;
});

$("#trade").on("click", "#btn_buy_stone", function () {
    iecoin -= a_market.stone.buy_price;
    if (a_market.stone.buy_price < 50) {
        a_market.stone.buy_price += 1;
        a_market.stone.sell_price += 1;
    }
    stone += a_market.stone.number;
});
$("#trade").on("click", "#btn_sell_stone", function () {
    iecoin += a_market.stone.sell_price;
    if (a_market.stone.sell_price > 10) {
        a_market.stone.sell_price -= 1;
        a_market.stone.buy_price -= 1;
    }
    stone -= a_market.stone.number;
});

$("#trade").on("click", "#btn_buy_leather", function () {
    iecoin -= a_market.leather.buy_price;
    if (a_market.leather.buy_price < 40) {
        a_market.leather.buy_price += 1;
        a_market.leather.sell_price += 1;
    }
    leather += a_market.leather.number;
});
$("#trade").on("click", "#btn_sell_leather", function () {
    iecoin += a_market.leather.sell_price;
    if (a_market.leather.sell_price > 5) {
        a_market.leather.sell_price -= 1;
        a_market.leather.buy_price -= 1;
    }
    leather -= a_market.leather.number;
});

$("#trade").on("click", "#btn_buy_cloth", function () {
    iecoin -= a_market.cloth.buy_price;
    if (a_market.cloth.buy_price < 40) {
        a_market.cloth.buy_price += 1;
        a_market.cloth.sell_price += 1;
    }
    cloth += a_market.cloth.number;
});
$("#trade").on("click", "#btn_sell_cloth", function () {
    iecoin += a_market.cloth.sell_price;
    if (a_market.cloth.sell_price > 5) {
        a_market.cloth.sell_price -= 1;
        a_market.cloth.buy_price -= 1;
    }
    cloth -= a_market.cloth.number;
});

$("#trade").on("click", "#btn_buy_coal", function () {
    iecoin -= a_market.coal.buy_price;
    if (a_market.coal.buy_price < 50) {
        a_market.coal.buy_price += 1;
        a_market.coal.sell_price += 1;
    }
    coal += a_market.coal.number;
});
$("#trade").on("click", "#btn_sell_coal", function () {
    iecoin += a_market.coal.sell_price;
    if (a_market.coal.sell_price > 10) {
        a_market.coal.sell_price -= 1;
        a_market.coal.buy_price -= 1;
    }
    coal -= a_market.coal.number;
});

$("#trade").on("click", "#btn_buy_iron", function () {
    iecoin -= a_market.iron.buy_price;
    if (a_market.iron.buy_price < 50) {
        a_market.iron.buy_price += 1;
        a_market.iron.sell_price += 1;
    }
    iron += a_market.iron.number;
});
$("#trade").on("click", "#btn_sell_iron", function () {
    iecoin += a_market.iron.sell_price;
    if (a_market.iron.sell_price > 10) {
        a_market.iron.sell_price -= 1;
        a_market.iron.buy_price -= 1;
    }
    iron -= a_market.iron.number;
});

$("#trade").on("click", "#btn_buy_clothes", function () {
    iecoin -= a_market.clothes.buy_price;
    if (a_market.clothes.buy_price < 50) {
        a_market.clothes.buy_price += 1;
        a_market.clothes.sell_price += 1;
    }
    clothes += a_market.clothes.number;
});
$("#trade").on("click", "#btn_sell_clothes", function () {
    iecoin += a_market.clothes.sell_price;
    if (a_market.clothes.sell_price > 10) {
        a_market.clothes.sell_price -= 1;
        a_market.clothes.buy_price -= 1;
    }
    clothes -= a_market.clothes.number;
});

$("#trade").on("click", "#btn_buy_medicine", function () {
    iecoin -= a_market.medicine.buy_price;
    if (a_market.medicine.buy_price < 60) {
        a_market.medicine.buy_price += 1;
        a_market.medicine.sell_price += 1;
    }
    medicine += a_market.medicine.number;
});
$("#trade").on("click", "#btn_sell_medicine", function () {
    iecoin += a_market.medicine.sell_price;
    if (a_market.medicine.sell_price > 15) {
        a_market.medicine.sell_price -= 1;
        a_market.medicine.buy_price -= 1;
    }
    medicine -= a_market.medicine.number;
});

$("#trade").on("click", "#btn_buy_poison", function () {
    iecoin -= a_market.poison.buy_price;
    if (a_market.poison.buy_price < 60) {
        a_market.poison.buy_price += 1;
        a_market.poison.sell_price += 1;
    }
    poison += a_market.poison.number;
});
$("#trade").on("click", "#btn_sell_poison", function () {
    iecoin += a_market.poison.sell_price;
    if (a_market.poison.sell_price > 15) {
        a_market.poison.sell_price -= 1;
        a_market.poison.buy_price -= 1;
    }
    poison -= a_market.poison.number;
});

$("#trade").on("click", "#btn_buy_leatherarmor", function () {
    iecoin -= a_market.leatherarmor.buy_price;
    if (a_market.leatherarmor.buy_price < 60) {
        a_market.leatherarmor.buy_price += 1;
        a_market.leatherarmor.sell_price += 1;
    }
    leatherarmor += a_market.leatherarmor.number;
});
$("#trade").on("click", "#btn_sell_leatherarmor", function () {
    iecoin += a_market.leatherarmor.sell_price;
    if (a_market.leatherarmor.sell_price > 15) {
        a_market.leatherarmor.sell_price -= 1;
        a_market.leatherarmor.buy_price -= 1;
    }
    leatherarmor -= a_market.leatherarmor.number;
});

$("#trade").on("click", "#btn_buy_ironarmor", function () {
    iecoin -= a_market.ironarmor.buy_price;
    if (a_market.ironarmor.buy_price < 60) {
        a_market.ironarmor.buy_price += 1;
        a_market.ironarmor.sell_price += 1;
    }
    ironarmor += a_market.ironarmor.number;
});
$("#trade").on("click", "#btn_sell_ironarmor", function () {
    iecoin += a_market.ironarmor.sell_price;
    if (a_market.ironarmor.sell_price > 15) {
        a_market.ironarmor.sell_price -= 1;
        a_market.ironarmor.buy_price -= 1;
    }
    ironarmor -= a_market.ironarmor.number;
});

$("#trade").on("click", "#btn_buy_axe", function () {
    iecoin -= a_market.axe.buy_price;
    if (a_market.axe.buy_price < 60) {
        a_market.axe.buy_price += 1;
        a_market.axe.sell_price += 1;
    }
    axe += a_market.axe.number;
});
$("#trade").on("click", "#btn_sell_axe", function () {
    iecoin += a_market.axe.sell_price;
    if (a_market.axe.sell_price > 15) {
        a_market.axe.sell_price -= 1;
        a_market.axe.buy_price -= 1;
    }
    axe -= a_market.axe.number;
});

$("#trade").on("click", "#btn_buy_sword", function () {
    iecoin -= a_market.sword.buy_price;
    if (a_market.sword.buy_price < 60) {
        a_market.sword.buy_price += 1;
        a_market.sword.sell_price += 1;
    }
    sword += a_market.sword.number;
});
$("#trade").on("click", "#btn_sell_sword", function () {
    iecoin += a_market.sword.sell_price;
    if (a_market.sword.sell_price > 15) {
        a_market.sword.sell_price -= 1;
        a_market.sword.buy_price -= 1;
    }
    sword -= a_market.sword.number;
});

$("#trade").on("click", "#btn_buy_morningstar", function () {
    iecoin -= a_market.morningstar.buy_price;
    if (a_market.morningstar.buy_price < 60) {
        a_market.morningstar.buy_price += 1;
        a_market.morningstar.sell_price += 1;
    }
    morningstar += a_market.morningstar.number;
});
$("#trade").on("click", "#btn_sell_morningstar", function () {
    iecoin += a_market.morningstar.sell_price;
    if (a_market.morningstar.sell_price > 15) {
        a_market.morningstar.sell_price -= 1;
        a_market.morningstar.buy_price -= 1;
    }
    morningstar -= a_market.morningstar.number;
});

$("#trade").on("click", "#btn_buy_shortbow", function () {
    iecoin -= a_market.shortbow.buy_price;
    if (a_market.shortbow.buy_price < 60) {
        a_market.shortbow.buy_price += 1;
        a_market.shortbow.sell_price += 1;
    }
    shortbow += a_market.shortbow.number;
});
$("#trade").on("click", "#btn_sell_shortbow", function () {
    iecoin += a_market.shortbow.sell_price;
    if (a_market.shortbow.sell_price > 15) {
        a_market.shortbow.sell_price -= 1;
        a_market.shortbow.buy_price -= 1;
    }
    shortbow -= a_market.shortbow.number;
});

$("#trade").on("click", "#btn_buy_longbow", function () {
    iecoin -= a_market.longbow.buy_price;
    if (a_market.longbow.buy_price < 60) {
        a_market.longbow.buy_price += 1;
        a_market.longbow.sell_price += 1;
    }
    longbow += a_market.longbow.number;
});
$("#trade").on("click", "#btn_sell_longbow", function () {
    iecoin += a_market.longbow.sell_price;
    if (a_market.longbow.sell_price > 15) {
        a_market.longbow.sell_price -= 1;
        a_market.longbow.buy_price -= 1;
    }
    longbow -= a_market.longbow.number;
});

$("#trade").on("click", "#btn_buy_crossbow", function () {
    iecoin -= a_market.crossbow.buy_price;
    if (a_market.crossbow.buy_price < 60) {
        a_market.crossbow.buy_price += 1;
        a_market.crossbow.sell_price += 1;
    }
    crossbow += a_market.crossbow.number;
});
$("#trade").on("click", "#btn_sell_crossbow", function () {
    iecoin += a_market.crossbow.sell_price;
    if (a_market.crossbow.sell_price > 15) {
        a_market.crossbow.sell_price -= 1;
        a_market.crossbow.buy_price -= 1;
    }
    crossbow -= a_market.crossbow.number;
});

$("#trade").on("click", "#btn_buy_tradegift", function () {
    iecoin -= a_market.tradegift.buy_price;
    if (a_market.tradegift.buy_price < 80) {
        a_market.tradegift.buy_price += 1;
        a_market.tradegift.sell_price += 1;
    }
    tradegift += a_market.tradegift.number;
});
$("#trade").on("click", "#btn_sell_tradegift", function () {
    iecoin += a_market.tradegift.sell_price;
    if (a_market.tradegift.sell_price > 20) {
        a_market.tradegift.sell_price -= 1;
        a_market.tradegift.buy_price -= 1;
    }
    tradegift -= a_market.tradegift.number;
});

$("#trade").on("click", "#btn_buy_peacegift", function () {
    iecoin -= a_market.peacegift.buy_price;
    if (a_market.peacegift.buy_price < 160) {
        a_market.peacegift.buy_price += 1;
        a_market.peacegift.sell_price += 1;
    }
    peacegift += a_market.peacegift.number;
});
$("#trade").on("click", "#btn_sell_peacegift", function () {
    iecoin += a_market.peacegift.sell_price;
    if (a_market.peacegift.sell_price > 40) {
        a_market.peacegift.sell_price -= 1;
        a_market.peacegift.buy_price -= 1;
    }
    peacegift -= a_market.peacegift.number;
});

$("#trade").on("click", "#btn_buy_poisongift", function () {
    iecoin -= a_market.poisongift.buy_price;
    if (a_market.poisongift.buy_price < 170) {
        a_market.poisongift.buy_price += 1;
        a_market.poisongift.sell_price += 1;
    }
    poisongift += a_market.poisongift.number;
});
$("#trade").on("click", "#btn_sell_poisongift", function () {
    iecoin += a_market.poisongift.sell_price;
    if (a_market.poisongift.sell_price > 50) {
        a_market.poisongift.sell_price -= 1;
        a_market.poisongift.buy_price -= 1;
    }
    poisongift -= a_market.poisongift.number;
});