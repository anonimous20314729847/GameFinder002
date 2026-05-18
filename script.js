const games = [
{ id: 1, title: "GTA V", genre: "Ação", platform: "PC/Console", desc: "Mundo aberto criminal" },
{ id: 2, title: "Red Dead Redemption 2", genre: "Ação", platform: "PC/Console", desc: "Velho oeste realista" },
{ id: 3, title: "God of War", genre: "Ação", platform: "PC/Console", desc: "Mitologia nórdica" },
{ id: 4, title: "Spider-Man", genre: "Ação", platform: "PC/Console", desc: "Herói em Nova York" },
{ id: 5, title: "The Last of Us", genre: "Ação", platform: "Console/PC", desc: "Sobrevivência emocional" },

{ id: 6, title: "Elden Ring", genre: "RPG", platform: "PC/Console", desc: "Mundo aberto souls" },
{ id: 7, title: "The Witcher 3", genre: "RPG", platform: "PC/Console", desc: "Caçador de monstros" },
{ id: 8, title: "Skyrim", genre: "RPG", platform: "PC/Console", desc: "Exploração livre" },

{ id: 9, title: "Valorant", genre: "FPS", platform: "PC" },
{ id: 10, title: "CS2", genre: "FPS", platform: "PC" },
{ id: 11, title: "Apex Legends", genre: "FPS", platform: "PC/Console" },

{ id: 12, title: "Forza Horizon 5", genre: "Corrida", platform: "PC/Console" },
{ id: 13, title: "Gran Turismo 7", genre: "Corrida", platform: "Console" },

{ id: 14, title: "Minecraft", genre: "Sandbox", platform: "PC/Mobile" },
{ id: 15, title: "Terraria", genre: "Sandbox", platform: "PC" },

{ id: 16, title: "Resident Evil 4 Remake", genre: "Terror", platform: "PC/Console" },
{ id: 17, title: "Outlast", genre: "Terror", platform: "PC" },

{ id: 18, title: "Hollow Knight", genre: "Ação", platform: "PC/Console" },
{ id: 19, title: "Sekiro", genre: "Ação", platform: "PC/Console" },

/* GTA */
{ id: 100, title: "GTA III", genre: "Ação", platform: "PC/Console", desc: "Liberty City" },
{ id: 101, title: "GTA Vice City", genre: "Ação", platform: "PC/Console", desc: "Miami retrô" },
{ id: 102, title: "GTA San Andreas", genre: "Ação", platform: "PC/Console", desc: "CJ e gangues" },

/* Red Dead */
{ id: 103, title: "Red Dead Redemption", genre: "Ação", platform: "Console/PC", desc: "John Marston" },

/* Resident Evil */
{ id: 104, title: "Resident Evil 2 Remake", genre: "Terror", platform: "PC/Console", desc: "Raccoon City" },
{ id: 105, title: "Resident Evil 3 Remake", genre: "Terror", platform: "PC/Console", desc: "Nemesis" },
{ id: 106, title: "Resident Evil 7", genre: "Terror", platform: "PC/Console", desc: "Casa Baker" },
{ id: 107, title: "Resident Evil Village", genre: "Terror", platform: "PC/Console", desc: "Castelo e horror" },

/* The Last of Us */
{ id: 108, title: "The Last of Us Part I", genre: "Ação", platform: "PC/Console", desc: "Remake original" },
{ id: 109, title: "The Last of Us Part II", genre: "Ação", platform: "Console", desc: "Continuação" },

/* God of War */
{ id: 110, title: "God of War (2018)", genre: "Ação", platform: "PC/Console", desc: "Kratos nórdico" },
{ id: 111, title: "God of War Ragnarök", genre: "Ação", platform: "Console", desc: "Fim da saga" },

/* Horizon */
{ id: 112, title: "Horizon Zero Dawn", genre: "Ação", platform: "PC/Console", desc: "Robôs animais" },
{ id: 113, title: "Horizon Forbidden West", genre: "Ação", platform: "Console/PC", desc: "Continuação" }];


function App() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("Todos");
  const [fav, setFav] = React.useState([]);
  const [view, setView] = React.useState("list");
  const [selected, setSelected] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const genres = ["Todos", "Favoritos", "Ação", "RPG", "FPS", "Corrida", "Sandbox", "Terror"];

  const filtered = games.filter(g => {
    const s = g.title.toLowerCase().includes(search.toLowerCase());

    const c =
    category === "Todos" ?
    true :
    category === "Favoritos" ?
    fav.includes(g.id) :
    g.genre === category;

    return s && c;
  });

  function openDetails(game) {
    setLoading(true);
    setTimeout(() => {
      setSelected(game);
      setView("details");
      setLoading(false);
    }, 500);
  }

  function back() {
    setView("list");
    setSelected(null);
  }

  function toggleFav(id) {
    setFav(fav.includes(id) ? fav.filter(x => x !== id) : [...fav, id]);
  }

  if (loading) return /*#__PURE__*/React.createElement("h2", null, "Carregando...");

  if (view === "details") {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("button", { onClick: back }, "Voltar"), /*#__PURE__*/
      React.createElement("h1", null, selected.title), /*#__PURE__*/
      React.createElement("p", null, selected.genre), /*#__PURE__*/
      React.createElement("p", null, selected.platform), /*#__PURE__*/
      React.createElement("p", null, selected.desc)));


  }

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("input", { value: search, onChange: e => setSearch(e.target.value) }), /*#__PURE__*/

    React.createElement("select", { value: category, onChange: e => setCategory(e.target.value) },
    genres.map(g => /*#__PURE__*/React.createElement("option", { key: g }, g))),


    filtered.map((g) => /*#__PURE__*/
    React.createElement("div", { key: g.id }, /*#__PURE__*/
    React.createElement("h3", null, g.title), /*#__PURE__*/

    React.createElement("button", { onClick: () => openDetails(g) }, "Detalhes"), /*#__PURE__*/
    React.createElement("button", { onClick: () => toggleFav(g.id) },
    fav.includes(g.id) ? "★" : "☆")))));





}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));