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