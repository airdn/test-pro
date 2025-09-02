function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock-javascript').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();



// Объявление переменных var, let, const до фактического объявления
// console.log(x);
// var x = 10;
// console.log(x);

// console.log(y);
// let y = 20;
// console.log(y);

// console.log(z);
// const z = 30;
// console.log(z);
// z = 40;

// Объявление переменных var, let, const
// var x = 10;
// x = 20;
// let y = 20;
// y = 30;
// const z = 40;
// console.log(x, y, z);
