function generateMap() {
    var you = false,
        stranger = 10,
        treasure = 5;

    var map_values = new Array(8);
    while (you === false || stranger > 0 || treasure > 0) {
        for (var x = 0; x < map_values.length; x++) {
            var column = new Array(8);
            for (var y = 0; y < column.length; y++) {
                if (column[y] === undefined || column[y] === " ") {
                    var rnd = Math.floor((Math.random() * 20) + 1);
                    if (rnd === 1 && you === false) {
                        column[y] = "Y";
                        you = true;
                    } else if ((rnd === 2 || rnd === 3 || rnd === 4) && stranger > 0) {
                        column[y] = "S";
                        stranger--;
                    } else if ((rnd === 5 || rnd === 6) && treasure > 0) {
                        column[y] = "T";
                        treasure--;
                    } else {
                        column[y] = " ";
                    }
                }
            }
            map_values[x] = column;
        }
    }
    var map = new Array(8);
    for (var x = 0; x < map_values.length; x++) {
        for (var y = 0; y < map_values.length; y++) {
            if (y === 0) {
                map[x] = `<pre>` + (x + 1) + ` ¦ ` + map_values[x][y] + `   ¦ `;
            } else if (y > 0 && y < 7) {
                map[x] += map_values[x][y] + `   ¦ `;
            } else if (y === 7) {
                map[x] += map_values[x][y] + `   ¦</pre>
                <pre>  ¦     ¦     ¦     ¦     ¦     ¦     ¦     ¦     ¦</pre>
                <pre>--+-----+-----+-----+-----+-----+-----+-----+-----+</pre>`;
            }
        }
    }
    for (var x = 0; x < map.length; x++) {
        $("#ov_content").append(map[x]);
    }
}

$("#btn_map").click(function () {
    generateMap();
    $("#overlay").removeAttr("hidden");
});

/*$("#overlay").click(function () {
    $("#overlay").attr("hidden", true);
});*/

$("#ov_content").resizable({aspectRatio: true, grid: [45, 45], handles: "se"});
