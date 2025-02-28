function assignTeams() {
    const numStudents = parseInt(document.getElementById('numStudents').value);
    const teamSize = parseInt(document.getElementById('teamSize').value);

    if (isNaN(numStudents) || isNaN(teamSize) || numStudents <= 0 || teamSize <= 0) {
        alert("Будь ласка, введіть коректні дані.");
        return;
    }

    // Генеруємо список учнів (від 1 до numStudents)
    const students = Array.from({ length: numStudents }, (_, i) => i + 1);

    // Перемішуємо учнів
    shuffleArray(students);

    const teams = [];
    for (let i = 0; i < students.length; i += teamSize) {
        const team = students.slice(i, i + teamSize);
        teams.push(team);
    }

    displayTeams(teams);
}

// Функція для перемішування масиву
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Обмін елементів
    }
}

// Функція для виведення результату
function displayTeams(teams) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ""; // очищаємо попередні результати

    teams.forEach((team, index) => {
        const teamDiv = document.createElement('div');
        teamDiv.classList.add('team');
        teamDiv.innerHTML = `<strong>Команда ${index + 1}:</strong> <span>Учні ${team.join(', ')}</span>`;
        outputDiv.appendChild(teamDiv);
    });
}
