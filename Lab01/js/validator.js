

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
    var itemNameInTable=document.getElementsByClassName("nameInTable");
    var iloscProduktow = document.getElementsByClassName("nameInTable").length;
    var blad = document.getElementById("itemDuplicationError");
    var duplicationFlag = 0;
    var nazwaProduktuForm=document.getElementById("itemName");
    var nazwaProduktu=nazwaProduktuForm.value;

    console.log("Ilosc produktow = " + iloscProduktow);
    //console.log("ItemNameInTable[0] = " + itemNameInTable[0].textContent);
    if(iloscProduktow>0)
    {
        for(i=0;i<iloscProduktow;i++)
        {
            console.log("itemNameInTable["+i+"].textContent = " + itemNameInTable[i].textContent);
            console.log("nazwaProduktu = " + nazwaProduktu);
            if (itemNameInTable[i].textContent == nazwaProduktu)
            {
                duplicationFlag = 1;
                console.log("duplicationFlag = " + duplicationFlag);
            }
        }
    }
    if (duplicationFlag == 1)
    {
        blad.innerHTML = "Taki przedmiot już znajduje się w tabeli";
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

function deleteItem(index)
{



    $(index).closest('tr').remove();
    $('.tablesorter').trigger('update');
    console.log("Hej, jestem w deleteItem");
  }

  var _row = null;

// function editItem(index)
// {
        

//         var tablica = document.getElementById("table");
//         var totalRowCount = table.rows.length - 1;
//         console.log("TotalRowCount = " + totalRowCount);

//         console.log("index w editItem = " + index);
        $('td.edycja').click(function(){
        console.log("Jesteśmy w edytowaniu pozycji");
        indeksWiersza = $(this).parent().index()+1;
        console.log(indeksWiersza);
        AddItem.innerText = "Zapisz zmiany";
        ind = String(index);
        //console.log("index = " + index);
        //console.log("ind = " + ind);
        document.getElementById('AddItem').setAttribute('onClick','zapiszZmiany('+indeksWiersza+')');

        itemName.value = table.rows[indeksWiersza].cells[0].innerHTML;
        itemCode.value = table.rows[indeksWiersza].cells[1].innerHTML;
        itemNettoPrice.value = parseInt(table.rows[indeksWiersza].cells[2].innerHTML);
        itemBruttoPrice.value = parseInt(table.rows[indeksWiersza].cells[3].innerHTML);
        editedVat= table.rows[indeksWiersza].cells[4].innerHTML;
        vat.value = parseInt(editedVat.slice(0, -1));
        inputItemCategory.value = table.rows[indeksWiersza].cells[5].innerHTML;
        itemPicture.value = table.rows[indeksWiersza].cells[8].innerHTML;

        var row = $(index).parents('tr')
        var col = row.children('td');
        console.log("test");

        document.getElementById("gridCheck1").checked = false;
        document.getElementById("gridCheck2").checked = false;
        document.getElementById("gridCheck3").checked = false;
        document.getElementById("gridCheck4").checked = false;
        document.getElementById("gridCheck5").checked = false;
        


        var opts = $(col[6]).text().split(" ");
        opts.forEach((opt) => {
            //console.log("opts = " + opts);
            //console.log("opt = " + opt);
            
            if (opt.localeCompare('Opcja1')==0)
            {
                document.getElementById("gridCheck1").checked = true;
                //console.log("Weszło w 1 ifa");
            }
            if (opt.localeCompare('Opcja2')==0)
            {
                document.getElementById("gridCheck2").checked = true;
                //console.log("Weszło w 2 ifa");
            }
            if (opt.localeCompare('Opcja3')==0)
            {
                document.getElementById("gridCheck3").checked = true;
                //console.log("Weszło w 3 ifa");
            }
            if (opt.localeCompare('Opcja4')==0)
            {
                document.getElementById("gridCheck4").checked = true;
                //console.log("Weszło w 4 ifa");
            }
            if (opt.localeCompare('Opcja5')==0)
            {
                document.getElementById("gridCheck5").checked = true;
                //console.log("Weszło w 5 ifa");
            }
        });

        if ($(col[7]).text().localeCompare('1') == 0){
            document.getElementById('radioRating1').checked=true;
        }
        if ($(col[7]).text().localeCompare('2') == 0){
            document.getElementById('radioRating2').checked=true;
        }
        if ($(col[7]).text().localeCompare('3') == 0){
            document.getElementById('radioRating3').checked=true;
        }
        if ($(col[7]).text().localeCompare('4') == 0){
            document.getElementById('radioRating4').value="4";
        }
        if ($(col[7]).text().localeCompare('5') == 0){
            document.getElementById('radioRating5').checked=true;
        }
        
    });
    // deleteItem(index);
    // $(index).closest('tr').remove();
    // $('.tablesorter').trigger('update');


function zapiszZmiany(index)
{
    console.log("Weszło w zapiszZmiany(index)");
    if (sprawdzItemCode() == false && sprawdzItemName() == false && sprawdzItemNettoPrice() == false && sprawdzKategorie() == false && sprawdzOpcje() == false && sprawdzVat() == false && sprawdzItemPicture() == false && sprawdzNameInTable() == false)
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

        var tablica = document.getElementById("table");
        var idNowegoElementu = table.rows.length;

        var row = '<tr><td class="nameInTable">' + table_name + '</td><td>' + table_code + '</td><td>' + table_netto + 'zł</td><td>' + table_brutto + 'zł</td><td>' + table_vat + '%</td><td>'+ table_category +'</td><td>' + table_options + '<td>' + table_rating + '</td><td>' + table_picture + '</td>' + '<td><button type="button" ">🖊</button></td>' + '<td><button type="button" id="addToCart">🛒</button></td>' + '<td><button type="button" onclick="deleteItem(this)" class="remove" title="Usun wiersz">X</button></td></tr>'
            $row = $(row),
            resort = true;
        $('table')
            .find('tbody').append($row)
            .trigger('addRows', [$row, resort]);

            AddItem.innerText = "Dodaj produkt";
            document.getElementById('AddItem').setAttribute('onClick','sprawdzWszystko()');
            // $(index).closest('tr').remove();
            // $('.tablesorter').trigger('update');
            deleteItem(index);
    } 
}

