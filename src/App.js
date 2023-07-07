import './App.css';
import 'typeface-dancing-script';
import send from './assets/send.png';

function App() {

  const handleProcess = () => {
    console.log('Icon clicked!');
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
          <input onKeyDown={handlePressedEnter} type="text" id="text-input" class="bg-yellow-50 border ring-yellow-100 border-yellow-500 text-yellow-900 placeholder-yellow-700 text-sm rounded-lg focus:ring-2 focus:border-1 block w-full p-2.5 focus:outline-none" placeholder="Write something here beshy..." required />
          <div class='w-7 m-auto mx-2 hover:animate-bounce'>
            <img class='w-full cursor-pointer' src={send} alt="Custom Icon" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
