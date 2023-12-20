document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('https://YOUR_PROJECT_URL.supabase.co/rest/v1/UserResponses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'YOUR_API_KEY'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data sent successfully:', data);
        // Display success message
        document.getElementById("successMessage").style.display = "block";
        // You can add further handling or redirection here if needed.
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
