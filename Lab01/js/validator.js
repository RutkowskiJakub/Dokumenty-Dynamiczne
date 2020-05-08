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
        blad_danych=true;
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
        blad_danych=true;
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
        blad_danych=true;
        document.getElementById("itemBruttoPrice").value = "";
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
        blad_danych=true;
        document.getElementById("itemBruttoPrice").value = "";
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


    if (t_category == 0)
    {
        blad.innerHTML = "Wybierz kategorię";
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

function sprawdzOpcje()
{
    console.log("weszło w sprawdzopcje()");
    var formularz_obj=document.getElementsByClassName("form-check-input");
    //t_option = document.getElementsByClassName("form-check");
    var blad = document.getElementById("optionsError");
    var counter=0;
    console.log(formularz_obj);
    for (i=0;i<5;i++)
    {
        console.log("weszło w fora");
        if (formularz_obj[i].checked)
        {
            counter++;
            console.log("zlicza counter: " + counter);
        }
    }

    if (counter<2)
    {
        blad.innerHTML = "Wybierz przynajmniej 2 opcje";
        blad.classList.add("alert-danger");
        //formularz_obj.classList.add("is-invalid");
        blad.classList.remove("alert-success");
        //formularz_obj.classList.remove("is-valid");
        blad_danych=true;
    }
    else
    {
        blad.classList.remove("alert-danger");
        //formularz_obj.classList.remove("is-invalid");
        blad.classList.add("alert-success");
        //formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych=false;
    }
    return blad_danych
}

function sprawdzOpcje()
{
    //console.log("weszło w sprawdzopcje()");
    var formularz_obj=document.getElementsByClassName("form-check-input");
    //t_option = document.getElementsByClassName("form-check");
    var blad = document.getElementById("optionsError");
    var counter=0;
    //console.log(formularz_obj);
    for (i=0;i<5;i++)
    {
        //console.log("weszło w fora");
        if (formularz_obj[i].checked)
        {
            counter++;
            //console.log("zlicza counter: " + counter);
        }
    }

    if (counter<2)
    {
        blad.innerHTML = "Wybierz przynajmniej 2 opcje";
        blad.classList.add("alert-danger");
        //formularz_obj.classList.add("is-invalid");
        blad.classList.remove("alert-success");
        //formularz_obj.classList.remove("is-valid");
        blad_danych=true;
    }
    else
    {
        blad.classList.remove("alert-danger");
        //formularz_obj.classList.remove("is-invalid");
        blad.classList.add("alert-success");
        //formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych=false;
    }
    return blad_danych
}

function sprawdzItemPicture()
{
    var formularz_obj=document.getElementById("itemPicture");
    var t_picture = formularz_obj.value;
    var blad = document.getElementById("itemPictureError");

    if (t_picture === "")
    {
        blad.innerHTML = "Podaj nazwe pliku ze zdjęciem";
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
function sprawdzNameInTable()
{
    console.log("Hej, jestem w sprawdzNameInTable()")
    var formularz_obj=document.getElementsByClassName("nameInTable");
    console.log("formularz_obj = " + formularz_obj);
    console.log("formularz_obj[0] = " + formularz_obj[0]);
    console.log("formularz_obj[1] = " + formularz_obj[1]);
    console.log("formularz_obj[0].value = " + formularz_obj[0].value)
    var x = document.getElementsByClassName("nameInTable").length;
    console.log("(liczba elementów w nameInTable) x = " + x);
    var test = formularz_obj.value;
    console.log("test: " + test);
}

function sprawdzWszystko()
{
    console.log("Weszlo w sprawdzanie wszystkiego");
    if (sprawdzItemCode() == false && sprawdzItemName() == false && sprawdzItemNettoPrice() == false && sprawdzKategorie() == false && sprawdzOpcje() == false && sprawdzVat() == false && sprawdzItemPicture() == false)
    {
        //alert("JEST OK!");
        var formularz_obj_name=document.getElementById("itemName");
        var table_name = formularz_obj_name.value;
        var formularz_obj_code=document.getElementById("itemCode");
        var table_code = formularz_obj_code.value;
        var formularz_obj_netto=document.getElementById("itemNettoPrice");
        var table_netto = formularz_obj_netto.value;
        var formularz_obj_brutto=document.getElementById("itemBruttoPrice");
        var table_brutto = formularz_obj_brutto.value;
        var formularz_obj_vat=document.getElementById("vat");
        var table_vat = formularz_obj_vat.value;
        var formularz_obj_category=document.getElementById("inputItemCategory");
        var table_category = formularz_obj_category.value;

        var formularz_obj_options=document.getElementsByClassName("form-check-input");
        var table_options = ""
        for (i=0;i<5;i++)
        {
            console.log("weszło w fora");
            if (formularz_obj_options[i].checked)
            {
                table_options = table_options + " " + formularz_obj_options[i].value
            }
        }


        var formularz_obj_rating=document.getElementsByClassName("form-radio-input");
        var table_rating;
        for (i=0;i<5;i++)
        {
            if (formularz_obj_rating[i].checked)
            {
                table_rating = i+1;
            }
        }

        var formularz_obj_picture=document.getElementById("itemPicture");
        var table_picture = formularz_obj_picture.value;



        var row = '<tr><td class=nameInTable>' + table_name + '</td><td>' + table_code + '</td><td>' + table_netto + 'zł</td><td>' + table_brutto + 'zł</td><td>' + table_vat + '%</td><td>'+ table_category +'</td><td>' + table_options + '<td>' + table_rating + '</td><td>' + table_picture + '</td></tr>'

            $row = $(row),
            // resort table using the current sort; set to false to prevent resort, otherwise
            // any other value in resort will automatically trigger the table resort.
            resort = true;
        $('table')
            .find('tbody').append($row)
            .trigger('addRows', [$row, resort]);
    } 
    else
    {
        console.log("Nie bangla");
        console.log("sprawdz item name: " + sprawdzItemName());
        console.log("sprawdz item code: " + sprawdzItemCode());
        console.log("sprawdz item nettoprice: " + sprawdzItemNettoPrice());
        console.log("sprawdz kategorie: " + sprawdzKategorie());
        console.log("sprawdz opcje: " + sprawdzOpcje());
        console.log("sprawdz vat: " + sprawdzVat());
        console.log("sprawdz item picture: " + sprawdzItemPicture());
        
    }
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