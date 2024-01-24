import testGenerator from "./testPitanja.js";

let fs = document.getElementsByClassName('fs');
let kont = document.getElementById('kont')
let btnPosalji = document.getElementById('posalji');
let btnNovaPitanja = document.getElementById('nova');

let test = [];
testGenerator(test);
let id = 100;
for (let i = 0; i < test.length; i++) {
    fs[i].innerHTML = `<h3>${i+1}. ${test[i].tekst}</h3>`;
    test[i].odgovori.forEach((odg, j) => {
        if (j == test[i].indeksKorektnogOdgovora) {
            fs[i].innerHTML += `<p><input type="radio" id="${id}" name="odgovori${i}" value="${test[i].indeksKorektnogOdgovora}"><label for="${id}">${odg}</label></p>`;  
            id++;
        }   
        else {
            fs[i].innerHTML += `<p><input type="radio" id="${id}" name="odgovori${i}"><label for="${id}">${odg}</label></p>`;
            id++;
        }
    });
}
document.querySelectorAll('fieldset p:first-of-type input').forEach(odg => {
    odg.checked = true;
});

btnPosalji.addEventListener('click', () => {
    kont.style.display = "block";
    let br = 0;
    for (let i = 0; i < test.length; i++) {
        if (document.querySelector(`input[name ="odgovori${i}"]:checked`).value == test[i].indeksKorektnogOdgovora) {
            kont.innerHTML += `<p style= "color: green;"><img src="img/tacno.png" alt="tacno"> Tačno ste odgovorili na ${i+1}. pitanje.</p>`;
            fs[i].style.border = "4px solid green";
            br++;
        }
        else {
            kont.innerHTML += `<p style= "color: red;"><img src="img/netacno.png" alt="netacno"> Niste tačno odgovorili na ${i+1}. pitanje.</p>`;
            fs[i].style.border = "4px solid red";
        }
    }
    kont.innerHTML += `<h3>Ukupno tačnih odgovora: ${br}</h3>`;
    btnPosalji.style.display = "none";
    document.querySelectorAll('input').forEach(r => {
        r.disabled = true;
    });
    kont.scrollIntoView();
});

btnNovaPitanja.addEventListener('click', () => {
    fs[0].scrollIntoView();
    window.location.reload();
});