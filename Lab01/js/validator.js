function sprawdzTowarName()
{
    var formularz_obj=document.getElementById("towar_name");
    var t_name = formularz_obj.nodeValue;
    var blad = document.getElementById("towar_name_blad");

    if (t_name === "")
    {
        blad.innerHTML = "Podaj nazwe towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
    }
    else if (t_name.length > 10)
    {
        blad.innerHTML = "Za dluga nazwa (max 10 znakow)";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=true;
    }
    else
    {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych=false;
    }
    return blad_danych
}

// w niej mamy wyciagniecie elementu html po id (pola i miejce na komunikat bledu)
// dodawanie i usuwanie class: vaalid / invalid. i tu te z is- sa to inputow, -feedback do diva z bledem
// funkcja zwraca wartosc true/false w zaleznosci czy ma blad czy nie.

// 4. w index w formularzu sprawdzamy aby id pola bylo zgodne (tj. towar_name, towar_name_blad) i wygladalo w skrocie jak:

// <div class="form-group">
//     <label>Nazwa towaru:</label>
//         <input type="text" class="form-control" id="towar_name" onBlur="sprawdzTowarName()">
//         <div id="towar_name_blad"></div>       
// </div>

// jest tu onBlur - wywoluje funkcje po wyjsciu z pola input
// mozna przetestowac 'oninput

// 5. ja wszystko dizal efekt powinien byc taki: wpisujemy cos i powyjsciu z pola jak jest ok to ramka na zielono, jak zle to naczerwono +
//  tekst na czerwono pod nia.
// 6. proponuje robic funkcje walidacyjne osobne na kazde pole - wszystkie w tym pliku validator.js
//  oraz button w index ustawic na type=button a nie submit ! - strona ma sie nie przeladowac po enter ani po kliknieciu w przycisk