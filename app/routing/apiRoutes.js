var friendsData = require("../data/friends.js");

// Routing
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        var differences = [];
        var matchUp = {};
        for (var i = 0; i < friendsData.length; i++) {
            var totals = 0;
            for (var k = 0; k < 10; k++) {
                diff = Math.abs(parseInt(friendsData[i].scores[k]) - parseInt(req.body.scores[k]));
                totals += diff;
            }
            differences.push(totals);
            var match = Math.min.apply(null, differences);
            matchUp = friendsData[differences.indexOf(match)]
        }
        res.json(matchUp);
        console.log(differences);
    });


};
