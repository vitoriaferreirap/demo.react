
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="settings">Settings</Link>
                    </li>
                </ul>
            </nav>

            {/* Outlet é para renderizar componentes filhos em rotas aninhadas */}
            <Outlet />
        </div>
    )
}

export default Dashboard