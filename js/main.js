let topo;

let loading = false;
let filtered = false;

const url = "https://pokeapi.co/api/v2";

const allTypes = [
    "steel",
    "water",
    "dragon",
    "electric",
    "fairy",
    "ghost",
    "fire",
    "ice",
    "bug",
    "fighting",
    "normal",
    "rock",
    "grass",
    "psychic",
    "dark",
    "ground",
    "poison",
    "flying",
];

const tpdosTipos = [
    {nome: "Aço", cor: "rgba(170, 170, 187, 0.75" },
    {nome: "Água", cor: "rgba(51, 153, 255, 0.75" },
    {nome: "Dragão", cor: "rgba(119, 102, 238, 0.75" },
    {nome: "Elétrico", cor: "rgba(255, 204, 51, 0.75" },
    {nome: "Fada", cor: "rgba(238, 153, 238, 0.75" },
    {nome: "Fantasma", cor: "rgba(102, 102, 187, 0.75" },
    {nome: "Fogo", cor: "rgba(255, 68, 34, 0.75" },
    {nome: "Gelo", cor: "rgba(102, 204, 255, 0.75" },
    {nome: "Inseto", cor: "rgba(170, 187, 34, 0.75" },
    {nome: "Lutador", cor: "rgba(187, 85, 68, 0.75" },
    {nome: "Normal", cor: "rgba(170, 170, 153, 0.75" },
    {nome: "Pedra", cor: "rgba(187, 170, 102, 0.75" },
    {nome: "Planta", cor: "rgba(119, 204, 85, 0.75" },
    {nome: "Psíquico", cor: "rgba(255, 85, 153, 0.75" },
    {nome: "Sombrio", cor: "rgba(119, 85, 68, 0.75" },
    {nome: "Terrestre", cor: "rgba(221, 187, 85, 0.75" },
    {nome: "Venenoso", cor: "rgba(170, 85, 153, 0.75" },
    {nome: "Voador", cor: "rgba(136, 153, 255, 0.75" },
]