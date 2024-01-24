// Kalup za pitanja
class Pitanje {
    constructor(tekst, odgovori, indeksKorektnogOdgovora) {
        this.tekst = tekst;
        this.odgovori = odgovori;
        this.indeksKorektnogOdgovora = indeksKorektnogOdgovora;
    }
};

// Pitanja (1 - 50)
const pitanje1 = new Pitanje(
    "Kako se naziva centralni deo okvira motocikla koji podržava motor?",
    ["Viljuška", "Oklop", "Šasija", "Ram"],
    3
);

const pitanje2 = new Pitanje(
    "Koja komponenta kontroliše protok goriva u motociklu?",
    ["Akumulator", "Karburator", "ECU (Elektronska kontrolna jedinica)", "Auspuh"],
    2
);

const pitanje3 = new Pitanje(
    "Koja vrsta kočionih sistema se obično koristi na prednjem točku motocikla?",
    ["Disk kočnice", "Tambura kočnice", "Disk kočnice i čeljusti", "Hidrauličke kočnice"],
    2
);

const pitanje4 = new Pitanje(
    "Šta označava skraćenica 'ABS' u kontekstu motocikala?",
    ["Automatsko brzinsko svetlo", "Asimetrični balans sistem", "Antiblokirajući sistem kočenja", "Akumulatorski bezbednosni sistem"],
    2
);

const pitanje5 = new Pitanje(
    "Koja funkcija ima menjač na motociklu?",
    ["Kontrola brzine", "Kontrola kočenja", "Promena brzine prenosa", "Kontrola amortizera"],
    2
);

const pitanje6 = new Pitanje(
    "Kako se naziva komponenta koja pomaže u upravljanju motociklom i smanjuje vibracije između prednje i zadnje viljuške?",
    ["Amortizer", "Ležaj", "Vrat viljuške", "Balansirajući sistem"],
    2
);

const pitanje7 = new Pitanje(
    "Šta označava skraćenica 'RPM' u vezi sa motociklom?",
    ["Redni proizvodni model", "Obrtaji u minuti", "Radijski prijemnik motocikla", "Rezervoar za putovanja motocikla"],
    1
);

const pitanje8 = new Pitanje(
    "Kako se naziva prva brzina na motociklu?",
    ["Visoka", "Prva", "Neutralna", "Revers"],
    1
);

const pitanje9 = new Pitanje(
    "Koja funkcija ima zadnji amortizer na motociklu?",
    ["Kontrola kočenja", "Podešavanje visine sedišta", "Absorpcija udaraca", "Kontrola brzine"],
    2
);

const pitanje10 = new Pitanje(
    "Koji deo motocikla pomaže održavanju stabilnosti tokom vožnje?",
    ["Svetla", "Ogledala", "Teleskopske viljuške", "Volan"],
    2
);
const pitanje11 = new Pitanje(
    "Koja komponenta motocikla prenosi snagu sa motora na zadnji točak?",
    ["Menjač", "Lanac", "Remen", "Karburator"],
    1
);

const pitanje12 = new Pitanje(
    "Kako se naziva deo motocikla koji kontroliše rad motora i obezbeđuje potrebnu snagu za pokretanje?",
    ["Auspuh", "Motor", "Gorivo", "Menjač"],
    1
);

const pitanje13 = new Pitanje(
    "Šta je saglasno 'slobodnom padu' u kontekstu motocikla?",
    ["Brza vožnja nizbrdo", "Pad brzine ili ubrzanja bez dejstva sile", "Pad motocikla", "Slobodan pad rezervoara"],
    1
);

const pitanje14 = new Pitanje(
    "Kako se naziva deo motocikla koji prenosi snagu motora na točak pomoću zupčanika?",
    ["Lanac", "Remen", "Prenosni lanac", "Kočioni disk"],
    2
);

const pitanje15 = new Pitanje(
    "Koja je uloga auspuha na motociklu?",
    ["Snabdevanje gorivom", "Hlađenje motora", "Uklanjanje ispušnih gasova", "Kontrola kočenja"],
    2
);

const pitanje16 = new Pitanje(
    "Koja vrsta goriva se obično koristi u motociklima?",
    ["Benzin", "Dizel", "Električna energija", "Plin"],
    0
);

const pitanje17 = new Pitanje(
    "Kako se naziva uređaj koji omogućava paljenje smese goriva i vazduha u cilindru motocikla?",
    ["Starter", "Svećica", "Alternator", "Relej"],
    1
);

const pitanje18 = new Pitanje(
    "Koja komponenta omogućava vozaču da promeni smer kretanja motocikla?",
    ["Kočnice", "Gas", "Volan", "Menjač"],
    2
);

