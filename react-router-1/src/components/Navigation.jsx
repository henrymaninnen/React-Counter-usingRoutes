import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="nav">
        <ul>
            <li>
                <Link to="/counter">Counter</Link>
            </li>
        </ul>
        <ul>
            <li>
            <Link to="/currentcount">CurrentCount</Link>
            </li>
        </ul>
        
    </nav>
  )
}

export default Navigation