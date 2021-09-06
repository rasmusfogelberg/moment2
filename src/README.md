# Webbutveckli g II - Moment 2
# NodeJS och Gulp

## Automatiseringsprocessens syfte
En stor fördel med automatiseringsprocessen är att man inte behöver göra så många moment manuellt vid skapande av till exempelvis en webbplats. Källkodsfiler kan vara uppdelade i flera CSS eller JS-filer för att enklare strukturera sina arbetsfiler. Därefter kan automatiseringsprocessen konkratinera dessa filer in till en CSS respektive JS fil. Därefter kan dessa filer komprimeras genom att radbrytning, mellanslag osv tas bort och därav sparar plats.

## Verktyg och paket
Atumatiseringsverktyget _**Gulp**_ användes i denna uppgift. Vid skapandet av en webbplats kan det vara så att utvecklaren vill dela upp sina arbetsfiler så de får en viss struktur och gör det lättare att arbeta med webbplatsen. Olika CSS-filer för olika media queries eller olika JS-filer för olika funktioner på webbplatsen. Men när filerna är färdigarbetade kan det vara till fördel att inte ha många olika filer. Besökare kan då behöva ladda många olika filer. Därav kan Gulp automatisera sammanslagning (concat) av filer eller minska deras storlek utan att utvecklaren ska behöva göra det själv varje gång en ändring görs. Detta görs ofta så att filer som ska publiceras läggs i en egen mapp av Gulp.

De paket som användes till Gulp är följande:
* **Gulp concat** - "Slårsamman" flera CSS- eller JS-filer till vars sin CSS- eller JS-fil.
* **Gulp terser** - Gör JS-kod så liten som möjligt (storleksmässigt). Ju mindre filer desto snabbare laddas det. Eftersom själva arbetsfiler inte förminskas behåller de struktur (radbrytningar, mellanrum osv) men filen som laddas till publiceringsmappen inte behöver arbetas med av utvecklaren gör det inget om radbrytningar mm försvinner. Det gör även kod mer svårläst om man inte vill att besökare ska kunna läsa koden.
* **Gulp cssnano** - Samma sak som terser men för CSS-kod istället
* **Gulp imagemin** - Förminskar bilders storlek som läggs till i publiceringsmappen

## Systemet
