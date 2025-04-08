import { useState } from 'react'
import './App.css'
import logoImg from './assets/logo.png'

function App() {
  const [textoFrase, setTextoFrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "O sucesso é a soma de pequenos esforços repetidos diariamente.", "Acredite em si mesmo e tudo será possível.",
        "Grandes conquistas começam com pequenos passos.",
        "Você é mais forte do que imagina!",
        "Não tenha medo de falhar, tenha medo de não tentar.",
        "Cada dia é uma nova chance para recomeçar.",
        "O segredo do sucesso é a persistência.",
        "Tudo o que você precisa para vencer já está dentro de você!",
        "A jornada pode ser difícil, mas o destino valerá a pena.",
        "Sonhe grande, trabalhe duro e nunca desista!"
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Bom dia! Que seu dia seja leve, produtivo e cheio de boas energias!",
        "Que hoje seja um dia incrível, cheio de sorrisos e conquistas! Bom dia!",
        "A cada amanhecer, uma nova oportunidade de ser feliz. Bom dia!",
        "Que a paz, o amor e a felicidade acompanhem você hoje. Bom dia!",
        "Sorria! Um novo dia nasceu para você brilhar. Bom dia!",
        "Que seu dia seja iluminado e repleto de boas notícias! Bom dia!",
        "A vida recomeça a cada manhã. Aproveite este novo dia! Bom dia!",
        "Bom dia! Que seu coração transborde gratidão e alegria!",
        "Nada como um novo dia para novas oportunidades! Aproveite. Bom dia!",
        "Desejo um dia maravilhoso para você, cheio de bênçãos e realizações!",
      ]
    }
  ]

  function handleSwitchCategory(index: number) {
    setCategoriaSelecionada(index)
  }

  function gerarFrases() {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    let fraseSelecionada = allFrases[categoriaSelecionada].frases[numeroAleatorio]

    setTextoFrase(`"${fraseSelecionada}"`)
  }

  return (
    <div className='container'>
      <img
        src={logoImg}
        alt="Logo frases"
        className='logo'
      />

      <h2 className='title'>Categorias</h2>

      <section className='category-area'>
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className='category-button'
            style={{
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4bd"
            }}
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button
        className='button-frase'
        onClick={gerarFrases}
      >
        Gerar frase
      </button>

      {textoFrase !== '' && <p className='text-frase'>{textoFrase}</p>}

    </div>
  )
}

export default App