const pitanje19 = new Pitanje(
    "Koji deo motocikla je odgovoran za generisanje električne energije za napajanje svetala i drugih električnih sistema?",
    ["Akumulator", "Alternator", "Starter", "Svećica"],
    1
);

const pitanje20 = new Pitanje(
    "Koja je uloga menjača na motociklu?",
    ["Kontrola kočenja", "Kontrola brzine", "Prenos snage na zadnji točak", "Kontrola amortizera"],
    2
);

const pitanje21 = new Pitanje(
    "Kako se naziva sistem koji omogućava vozaču da pokrene motor pomoću električne energije?",
    ["Paljenje na ključ", "Ručni starter", "Električni starter", "Automatski starter"],
    2
);

const pitanje22 = new Pitanje(
    "Koji deo motocikla se koristi za smeštanje goriva?",
    ["Spremnik za vodu", "Rezervoar za gorivo", "Sklopka za gorivo", "Karburator"],
    1
);

const pitanje23 = new Pitanje(
    "Kako se naziva uređaj koji reguliše količinu goriva koje dospeva do motora?",
    ["Ručica gasa", "Brzinska ručica", "Ventil za gorivo", "Kompresor"],
    0
);

const pitanje24 = new Pitanje(
    "Koja funkcija ima prednja viljuška na motociklu?",
    ["Absorpcija udaraca", "Kontrola kočenja", "Prenos snage na točak", "Održavanje ravnoteže"],
    0
);

const pitanje25 = new Pitanje(
    "Kako se naziva prilagodljivi sistem za oslanjanje na motociklu?",
    ["ABS", "ESA (Electronic Suspension Adjustment)", "ASR (Anti-Slip Regulation)", "GPS"],
    1
);

const pitanje26 = new Pitanje(
    "Koji deo motocikla pomaže u filtriranju vazduha pre nego što dospe do motora?",
    ["Auspuh", "Filter vazduha", "Karburator", "Svećica"],
    1
);

const pitanje27 = new Pitanje(
    "Koja funkcija ima zadnja kočnica na motociklu?",
    ["Kontrola brzine", "Prenos snage na točak", "Podešavanje visine sedišta", "Absorpcija udaraca"],
    1
);

const pitanje28 = new Pitanje(
    "Kako se naziva sistem koji pomaže u održavanju temperature motora na odgovarajućem nivou?",
    ["Klima uređaj", "Sistem za hlađenje", "Električni grejač", "OxCool"],
    1
);

const pitanje29 = new Pitanje(
    "Koja komponenta motocikla pruža vozaču informacije o brzini, obrtajima motora i drugim parametrima?",
    ["Svetla", "Ogledala", "Tablica sa instrumentima", "GPS navigacija"],
    2
);

const pitanje30 = new Pitanje(
    "Kako se naziva uređaj koji pomaže vozaču da održi stabilnost motocikla tokom vožnje?",
    ["G-senzor", "ASR (Anti-Slip Regulation)", "TC (Traction Control)", "ESP (Electronic Stability Program)"],
    3
);

const pitanje31 = new Pitanje(
    "Kako se naziva uređaj koji pomaže u upravljanju gorivom na motociklu?",
    ["ECU (Elektronska kontrolna jedinica)", "Karburator", "Injektor", "Kompresor"],
    2
);

const pitanje32 = new Pitanje(
    "Koja vrsta kočionih sistema se obično koristi na zadnjem točku motocikla?",
    ["Disk kočnice", "Tambura kočnice", "Disk kočnice i čeljusti", "Hidrauličke kočnice"],
    0
);

const pitanje33 = new Pitanje(
    "Koja je uloga menjača sa automatskim prenosom na motociklu?",
    ["Promena brzina automatski", "Ručna kontrola brzine", "Kontrola kočenja", "Prenos snage na točak"],
    0
);

const pitanje34 = new Pitanje(
    "Kako se naziva deo motocikla koji podržava zadnji deo vozača?",
    ["Viljuška", "Sedište", "Oklop", "Nosac"],
    1
);

const pitanje35 = new Pitanje(
    "Šta označava skraćenica 'CC' u vezi sa motorom motocikla?",
    ["Centralna kontrola", "Cilindrična čeljust", "Kubni centimetar", "Centar centrifuge"],
    2
);

const pitanje36 = new Pitanje(
    "Koja komponenta kontroliše sagibanje prednjeg kraja motocikla tokom kočenja?",
    ["Viljuška", "Amortizer", "Čeljust kočnice", "Volan"],
    0
);

