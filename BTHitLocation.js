var BTHitLocation = BTHitLocation || (function() {
    var floatingCrit = "Floating Crit";
    function shootFront(numShots, noFloatingCrit) {
        var hitLocs = [];        
        for (var i = 0; i < numShots; i++) {
            var roll;
            do {
                roll = randomInteger(6) + randomInteger(6);
            } while (noFloatingCrit && roll === 2);
            
            var loc;
            switch (roll) {
                case 2:
                    loc = floatingCrit + " " + BTHitLocation.ShootFront(1, true);
                    break;
                case 3:
                case 4:
                    loc = "RA";
                    break;
                case 5:
                    loc = "RL";
                    break;
                case 6:
                    loc = "RT";
                    break;
                case 7:
                    loc = "CT";
                    break;
                case 8:
                    loc = "LT";
                    break;
                case 9:
                    loc = "LL";
                    break;
                case 10:
                case 11:
                    loc = "LA";
                    break;
                case 12:
                    loc = "HD";
                    break;
                default:
                    loc = "miss";
            }
            hitLocs.push(loc);
        }
        return hitLocs.sort();
    }
    function shootRear(numShots, noFloatingCrit) {
        var hitLocs = [];        
        for (var i = 0; i < numShots; i++) {
            var roll;            
            do {
                roll = randomInteger(6) + randomInteger(6);
            } while (noFloatingCrit && roll === 2);
            
            var loc;
            switch (roll) {
                case 2:
                    loc = floatingCrit + " " + BTHitLocation.ShootRear(1, true);
                    break;
                case 3:
                case 4:
                    loc = "RAR";
                    break;
                case 5:
                    loc = "RLR";
                    break;
                case 6:
                    loc = "RTR";
                    break;
                case 7:
                    loc = "CTR";
                    break;
                case 8:
                    loc = "LTR";
                    break;
                case 9:
                    loc = "LLR";
                    break;
                case 10:
                case 11:
                    loc = "LAR";
                    break;
                case 12:
                    loc = "HD";
                    break;
                default:
                    loc = "miss";
            }
            hitLocs.push(loc);
        }
        return hitLocs.sort();
    }

    function shootLeft(numShots, noFloatingCrit) {
        var hitLocs = [];
        for (var i = 0; i < numShots; i++) {
            var roll;
            do {
                roll = randomInteger(6) + randomInteger(6);
            } while (noFloatingCrit && roll === 2);
            var loc;
            switch (roll) {
                case 2:
                    loc = floatingCrit + " " + BTHitLocation.ShootLeft(1, true);
                    break;
                case 3:
                case 6:
                    loc = "LL";
                    break;
                case 4:
                case 5:
                    loc = "LA";
                    break;
                case 7:
                    loc = "LT";
                    break;
                case 8:
                    loc = "CT";
                    break;
                case 9:
                    loc = "RT";
                    break;
                case 10:
                    loc = "RA";
                    break;
                case 11:
                    loc = "RL";
                    break;
                case 12:
                    loc = "HD";
                    break;
                default:
                    loc = "miss";
            }
            hitLocs.push(loc);
        }
        return hitLocs.sort();
    }

    function shootRight(numShots, noFloatingCrit) {
        var hitLocs = [];
        for (var i = 0; i < numShots; i++) {            
            var loc;
            var roll;
            do {
                roll = randomInteger(6) + randomInteger(6);
            } while (noFloatingCrit && roll === 2);     
            switch (roll) {
                case 2:                    
                    loc = floatingCrit + " " + BTHitLocation.ShootRight(1, true);
                    break;
                case 3:
                case 6:
                    loc = "RL";
                    break;
                case 4:
                case 5:
                    loc = "RA";
                    break;
                case 7:
                    loc = "RT";
                    break;
                case 8:
                    loc = "RT";
                    break;
                case 9:
                    loc = "LT";
                    break;
                case 10:
                    loc = "LA";
                    break;
                case 11:
                    loc = "LL";
                    break;
                case 12:
                    loc = "HD";
                    break;
                default:
                    loc = "miss";
            }
            hitLocs.push(loc);        
        }
        return hitLocs.sort();
    }
    
    return {
        ShootFront: shootFront,
        ShootLeft: shootLeft,
        ShootRight: shootRight,
        ShootRear: shootRear
    };
})();

on("chat:message", function (msg) {
    if (msg.type == "api" && msg.content.indexOf("!Front") !== -1) {
        sendChat(msg.who, "Shot to Front arc hit " + BTHitLocation.ShootFront(msg.content.split(' ')[1] || 1));
    } else if (msg.type == "api" && msg.content.indexOf("!Rear") !== -1) {
        sendChat(msg.who, "Shot to Rear arc hit " + BTHitLocation.ShootRear(msg.content.split(' ')[1] || 1));
    } else if (msg.type == "api" && msg.content.indexOf("!Right") !== -1) {
            sendChat(msg.who, "Shot to Right arc hit " + BTHitLocation.ShootRight(msg.content.split(' ')[1] || 1));
    } else if (msg.type == "api" && msg.content.indexOf("!Left") !== -1) {
            sendChat(msg.who, "Shot to Left arc hit " + BTHitLocation.ShootLeft(msg.content.split(' ')[1] || 1));
    }
});