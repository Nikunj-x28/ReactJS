import { useState , useCallback , useRef} from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(5);
  const [isNumber,setisNumber] = useState(false);
  const [isCharacter,setisCharacter] = useState(false);
  // useRef hook
  const passwordRef = useRef(null)
  let pass ="";
  const generatePass = useCallback(()=>{
    let validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isNumber) {
      validLetters += "0123456789"
      console.log('numbers allowed')
    }
    if (isCharacter) validLetters += "!@#$%^&*-_+=[]{}~`"
    for(let len = 1;len<=length;len++){
      let index = Math.floor(Math.random() * validLetters.length )
      pass+=validLetters[index];
    }
  },[length,isNumber,isCharacter])
  generatePass();
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(pass)
  }, [pass])
  return (
    <>
       <div className='box'>
          <div className='main-display'>
                <input
                  type="text"
                  value={pass}
                  placeholder="Password"
                  readOnly
                  className='show-pass'
                  ref={passwordRef}
                />
               <button className='copy-button'
                onClick={copyPasswordToClipboard}
               >copy</button>
          </div>
          
          <div className='input-field'>
            <input type="range" id="length" 
            onChange={(e)=>{
              setLength(e.target.value);
            }}
            />
            <label htmlFor="length">Length ({length}) </label>
            <input type="checkbox" id="isNum" 
            onClick={()=>{
              setisNumber((prev)=> !prev)
            }}/>
            <label htmlFor="isNum">Numbers </label>
            <input type="checkbox" id="isChar" 
            onClick={()=>{
              // updater function
              setisCharacter((prev)=> !prev)
            }}/>
            <label htmlFor="isChar">Characters </label>
          </div>
       </div>
    </>
  )
}

export default App
