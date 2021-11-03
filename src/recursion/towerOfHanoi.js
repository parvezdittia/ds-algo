"use strict";
exports.__esModule = true;
var Tower = /** @class */ (function () {
    function Tower(height, name) {
        this.arr = [];
        for (var i = 0; i < height; i++) {
            this.arr.push(i);
        }
        this.name = name;
    }
    return Tower;
}());
var towerOfHanoi = function (towerHeight) {
    var moveCount = 0;
    if (towerHeight <= 0) {
        return moveCount;
    }
    var towerA = new Tower(towerHeight, "A");
    var towerB = new Tower(0, "B");
    var towerC = new Tower(0, "C");
    var moves = [];
    var getHelperTower = function (tower1, tower2) {
        var towers = ["A", "B", "C"];
        var helperTowerName = towers.filter(function (name) {
            return name !== tower1.name && name !== tower2.name;
        })[0];
        if (helperTowerName === "A")
            return towerA;
        else if (helperTowerName === "B")
            return towerB;
        else
            return towerC;
    };
    var transfer = function (sourceTower, towerHeight, destinationTower) {
        if (towerHeight === 1) {
            var temp = sourceTower.arr.shift();
            if (temp !== undefined) {
                destinationTower.arr.unshift(temp);
                var move = {
                    from: sourceTower.name,
                    to: destinationTower.name,
                    disk: temp
                };
                console.log(move);
                moves.push(move);
            }
            moveCount++;
            return;
        }
        var helperTower = getHelperTower(sourceTower, destinationTower);
        if (towerHeight > 1)
            transfer(sourceTower, towerHeight - 1, helperTower);
        transfer(sourceTower, towerHeight, destinationTower);
        if (towerHeight > 1)
            transfer(helperTower, towerHeight - 1, destinationTower);
    };
    if (towerHeight > 1)
        transfer(towerA, towerHeight - 1, towerB);
    transfer(towerA, towerHeight, towerC);
    if (towerHeight > 1)
        transfer(towerB, towerHeight - 1, towerC);
    return moveCount;
};
exports["default"] = towerOfHanoi;
console.log(towerOfHanoi(3));
