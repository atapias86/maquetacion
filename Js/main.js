/*function imgslider(anything){
    document.querySelector('.pepsi').src = anything;
}*/
addEventListener("DOMContentLoaded", (e) => {
    let pepsi_1 = document.querySelector("#pepsi_1");
    let pepsi_2 = document.querySelector("#pepsi_2");
    let pepsi_3 = document.querySelector("#pepsi_3");

    pepsi_1.addEventListener("click", (e) => {
        document.querySelector('.pepsi').src = '../img/pepsi001.png';
        const sec = document.querySelector('.sec');
        sec.style.background = "#0062be"
    });
    pepsi_2.addEventListener("click", (e) => {
        document.querySelector('.pepsi').src = '../img/pepsi002.png';
        const sec = document.querySelector('.sec');
        sec.style.background = "#e60c2c"
    });
    pepsi_3.addEventListener("click", (e) => {
        document.querySelector('.pepsi').src = '../img/pepsi003.png';
        const sec = document.querySelector('.sec');
        sec.style.background = "#1e1e1e"
    });
});