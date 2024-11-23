ship = {};
ship.length = 40.5;
ship["width"] = 20;
ship.name = "Nautilus";

ship.sail = function (direction) {
   console.log("sailing now to %s",direction);
}

console.log(ship);
ship.sail("west");
