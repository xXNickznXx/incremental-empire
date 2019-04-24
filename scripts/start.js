speed = $("#speed").val() * 1000;

if (getLocalStorage("save") !== null) {
    var save = JSON.parse(getLocalStorage("save"));

    iecoin = save.$iecoin;
    food = save.$food;
    wood = save.$wood;
    stone = save.$stone;
    leather = save.$leather;
    cloth = save.$cloth;
    coal = save.$coal;
    iron = save.$iron;
    clothes = save.$clothes;
    medicine = save.$medicine;
    poison = save.$poison;
    leatherarmor = save.$leatherarmor;
    ironarmor = save.$ironarmor;
    sword = save.$sword;
    axe = save.$axe;
    morningstar = save.$morningstar;
    shortbow = save.$shortbow;
    longbow = save.$longbow;
    crossbow = save.$crossbow;
    tradegift = save.$tradegift;
    peacegift = save.$peacegift;
    poisongift = save.$poisongift;
    horse = save.$horse;
    supplies_max = save.$supplies_max;

    a_market = save.$a_market;

    villager = save.$villager;

    gatherer = save.$gatherer;
    lumberjack = save.$lumberjack;    wood_bonus = save.$wood_bonus;
    quarryman = save.$quarryman;      stone_bonus = save.$stone_bonus;
    worker = save.$worker;
    hunter = save.$hunter;            leather_bonus = save.$leather_bonus;
    shepherd = save.$shepherd;        cloth_bonus = save.$cloth_bonus;
    coalminer = save.$coalminer;      coal_bonus = save.$coal_bonus;
    ironminer = save.$ironminer;      iron_bonus = save.$iron_bonus;
    tailor = save.$tailor;            clothes_bonus = save.$clothes_bonus;
    alchemist = save.$alchemist;      brew_time = save.$brew_time;
    smith = save.$smith;              craft_time = save.$craft_time;
    scout = save.$scout;              travel_time = save.$travel_time;
    knight = save.$knight;            damage_bonus = save.$damage_bonus;
    stableman = save.$stableman;      breed_bonus = save.$breed_bonus;

    trade_bonus = save.$trade_bonus;

    hut.count = save.$hut;
    huntinghut.count = save.$huntinghut;        huntinghut_up.count = save.$huntinghut_up;
    storage.count = save.$storage;              storage_up.count = save.$storage_up;
    lumberjackhut.count = save.$lumberjackhut;  lumberjackhut_up.count = save.$lumberjackhut_up;
    sheepstall.count = save.$sheepstall;        sheepstall_up.count = save.$sheepstall_up;
    quarry.count = save.$quarry;                quarry_up.count = save.$quarry_up;
    coalmine.count = save.$coalmine;            coalmine_up.count = save.$coalmine_up;
    ironmine.count = save.$ironmine;            ironmine_up.count = save.$ironmine_up;
    tailorhouse.count = save.$tailorhouse;      tailorhouse_up.count = save.$tailorhouse_up;
    alchemisthut.count = save.$alchemisthut;    alchemisthut_up.count = save.$alchemisthut_up;
    forge.count = save.$forge;                  forge_up.count = save.$forge_up;
    market.count = save.$market;                market_up.count = save.$market_up;
    scoutpost.count = save.$scoutpost;          scoutpost_up.count = save.$scoutpost_up;
    barracks.count = save.$barracks;            barracks_up.count = save.$barracks_up;
    stable.count = save.$stable;                stable_up.count = save.$stable_up;


    weather.season.current = save.$weather_season;
    weather.tempr = save.$weather_tempr;
    weather.type.current = save.$weather_type;

    date.day = save.$date_day;
    date.month.current = save.$date_month;
    date.year = save.$date_year;
}

setTimeout(setRightContainerToWindowsize, 50);
setTimeout(showRelatedAfterBuildOrLoad, 50);
setTimeout(genMarket, 50);
setTimeout(showWeather, 50);

interval_refr = setInterval(refresh, 100);
interval_supp_prod = setInterval(supplie_prod, speed * 5);
interval_new_vil = setInterval(new_villagers, speed * 30);
interval_weath = setInterval(weath, speed * 120);

setInterval(sav, 1000 * 120);
