import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <React.Fragment>
        <header class="header-section">
		<div class="container">

			<a class="site-logo" href="/" style={{fontSize: "20px", fontFamily: "sans-serif", color: "#DDB376"}}>
				TREASURE TOWN LOGO
				{/* <img src="assets/img/logo.png" alt=""/> */}
			</a>
			<div class="user-panel">
				<a href="#">PLAY NOW</a>
			</div>

			<div class="nav-switch">
				<i class="fa fa-bars"></i>
			</div>

			<nav class="main-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
					<li><Link to="/review">Marketplace</Link></li>
					<li><Link to="/blog">Roadmap</Link></li>
					<li><Link to="/forum">Whitepaper</Link></li>
					<li><Link to="/contact">Help</Link></li>
				</ul>
			</nav>
		</div>
	</header>
        </React.Fragment>
    )
}
