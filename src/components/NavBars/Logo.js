import { useHistory } from "react-router"
import Button from 'react-bootstrap/Button'
import styles from './styles.css';
import logo from '../../Images/logo.png';

function SigninButton(props) {
let history = useHistory()

  
if (props.status=='in')
{  var route = "/Discover"}
else
{  var route = "/"}

function handleClick() {
    history.push(route)
}

  return (
    <div>
        <img src={logo} className="navlogo" href="#home" onClick={handleClick}/>
    </div>     
  )
}

export default SigninButton;