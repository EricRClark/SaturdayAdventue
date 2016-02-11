var confirmation = confirm(
    "It's Saturday! There's a lot of things going on today. Do you want to get your ass off the couch and do something?"
);
var answer = prompt(
    "Great! You have a few activities to choose from. Just type the # of which activity interests you the most: 1)Attend the Clemson Football Game. 2)Go to Folly Beach. 3)Throw back a few at some Charleston watering holes."
);
if (answer === '3') {
    confirm("So you wanna hit some Holy City watering holes!");
    answer = prompt(
        "Let's go! Do you want to go 1)Avondale 2)Downtown or 3)Beach Bar? Choose any #."
    );
    if (answer === '1') {
        answer = prompt(
            "Avondale, not my 1st choice but OK. Where should we go 1st: 1)Mellow Mushroom 2)Genes or 3)Voodoo?"
        );
        if (answer === '1') {
            answer = prompt(
                "Mellow sounds great! Let's sip a cold one and order a pie!"
            );
        } else if (answer === '2') {
            answer = prompt('Love the Haufbrau! Lets get some wings!');
        } else if (answer === '3') {
            answer = prompt(
                'Voodoo lady, the drinks hot and spicy! Lets booze!');
        }
    } else if (answer === '2') {
        answer = prompt(
            "Downtown is fine but let's go somewhere with unshitty parking. You wanna do 1)Tattooed Moose 2)The Alley or 3)Royal American?"
        );
        if (answer === '1') {
            answer = prompt(
                'Love the Moose! Lets get a Duck Club and some brews!');
        } else if (answer === '2') {
            answer = prompt(
                'Love the Alley! Lets get some wings and guzzle a Fattys IPA!'
            );
        } else if (answer === '3') {
            answer = prompt(
                'Time for a Loaded Potato and cheap beer at the Royal!');
        }
    } else if (answer === '3') {
        confirm("So you wanna do a Beach Bar!");
        answer = prompt(
            'A Beach Bar! Lets do it! You wanna go to 1)Taco Boy 2)Poes or 3)The Wind Jammer?'
        );
        if (answer === '1') {
            answer = prompt(
                'Love some Taco Boy! Lets get fish tacos and frozen screwdrivers!'
            );
        } else if (answer === '2') {
            answer = prompt(
                'Love Poes! Lets get a burger and guzzle a Fattys IPA!');
        } else if (answer === '3') {
            answer = prompt(
                'Stop, Jammer time! And some cheap beer on the water!');
        }
    }
} else if (answer === '2') {
    confirm("So you wanna get your Folly on!");
    answer = prompt(
        "Throw on your board shorts or bikini and hop in. Lets grab some beer at Berts! So where do you want to go on Folly? Pick either one of these: 1)the washout 2)the pier or 3)the preserve"
    );
    if (answer === '1') {
        answer = prompt('Love the washout! Lets surf!');
    } else if (answer === '2') {
        answer = prompt('Love walking the pier! Lets grab a fishing pole!');
    } else if (answer === '3') {
        answer = prompt(
            'Nothing like snapping some sick pics of Morris Island Light House!'
        );
    }
} else if (answer === '1') {
    confirm("So you wanna go see the tigers play some football!");
    answer = prompt(
        "Throw on some orange, BO! Lets grab some beer at one of these fine Tiger Town establishments: 1)the ESSO Club 2)the Tiger Town Tavern or 3)the Touch Down CLUB"
    );
    if (answer === '1') {
        answer = prompt('Love the ESSO! They got liquor now here too!');
    } else if (answer === '2') {
        answer = prompt('Love the Tiger Town Tavern! Lets grab a shot!');
    } else if (answer === '3') {
        answer = prompt(
            'Nothing like puking in the bathroom at the TOUCHDOWN CLUB! BARF 6'
        );
    }
}
