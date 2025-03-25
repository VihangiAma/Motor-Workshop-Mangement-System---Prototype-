document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.getElementById("appointmentForm");
    const closeFormBtn = document.getElementById("closeForm");
    const bookNowButtons = document.querySelectorAll(".book-now");
    const dateDropdown = document.getElementById("date");
    const timeDropdown = document.getElementById("time");

    // Show form when 'Book Now' button is clicked
    bookNowButtons.forEach(button => {
        button.addEventListener("click", function () {
            formContainer.style.display = "flex";
        });
    });

    // Hide form when 'Cancel' button is clicked
    closeFormBtn.addEventListener("click", function () {
        formContainer.style.display = "none";
    });

    // Populate date dropdown (Next 7 days)
    let today = new Date();
    for (let i = 0; i < 7; i++) {
        let date = new Date();
        date.setDate(today.getDate() + i);
        let option = document.createElement("option");
        option.value = date.toISOString().split("T")[0];
        option.textContent = date.toDateString();
        dateDropdown.appendChild(option);
    }

    // Populate time dropdown (8 AM - 6 PM, every 1 hour)
    for (let hour = 8; hour <= 18; hour++) {
        let option = document.createElement("option");
        option.value = `${hour}:00`;
        option.textContent = `${hour}:00`;
        timeDropdown.appendChild(option);
    }
});
