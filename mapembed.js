var vg_1 = "map.json";
var vg_2 = "lineg.json";
vegaEmbed("#chloroplethmap", vg_1).then(function(result) {}).catch(console.error);
vegaEmbed("#linegraph", vg_2).then(function(result) {}).catch(console.error);
