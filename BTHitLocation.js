var BTHitLocation = {

    ShootFront: function ShootFront(numShots) {
        var hitLocs = [];
        for (i = 0; i < numShots; i++) {
            var roll = randomInteger(6) + randomInteger(6);
            var loc;
            switch (roll) {
                case 2:
                    loc = "Floating Crit";
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
    },

    ShootLeft: function ShootLeft(numShots) {
        var hitLocs = [];
        for (i = 0; i < numShots; i++) {
            var roll = randomInteger(6) + randomInteger(6);
            var loc;
            switch (roll) {
                case 2:
                    loc = "Floating Crit";
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
    },

    ShootRight: function ShootRight(numShots) {
        var hitLocs = [];
        for (i = 0; i < numShots; i++) {
            var roll = randomInteger(6) + randomInteger(6);
            var loc;
            switch (roll) {
                case 2:
                    loc = "Floating Crit";
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
};

on("chat:message", function (msg) {
    if (msg.type == "api" && msg.content.indexOf("!Front") !== -1) {
        sendChat(msg.who, " hit " + BTHitLoc.ShootFront(msg.content.split(' ')[1] || 1));
    } else if (msg.type == "api" && msg.content.indexOf("!Right") !== -1) {
            sendChat(msg.who, " hit " + BTHitLoc.ShootRight(msg.content.split(' ')[1] || 1));
    } else if (msg.type == "api" && msg.content.indexOf("!Left") !== -1) {
            sendChat(msg.who, " hit " + BTHitLoc.ShootLeft(msg.content.split(' ')[1] || 1));
    }
});