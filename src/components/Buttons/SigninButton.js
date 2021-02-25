import { useHistory } from "react-router"
import Button from 'react-bootstrap/Button'
import styles from './styles.css';

function NextButton(props) {
  let history = useHistory()

  var route = "Signin"

  function handleClick() {
    history.push(route)
  }

  return (
    <Button className="signin" onClick={handleClick}>
      Sign In
    </Button>
  )
}

export default NextButton;