/* Load Savefile */
$("#btn_load").click(function () {
    if ($("#load")[0].files.length !== 0) {
        var file = $("#load")[0].files[0],
            reader = new FileReader();

        reader.onload = function (e) {
            var contents = JSON.parse(e.target.result);
            iecoin = contents.$iecoin;
            food = contents.$food;
            wood = contents.$wood;
            stone = contents.$stone;
            leather = contents.$leather;
            cloth = contents.$cloth;
            coal = contents.$coal;
            iron = contents.$iron;
            clothes = contents.$clothes;
            medicine = contents.$medicine;
            poison = contents.$poison;
            leatherarmor = contents.$leatherarmor;
            ironarmor = contents.$ironarmor;
            sword = contents.$sword;
            axe = contents.$axe;
            morningstar = contents.$morningstar;
            shortbow = contents.$shortbow;
            longbow = contents.$longbow;
            crossbow = contents.$crossbow;
            tradegift = contents.$tradegift;
            peacegift = contents.$peacegift;
            poisongift = contents.$poisongift;
            horse = contents.$horse;
            supplies_max = contents.$supplies_max;

            a_market = contents.$a_market;

            villager = contents.$villager;

            gatherer = contents.$gatherer;
            lumberjack = contents.$lumberjack;    wood_bonus = contents.$wood_bonus;
            quarryman = contents.$quarryman;      stone_bonus = contents.$stone_bonus;
            worker = contents.$worker;
            hunter = contents.$hunter;            leather_bonus = contents.$leather_bonus;
            shepherd = contents.$shepherd;        cloth_bonus = contents.$cloth_bonus;
            coalminer = contents.$coalminer;      coal_bonus = contents.$coal_bonus;
            ironminer = contents.$ironminer;      iron_bonus = contents.$iron_bonus;
            tailor = contents.$tailor;            clothes_bonus = contents.$clothes_bonus;
            alchemist = contents.$alchemist;      brew_time = contents.$brew_time;
            smith = contents.$smith;              craft_time = contents.$craft_time;
            scout = contents.$scout;              travel_time = contents.$travel_time;
            knight = contents.$knight;            damage_bonus = contents.$damage_bonus;
            stableman = contents.$stableman;      breed_bonus = contents.$breed_bonus;

            trade_bonus = contents.$trade_bonus;

            hut.count = contents.$hut;
            huntinghut.count = contents.$huntinghut;        huntinghut_up.count = contents.$huntinghut_up;
            storage.count = contents.$storage;              storage_up.count = contents.$storage_up;
            lumberjackhut.count = contents.$lumberjackhut;  lumberjackhut_up.count = contents.$lumberjackhut_up;
            sheepstall.count = contents.$sheepstall;        sheepstall_up.count = contents.$sheepstall_up;
            quarry.count = contents.$quarry;                quarry_up.count = contents.$quarry_up;
            coalmine.count = contents.$coalmine;            coalmine_up.count = contents.$coalmine_up;
            ironmine.count = contents.$ironmine;            ironmine_up.count = contents.$ironmine_up;
            tailorhouse.count = contents.$tailorhouse;      tailorhouse_up.count = contents.$tailorhouse_up;
            alchemisthut.count = contents.$alchemisthut;    alchemisthut_up.count = contents.$alchemisthut_up;
            forge.count = contents.$forge;                  forge_up.count = contents.$forge_up;
            market.count = contents.$market;                market_up.count = contents.$market_up;
            scoutpost.count = contents.$scoutpost;          scoutpost_up.count = contents.$scoutpost_up;
            barracks.count = contents.$barracks;            barracks_up.count = contents.$barracks_up;
            stable.count = contents.$stable;                stable_up.count = contents.$stable_up;


            weather.season.current = contents.$weather_season;
            weather.tempr = contents.$weather_tempr;
            weather.type.current = contents.$weather_type;

            date.day = contents.$date_day;
            date.month.current = contents.$date_month;
            date.year = contents.$date_year;
        };
        reader.readAsText(file);
    }

    setTimeout(function() {setRightContainerToWindowsize();}, 50);
    setTimeout(function() {showRelatedAfterBuildOrLoad();}, 50);
    setTimeout(function() {genMarket();}, 50);
    setTimeout(function() {showWeather();}, 50);

    clearInterval(interval_refr);
    clearInterval(interval_supp_prod);
    clearInterval(interval_new_vil);
    clearInterval(interval_weath);

    interval_refr = setInterval(refresh, 100);
    interval_supp_prod = setInterval(supplie_prod, speed * 5);
    interval_new_vil = setInterval(new_villagers, speed * 30);
    interval_weath = setInterval(weath, speed * 120);
});
/* Save to File */
function createJsonSave() {
    var saveFile = {
        $iecoin: iecoin,
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

        $a_market: a_market,

        $villager: villager,

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
        $stable: stable.count,                $stable_up: stable_up.count,

        $weather_season: weather.season.current,
        $weather_tempr: weather.tempr,
        $weather_type: weather.type.current,

        $date_day: date.day,
        $date_month: date.month.current,
        $date_year: date.year
    },
        saveJson = JSON.stringify(saveFile, undefined, 3);
    return saveJson;
}
$("#btn_export").click(function () {
    var saveJson = createJsonSave(),
        link = $("<a></a>"),
        text = encodeURIComponent(saveJson);

    link.prop("id", "save");
    link.prop("download", "savefile.txt");
    link.prop("href", "data:application/octet-stream," + text);
    link.appendTo("#options");
    link.get(0).click();
});

$("#btn_save").click(function () {
    sav();
});
/* Dark Theme Switch */
$("#switch").click(function () {
    var checkbox = $("#isDark");
    checkbox.prop("checked", !checkbox.prop("checked"));
    if (checkbox.prop("checked") == true) {
        $("#slider").css("transform", "translateX(30px)");
        setLocalStorage("dark", "true");
        document.documentElement.style.setProperty("--bg", "#444444");
        document.documentElement.style.setProperty("--bg2", "#222222");
        document.documentElement.style.setProperty("--fg", "white");
    } else {
        $("#slider").css("transform", "");
        setLocalStorage("dark", "false");
        document.documentElement.style.setProperty("--bg", "gainsboro");
        document.documentElement.style.setProperty("--bg2", "white");
        document.documentElement.style.setProperty("--fg", "#222222");
    }
});
if (getLocalStorage("dark") === "true") {
    document.documentElement.style.setProperty("--bg", "#444444");
    document.documentElement.style.setProperty("--bg2", "#222222");
    document.documentElement.style.setProperty("--fg", "white");
    $("#isDark").prop("checked", true);
    $("#slider").css("transform", "translateX(30px)");
} else {
    document.documentElement.style.setProperty("--bg", "gainsboro");
    document.documentElement.style.setProperty("--bg2", "white");
    document.documentElement.style.setProperty("--fg", "#222222");
    $("#isDark").prop("checked", false);
    $("#slider").css("transform", "");
}
/* Popout */
$("#btn_popout").click(function () {
    window.open(window.location.href, "", "height=600,width=395");
});