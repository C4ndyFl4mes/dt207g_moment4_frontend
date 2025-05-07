# Webbapplikation
Den här [webbsidan](https://dt207g-moment4-frontend.netlify.app/terraria_bosses) är publicerad på Netlify. Den använder ett API för att kunna hantera registrering och inloggning av konton, samt att visa information om olika Terria bosses (skyddad resurs) i en skyddad route, terrara_bosses. API:et ligger på Fly.io och NoSQL databasen ligger på Atlas.

## Beskrivning
Användare kan skapa ett konto och logga in med det för att kunna se den skyddade undersidan terraria_bosses samt hämta den skyddade resursen som visar information. API:ets: [repo](https://github.com/C4ndyFl4mes/dt207g-moment4-backend) [URL](https://dt207g-moment4-backend.fly.dev/). Eftersom webbapplikationen gjordes i Angular användes Auth Guard för att kunna skydda terraria_bosses och skicka användaren till en annan sida som heter forbidden. Denna sida säger att användaren inte är inloggad och en knapp till inloggningssidan finns.

Den skyddade sidan terraria_bosses listar information från en skyddad resurs som innehåller namn, hälsa, försvar, skada och omgivningar den kan spawna i.

Inloggningssidan listar alla fel med ens inmatning samt särskilda fel ifall användarnamnet är upptaget eller användarnamn eller lösenord är felaktigt. Registrera/logga in knapparna aktiveras när det är korrekt inmatning i båda fälten. När användaren loggar in eller registreras och allt går bra, förflyttas användaren automatiskt till terraria_bosses.

## Översikt av koden
Applikationen är skriven i TypeScript, Angular. Det finns fyra interfaces (`boss`, `credentials`, `data`, `user`), tre sidor (`account`, `forbidden`, `terraria_bosses`), två partials (`menu`, `switch-difficulty-mode`) och två services (`auth`, `terraria`). Det var tänkt att `user` skulle synas på sidan: användarnamn och registreringsdatum, men jag glömde det. `boss` innehåller informationen som nämndes i beskrivningen. Ytterligare finns rowID som inte är med i den skyddade resursen, men som läggs till för att identifiera unika rader. `credentials` används bara för att slippa skriva `{username: ....; password: ....;}` två gånger i auth service. `data` är `user` + `boss` i samma, det blev riktigt dåligt med API:et gällande detta. Hade nog varit bäst att sära på dem i två olika get routes. Menyn kopierade jag från en av mina tidigare uppgifter och lade in i detta projekt. `switch-difficulty-mode` är en komponent som ligger på terraria_bosses med tre radioknappar som bestämmer vilken svårighetsgrad som ska visas: classic, expert eller master. Beroende på vilken svårighetsgrad anges olika hälsa, försvar etc.

## Designen
Jag är inte bra på att göra en design eller hur jag ska lägga upp innehållet. Jag fokuserar mest på att det ska vara responsivt och då i projekten jobbar jag lite extra på designen.
