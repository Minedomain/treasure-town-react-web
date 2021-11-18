import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <React.Fragment>
                <footer class="footer-section">
		<div class="container">
			<ul class="footer-menu">
                    <li><Link to="/">Home</Link></li>
					<li><Link to="/review">Review</Link></li>
					<li><Link to="/blog">Blog</Link></li>
					<li><Link to="/forum">Forum</Link></li>
					<li><Link to="/contact">Contact</Link></li>
			</ul>
			<p class="copyright">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</p>
		</div>
	</footer>
        </React.Fragment>
    )
}
