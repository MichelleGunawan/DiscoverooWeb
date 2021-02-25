import { useHistory } from "react-router"
import Button from 'react-bootstrap/Button'

function NextButton(props) {
  let history = useHistory()
  var num = parseInt(props.num)
 
  num = num+1; 
  if(num==6)
  {num = 61;}
  else if(num==12)
  {num=121;}

  var route = "Page" + num;


  function handleClick() {
    history.push(route)
  }

  return (
    <Button className="next" onClick={handleClick}>
      Next
    </Button>
  )
}

export default NextButton;