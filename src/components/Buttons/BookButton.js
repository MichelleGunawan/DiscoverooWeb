import { useHistory } from "react-router"
import Button from 'react-bootstrap/Button'
import styles from './styles.css'

function BookButton() {
  let history = useHistory()

  function handleClick() {
    history.push("/")
  }

  return (
    <Button className="det-btn" onClick={handleClick}>
      Book
    </Button>
  )
}

export default BookButton;