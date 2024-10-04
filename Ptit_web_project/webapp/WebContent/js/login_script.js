document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted');

    const loginName = document.getElementById('loginName').value;
    const password = document.getElementById('password').value;
    console.log('Attempting login with login name:', loginName);

    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `loginName=${encodeURIComponent(loginName)}&password=${encodeURIComponent(password)}`
    })
    .then(response => {
        console.log('Response status:', response.status);
        return response.json();
    })
    .then(data => {
        console.log('Response data:', data);
        if (data.success) {
            console.log('Login successful, redirecting to:', data.redirect);
            window.location.href = data.redirect;
        } else {
            console.log('Login failed:', data.message);
            alert('Login failed: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
