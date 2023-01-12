import React from 'react'
import Logo from '../assets/logo1.png'

function Navbar() {
    return (
        <>
            <div className="navbar rounded-lg">
                <div className="navbar-start">
                    {/* <a className="navbar-item">Hacked Up</a> */}
                    <img src={Logo} alt="Hacked Up" width="150px"  className="navbar-item" />
                </div>
                <div class="navbar-center">
                    <a class="navbar-item">Explore</a>
                    <a class="navbar-item">Problems</a>
                    <a class="navbar-item">Discuss</a>
                </div>
                <div className="navbar-end">
                    <div className="avatar avatar-ring avatar-md">
                        <div className="dropdown-container">
                            <div className="dropdown">
                                <label className="btn btn-ghost flex cursor-pointer px-0" tabindex="0">
                                    <img src="data:image/png;base64,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" alt="avatar" />
                                </label>
                                <div className="dropdown-menu dropdown-menu-bottom-left">
                                    <a className="dropdown-item text-sm">Profile</a>
                                    <a tabindex="-1" className="dropdown-item text-sm">Account settings</a>
                                    <a tabindex="-1" className="dropdown-item text-sm">Subscriptions</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar