function updateTime() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    const now = new Date();
    const currentTime = now.toLocaleTimeString();
    const currentDate = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    timeElement.textContent = `Current Time: ${currentTime}`;
    dateElement.textContent = `Current Date: ${currentDate}`;
}
setInterval(updateTime, 1000);
updateTime();

function predictGender() {
    const fatherName = document.getElementById('fatherName').value;
    const motherName = document.getElementById('motherName').value;
    const fatherNameLength = fatherName.length;
    const motherNameLength = motherName.length;
    const totalLength = fatherNameLength + motherNameLength;
    let result;
    if (totalLength % 2 === 0) {
        result = 'Girl';
    } else {
        result = 'Boy';
    }
    document.getElementById('result').textContent = `Prediction: Your first child will be a ${result}.`;
}
