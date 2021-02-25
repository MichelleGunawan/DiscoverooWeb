import { useHistory } from "react-router"
import Button from 'react-bootstrap/Button'

function NextButton(props) {
  let history = useHistory()
  var num = parseInt(props.num)
 
  console.log(num);

  num = num+1;
  
  if(num==67)
  {num=7}
  if(num==127)
  {num=13}
  var route = "Page" + num;


  function handleClick() {
    history.push(route)
  }

  return (
    <Button className="quiz" onClick={handleClick}>
      Next
    </Button>
  )
}

export default NextButton;