import { Link } from "react-router-dom"
import errorImage from "../../images/404error.webp"


const NotFoundPage = () => {
  return (
    <><Link to="/">Go to home</Link>
      <img src={errorImage} alt="error" />
    </>
    
  )
}

export default NotFoundPage