const pitanje37 = new Pitanje(
    "Kako se naziva uređaj koji menja smer struje između baterije i električnih komponenti na motociklu?",
    ["Prekidač", "Regulator napona", "Invertor", "Relej"],
    0
);

const pitanje38 = new Pitanje(
    "Kako se naziva sistem koji omogućava motoru da automatski prilagodi brzinu bez obzira na gas?",
    ["ASR (Anti-Slip Regulation)", "Cruise control", "TC (Traction Control)", "Sistem za kontrolu stabilnosti"],
    1
);

const pitanje39 = new Pitanje(
    "Koja vrsta suspenzije se često koristi na zadnjem točku motocikla?",
    ["Teleskopske viljuške", "Monoshock", "Dvostruka viljuška", "Balansirajući sistem"],
    1
);

const pitanje40 = new Pitanje(
    "Kako se naziva prilagodljivi sistem za podešavanje visine motocikla?",
    ["ESA (Electronic Suspension Adjustment)", "ASR (Anti-Slip Regulation)", "TC (Traction Control)", "GPS"],
    0
);

const pitanje41 = new Pitanje(
    "Koja komponenta omogućava vozaču da menja brzine na motociklu?",
    ["Kvačilo", "Gas", "Volan", "Menjač"],
    0
);

const pitanje42 = new Pitanje(
    "Koja funkcija ima prednji amortizer na motociklu?",
    ["Absorpcija udaraca", "Kontrola brzine", "Prenos snage na točak", "Održavanje ravnoteže"],
    0
);

const pitanje43 = new Pitanje(
    "Kako se naziva sistem za ubrizgavanje goriva u cilindre motocikla?",
    ["Karburator", "Injektor", "ECU (Elektronska kontrolna jedinica)", "Gasna pumpa"],
    1
);

const pitanje44 = new Pitanje(
    "Koja vrsta motocikla je obično namenjena brzim vožnjama na stazi?",
    ["Skejter", "Touring", "Sport", "Cruiser"],
    2
);

const pitanje45 = new Pitanje(
    "Kako se naziva uređaj koji pomaže u paljenju motora pomoću zuba na volanu?",
    ["Paljenje na ključ", "Električni starter", "Ručni starter", "Kickstarter"],
    3
);

const pitanje46 = new Pitanje(
    "Koja komponenta motocikla obezbeđuje snabdevanje gorivom tokom vožnje?",
    ["Rezervoar za gorivo", "Spremnik za vodu", "Filter goriva", "Karburator"],
    0
);

const pitanje47 = new Pitanje(
    "Koja vrsta motocikla je prilagođena dugim putovanjima i opremljena za komfor?",
    ["Sport", "Cruiser", "Touring", "Off-road"],
    2
);

const pitanje48 = new Pitanje(
    "Koja komponenta motocikla pomaže u održavanju stabilnosti tokom vožnje na niskim brzinama?",
    ["ABS", "TC (Traction Control)", "ASR (Anti-Slip Regulation)", "Štitnik"],
    3
);

const pitanje49 = new Pitanje(
    "Koja funkcija ima prednja kočnica na motociklu?",
    ["Prenos snage na točak", "Absorpcija udaraca", "Kontrola brzine", "Kočenje"],
    3
);

const pitanje50 = new Pitanje(
    "Kako se naziva sistem koji automatski prilagođava svetlosni snop fara u zavisnosti od uslova vožnje?",
    ["ASR (Adaptive Suspension Regulation)", "ABS (Adaptive Braking System)", "AFS (Adaptive Front-lighting System)", "ASC (Adaptive Stability Control)"],
    2
);

// Niz od svih 50 pitanja
const bazaPitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10,
    pitanje11, pitanje12, pitanje13, pitanje14, pitanje15, pitanje16, pitanje17, pitanje18, pitanje19, pitanje20,
    pitanje21, pitanje22, pitanje23, pitanje24, pitanje25, pitanje26, pitanje27, pitanje28, pitanje29, pitanje30,
    pitanje31, pitanje32, pitanje33, pitanje34, pitanje35, pitanje36, pitanje37, pitanje38, pitanje39, pitanje40,
    pitanje41, pitanje42, pitanje43, pitanje44, pitanje45, pitanje46, pitanje47, pitanje48, pitanje49, pitanje50];

// Funkcija za generisanje testa, tj 5 random pitanja
let testGenerator = test => {
    let pitanja = bazaPitanja;
    for (let i = 0; i < 5; i++) {
        let ind = Math.floor(Math.random() * pitanja.length);
        test[i] = pitanja.splice(ind, 1)[0];
    }
};

export default testGenerator;