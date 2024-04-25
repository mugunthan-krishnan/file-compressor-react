import { useState } from 'react'
import './App.css'
import Compress from './components/Compress'
import Decompress from './components/Decompress'
import SideBar from './components/SideBar'

function App() {
  const [click, chooseOp] = useState({compress: false, decompress: false});

  function compressClick(){
    chooseOp(prevState => {
      return {
        ...prevState,
        compress: true,
        decompress: false
      }
    });
  }

  function decompressClick(){
    chooseOp(prevState => {
      return {
        ...prevState,
        compress: false,
        decompress: true
      }
    });
  }

  let content;

  if (click.compress === true){
    content = <Compress />
  } else if (click.decompress === true){
    content = <Decompress />
  }
  return (
    <>
      <main className="h-screen flex gap-8">
        <SideBar compressClick={compressClick} decompressClick={decompressClick} />
        {content}
      </main>
    </>
  )
}

export default App
