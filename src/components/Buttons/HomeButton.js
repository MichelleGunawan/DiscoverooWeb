import { useHistory } from "react-router"
import Button from 'react-bootstrap/Button'
import logo from '../../Images/logo.png'

function HomeButton() {
  let history = useHistory()

  function handleClick() {
    history.push("/")
  }

  return (
    <Button className="home" onClick={handleClick}>
      Return Home
    </Button>
  )
}

export default HomeButton;