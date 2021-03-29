import { useHistory } from "react-router"
import Button from 'react-bootstrap/Button'
import styles from './styles.css'

function PostButton() {
  let history = useHistory()

  function handleClick() {
    history.push("/Discover")
  }

  return (
    <Button className="det-btn" onClick={handleClick}>
      Post
    </Button>
  )
}

export default PostButton;