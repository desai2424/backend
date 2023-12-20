document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('https://https://lpsxfflmyvgagrhzdjgs.supabase.co.supabase.co/rest/v1/UserResponses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwc3hmZmxteXZnYWdyaHpkamdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwOTYzNzgsImV4cCI6MjAxODY3MjM3OH0.azuRgd-k94VxWTwxWU8LzlLa5ID4FHVdPg18uIB1kPE'
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
