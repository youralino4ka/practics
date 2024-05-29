document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const genre = document.getElementById('genre').value;
    const mood = document.getElementById('mood').value;
    const length = document.getElementById('length').value;

    // Сохранение результатов в localStorage
    localStorage.setItem('genre', genre);
    localStorage.setItem('mood', mood);
    localStorage.setItem('length', length);

    // Вывод результатов
    document.getElementById('results').innerHTML = `Вам подойдет фильм в жанре ${genre}, соответствующий Вашему настроению ${mood} и длительностью ${length}.`;
});


