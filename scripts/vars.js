/*eslint-disable no-undef*/
/*jslint white:true*/
var iecoin = 0,
    food = 0,
    wood = 0,
    stone = 0,
    leather = 0,
    cloth = 0,
    coal = 0,
    iron = 0,
    clothes = 0,
    medicine = 0,
    poison = 0,
    leatherarmor = 0,
    ironarmor = 0,
    axe = 0,
    sword = 0,
    morningstar = 0,
    shortbow = 0,
    longbow = 0,
    crossbow = 0,
    tradegift = 0,
    peacegift = 0,
    poisongift = 0,
    horse = 0,
    supplies_max = 100,
    
    a_market = {
        food: {
            name: "Nahrung",
            number: 100,
            buy_price: 20,
            sell_price: 16
        },
        wood: {
            name: "Holz",
            number: 50,
            buy_price: 15,
            sell_price: 12
        },
        stone: {
            name: "Stein",
            number: 50,
            buy_price: 20,
            sell_price: 16
        },
        leather: {
            name: "Leder",
            number: 40,
            buy_price: 15,
            sell_price: 12
        },
        cloth: {
            name: "Wolle",
            number: 40,
            buy_price: 15,
            sell_price: 12
        },
        coal: {
            name: "Kohle",
            number: 30,
            buy_price: 20,
            sell_price: 16
        },
        iron: {
            name: "Eisen",
            number: 25,
            buy_price: 20,
            sell_price: 16
        },
        clothes: {
            name: "Kleidung",
            number: 20,
            buy_price: 20,
            sell_price: 16
        },
        medicine: {
            name: "Medizin",
            number: 15,
            buy_price: 30,
            sell_price: 24
        },
        poison: {
            name: "Gift",
            number: 15,
            buy_price: 30,
            sell_price: 24
        },
        leatherarmor: {
            name: "Lederrüstung",
            number: 10,
            buy_price: 30,
            sell_price: 24
        },
        ironarmor: {
            name: "Eisenrüstung",
            number: 5,
            buy_price: 30,
            sell_price: 24
        },
        axe: {
            name: "Axt",
            number: 15,
            buy_price: 30,
            sell_price: 24
        },
        sword: {
            name: "Schwert",
            number: 10,
            buy_price: 30,
            sell_price: 24
        },
        morningstar: {
            name: "Morgenstern",
            number: 5,
            buy_price: 30,
            sell_price: 24
        },
        shortbow: {
            name: "Kurzbogen",
            number: 15,
            buy_price: 30,
            sell_price: 24
        },
        longbow: {
            name: "Langbogen",
            number: 10,
            buy_price: 30,
            sell_price: 24
        },
        crossbow: {
            name: "Armbrust",
            number: 5,
            buy_price: 30,
            sell_price: 24
        },
        tradegift: {
            name: "Handelsgeschenk",
            number: 1,
            buy_price: 50,
            sell_price: 40
        },
        peacegift: {
            name: "Friedensgeschenk",
            number: 1,
            buy_price: 100,
            sell_price: 80
        },
        poisongift: {
            name: "Giftgeschenk",
            number: 1,
            buy_price: 110,
            sell_price: 88
        }
    },

    villager = 5,
    villager_unused = 5,
    villager_max = 10,

    gatherer = 0,
    lumberjack = 0, wood_bonus = 1,
    quarryman = 0,  stone_bonus = 1,
    worker = 0,
    hunter = 0,     leather_bonus = 1,
    shepherd = 0,   cloth_bonus = 1,
    coalminer = 0,  coal_bonus = 1,
    ironminer = 0,  iron_bonus = 1,
    tailor = 0,     clothes_bonus = 1,
    alchemist = 0,  brew_time = 1,
    smith = 0,      craft_time = 1,
    scout = 0,      travel_time = 1,
    knight = 0,     damage_bonus = 1,
    stableman = 0,  breed_bonus = 1,

    trade_bonus = 1,
    
    hut = {
        count: 0,
        time: 20,
        curr_time: null,
        costs: {
            wood: 50,
            stone: 10
        }
    },
    hut_up = {
        time: hut.time * 2,
        curr_time: null,
        costs: {
            wood: hut.costs.wood * 2,
            stone: hut.costs.stone * 2
        }
    },
    
    huntinghut = {
        count: false,
        time: 30,
        curr_time: null,
        costs: {
            wood: 150,
            stone: 30
        }
    },
    huntinghut_up = {
        count: false,
        time: huntinghut.time * 2,
        curr_time: null,
        costs: {
            wood: huntinghut.costs.wood * 2,
            stone: huntinghut.costs.stone * 2
        }
    },
    
    storage = {
        count: false,
        time: 60,
        curr_time: null,
        costs: {
            wood: 100,
            stone: 100
        }
    },
    storage_up = {
        count: 0,
        time: storage.time * 2,
        curr_time: null,
        costs: {
            wood: storage.costs.wood * 4,
            stone: storage.costs.stone * 4
        }
    },
    
    lumberjackhut = {
        count: false,
        time: 80,
        curr_time: null,
        costs: {
            wood: 200,
            stone: 50
        }
    },
    lumberjackhut_up = {
        count: false,
        time: lumberjackhut.time * 2,
        curr_time: null,
        costs: {
            wood: lumberjackhut.costs.wood * 2,
            stone: lumberjackhut.costs.stone * 2
        }
    },
    
    sheepstall = {
        count: false,
        time: 100,
        curr_time: null,
        costs: {
            wood: 250,
            stone: 75
        }
    },
    sheepstall_up = {
        count: false,
        time: sheepstall.time * 2,
        curr_time: null,
        costs: {
            wood: sheepstall.costs.wood * 2,
            stone: sheepstall.costs.stone * 2
        }
    },
    
    quarry = {
        count: false,
        time: 120,
        curr_time: null,
        costs: {
            wood: 300,
            stone: 100
        }
    },
    quarry_up = {
        count: false,
        time: quarry.time * 2,
        curr_time: null,
        costs: {
            wood: quarry.costs.wood * 2,
            stone: quarry.costs.stone * 2
        }
    },
    
    coalmine = {
        count: false,
        time: 140,
        curr_time: null,
        costs: {
            wood: 350,
            stone: 150
        }
    },
    coalmine_up = {
        count: false,
        time: coalmine.time * 2,
        curr_time: null,
        costs: {
            wood: coalmine.costs.wood * 2,
            stone: coalmine.costs.stone * 2
        }
    },
    
    ironmine = {
        count: false,
        time: 180,
        curr_time: null,
        costs: {
            wood: 400,
            stone: 200,
            coal: 50
        }
    },
    ironmine_up = {
        count: false,
        time: ironmine.time * 2,
        curr_time: null,
        costs: {
            wood: ironmine.costs.wood * 2,
            stone: ironmine.costs.stone * 2,
            coal: ironmine.costs.coal * 2
        }
    },
    
    tailorhouse = {
        count: false,
        time: 240,
        curr_time: null,
        costs: {
            wood: 500,
            stone: 300,
            coal: 100
        }
    },
    tailorhouse_up = {
        count: false,
        time: tailorhouse.time * 2,
        curr_time: null,
        costs: {
            wood: tailorhouse.costs.wood * 2,
            stone: tailorhouse.costs.stone * 2,
            coal: tailorhouse.costs.coal * 2
        }
    },
    
    alchemisthut = {
        count: false,
        time: 270,
        curr_time: null,
        costs: {
            wood: 550,
            stone: 400,
            coal: 150,
            iron: 50
        }
    },
    alchemisthut_up = {
        count: false,
        time: alchemisthut.time * 2,
        curr_time: null,
        costs: {
            wood: alchemisthut.costs.wood * 2,
            stone: alchemisthut.costs.stone * 2,
            coal: alchemisthut.costs.coal * 2,
            iron: alchemisthut.costs.iron * 2
        }
    },
    
    forge = {
        count: false,
        time: 300,
        curr_time: null,
        costs: {
            wood: 600,
            stone: 450,
            coal: 200,
            iron: 100
        }
    },
    forge_up = {
        count: false,
        time: forge.time * 2,
        curr_time: null,
        costs: {
            wood: forge.costs.wood * 2,
            stone: forge.costs.stone * 2,
            coal: forge.costs.coal * 2,
            iron: forge.costs.iron * 2
        }
    },
    
    market = {
        count: false,
        time: 600,
        curr_time: null,
        costs: {
            wood: 750,
            stone: 600,
            coal: 300,
            iron: 150
        }
    },
    market_up = {
        count: false,
        time: market.time * 2,
        curr_time: null,
        costs: {
            wood: market.costs.wood * 2,
            stone: market.costs.stone * 2,
            coal: market.costs.coal * 2,
            iron: market.costs.iron * 2
        }
    },
    
    scoutpost = {
        count: false,
        time: 900,
        curr_time: null,
        costs: {
            wood: 1000,
            stone: 750,
            coal: 400,
            iron: 250
        }
    },
    scoutpost_up = {
        count: false,
        time: scoutpost.time * 2,
        curr_time: null,
        costs: {
            wood: scoutpost.costs.wood * 2,
            stone: scoutpost.costs.stone * 2,
            coal: scoutpost.costs.coal * 2,
            iron: scoutpost.costs.iron * 2
        }
    },
    
    barracks = {
        count: false,
        time: 1200,
        curr_time: null,
        costs: {
            wood: 1500,
            stone: 1200,
            coal: 1000,
            iron: 800
        }
    },
    barracks_up = {
        count: false,
        time: barracks.time * 2,
        curr_time: null,
        costs: {
            wood: barracks.costs.wood * 2,
            stone: barracks.costs.stone * 2,
            coal: barracks.costs.coal * 2,
            iron: barracks.costs.iron * 2
        }
    },
    
    stable = {
        count: false,
        time: 1800,
        curr_time: null,
        costs: {
            wood: 2500,
            stone: 2000,
            coal: 1500,
            iron: 1200
        }
    },
    stable_up = {
        count: false,
        time: stable.time * 2,
        curr_time: null,
        costs: {
            wood: stable.costs.wood * 2,
            stone: stable.costs.stone * 2,
            coal: stable.costs.coal * 2,
            iron: stable.costs.iron * 2
        }
    },
    
    prod_medicine = {
        count: 0,
        time: 60,
        curr_time: null,
        costs: {
            food: 20,
            stone: 5,
            cloth: 5
        }
    },
    prod_poison = {
        count: 0,
        time: 60,
        curr_time: null,
        costs: {
            food: 10,
            stone: 5,
            cloth: 5,
            coal: 5,
            iron: 5
        }
    },
    
    prod_leatherarmor = {
        count: 0,
        time: 60,
        curr_time: null,
        costs: {
            leather: 50
        }
    },
    prod_ironarmor = {
        count: 0,
        time: 120,
        curr_time: null,
        costs: {
            iron: 50
        }
    },
    
    prod_axe = {
        count: 0,
        time: 60,
        curr_time: null,
        costs: {
            wood: 5,
            iron: 20
        }
    },
    prod_sword = {
        count: 0,
        time: 120,
        curr_time: null,
        costs: {
            wood: 5,
            iron: 25
        }
    },
    prod_morningstar = {
        count: 0,
        time: 180,
        curr_time: null,
        costs: {
            wood: 5,
            iron: 30
        }
    },
    
    prod_shortbow = {
        count: 0,
        time: 60,
        curr_time: null,
        costs: {
            wood: 20,
            iron: 5
        }
    },
    prod_longbow = {
        count: 0,
        time: 120,
        curr_time: null,
        costs: {
            wood: 25,
            iron: 5
        }
    },
    prod_crossbow = {
        count: 0,
        time: 180,
        curr_time: null,
        costs: {
            wood: 30,
            iron: 5
        }
    },
    
    prod_tradegift = {
        count: 0,
        time: 60,
        curr_time: null,
        costs: {
            food: 25,
            wood: 25,
            leather: 25,
            cloth: 25,
            iron: 25,
            clothes: 25
        }
    },
    prod_peacegift = {
        count: 0,
        time: 120,
        curr_time: null,
        costs: {
            food: 50,
            wood: 50,
            leather: 50,
            cloth: 50,
            iron: 50,
            clothes: 50
        }
    },
    prod_poisongift = {
        count: 0,
        time: 180,
        curr_time: null,
        costs: {
            food: 50,
            wood: 50,
            leather: 50,
            cloth: 50,
            iron: 50,
            clothes: 50,
            poison: 5
        }
    },
    
    discovered_towns = [],

    slot_build = false,
    slot_craft = false,
    slot_brew = false,
    //slot_scout = false,

    build,
    upgrade,
    brew,
    craft,
    refr,
    starve,
    freeze,
    supp_prod,
    new_vil,
    temperat,
    
    new_hor,

    tempr = ["Warm", "Warm", "Warm", "Mild", "Kalt"],

    speed,

    task = $("#task"),
    msg = $("#msg"),

    win = window.matchMedia("(max-width: 400px)");