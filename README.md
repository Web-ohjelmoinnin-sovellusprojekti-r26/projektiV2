# Ilmastonmuutosdatan visualisointityökalu

Ilmastonmuutosdatan visualisointityökalu on Oulun ammattikorkeakoulun 2. vuoden ohjelmistokehityksen opiskelijoiden toteuttama web-sovellus. Tavoitteena oli tehdä ryhmätyönä sovellus, joka esittelee säätiedoista muodostettuja lämpötilagraafeja eri ajanjaksoilta React-tekniikkaa käyttäen. Ajanjaksoja olivat esimerkiksi 65 vuotta, 1 000 vuotta sekä 400 000 vuotta. Sovelluksen tehtävänä oli toimia ilmastonmuutoksen havainnointityökaluna. (Kuva 1.)

![Kuva1](https://user-images.githubusercontent.com/99176587/207069078-6344b72c-bd2b-438d-8b72-07d50efec8a4.png)
>**KUVA 1.** HadCrut5:sen ja Paleoklimatologian tietokeskuksen data

Ryhmään kuului Aleksi Koberg, Milla Korhonen, Sami Kokko sekä Tuomo Karsikas. Varsinaisia rooleja ei ryhmässä jaettu, sillä kaikki olivat vasta aloittaneet ohjelmoinnin. Kaikki ryhmän jäsenet tekivät itse kuitenkin ainakin yhdestä datasetistä kuvaajan sovellukseen. Pääsääntöisesti projektia tehtiin yhteistyöllä, eli kaikki tekivät kaikkea Full Stack -kehittäjinä.

## Työkalut

Projektiin käytettiin React-tekniikkaa selaimessa sekä JavaScriptiä ja Node.js:ää palvelimella. Tietokannaksi valittiin MySQL, jota käytettiin phpMyAdmin-käyttöliittymän kautta.
Sovelluksen arkkitehtuuri muodostuu suurimmilta osin yhdestä App.js-nimisestä tiedostosta, jossa on suurin osa komponenteista. V7-komponentti on erillisenä, sillä ryhmässä haluttiin tehdä projektista hieman selkeämpi. Aikatauluongelmien takia loput komponentit jätettiin ennalleen ja ne löytyvät App.js-tiedostosta. Sovelluksen näyttämä verkkosivu on responsiivinen, eli se skaalautuu ikkunan kokoa muutettaessa.

## Tietokanta

Sovelluksella oli tietokanta, jonka sisällä jokaiselle datasetille oli oma taulu (table). Taulut sisältävät JSON-muotoisena datana lämpötiloja, vuosilukuja sekä hiilidioksidipitoisuuksia. Joissakin on vielä tarkemmin mitattuna hiilidioksidin hiukkaspitoisuus. Nimet tauluille on laitettu graafien nimien mukaan, esim. v1data, v3data, v5data jne. Mikäli kuvaajaan tuli useampi datasetti, laitettiin nimien perään joko maailmanlaajuisen (global), kuukausien (monthly), eteläisen (southern) tai pohjoisen (northern) mukaiset kirjaimet g, m, s tai n. Joihinkin tuli myös yhdistelmiä näistä kirjaimista. (Kuva 2.)

![Kuva2](https://user-images.githubusercontent.com/99176587/207070362-00d7bcf0-940a-4e3a-be7e-8408adafc7da.png)
>**KUVA 2.** Tietokanta

## Sovellus internetissä

Sovellus on julkaistu internetissä julkisessa osoitteessa. Sitä pääsee käyttämään klikkaamalla linkkiä [Ilmastonmuutosdata](https://ilmastonmuutos-data.ew.r.appspot.com/). Sovellus ei vaadi sisäänkirjautumista tai muitakaan tietoja. Kunkin taulukon yläpuolella on painike jokaiselle piirretylle graafille. Käyttäjä pystyy painikkeita painamalla valitsemaan, mitä graafeja näytetään. Oletuksena sivu piirtää kaikki graafit yhtä aikaa. Graafit on nimetty datasettien sisältöjen mukaisesti, esim. TemperaturesGlobalAnnual-kohta näyttää maailmanlaajuiset vuotuiset lämpötilat, ja TemperaturesGlobalMonthly-kohta näyttää kuukausittaiset maailmanlaajuiset lämpötilat. Taulukkojen alapuolelle on myös laitettu pieni kuvaus graafeista sekä linkit lähteisiin, joita käyttäjä voi klikkaamalla tutkia.Sivu toimii myös mobiililaitteilla samassa osoitteessa. (Kuva 3.)

![Screenshot_20221213-170613](https://user-images.githubusercontent.com/99176587/207389346-35cfedf6-34bc-4ad0-88fc-23b3ed92ce21.jpg)
>**Kuva 3.** Sivu toimii myös mobiililaitteilla




## Käyttöönotto
Projektin koodi on mahdollista ladata omalle tietokoneelle ja testata sen toimintaa localhostissa. Tällöin projekti kloonataan GitHubista kokonaisuudessaan ja avataan Visual Studio Codessa. Projektin mukana tulee tietokannan sisältö, joka testaajan tulee siirtää paikalliseen tietokantaan. Tämän jälkeen palvelin laitetaan päälle esim. XAMPP Control Panel-ohjelman kautta. Visual Studio Codeen avataan kaksi terminaalia, joista toisessa siirrytään server-kansioon ja kirjoitetaan komento npm run dev. Tämän jälkeen toiseen terminaaliin laitetaan komento npm i. Se hakee projektiin kuuluvat riippuvuudet. Kun haku on valmis, kirjoitetaan npm start. Näkyviin pitäisi avautua samanlainen sivu, kuin [projektilinkkiä](https://ilmastonmuutos-data.ew.r.appspot.com/) klikkaamalla.
