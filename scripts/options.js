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

        $hut: hut,
        $huntinghut: huntinghut,        $up_huntinghut: huntinghut_up,
        $storage: storage,              $lvl_storage: storage_up,
        $lumberjackhut: lumberjackhut,  $up_lumberjackhut: lumberjackhut_up,
        $sheepstall: sheepstall,        $up_sheepstall: sheepstall_up,
        $quarry: quarry,                $up_quarry: quarry_up,
        $coalmine: coalmine,            $up_coalmine: coalmine_up,
        $ironmine: ironmine,            $up_ironmine: ironmine_up,
        $tailorhouse: tailorhouse,      $up_tailorhouse: tailorhouse_up,
        $alchemisthut: alchemisthut,    $up_alchemisthut: alchemisthut_up,
        $forge: forge,                  $up_forge: forge_up,
        $market: market,                $up_market: market_up,
        $scoutpost: scoutpost,          $up_scoutpost: scoutpost_up,
        $barracks: barracks,            $up_barracks: barracks_up,
        $stable: stable,                $up_stable: stable_up
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