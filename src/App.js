import './App.css';
import 'typeface-dancing-script';
import send from './assets/send.png';
import { useState } from 'react';
import ResultDisplay from './component/ResultDisplay';

function App() {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [convertedText, setConvertedText] = useState('');
  const [loading, setLoading] = useState(false);

  const convertText = (value) => {
    const emoji = "🤸";

    const result = value.replace(/ /g, emoji) + emoji;
    setConvertedText(result);
  }

  const handleProcess = () => {
    convertText(text);

    setLoading(true);
    setIsVisible(false);

    setTimeout(() => {
      setLoading(false);
      setIsVisible(true);
    }, 3000);
  }

  const handleClick = () => {
    handleProcess();
  };

  const handlePressedEnter = (event) => {
    if (event.key === 'Enter') {
      handleProcess();
    }
  }

  return (
    <div class="flex justify-center mt-[100px]">
      <div class='flex flex-col'>
        <div class='flex justify-center'>
          <div class='cursor-pointer' style={{ fontFamily: 'Dancing Script', fontSize: '60px' }}>
            <p><span className='text-[#FFCC33] hover:text-[#FFBF00]'>BESHIFY</span><span class='font-sans text-base font-medium'>By: Gil</span></p>
          </div>
        </div>
        <div class='flex w-[600px]'>
          <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={handlePressedEnter} type="text" id="text-input" class="bg-yellow-50 border ring-yellow-100 border-yellow-500 text-yellow-900 placeholder-yellow-700 text-sm rounded-lg focus:ring-2 focus:border-1 block w-full p-2.5 focus:outline-none" placeholder="Write something here beshy..." required />
          <div class={`w-7 m-auto mx-2 hover:animate-bounce transition-opacity duration-500 ${isVisible ? 'opacity-100 delay-500' : 'opacity-0'}`}>
            <img class='w-full cursor-pointer' src={send} alt="Custom Icon" onClick={handleClick} />
          </div>
        </div>
        <div>
          {
            convertedText.length !== 0 && (
              <ResultDisplay convertedText={convertedText} loading={loading} />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
