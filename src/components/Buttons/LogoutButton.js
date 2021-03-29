import { useHistory } from "react-router"
import Button from 'react-bootstrap/Button'
import styles from './styles.css';

function LogoutButton(props) {
  let history = useHistory()

  var route = "/"

  function handleClick() {
    history.push(route)
  }

  return (
    <Button className="logout" onClick={handleClick}>
      Logout
    </Button>
  )
}

export default LogoutButton;