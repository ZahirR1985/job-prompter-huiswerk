// Opdracht 4a
console.log(chosenDepartment + " is een leuke afdeling om te werken. Er werken op dit moment " + departments[chosenDepartment].numberOfEmployees + " medewerkers");

// Opdracht 4b

const chosenJob = prompt("Je koos " + chosenDepartment +
". " + "Over welke functie wil je meer weten? Voer een getal tussen 0 en 3 in." + "\n" +
" 0: " + departments[chosenDepartment].jobs[0].title + ",\n" +
" 1: " + departments[chosenDepartment].jobs[1].title + ",\n" +
" 2: " + departments[chosenDepartment].jobs[2].title + ",\n" +
" 3: " + departments[chosenDepartment].jobs[3].title
);

console.log(chosenJob);

switch (chosenJob) {
    case "0":
        console.log("Je koos " + departments[chosenDepartment].jobs[0].title + ".\n" + "Een uitstekende rol! " + departments[chosenDepartment].jobs[0].description);
        break;
    case "1":
        console.log("Je koos " + departments[chosenDepartment].jobs[1].title + ".\n" + "Een uitstekende rol! " + departments[chosenDepartment].jobs[1].description);
        break;
    case "2":
        console.log("Je koos " + departments[chosenDepartment].jobs[2].title + ".\n" + "Een uitstekende rol! " + departments[chosenDepartment].jobs[2].description);
        break;
    case "3":
        console.log("Je koos " + departments[chosenDepartment].jobs[3].title + ".\n" + "Een uitstekende rol! " + departments[chosenDepartment].jobs[3].description);
        break;
    default:
        console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
}
