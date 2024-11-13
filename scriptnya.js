document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("reservasi");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("phoneError").textContent = "";
        document.getElementById("genderError").textContent = "";
        document.getElementById("purposesError").textContent = "";

        const fullname = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const purposes = document.querySelectorAll('input[name="menu"]:checked');
        const details = document.getElementById("details").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10,15}$/;

        let valid = true;

        if (fullname === "") {
            document.getElementById("nameError").textContent = "Please fill out this field!";
            valid = false;
        }

        if (!emailPattern.test(email)) {
            document.getElementById("emailError").textContent = "Please enter a valid email!";
            valid = false;
        }

        if (!phonePattern.test(phoneNumber)) {
            document.getElementById("phoneError").textContent = "Please enter a valid phone number!";
            valid = false;
        }

        if (!gender) {
            document.getElementById("genderError").textContent = "Please select your gender!";
            valid = false;
        }

        if (purposes.length === 0) {
            document.getElementById("purposesError").textContent = "Please select at least one menu!";
            valid = false;
        }

        if (details === "") {
            document.getElementById("purposesError").textContent = "Please specify the menu details!";
            valid = false;
        }

        if (valid) {
            const purposesText = Array.from(purposes).map(p => p.value).join(", ");
            const genderValue = gender ? gender.value : "";
            const whatsappMessage = `Hello Ana, my name is ${fullname}.%0AEmail: ${email}%0APhone: ${phoneNumber}%0AGender: ${genderValue}%0AMenu: ${purposesText}%0ADetails: ${details}`;
            const whatsappUrl = `https://wa.me/6282146422305?text=${whatsappMessage}`;
            
            window.open(whatsappUrl, '_blank');
        }
    });
});
