/*eslint-disable no-undef*/
/*jslint white:true*/
function gen_market() {
    for (var key in a_market) {
        if (a_market.hasOwnProperty(key)) {
            $("#trade_items").append(`<tr>
                                <td>` + a_market[key].name + `</td>
                                <td>` + a_market[key].number + `</td>
                                <td>` + a_market[key].buy_price + `</td>
                                <td>` + a_market[key].sell_price + `</td>
                                </tr>`);
        }
    }
}