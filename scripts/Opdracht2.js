// Opdracht 2a
const chosenDepartment = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service].");
console.log(chosenDepartment);

// Opdracht 2b en 2c
switch (chosenDepartment) {
    case "marketing":
        console.log("je koos " + chosenDepartment + ". " + departments.marketing.description);
        break;
    case "sales":
        console.log("je koos " + chosenDepartment + ". " + departments.sales.description);
        break;
    case "costumer-service":
        console.log("je koos " + chosenDepartment + ". " + departments["customer-service"].description);
        break;
    default:
        console.error("Ongeldige keuze. Probeer het opnieuw door de pagina te verversen.");
}

