var BTHitLocation = BTHitLocation || (function() {
    var last;
    var floatingCrit = "Floating Crit";
    var locTable = {
        Front: ['Floating Crit', 'RA', 'RA', 'RL', 'RT', 'CT', 'LT', 'LL', 'LA', 'LA', 'HD'],
        Right: ['Floating Crit', 'RL', 'RA', 'RA', 'RL', 'RT', 'CT', 'LT', 'LA', 'LL', 'HD'],
        Left: ['Floating Crit', 'LL', 'LA', 'LA', 'LL', 'LT', 'CT', 'RT', 'RA', 'RL', 'HD'],
        Rear: ['Floating Crit', 'RAR', 'RAR', 'RLR', 'RTR', 'CTR', 'LTR', 'LLR', 'LAR', 'LAR', 'HD']
    };

    function shootFront(numShots, noFloatingCrit) {
        var hitLocs = [];
        var rolls = [];
        for (var i = 0; i < numShots; i++) {
            var roll;
            do {
                roll = randomInteger(6) + randomInteger(6);
            } while (noFloatingCrit && roll === 2);

            var loc;
            switch (roll) {
                case 2:
                    loc = BTHitLocation.ShootFront(1, true).locations[0] + " " + floatingCrit;
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
            rolls.push(roll);
        }
        return {
            'locations': hitLocs,
            'rolls': rolls
        };
    }

    function shootRear(numShots, noFloatingCrit) {
        var hitLocs = [];
        var rolls = [];
        for (var i = 0; i < numShots; i++) {
            var roll;
            do {
                roll = randomInteger(6) + randomInteger(6);
            } while (noFloatingCrit && roll === 2);

            var loc;
            switch (roll) {
                case 2:
                    loc = BTHitLocation.ShootRear(1, true).locations[0] + " " + floatingCrit;
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
            rolls.push(roll);
        }
        return {
            'locations': hitLocs,
            'rolls': rolls
        };
    }

    function shootLeft(numShots, noFloatingCrit) {
        var hitLocs = [];
        var rolls = [];
        for (var i = 0; i < numShots; i++) {
            var roll;
            do {
                roll = randomInteger(6) + randomInteger(6);
            } while (noFloatingCrit && roll === 2);

            var loc;
            switch (roll) {
                case 2:
                    loc = BTHitLocation.ShootLeft(1, true).locations[0] + " " + floatingCrit;
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
            rolls.push(roll);
        }
        return {
            'locations': hitLocs,
            'rolls': rolls
        };
    }

    function shootRight(numShots, noFloatingCrit) {
        var hitLocs = [];
        var rolls = [];
        for (var i = 0; i < numShots; i++) {
            var roll;
            do {
                roll = randomInteger(6) + randomInteger(6);
            } while (noFloatingCrit && roll === 2);

            var loc;
            switch (roll) {
                case 2:
                    loc = BTHitLocation.ShootRight(1, true).locations[0] + " " + floatingCrit;
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
            rolls.push(roll);
        }
        return {
            'locations': hitLocs,
            'rolls': rolls
        };
    }

    function punchFront(isRear) {
        var roll = randomInteger(6);
        var loc;
        switch (roll) {
            case 1:
                loc = "LA";
                break;
            case 2:
                loc = "LT";
                break;
            case 3:
                loc = "CT";
                break;
            case 4:
                loc = "RT";
                break;
            case 5:
                loc = "RA";
                break;
            case 6:
                loc = "HD";
                break;
        }

        return isRear ? loc + "R" : loc;
    }

    function punchRear() {
        return punchFront(true);
    }

    function punchLeft() {
        var roll = randomInteger(6);
        var loc;
        switch (roll) {
            case 1:
            case 2:
                loc = "LT";
                break;
            case 3:
                loc = "CT";
                break;
            case 4:
            case 5:
                loc = "LA";
                break;
            case 6:
                loc = "HD";
                break;
        }
        return loc;
    }

    function punchRight() {
        var roll = randomInteger(6);
        var loc;
        switch (roll) {
            case 1:
            case 2:
                loc = "RT";
                break;
            case 3:
                loc = "CT";
                break;
            case 4:
            case 5:
                loc = "RA";
                break;
            case 6:
                loc = "HD";
                break;
        }
        return loc;
    }

    function kickFront(isRear) {
        var roll = randomInteger(6);
        var loc;
        switch (roll) {
            case 1:
            case 2:
            case 3:
                loc = "RL";
                break;
            case 4:
            case 5:
            case 6:
                loc = "LL";
                break;
        }
        return isRear ? loc + "R" : loc;
    }

    function kickRear() {
        return kickFront(true);
    }

    function kickLeft() {
        return "LL";
    }

    function kickRight() {
        return "RL";
    }




    return {
        ShootFront: shootFront,
        ShootLeft: shootLeft,
        ShootRight: shootRight,
        ShootRear: shootRear,
        PunchFront: punchFront,
        PunchRear: punchRear,
        PunchLeft: punchLeft,
        PunchRight: punchRight,
        KickFront: kickFront,
        KickRear: kickRear,
        KickLeft: kickLeft,
        KickRight: kickRight,
        LastRoll: last,
        LocationTable: locTable
    };

})();

on("chat:message", function(msg) {
    if (msg.type == "api" && msg.content.indexOf("!Front") !== -1) {
        var result = BTHitLocation.ShootFront(msg.content.split(' ')[1] || 1)
        sendChat(msg.who, "Shot to Front arc hit " + result.locations + " Roll: " + result.rolls[0]);
        BTHitLocation.LastRoll = result.rolls[0];
    } else if (msg.type == "api" && msg.content.indexOf("!Rear") !== -1) {
        var result = BTHitLocation.ShootRear(msg.content.split(' ')[1] || 1)
        sendChat(msg.who, "Shot to Rear arc hit " + result.locations + " Roll: " + result.rolls[0]);
        BTHitLocation.LastRoll = result.rolls[0];
    } else if (msg.type == "api" && msg.content.indexOf("!Right") !== -1) {
        var result = BTHitLocation.ShootRight(msg.content.split(' ')[1] || 1)
        sendChat(msg.who, "Shot to Right arc hit " + result.locations + " Roll: " + result.rolls[0]);
        BTHitLocation.LastRoll = result.rolls[0];
    } else if (msg.type == "api" && msg.content.indexOf("!Left") !== -1) {
        var result = BTHitLocation.ShootLeft(msg.content.split(' ')[1] || 1)
        sendChat(msg.who, "Shot to Left arc hit " + result.locations + " Roll: " + result.rolls[0]);
        BTHitLocation.LastRoll = result.rolls[0];
    } else if (msg.type == "api" && msg.content.indexOf("!PFront") !== -1) {
        sendChat(msg.who, "Punch to Front arc hit " + BTHitLocation.PunchFront());
    } else if (msg.type == "api" && msg.content.indexOf("!PRear") !== -1) {
        sendChat(msg.who, "Punch to Rear arc hit " + BTHitLocation.PunchRear());
    } else if (msg.type == "api" && msg.content.indexOf("!PLeft") !== -1) {
        sendChat(msg.who, "Punch to Left arc hit " + BTHitLocation.PunchLeft());
    } else if (msg.type == "api" && msg.content.indexOf("!PRight") !== -1) {
        sendChat(msg.who, "Punch to Right arc hit " + BTHitLocation.PunchRight());
    } else if (msg.type == "api" && msg.content.indexOf("!KFront") !== -1) {
        sendChat(msg.who, "Kick to Front arc hit " + BTHitLocation.KickFront());
    } else if (msg.type == "api" && msg.content.indexOf("!KRear") !== -1) {
        sendChat(msg.who, "Kick to Rear arc hit " + BTHitLocation.KickRear());
    } else if (msg.type == "api" && msg.content.indexOf("!KLeft") !== -1) {
        sendChat(msg.who, "Kick to Left arc hit " + BTHitLocation.KickLeft());
    } else if (msg.type == "api" && msg.content.indexOf("!KRight") !== -1) {
        sendChat(msg.who, "Kick to Right arc hit " + BTHitLocation.KickRight());
    }

});