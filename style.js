document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar a');

    function showSection(id) {
        sections.forEach(section => {
            section.classList.add('hidden');
            if (section.id === id) {
                section.classList.remove('hidden');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showSection(this.dataset.section);
        });
    });

    // Rice calculations
    document.getElementById('add-to-cart-rice').addEventListener('click', function () {
        const riceType = document.getElementById('rice-type').value;
        const riceSpoons = parseInt(document.getElementById('rice-spoons').value);
        const ricePacks = parseInt(document.getElementById('rice-packs').value);

        let extrasPrice = 0;
        if (document.getElementById('add-chicken').checked) extrasPrice += 900;
        if (document.getElementById('add-egg').checked) extrasPrice += 200;
        if (document.getElementById('add-fish').checked) extrasPrice += 200;
        if (document.getElementById('add-coleslaw').checked) extrasPrice += 200;
        if (document.getElementById('add-beans').checked) extrasPrice += 200;
        if (document.getElementById('add-moi-moi').checked) extrasPrice += 200;

        const totalPerSpoon = 200 * riceSpoons;
        const total = (totalPerSpoon + extrasPrice) * ricePacks;

        document.getElementById('rice-selection-text').innerHTML = `
            <strong>Rice Type:</strong> ${riceType}<br>
            <strong>Spoons:</strong> ${riceSpoons}<br>
            <strong>Extras Price:</strong> ₦${extrasPrice}<br>
            <strong>Number of Packs:</strong> ${ricePacks}<br>
            <strong>Total Cost:</strong> ₦${total}
        `;
        addToCart(`
            <strong>Rice Type:</strong> ${riceType}<br>
            <strong>Spoons:</strong> ${riceSpoons}<br>
            <strong>Extras Price:</strong> ₦${extrasPrice}<br>
            <strong>Number of Packs:</strong> ${ricePacks}<br>
            <strong>Total Cost:</strong> ₦${total}
        `);
    });

    // Beans calculations
    document.getElementById('add-to-cart-beans').addEventListener('click', function () {
        const beansSpoons = parseInt(document.getElementById('beans-spoons').value);
        const beansPacks = parseInt(document.getElementById('beans-packs').value);

        const total = 200 * beansSpoons * beansPacks;

        document.getElementById('beans-selection-text').innerHTML = `
            <strong>Spoons:</strong> ${beansSpoons}<br>
            <strong>Number of Packs:</strong> ${beansPacks}<br>
            <strong>Total Cost:</strong> ₦${total}
        `;
        addToCart(`
            <strong>Spoons:</strong> ${beansSpoons}<br>
            <strong>Number of Packs:</strong> ${beansPacks}<br>
            <strong>Total Cost:</strong> ₦${total}
        `);
    });

    // Spaghetti calculations
    document.getElementById('add-to-cart-spaghetti').addEventListener('click', function () {
        const spaghettiType = document.getElementById('spaghetti-type').value;
        const spaghettiPacks = parseInt(document.getElementById('spaghetti-packs').value);

        let extrasPrice = 0;
        if (document.getElementById('add-chicken-spag').checked) extrasPrice += 900;
        if (document.getElementById('add-egg-spag').checked) extrasPrice += 200;
        if (document.getElementById('add-fish-spag').checked) extrasPrice += 200;
        if (document.getElementById('add-beef-spag').checked) extrasPrice += 200;

        const totalPerPack = 200 + extrasPrice;
        const total = totalPerPack * spaghettiPacks;

        document.getElementById('spaghetti-selection-text').innerHTML = `
            <strong>Spaghetti Type:</strong> ${spaghettiType}<br>
            <strong>Extras Price:</strong> ₦${extrasPrice}<br>
            <strong>Number of Packs:</strong> ${spaghettiPacks}<br>
            <strong>Total Cost:</strong> ₦${total}
        `;
        addToCart(`
            <strong>Spaghetti Type:</strong> ${spaghettiType}<br>
            <strong>Extras Price:</strong> ₦${extrasPrice}<br>
            <strong>Number of Packs:</strong> ${spaghettiPacks}<br>
            <strong>Total Cost:</strong> ₦${total}
        `);
    });

    // Swallow calculations
    document.getElementById('add-to-cart-swallow').addEventListener('click', function () {
        const swallowType = document.getElementById('swallow-type').value;
        const soupType = document.getElementById('soup-type').value;
        const swallowServings = parseInt(document.getElementById('swallow-servings').value);
        const swallowPacks = parseInt(document.getElementById('swallow-packs').value);

        let extrasPrice = 0;
        if (document.getElementById('add-fish-swallow').checked) extrasPrice += 200;
        if (document.getElementById('add-chicken-swallow').checked) extrasPrice += 900;

        const totalPerSwallow = 200 * swallowServings;
        const total = (totalPerSwallow + extrasPrice) * swallowPacks;

        document.getElementById('swallow-selection-text').innerHTML = `
            <strong>Swallow Type:</strong> ${swallowType}<br>
            <strong>Soup Type:</strong> ${soupType}<br>
            <strong>Number of Servings:</strong> ${swallowServings}<br>
            <strong>Extras Price:</strong> ₦${extrasPrice}<br>
            <strong>Number of Packs:</strong> ${swallowPacks}<br>
            <strong>Total Cost:</strong> ₦${total}
        `;
        addToCart(`
            <strong>Swallow Type:</strong> ${swallowType}<br>
            <strong>Soup Type:</strong> ${soupType}<br>
            <strong>Number of Servings:</strong> ${swallowServings}<br>
            <strong>Extras Price:</strong> ₦${extrasPrice}<br>
            <strong>Number of Packs:</strong> ${swallowPacks}<br>
            <strong>Total Cost:</strong> ₦${total}
        `);
    });

    // Bread & Egg calculations
    document.getElementById('add-to-cart-bread-egg').addEventListener('click', function () {
        const breadSize = document.getElementById('bread-size').value;
        const eggQuantity = parseInt(document.getElementById('egg-quantity').value);
        const breadEggPacks = parseInt(document.getElementById('bread-egg-packs').value);

        const breadPrices = { small: 100, medium: 150, big: 200 };
        const total = (breadPrices[breadSize] + (eggQuantity * 200)) * breadEggPacks;

        document.getElementById('bread-egg-selection-text').innerHTML = `
            <strong>Bread Size:</strong> ${breadSize}<br>
            <strong>Number of Eggs:</strong> ${eggQuantity}<br>
            <strong>Number of Packs:</strong> ${breadEggPacks}<br>
            <strong>Total Cost:</strong> ₦${total}
        `;
        addToCart(`
            <strong>Bread Size:</strong> ${breadSize}<br>
            <strong>Number of Eggs:</strong> ${eggQuantity}<br>
            <strong>Number of Packs:</strong> ${breadEggPacks}<br>
            <strong>Total Cost:</strong> ₦${total}
        `);
    });

    // Drinks calculations
    document.getElementById('add-to-cart-drinks').addEventListener('click', function () {
        const drinks = {
            coke: parseInt(document.getElementById('coke-quantity').value) || 0,
            fanta: parseInt(document.getElementById('fanta-quantity').value) || 0,
            sprite: parseInt(document.getElementById('sprite-quantity').value) || 0,
            pepsi: parseInt(document.getElementById('pepsi-quantity').value) || 0,
            bottleWater: parseInt(document.getElementById('bottle-water-quantity').value) || 0,
            maltina: parseInt(document.getElementById('maltina-quantity').value) || 0
        };

        let total = 0;
        total += drinks.coke * 150;
        total += drinks.fanta * 150;
        total += drinks.sprite * 150;
        total += drinks.pepsi * 150;
        total += drinks.bottleWater * 100;
        total += drinks.maltina * 200;

        document.getElementById('drinks-selection-text').innerHTML = `
            <strong>Selected Drinks:</strong><br>
            Coke: ${drinks.coke} x ₦150<br>
            Fanta: ${drinks.fanta} x ₦150<br>
            Sprite: ${drinks.sprite} x ₦150<br>
            Pepsi: ${drinks.pepsi} x ₦150<br>
            Bottle Water: ${drinks.bottleWater} x ₦100<br>
            Maltina: ${drinks.maltina} x ₦200<br>
            <strong>Total Cost:</strong> ₦${total}
        `;
        addToCart(`
            <strong>Selected Drinks:</strong><br>
            Coke: ${drinks.coke} x ₦150<br>
            Fanta: ${drinks.fanta} x ₦150<br>
            Sprite: ${drinks.sprite} x ₦150<br>
            Pepsi: ${drinks.pepsi} x ₦150<br>
            Bottle Water: ${drinks.bottleWater} x ₦100<br>
            Maltina: ${drinks.maltina} x ₦200<br>
            <strong>Total Cost:</strong> ₦${total}
        `);
    });

    // Cart functionality
    function addToCart(selectionText) {
        const cartItems = document.getElementById('cart-items');
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = selectionText + '<hr>';
        cartItems.appendChild(itemDiv);
    }

    document.getElementById('clear-cart').addEventListener('click', function () {
        document.getElementById('cart-items').innerHTML = '';
    });
});
