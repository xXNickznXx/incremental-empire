/*eslint-disable no-undef*/
/*jslint white:true*/
$("#slider").click(function () {
    if ($("#switch input").prop("checked") !== true) {
        setCookie("dark", "true", 30);
        document.documentElement.style.setProperty("--bg", "#444444");
        document.documentElement.style.setProperty("--bg2", "#222222");
        document.documentElement.style.setProperty("--fg", "white");
    } else {
        setCookie("dark", "false", 30);
        document.documentElement.style.setProperty("--bg", "gainsboro");
        document.documentElement.style.setProperty("--bg2", "white");
        document.documentElement.style.setProperty("--fg", "#222222");
    }
});
if (getCookie("dark") === "true") {
    document.documentElement.style.setProperty("--bg", "#444444");
    document.documentElement.style.setProperty("--bg2", "#222222");
    document.documentElement.style.setProperty("--fg", "white");
    $("#switch input").prop("checked", true);
} else {
    document.documentElement.style.setProperty("--bg", "gainsboro");
    document.documentElement.style.setProperty("--bg2", "white");
    document.documentElement.style.setProperty("--fg", "#222222");
    $("#switch input").prop("checked", false);
}

/* Save */
$("#btn_save").click(function () {
    var saveFile = {
        $food: food,
        $wood: wood,
        $stone: stone,
        $leather: leather,
        $cloth: cloth,
        $coal: coal,
        $iron: iron,
        $clothes: clothes,
        $armor: armor,
        $sword: sword,
        $resources_max: resources_max,

        $villager: villager,
        $villager_unused: villager_unused,
        $villager_max: villager_max,

        $gatherer: gatherer,
        $lumberjack: lumberjack,    $wood_bonus: wood_bonus,
        $quarryman: quarryman,      $stone_bonus: stone_bonus,
        $worker: worker,
        $hunter: hunter,            $leather_bonus: leather_bonus,
        $shepherd: shepherd,        $cloth_bonus: cloth_bonus,
        $coalminer: coalminer,      $coal_bonus: coal_bonus,
        $ironminer: ironminer,      $iron_bonus: iron_bonus,
        $tailor: tailor,            $clothes_bonus: clothes_bonus,
        $smith: smith,              $craft_time: craft_time,
        $scout: scout,              $travel_time: travel_time,
        $knight: knight,            $damage_bonus: damage_bonus,

        $trade_bonus: trade_bonus,

        $hut: hut,
        $huntinghut: huntinghut,        $up_huntinghut: up_huntinghut,
        $storage: storage,              $lvl_storage: lvl_storage,
        $lumberjackhut: lumberjackhut,  $up_lumberjackhut: up_lumberjackhut,
        $sheepstall: sheepstall,        $up_sheepstall: up_sheepstall,
        $quarry: quarry,                $up_quarry: up_quarry,
        $coalmine: coalmine,            $up_coalmine: up_coalmine,
        $ironmine: ironmine,            $up_ironmine: up_ironmine,
        $tailorhouse: tailorhouse,      $up_tailorhouse: up_tailorhouse,
        $forge: forge,                  $up_forge: up_forge,
        $market: market,                $up_market: up_market,
        $scoutpost: scoutpost,          $up_scoutpost: up_scoutpost,
        $barracks: barracks,            $up_barracks: up_barracks
    },
        saveJson = JSON.stringify(saveFile, undefined, 3),
        link = $("<a></a>"),
        text = encodeURIComponent(saveJson);

    link.prop("id", "save");
    link.prop("download", "savefile.txt");
    link.prop("href", "data:application/octet-stream," + text);
    link.appendTo("#options");
    link.get(0).click();
});