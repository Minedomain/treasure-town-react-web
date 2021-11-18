import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <React.Fragment>
        <header class="header-section">
		<div class="container">

			<a class="site-logo" href="index.html">
				<img src="assets/img/logo.png" alt=""/>
			</a>
			<div class="user-panel">
				<a href="#">Login</a>  /  <a href="#">Register</a>
			</div>

			<div class="nav-switch">
				<i class="fa fa-bars"></i>
			</div>

			<nav class="main-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
					<li><Link to="/review">Review</Link></li>
					<li><Link to="/blog">Blog</Link></li>
					<li><Link to="/forum">Forum</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</nav>
		</div>
	</header>
        </React.Fragment>
    )
}
