const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Dados de exemplo (simulando um banco de dados)
//HTML ---> 1
//CSS ---> 2
//JAVASCRIPT ---> 3
//REACT.JS ---> 4
//API ---> 5
const projects = [
  { id: 1, titulo: 'OnlyFilms', descricao: 'OnlyFilms é um site fíctício para aluguel e vendas de filmes.', ferramentas: [1,2], link: "" },
  { id: 2, titulo: 'Help Earth', descricao: 'Help Earth é um site fictício de notícias focadas no meio-ambiente.', ferramentas: [1,2,3], link: "https://site-help-earth.vercel.app/" },
  { id: 3, titulo: 'Minha Pokédex', descricao: 'Um Website que, através de um API, puxa as informações de todos os pokemons que existem no universo de Pokemon.', ferramentas: [1,2,3,4,5], link: "https://minha-pokedex.vercel.app/" },
  { id: 4, titulo: 'Em Breve', descricao: '', ferramentas: "", link: "" }
];

// Rota para obter todos os livros
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Rota para obter um livro por ID
app.get('/api/projects/:id', (req, res) => {
  const projectId = parseInt(req.params.id);
  const project = projects.find((b) => b.id === projectId);
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ message: 'Projeto não encontrado' });
  }
});

// Rota para adicionar um novo livro
app.post('/api/projects', (req, res) => {
  const newProject = req.body;
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.listen(PORT, () => {
  console.log(`Server rodando em: ${PORT}`);
});