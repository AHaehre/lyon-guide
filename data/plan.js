// Programmet for turen. place-nøkler peker til window.LYON_PLACES (routes.js),
// leg-nøkler peker til window.LYON_ROUTES.
window.LYON_PLAN = [
  {
    day: "Fredag", date: "20. november", key: "fri",
    items: [
      { time: "ca. 12:00", title: "Ankomst Gare de Lyon Part-Dieu", place: "partdieu",
        note: "TGV fra Paris (avreise ca. 10:00). Hent leiebilen på stasjonen." },
      { leg: "fri0", label: "Bil til hotellet" },
      { time: "ca. 12:30", title: "Hotel Boscolo Lyon", place: "boscolo",
        note: "Lever bagasjen. 11 Quai Jules Courmont, 2e." },
      { leg: "fri1", label: "Gå til lunsj" },
      { time: "13:15", title: "Lunsj på Le Musée", place: "musee",
        note: "Bouchon lyonnais i 2 rue des Forces. En ordentlig start på Lyon. Beregn tid til ca. 15:00." },
      { leg: "fri2", label: "Gå over Saône til funikulæren" },
      { time: "ca. 15:10", title: "Funiculaire Vieux Lyon – Fourvière", place: "funi_vl",
        note: "Fra metrostasjonen Vieux Lyon. Rundt 2 minutter opp. Vanlig TCL-billett gjelder." },
      { time: "ca. 15:20", title: "Basilique Notre-Dame de Fourvière", place: "fourviere",
        note: "Utsikten fra esplanaden først, så basilikaen og krypten. Romerteatrene ligger 5 minutter sørover om det er tid." },
      { leg: "fri3", label: "Ned gjennom Jardin du Rosaire til Saint-Jean" },
      { time: "ca. 16:00", title: "Vieux Lyon", place: "saintjean",
        note: "Katedralen, Rue Saint-Jean, Rue du Bœuf og en traboule eller to. Ikke mer enn tre–fire stopp." },
      { leg: "fri4", label: "Tilbake over Pont Bonaparte" },
      { time: "ca. 17:00", title: "Fritid", place: "boscolo",
        note: "Shopping i Rue de la République, kafé eller hotellpause. Ingen obligatoriske poster." },
      { leg: "fri5", label: "Gå til middag" },
      { time: "20:00", title: "Le Cochon qui Boit", place: "cochon",
        note: "Rue Roger Violi, 1er. Øyvind har vært her før." }
    ]
  },
  {
    day: "Lørdag", date: "21. november", key: "sat",
    items: [
      { leg: "sat1", label: "Gå til frokost" },
      { time: "09:00", title: "La Meunière", place: "meuniere",
        note: "11 rue Neuve, 1er. Frem til ca. 10:15." },
      { leg: "sat2", label: "Gå opp til Pentes" },
      { time: "ca. 10:15", title: "Rue Sainte-Catherine", place: "stecatherine",
        note: "Kort stopp ved den gamle leiligheten." },
      { leg: "sat3", label: "Tilbake til hotellet" },
      { time: "ca. 10:45", title: "Hotel Boscolo", place: "boscolo",
        note: "Ta med bagasje for dagen og hent bilen." },
      { leg: "sat4", label: "Kjør mot Beaujolais" },
      { time: "ca. 12:00", title: "Vingårdsbesøk", place: "oingt",
        note: "Forhåndsavtalt. Plassering oppdateres når vingården er bestemt. Deretter Oingt, en rusletur og noe lett å spise frem til ca. 14:15." },
      { leg: "sat5", label: "Kjør tilbake til Lyon" },
      { time: "ca. 15:30", title: "Lever leiebilen på Part-Dieu", place: "partdieu" },
      { leg: "sat6", label: "Tilbake til Boscolo (taxi, metro eller til fots 25 min)" },
      { time: "ca. 16:00", title: "Fri ettermiddag", place: "boscolo",
        note: "Tid til å skifte frem til ca. 19:15." },
      { leg: "sat7", label: "Taxi til Collonges" },
      { time: "20:15", title: "Paul Bocuse, L'Auberge du Pont de Collonges", place: "bocuse",
        note: "40 quai de la Plage, Collonges-au-Mont-d'Or." }
    ]
  },
  {
    day: "Søndag", date: "22. november", key: "sun",
    items: [
      { time: "Frokost", title: "Hotel Boscolo", place: "boscolo" },
      { leg: "sun1", label: "Taxi til flyplassen (alternativt Rhônexpress fra Part-Dieu, 30 min)" },
      { time: "Avreise", title: "Aéroport Lyon-Saint-Exupéry", place: "airport" }
    ]
  }
];

