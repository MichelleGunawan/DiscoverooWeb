import { useHistory } from "react-router"
import Button from 'react-bootstrap/Button'
import styles from './styles.css';

function StartButton(props) {
  let history = useHistory()

  var route = "Signin"

  function handleClick() {
    history.push(route)
  }

  return (
    <Button className="start" onClick={handleClick}>
      Start Now!
    </Button>
  )
}

export default StartButton;