import logo from '../assets/imagem/tailwind-removebg-preview.png';

const Home = () => (
  <div className=" flex h-screen bg-gradient-to-r from-purple-400 to-blue-600 ">
    <main
      className="bg-white flex flex-col 
       lg:flex-row justify-center 
         items-center w-4/5 mx-auto my-40 p-12 shadow-2xl opacity-50"
    >
      <img alt="" className="w-2/5 lg:w-1/5" src={logo} />
      <h1 className="text-4xl lg:text-6xl font-black text-center">
        Olá David Gilmar Miranda Pereira
      </h1>
      <img alt="" className="w-2/5 lg:w-1/5" src={logo} />
    </main>
  </div>
);

export default Home;
