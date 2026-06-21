async function submitEnquiry(event) {
    event.preventDefault();

    const data = {
        name: document.getElementById("cf-name").value,
        email: document.getElementById("cf-email").value,
        phone: document.getElementById("cf-phone").value,
        company: document.getElementById("cf-company").value,
        country: document.getElementById("cf-country").value,
        interest: document.getElementById("cf-interest").value,
        details: document.getElementById("cf-details").value
    };

    const response = await fetch("http://localhost:5000/enquiry", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    alert(result.message);
}