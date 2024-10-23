const stars = document.querySelectorAll('.star');
let ratingValue = 0;

stars.forEach(star => {
    star.addEventListener('click', () => {
        ratingValue = star.getAttribute('data-value');
        stars.forEach(s => {
            s.style.color = s.getAttribute('data-value') <= ratingValue ? 'gold' : '#ccc';
        });
    });
});

document.getElementById('submit').addEventListener('click', () => {
    const comment = document.getElementById('comment').value;
    if (ratingValue > 0 && comment) {
        // Here you can send the data to the server or handle it as needed
        console.log(`Rating: ${ratingValue}, Comment: ${comment}`);
        document.getElementById('thank-you').style.display = 'block';
    } else {
        alert('Please provide a rating and a comment.');
    }
});
