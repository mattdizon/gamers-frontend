import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import '../css/sidebar.css'
class Sidebar extends React.Component{
    render(){
        return (
            <div class="sidebar">
                <nav class="sidebar-nav">
                    <ul class="nav">
                        <li class="nav-item">
                            <Link to = "/" className="nav-link nav-link-danger">
                                <i class="nav-icon cui-layers"></i> Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to = "/news" className="nav-link nav-link-danger">
                                <i class="nav-icon cui-layers"></i> Gamer News
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link to = "/lfg" className="nav-link nav-link-danger">
                                <i class="nav-icon cui-layers"></i>Find a Group
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link to = "/friends" className="nav-link nav-link-danger">
                                <i class="nav-icon cui-layers"></i>My Friends
                            </Link>
                        </li>

                        <li class="nav-item">
                            <Link to = "/groups" className="nav-link nav-link-danger">
                                <i class="nav-icon cui-layers"></i>My Groups
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Sidebar
