/*eslint-disable no-undef*/
/*jslint white:true*/
function gen_market() {
    var i;
    /*for (i = 0; i < 5; i++) {
        var rnd = Math.floor(Math.random() * a_market.length);
        var item_market = a_market[rnd];
        a_market.splice($.inArray(item_market, a_market), 1);
        $("#trade_items").append(`<tr>
                                <td>` + item_market + `</td>
                                <td>` + `verfügbar/gesamt` + `</td>
                                <td>` + `kosten` + `</td>
                                </tr>`);
    }*/
    for (i = 0; i < a_market.length; i++) {
        $("#trade_items").append(`<tr>
                                <td>` + a_market[i] + `</td>
                                <td>` + `verfügbar/gesamt` + `</td>
                                <td>` + `kosten` + `</td>
                                </tr>`);
    }
}