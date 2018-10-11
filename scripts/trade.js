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
    if (a_market.food.sell_price > 5) {
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
    if (a_market.stone.buy_price < 40) {
        a_market.stone.buy_price += 1;
        a_market.stone.sell_price += 1;
    }
    stone += a_market.stone.number;
});
$("#trade").on("click", "#btn_sell_stone", function () {
    iecoin += a_market.stone.sell_price;
    if (a_market.stone.sell_price > 5) {
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
    if (a_market.coal.buy_price < 40) {
        a_market.coal.buy_price += 1;
        a_market.coal.sell_price += 1;
    }
    coal += a_market.coal.number;
});
$("#trade").on("click", "#btn_sell_coal", function () {
    iecoin += a_market.coal.sell_price;
    if (a_market.coal.sell_price > 5) {
        a_market.coal.sell_price -= 1;
        a_market.coal.buy_price -= 1;
    }
    coal -= a_market.coal.number;
});

$("#trade").on("click", "#btn_buy_iron", function () {
    iecoin -= a_market.iron.buy_price;
    if (a_market.iron.buy_price < 40) {
        a_market.iron.buy_price += 1;
        a_market.iron.sell_price += 1;
    }
    iron += a_market.iron.number;
});
$("#trade").on("click", "#btn_sell_iron", function () {
    iecoin += a_market.iron.sell_price;
    if (a_market.iron.sell_price > 5) {
        a_market.iron.sell_price -= 1;
        a_market.iron.buy_price -= 1;
    }
    iron -= a_market.iron.number;
});

$("#trade").on("click", "#btn_buy_clothes", function () {
    iecoin -= a_market.clothes.buy_price;
    if (a_market.clothes.buy_price < 40) {
        a_market.clothes.buy_price += 1;
        a_market.clothes.sell_price += 1;
    }
    clothes += a_market.clothes.number;
});
$("#trade").on("click", "#btn_sell_clothes", function () {
    iecoin += a_market.clothes.sell_price;
    if (a_market.clothes.sell_price > 5) {
        a_market.clothes.sell_price -= 1;
        a_market.clothes.buy_price -= 1;
    }
    clothes -= a_market.clothes.number;
});