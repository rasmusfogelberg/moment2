# Webbutveckling III - Moment 2 NodeJS och Gulp

## Automatiseringsprocessens syfte
En stor fördel med automatiseringsprocessen är att man inte behöver göra så många moment manuellt vid skapande av till exempelvis en webbplats. Källkodsfiler kan vara uppdelade i flera CSS eller JS-filer för att enklare strukturera sina arbetsfiler. Därefter kan automatiseringsprocessen slå samman dessa filer in till en CSS respektive JS fil. Därefter kan dessa filer komprimeras genom att radbrytning, mellanslag osv tas bort och därav sparar plats.

## Verktyg och paket
 Automatiseringsverktyget _**Gulp**_ användes i denna uppgift. Vid skapandet av en webbplats kan det vara så att utvecklaren vill dela upp sina arbetsfiler så de får en viss struktur och gör det lättare att arbeta med webbplatsen. Olika CSS-filer för olika media queries eller olika JS-filer för olika funktioner på webbplatsen. Men när filerna är färdigarbetade kan det vara till fördel att inte ha många olika filer. Besökare kan då behöva ladda många olika filer. Därav kan Gulp automatisera sammanslagning (concat) av filer eller minska deras storlek utan att utvecklaren ska behöva göra det själv varje gång en ändring görs. Detta görs ofta så att filer som ska publiceras läggs i en egen mapp av Gulp.

De paket som användes till Gulp är följande:
* **Gulp concat** - "Slår samman" flera CSS- eller JS-filer till varsin CSS- eller JS-fil.
* **Gulp terser** - Gör JS-kod så liten som möjligt (storleksmässigt). Ju mindre filer desto snabbare laddas det. Eftersom själva arbetsfiler inte förminskas behåller de struktur (radbrytningar, mellanrum osv) men filen som laddas till publiceringsmappen inte behöver arbetas med av utvecklaren gör det inget om radbrytningar mm försvinner. Det gör även kod mer svårläst om man inte vill att besökare ska kunna läsa koden.
* **Gulp cssnano** - Samma sak som terser men för CSS-kod istället
* **Gulp imagemin** - Förminskar bilders storlek som läggs till i publiceringsmappen

## Systemet
En traditionell mapp-struktur användes för arbetsfiler (dvs. de filer som ligger i sourcemappen). I varje mapp finns minst 2 filer för att dela upp CSS- och JS-kod enligt uppgiftensbeskrivning. Därefter används Gulp för att slåsamman dessa filer och kopiera alla filer till en publiceringsmapp kallad "pub". För att klona ner filer som använts i uppgiften från ett repo vars finns på github används följande kod i terminal:

*git clone https://github.com/rasmusfogelberg/moment2.git*

Därefter behöver användaren skriva i terminal: 

*npm install*

Detta installerar alla verktyg och paket som används för webbplatsen (se rubrik "Verktyg och paket" för vilka dessa är). När detta är gjort skriver användaren i terminal:

*gulp*

Då startas gulp. Först deklareras alla variabler som const och vilket paket eller verktyg de använder. Därefter skapas ett objekt vid namn "files" och i detta sätts alla sökvägar som html, css, js och images finns i. Därefter skapas task-funktioner för varje "del" man har i sina arbetsfiler. Det vill säga en funktion som tar html-filer och kopierar dem från arbetsmappen till publiceringsmappen. För CSS och JS filer sammanslås dessa filer först sedan förminskas de innan de kopieras till pub-mappen. Image-filer förminskas enbart.

En watcher-funktion skapas efter detta med namnet "watchTask". Denna har som uppgift att titta i de sökvägar man angett och se om något ändras i filer där. Ändras något anropar denna funktion de andra task-funktionerna som förklarades ovan. 

Då alla funktioner anses privata måste de göras publika. Detta görs med exports.default. Med export så säger gulp till att det som ligger i default ska exporteras. Därav använder man argumentet series som säger till i vilken ordning funktioner ska anropas. Då vissa funktioner inte är beroende av varandra kan de anropas samtidigt vilket görs med argumentet parallel. I parallel anges en array med alla task-funktioner. Så först anropas alla task-funktioner parallellt och sedan anropas funktionen watchTask. Gulp körs då tills användaren manuellt stoppar det med kommandot CTRL+C. Det är watch-funktionen i gulp som körs hela tiden och "lyssnar" efter ändringar i arbetsfilerna som den i realtid uppdaterar i pub-mappen.