function decode(str) {
    return str.replace(/&#(\d+);/g, function (match, dec) {
        return String.fromCharCode(dec);
    });
}
var str,
    n1 = true,
    n2 = true,
    n3 = true,
    n4 = true;
$("#villagers h2").click(function () {
    if (n1 === true) {
        str = "&#9205;Bewohner";
        str = decode(str);
        $("#villagers h2").text(str);
        n1 = false;
    } else {
        str = "&#9207;Bewohner";
        str = decode(str);
        $("#villagers h2").text(str);
        n1 = true;
    }
    $("#content_villagers").slideToggle();
});

$("#jobs h2").click(function () {
    if (n2 === true) {
        str = "&#9205;Jobs";
        str = decode(str);
        $("#jobs h2").text(str);
        n2 = false;
    } else {
        str = "&#9207;Jobs";
        str = decode(str);
        $("#jobs h2").text(str);
        n2 = true;
    }
    $("#content_jobs").slideToggle();
});

$("#supplies h2").click(function () {
    if (n3 === true) {
        str = "&#9205;Vorräte";
        str = decode(str);
        $("#supplies h2").text(str);
        n3 = false;
    } else {
        str = "&#9207;Vorräte";
        str = decode(str);
        $("#supplies h2").text(str);
        n3 = true;
    }
    $("#content_supplies").slideToggle();
});

$("#items h2").click(function () {
    if (n4 === true) {
        str = "&#9205;Gegenstände";
        str = decode(str);
        $("#items h2").text(str);
        n4 = false;
    } else {
        str = "&#9207;Gegenstände";
        str = decode(str);
        $("#items h2").text(str);
        n4 = true;
    }
    $("#content_items").slideToggle();
});
