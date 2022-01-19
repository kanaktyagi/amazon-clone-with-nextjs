import react,{useState,useEffect} from "react";

function learning() {
  const[buttonClick, setButtonClick] = useState()
   
  useEffect(() => {
   console.log("buttonClick", buttonClick)
   console.log("inside use Effect")
  },[buttonClick])

  const handleClick = () => {
    setButtonClick("I AM CLICKED")
    console.log("inside handle click")
  }  

  console.log("function exection startes")

    return (
        <div> 
        {console.log('function exection inside return block')}
        <button onClick={handleClick}> Button </button>
            
        </div>
    )
}

export default learning
