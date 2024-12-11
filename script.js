var score = 0;

function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก พีไอเอ็ม";
        result.style.color = 'green';
        score = 1;

    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
}

function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    if (answer === 'c') {
        result.textContent = "ถูกต้อง KMITL ย่อมาจาก King Mongkut\'s Institute of Technology Ladkrabang";
        result.style.color = 'green';
        score++;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    document.getElementById("points").innerHTML = "คุณได้คะแนนทั้งหมด " + score + " คะแนน";
    score = 0;
} 

