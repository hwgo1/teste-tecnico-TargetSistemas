import Questions from "./components/Questions";

const App = () => {
  const githubRepoLink = "https://github.com/seu-usuario/seu-repositorio";

  return (
    <div className="w-full h-screen">
      <div>
        <div className="text-center flex flex-col mx-auto items-center justify-center pt-12">
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-2xl font-bold text-white">Olá!</h1>
            <img
              src="./src/assets/waving-hand-sign-907.png"
              alt="Emote mão acenando"
              className="w-12"
            />
          </div>
          <p className="p-4 text-white text-lg">
            Segue abaixo as respostas referentes ao teste técnico
          </p>
        </div>
        <div className="text-center mt-8">
          <a
            href={githubRepoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 transition-all duration-200 ease-in-out hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Ver repositório no GitHub
          </a>
        </div>
        <div className="p-4 w-11/12 m-auto lg:w-1/3">
          <Questions />
        </div>
      </div>
    </div>
  );
};

export default App;
