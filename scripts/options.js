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
        $medicine: medicine,
        $poison: poison,
        $leatherarmor: leatherarmor,
        $ironarmor: ironarmor,
        $sword: sword,
        $axe: axe,
        $morningstar: morningstar,
        $shortbow: shortbow,
        $longbow: longbow,
        $crossbow: crossbow,
        $tradegift: tradegift,
        $peacegift: peacegift,
        $poisongift: poisongift,
        $horse: horse,
        $supplies_max: supplies_max,

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
        $alchemist: alchemist,      $brew_time: brew_time,
        $smith: smith,              $craft_time: craft_time,
        $scout: scout,              $travel_time: travel_time,
        $knight: knight,            $damage_bonus: damage_bonus,
        $stableman: stableman,      $breed_bonus: breed_bonus,

        $trade_bonus: trade_bonus,

        $hut: hut.count,
        $huntinghut: huntinghut.count,        $huntinghut_up: huntinghut_up.count,
        $storage: storage.count,              $storage_up: storage_up.count,
        $lumberjackhut: lumberjackhut.count,  $lumberjackhut_up: lumberjackhut_up.count,
        $sheepstall: sheepstall.count,        $sheepstall_up: sheepstall_up.count,
        $quarry: quarry.count,                $quarry_up: quarry_up.count,
        $coalmine: coalmine.count,            $coalmine_up: coalmine_up.count,
        $ironmine: ironmine.count,            $ironmine_up: ironmine_up.count,
        $tailorhouse: tailorhouse.count,      $tailorhouse_up: tailorhouse_up.count,
        $alchemisthut: alchemisthut.count,    $alchemisthut_up: alchemisthut_up.count,
        $forge: forge.count,                  $forge_up: forge_up.count,
        $market: market.count,                $market_up: market_up.count,
        $scoutpost: scoutpost.count,          $scoutpost_up: scoutpost_up.count,
        $barracks: barracks.count,            $barracks_up: barracks_up.count,
        $stable: stable.count,                $stable_up: stable_up.count
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