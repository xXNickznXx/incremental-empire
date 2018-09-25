/*eslint-disable no-undef*/
/*jslint white:true*/

var num = 0;
var sword_p;
var sword_m;
var sword_t;



$("#btn_armor").click(function () {
    if ($("#coll_armor").css("display") === "none") {
        $("#btn_armor").css("border-bottom", "0");
        $("#btn_armor").css("border-bottom-left-radius", "0");
        $("#btn_armor").css("border-bottom-right-radius", "0");
    } else {
        $("#btn_armor").removeAttr("style");
    }
    $("#coll_armor").slideToggle();
});
$("#btn_weapons").click(function () {
    if ($("#coll_weapons").css("display") === "none") {
        $("#btn_weapons").css("border-bottom", "0");
        $("#btn_weapons").css("border-bottom-left-radius", "0");
        $("#btn_weapons").css("border-bottom-right-radius", "0");
    } else {
        $("#btn_weapons").removeAttr("style");
    }
    $("#coll_weapons").slideToggle();
});
$("#btn_melee").click(function () {
    if ($("#coll_melee").css("display") === "none") {
        $("#btn_melee").css("border-bottom", "0");
        $("#btn_melee").css("border-bottom-left-radius", "0");
        $("#btn_melee").css("border-bottom-right-radius", "0");
    } else {
        $("#btn_melee").removeAttr("style");
    }
    $("#coll_melee").slideToggle();
});
$("#btn_ranged").click(function () {
    if ($("#coll_ranged").css("display") === "none") {
        $("#btn_ranged").css("border-bottom", "0");
        $("#btn_ranged").css("border-bottom-left-radius", "0");
        $("#btn_ranged").css("border-bottom-right-radius", "0");
    } else {
        $("#btn_ranged").removeAttr("style");
    }
    $("#coll_ranged").slideToggle();
});
$("#btn_gifts").click(function () {
    if ($("#coll_gifts").css("display") === "none") {
        $("#btn_gifts").css("border-bottom", "0");
        $("#btn_gifts").css("border-bottom-left-radius", "0");
        $("#btn_gifts").css("border-bottom-right-radius", "0");
    } else {
        $("#btn_gifts").removeAttr("style");
    }
    $("#coll_gifts").slideToggle();
});

$("#up_sword").click(function () {
    num += 1;
    $("#num_sword").val(num);
});

$("#up_sword").mousedown(function () {
    sword_t = setTimeout(function () {sword_p = setInterval(sword_plus, 50)}, 500);
});
$("#up_sword").mouseup(function () {
    clearInterval(sword_p);
    clearInterval(sword_t);
});
function sword_plus() {
    num += 1;
    $("#num_sword").val(num);
}

$("#dwn_sword").click(function () {
    num -= 1;
    $("#num_sword").val(num);
});

$("#dwn_sword").mousedown(function () {
    sword_t = setTimeout(function () {sword_m = setInterval(sword_minus, 50)}, 500);
});
$("#dwn_sword").mouseup(function () {
    clearInterval(sword_m);
    clearInterval(sword_t);
});
function sword_minus() {
    num -= 1;
    $("#num_sword").val(num);
}