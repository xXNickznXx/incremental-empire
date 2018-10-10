/*eslint-disable no-undef*/
/*jslint white:true*/

$("#btn_start").click(function () {
    if ($("#speed").val() < 200 || $("#speed").val() > 5000) {
        $("#start p").remove();
        $("#start").append("<p>Geschwindigkeit zwischen 200 und 5000.</p>");
    } else {
        speed = $("#speed").val();

        if ($("#load")[0].files.length !== 0) {
            var file = $("#load")[0].files[0],
                reader = new FileReader();

            reader.onload = function (e) {
                var contents = JSON.parse(e.target.result);
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

                villager = contents.$villager;
                villager_unused = contents.$villager_unused;
                villager_max = contents.$villager_max;

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
            };
            reader.readAsText(file);
        }

        $("#main").show();
        $("#bottom").show();
        $("#start").hide();
        
        setTimeout(function () {show_related();}, 30);
        
        gen_market();

        refr = setInterval(refresh, 100);
        supp_prod = setInterval(supplie_prod, speed * 5);
        new_vil = setInterval(new_villagers, speed * 30);
        temperature();
        temperat = setInterval(temperature, speed * 30);
    }
});