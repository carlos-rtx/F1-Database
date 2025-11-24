import Confetti from "canvas-confetti"
export default function Rand() {
  let newRand = Math.floor(Math.random() * 6000)
  return (
    <>
      {newRand === 35 ? <div>
        
      </div> :
        <div>
          
        </div>
      }
    </>
  )
  
}