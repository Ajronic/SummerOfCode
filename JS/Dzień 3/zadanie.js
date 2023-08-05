function getRandomInt (min, max) {
    return Math.floor(Math.random() * max);
}

function game() {
    let number = getRandomInt(0, 10);
    for (let i = 0; i < 5; i++) {
        let UserNumber = prompt("Zgadnij liczbę z zakresu 0 - 10. Masz 5 szans!")
        
        if (UserNumber == number) alert("Udało się! Wylosowana liczba to: " + number + " . " + "Potrzebowałeś" + " " + (i + 1) + " prób.")

        if (UserNumber < number) alert("Podana liczba jest za mała")
        if (UserNumber > number) alert("Podana liczba jest za duża") 

    }
}