window.LYON_PLACE_NAMES = {
  partdieu: "Gare de Lyon Part-Dieu", boscolo: "Hotel Boscolo Lyon", musee: "Le Musée",
  saintjean: "Cathédrale Saint-Jean", fourviere: "Basilique de Fourvière", cochon: "Le Cochon qui Boit",
  meuniere: "La Meunière", stecatherine: "Rue Sainte-Catherine", bocuse: "Paul Bocuse, Collonges",
  oingt: "Oingt", airport: "Aéroport Lyon-Saint-Exupéry", funi_vl: "Funiculaire Vieux Lyon", funi_fv: "Funiculaire Fourvière"
};

// Kort tekst per arrondissement til toppfeltet.
window.LYON_ARR_INFO = {
  1: { name: "Lyon 1er", quarter: "Terreaux og Pentes de la Croix-Rousse",
       text: "Det minste og tetteste arrondissementet. Rådhuset, Operaen og Terreaux i sør, silkearbeidernes bratte skråninger i nord. Her bodde du i Rue Sainte-Catherine." },
  2: { name: "Lyon 2e", quarter: "Presqu'île: Bellecour, Cordeliers, Ainay, Confluence",
       text: "Byens handels- og borgerskapssentrum mellom Rhône og Saône. Hausmannske fasader, Bellecour, Rue de la République og lengst sør den nye Confluence-bydelen." },
  3: { name: "Lyon 3e", quarter: "Part-Dieu, Préfecture, Guillotière nord",
       text: "Det folkerikeste arrondissementet, bygget ut på 1800- og 1900-tallet. Forretningsdistriktet Part-Dieu med stasjonen, Le Crayon og Halles Paul Bocuse." },
  4: { name: "Lyon 4e", quarter: "Croix-Rousse",
       text: "Platået på toppen av høyden, «la colline qui travaille». Silkearbeidernes landsby i byen, med høye vinduer, eget marked og egen identitet." },
  5: { name: "Lyon 5e", quarter: "Vieux Lyon, Fourvière, Saint-Just, Point du Jour",
       text: "Byens eldste del. Lugdunum ble grunnlagt på Fourvière i 43 f.Kr., og renessansebyen Vieux Lyon ligger langs Saône under høyden." },
  6: { name: "Lyon 6e", quarter: "Brotteaux, Tête d'Or, Cité Internationale",
       text: "Det borgerlige østre Lyon, lagt ut i rette kvartaler på 1800-tallet. Parc de la Tête d'Or og de dyreste adressene i byen." },
  7: { name: "Lyon 7e", quarter: "Guillotière, Jean Macé, Gerland",
       text: "Lyons mest mangfoldige bydel, fra Guillotières gater til universitetene og det ombygde industriområdet Gerland i sør." },
  8: { name: "Lyon 8e", quarter: "Monplaisir, États-Unis, Grange Blanche",
       text: "Her lå Lumière-familiens villa og fabrikk. Filmen ble oppfunnet i Monplaisir i 1895. Også Tony Garniers sosiale boligbygging i États-Unis." },
  9: { name: "Lyon 9e", quarter: "Vaise, La Duchère, Saint-Rambert",
       text: "Nordvest, langs Saône. Gammel industri- og jernbanebydel i Vaise, nå ombygget, og boligblokkene i La Duchère på høyden." }
};
