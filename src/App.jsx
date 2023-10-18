import { useState } from 'react';
import './App.css';
import { url, options } from './api'

function App() {
  const [joke, setJoke] = useState('')

  const getDadJoke = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // const setup = result.body[0].setup
      // const punchline = result.body[0].punchline
      // console.log(setup, punchline)
      setJoke(result.body[0])
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect(() => {
  //   getDadJoke()
  // }, [])

  return (
    <div className="bg-cyan-400 w-full h-screen flex justify-center items-center flex-col">
      <p className='text-5xl font-bold text-white flex justify-center items-center py-32 drop-shadow-md'>Dad joke generator</p>
      
      {!joke && (
        <div className='text-white drop-shadow-lg text-2xl'>
          Click the button to get a dad joke!
        </div>
      )}

      {joke && (<div className="px-6 py-4 max-w-sm overflow-hidden shadow-xl flex items-center flex-col rounded-lg bg-cyan-300">
        <p className='text-gray-800'>{joke.setup}</p>
        <p className='text-gray-600 text-base mt-10'>{joke.punchline}</p>
      </div>)}

      <button onClick={getDadJoke} className="bg-blue-500 hover:bg-blue-700 my-24 text-white font-bold py-2 px-4 rounded-full flex justify-center content-center">
        {!joke ? 'Get Dad Joke' : 'Get another Dad Joke'}</button>
      
      <p className='text-white'>&copy; Advait Gogte</p>
    </div>
  );
}

export default App;
