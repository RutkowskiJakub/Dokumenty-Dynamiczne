function sprawdzItemName()
{
    var formularz_obj=document.getElementById("itemName");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("itemNameError");

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

function sprawdzItemCode()
{
    var formularz_obj=document.getElementById("itemCode");
    var t_code = formularz_obj.value;
    var blad = document.getElementById("itemCodeError");
    var codeRGEX = /^([a-z]|[0-9]|[A-Z]){2}-([a-z]|[0-9]|[A-Z]){2}$/
    var codeResult = codeRGEX.test(t_code)

    if (t_code === "")
    {
        blad.innerHTML = "Podaj kod towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
    }
    else if (!codeResult)
    {
        blad.innerHTML = "Zly format kodu (XX-XX)";
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

function sprawdzItemNettoPrice()
{
    var formularz_obj=document.getElementById("itemNettoPrice");
    var t_netto = formularz_obj.value;
    var blad = document.getElementById("itemNettoPriceError");
    var nettoRGEX = /(^(\d+\.\d{1,2})$)|^(\d+)$/
    var nettoRGEX2 = /^(\d+)$/
    var nettoResult = nettoRGEX.test(t_netto);
    var nettoResult2 = nettoRGEX2.test(t_netto);

    if (t_netto === "")
    {
        blad.innerHTML = "Podaj cene towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
    }
    else if (!nettoResult)
    {
        blad.innerHTML = "Zły format ceny";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=true;
    }
    else
    {
        if(nettoResult2)
        {
            document.getElementById("itemNettoPrice").value += ".00";
        }

            blad.classList.remove("invalid-feedback");
            formularz_obj.classList.remove("is-invalid");
            blad.classList.add("valid-feedback");
            formularz_obj.classList.add("is-valid");
            blad.innerHTML = "";
            blad_danych=false;
            var a = parseFloat(document.getElementById("itemNettoPrice").value);
            var b = parseFloat(document.getElementById("vat").value);
            var c = a+a*(b/100);
            document.getElementById("itemBruttoPrice").value = c;
    }
    return blad_danych
}


function sprawdzVat()
{
    var formularz_obj=document.getElementById("vat");
    var t_vat = formularz_obj.value;
    var blad = document.getElementById("vatError");
    var vatRGEX = /^[0-9]{1,2}$/
    var vatResult = vatRGEX.test(t_vat)

    if (t_vat === "")
    {
        blad.innerHTML = "Podaj stawkę VAT";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
    }
    else if (!vatResult)
    {
        blad.innerHTML = "Zła wartość (0-100)";
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
        var a = parseFloat(document.getElementById("itemNettoPrice").value);
        var b = parseFloat(document.getElementById("vat").value);
        var c = a+a*(b/100);
        document.getElementById("itemBruttoPrice").value = c;
    }
    return blad_danych
}

function sprawdzKategorie()
{
    var formularz_obj=document.getElementById("inputItemCategory");
    var t_category = formularz_obj.value;
    var blad = document.getElementById("categoryError");


    if (t_category === "")
    {
        blad.innerHTML = "Wybierz kategorię";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
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

function sprawdzOpcje()
{
       
    var formularz_obj=document.getElementById("gridCheck1");
    var t_options = formularz_obj.value;
    var blad = document.getElementById("optionsError");

    if (1==1)
    {
        blad.innerHTML = "Wybierz przynajmniej 2 opcje";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
    }
    else
    {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych=false;
        //document.getElementById("itemBruttoPrice").value = 69;
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