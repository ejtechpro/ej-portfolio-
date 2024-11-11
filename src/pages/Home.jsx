import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>Home Page
      <Link to="about">My link</Link>
      <button>button</button>
    </div>
  )
}

export default Home