function sprawdzWszystko()
{
    console.log("Weszlo w sprawdzanie wszystkiego");
    if (sprawdzItemCode() == false && sprawdzItemName() == false && sprawdzItemNettoPrice() == false && sprawdzKategorie() == false && sprawdzOpcje() == false && sprawdzVat() == false && sprawdzItemPicture() == false && sprawdzNameInTable() == false)
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



        var row = '<tr><td class="nameInTable">' + table_name + '</td><td>' + table_code + '</td><td>' + table_netto + 'zł</td><td>' + table_brutto + 'zł</td><td>' + table_vat + '%</td><td>'+ table_category +'</td><td>' + table_options + '<td>' + table_rating + '</td><td>' + table_picture + '</td>' + '<td><button type="button" ">🖊</button></td>' + '<td><button type="button" id="addToCart">🛒</button></td>' + '<td><button type="button" onclick="deleteItem(this)" class="remove" title="Usun wiersz">X</button></td></tr>'

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


let tablicaKoszyk = [];

$("td.koszyk").on('click', function(event){

    console.log("Jestem w dodaj do koszyka")
    //$('td').click(function(){
    //indeksWiersza = $(this).parent().index()+1;
    indeksWiersza = $(this).parent().index()+1;
    console.log(indeksWiersza);
    console.log(index);


    // indexWiersza = $(this).parent().index()+1;
    // console.log('dodaj do koszyka');
    // console.log('Index = ' + index);
    // console.log("IndexWiersza = " + IndexWiersza);
  
    


    const ob = {
      'nazwa': table.rows[indeksWiersza].cells[0].innerHTML,
      'cena_brutto': table.rows[indeksWiersza].cells[3].innerHTML
    };
  
    tablicaKoszyk.push(ob);
  
   localStorage.setItem('myElement', JSON.stringify(tablicaKoszyk));

   var rowek = '<tr><td>'+ ob.nazwa +'</td><td class="costProduct">' + ob.cena_brutto + '</td><td>'+ '<input onchange="calculationCart()" type="number" name="quantity" value="1" min="1" max="10">' + '</td></tr>';
    $rowek = $(rowek),
    console.log("rowek = " + rowek);
    resort2 = true;
    $('#myTable2')
    .find('tbody').append($rowek)
    .trigger('addRows', [$row, resort2])
    .trigger('update');

});
