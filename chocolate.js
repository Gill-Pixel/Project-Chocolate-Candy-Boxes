
$(document).ready(function () {
    const chocs = [
            {
                chocName: "Plain Milk",
                description: "Smooth milk chocolate",
                calories: 90,
                ingredients: "Cocoa butter, Milk, Cream",
                img: "chocs/plain_milk.jpg",
            },
            {
                chocName: "Plain Dark",
                description: "Dark chocolate",
                calories: 90,
                ingredients: "Cocoa butter, Milk, Cream",
                img: "chocs/plain_dark.jpg",
            },
            {
                chocName: "Bailey's Cup",
                description: "Dark chocolate with Bailey's Cream Filling",
                calories: 100,
                ingredients: "Cocoa butter, Milk, Cream, baileys",
                img: "chocs/baileys_cup.jpg",
            },
            {
                chocName: "Cappuccino Cup",
                description: "Dark chocolatewith Cappuccino style cream filling",
                calories: 120,
                ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",
                img: "chocs/cappuccino_cup.jpg",
            },
            {
                chocName: "Nutter Butter",
                description: "Dark chocolate with peanut butter",
                calories: 190,
                ingredients: "Cocoa butter, Milk, Cream, peanut butter",
                img: "chocs/nutter_butter.jpg",
            },
            {
                chocName: "Orange Fondant",
                description: "Dark chocolate folded with orange fondant",
                calories: 90,
                ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant",
                img: "chocs/orange_fondant.jpg",
            },
            {
                chocName: "Pistachio Cup",
                description: "Dark chocolate with nuggets of pistachio",
                calories: 90,
                ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut",
                img: "chocs/pistachio_diamond.jpg",
            },
            {
                chocName: "Rum Barrel",
                description: "Dark chocolate with a decadent rum filling",
                calories: 90,
                ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings",
                img: "chocs/rum_barrel.jpg",
            },
            {
                chocName: "Toffee Crunch",
                description: "Dark chocolate with brittle toffee candy",
                calories: 90,
                ingredients: "Cocoa butter, Milk, Cream, toffee",
                img: "chocs/toffee_crunch.jpg",
            },
            {
                chocName: "Plain Supreme",
                description: "Dark chocolate with slivers of milk chocolate",
                calories: 90,
                ingredients: "Cocoa butter, Milk, Cream",
                img: "chocs/plain_hybrid.jpg",
            },
    ];

    const chocolateContainer = $("#chocolate-container");
    const chocolateInfo = $("#chocolate-info");

    // Function to generate chocolate cards
    function generateChocolates() {
        chocolateContainer.empty(); // Clear existing cards
        chocs.forEach((chocolate, index) => {
            const card = $("<div class='chocolate-card'></div>").css({
                "border": "1px solid #ccc",
                "padding": "10px",
                "margin": "10px",
                "display": "inline-block",
                "width": "200px"
            });

            // Generate a unique ID for each card
            card.attr("id", `card-${index + 1}`);

            card.append(`<h2>${chocolate.chocName}</h2>`);
            const image = $("<img>").attr("src", chocolate.img).attr("alt", chocolate.chocName).css({
                "max-width": "100%",  
                "max-height": "100%" 
            });
            card.append(image);
            chocolateContainer.append(card);

            card.click(function () {
                // Handle card click to reveal calories and content
                const caloriesContent = `<p>Calories: ${chocolate.calories}</p><p>Ingredients: ${chocolate.ingredients}</p>`;
                chocolateInfo.html(caloriesContent);
                chocolateInfo.show();
            });
        });
    }

    // Randomize button click event
    $("#randomize-button").click(function () {
        const randomIndex = Math.floor(Math.random() * chocs.length);
        const randomCard = $(`#card-${randomIndex + 1}`);
        randomCard.css("background-color", "yellow");
        alert(`Your random code is: ${randomIndex + 1}. Give this code to the cashier to receive your free sample!`);
    });

    // Show Calories and Content button click event
    $("#info-button").click(function () {
        chocolateInfo.toggle();
    });

    // Initialize with default data
    generateChocolates();
});