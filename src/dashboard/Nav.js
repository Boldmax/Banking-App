import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Nav() {
    return (
        <div className="dashboard-nav">
            <nav className="nav-close">
            <div className="nav-components">
                <p className="bi bi-graph-up"><span>Dashboard</span></p>
                <p className="bi bi-person-fill"><span>Accounts</span></p>
                <p className="bi bi-gear-fill"><span>Settings</span></p>
                <p className="bi bi-box-arrow-right"><span>Sign Out</span></p>
            </div>
            </nav>
        </div>

    )
}
