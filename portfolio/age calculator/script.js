function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const result = document.getElementById('result');

    const birthdate = new Date(birthdateInput.value);
    const today = new Date();

    if (birthdate > today) {
        result.textContent = "Please enter a valid birthdate.";
    } else {
        const ageInMilliseconds = today - birthdate;
        const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        const age = Math.floor(ageInYears);

        result.textContent = `Your age is ${age} years.`;
    }
}
