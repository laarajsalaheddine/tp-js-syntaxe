
        let age = Number(prompt("enter your age :"));
        let day = prompt("enter une jour :");
        let prix = null;

        if (age < 12) {
            prix = 5;
        } else if (age >= 12 && age <= 17) {
            prix = 7;
        } else {
            prix = 10;
        }

        if (  day === "lundi") {
            prix -= 2;
        } else if (day === "mercredi") {
            prix -= 1;
        } else {
            prix = prix;
        }

        console.log("le prix du ticket est de " + prix + " euros");