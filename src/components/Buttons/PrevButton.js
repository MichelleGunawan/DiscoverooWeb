import { useHistory } from "react-router"
import Button from 'react-bootstrap/Button'

import styles from './styles.css'

function NextButton(props) {
  let history = useHistory()

  var num = parseInt(props.num);

  if(num==61)
  {num = 5}
  else if(num==7)
  {num = 66}
  else if(num==121)
  {num=11}
  else
  {num = num-1;}  
  
  var route = "Page" + num;

  if (num<1)
  {
    route = "/"
  }

  function handleClick() {
    history.push(route)
  }

  return (
    <Button className="prev" onClick={handleClick}>
      Previous
    </Button>
  )
}

export default NextButton;