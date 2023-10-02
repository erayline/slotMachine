let hersey = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789012345677890";
hersey = (hersey.split(''));




function generate(){
    arkaplanyazisi = " "
    for (let i=0; i<10000; i++){
        let rastgele = Math.random()
        rastgele = rastgele*100
        rastgele = rastgele.toFixed(0)
        arkaplanyazisi += hersey[rastgele]
    }
    return arkaplanyazisi
}

function arkaplancevir(){
    document.getElementById("arkaplanimiz").innerText = generate()
}
document.getElementById("arkaplanimiz").innerText = generate()



document.addEventListener("mousemove", function(event) {
    arkaplancevir()
});

setInterval(arkaplancevir,1000)


let harita = [
    "a",
    "1",
    "x",
    "Z",
    "{"
]



let ilkKolonCekimi = []
let ikinciKolonCekimi = []
let ucuncuKolonCekimi = []

function cekimOlustur(cekim){
    for(let i=0; i<100; i++){
        let miniList = []
        for(let i=0;i<3;i++){
            rastgeleHarf = harita[Math.floor(Math.random()*5)]
            miniList.push(rastgeleHarf)
        }
        cekim.push(miniList)
    }
    
}



function susluDegisimZamanla(kolonumuz,idimiz,satir){
    for(let i=0; i<45;i++){
        setTimeout(function() {
            cekimOlustur(kolonumuz)
            document.getElementById(idimiz).innerText = kolonumuz[i][satir]
            console.log("en zeki benim")
        }, i* 10 + i**2);
        
    }
}

function ilkKolonHazir(){
    susluDegisimZamanla(ilkKolonCekimi,"11",0)
    susluDegisimZamanla(ilkKolonCekimi,"22",1)
    susluDegisimZamanla(ilkKolonCekimi,"33",2)
}
function ikinciKolonHazir(){
    setTimeout(function(){
        susluDegisimZamanla(ikinciKolonCekimi,"44",0)
        susluDegisimZamanla(ikinciKolonCekimi,"55",1)
        susluDegisimZamanla(ikinciKolonCekimi,"66",2)
    },400)
}
function ucuncuKolonHazir(){
    setTimeout(function(){
        susluDegisimZamanla(ucuncuKolonCekimi,"77",0)
        susluDegisimZamanla(ucuncuKolonCekimi,"88",1)
        susluDegisimZamanla(ucuncuKolonCekimi,"99",2)
    }, 800);
}

function cevir(){
    ilkKolonHazir()
    ikinciKolonHazir()
    ucuncuKolonHazir()
    console.log(ilkKolonCekimi)
}
