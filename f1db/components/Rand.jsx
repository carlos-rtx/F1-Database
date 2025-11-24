//import Confetti from "canvas-confetti"
export default function Rand() {
  let newRand = Math.floor(Math.random() * 60)
  return (
    <>
      {newRand === 35 ? <div>
        
      </div> :
        <div></div>
      }
    </>
  )
  
}