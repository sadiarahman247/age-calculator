function calculateAge() {
    const date = Number(document.getElementById("date").value);
    const month = Number(document.getElementById("month").value);
    const year = Number(document.getElementById("year").value);

    const result = document.getElementById("resut");


if (date === 0) {
    result.textContent = "Please enter date";
    return;
}

if (month === 0) {
    result.textContent = "Please enter month";
    return;
}

if (year === 0) {
    result.textContent = "Please enter year";
    return;
}

const today = new Date();

let age = today.getFullYear() - year;

if (today.getMonth() + 1 < month) {
    age = age - 1;
}

if (today.getMonth() + 1 === month) {
    if (today.getDate() < date) {
        age = age - 1;
    }
}

result.textContent = "Your age is" + age + "year"

}
