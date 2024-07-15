document.addEventListener("DOMContentLoaded", function() {
    // Set the current year dynamically
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    // Set the last modified date dynamically
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = 'Last modified: ' + lastModified;
});



document.addEventListener('DOMContentLoaded', function() {
    const productArray = [
        { name: "Bicycle" },
        { name: "Refrigerator" },
        { name: "Radio" }
    ];

    const productNameSelect = document.getElementById('productName');
    productArray.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });

    document.getElementById('reviewForm').addEventListener('submit', function(event) {
        if (!confirm('Do you want to submit the form?')) {
            event.preventDefault();
        }
    });
});

