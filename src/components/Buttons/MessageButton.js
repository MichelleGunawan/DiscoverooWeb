import { useHistory } from "react-router"
import Button from 'react-bootstrap/Button'
import styles from './styles.css'

function MessageButton() {
  let history = useHistory()

  function handleClick() {
    history.push("/")
  }

  return (
    <Button className="det-btn" onClick={handleClick}>
      Message
    </Button>
  )
}

export default MessageButton;