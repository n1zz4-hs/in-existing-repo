// 1 level

while (isFree("north")){
    north();
}

// 2 level

while (isFree("east")){
    east();
}

// 3 and 4 level

while (isFree("east") || isFree("south")){
    south();
    east();
}

// 5 level

while(isFree("west")){
    west();
}

while(isFree("south")){
    south();
}

while(isFree("west")){
    west();
}

while(isFree("north")){
    north();
}

while(isFree("west")){
    west();
}

while(isFree("south")){
    south();
}

while(isFree("east")){
    east();
}

// 6 level

while(isFree("south")){
    south();
}

while(isFree("east")){
    east();
}

while(isFree("north")){
    north();
}

while(isFree("east")){
    east();
}

while(isFree("north")){
    north();
}

while(isFree("east")){
    east();
}

while(isFree("south")){
    south();
}

north();

while(isFree("west")){
    west();
}

while(isFree("south")){
    south();
}

while(isFree("east")){
    east();
}

// 7 level

while(isFree("south")){
    south();
}

while(isFree("east")){
    east();
}

while(isFree("north")){
    north();
}

while(isFree("east")){
    east();
}

while(isFree("south")){
    south();
}

while(isFree("east")){
    east();
}

while(isFree("south")){
    south();
}

west()

while(isFree("south")){
    south();
}

while(isFree("east")){
    east();
}

while(isFree("south")){
    south();
}

east(); 

// Universal (all levels)
while (!(robohub.game.initLevel(robohub.game.currLevel+1))){
    if (isFree("south")){
        while (isFree("south")){
            south();
        }
    }
    if (isFree("north")){
        while (isFree("north")){
            north();
        }
    }
    if (isFree("west")){
        while (isFree("west")){
            west();
        }
    }
    if (isFree("east")){
        while (isFree("east")){
            east();
        }
    }
}