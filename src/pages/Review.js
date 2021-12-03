import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from './Footer'

export default function Contact() {
    return (
        <React.Fragment>
<Navbar />



	{/* <div class="latest-news-section">
		<div class="ln-title">Latest News</div>
		<div class="news-ticker">
			<div class="news-ticker-contant">
				<div class="nt-item"><span class="new">new</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
				<div class="nt-item"><span class="strategy">strategy</span>Isum dolor sit amet, consectetur adipiscing elit. </div>
				<div class="nt-item"><span class="racing">racing</span>Isum dolor sit amet, consectetur adipiscing elit. </div>
			</div>
		</div>
	</div>
     */}

{/* 
	<section class="page-info-section set-bg" data-setbg="img/page-top-bg/3.jpg">
		<div class="pi-content">
			<div class="container">
				<div class="row">
					<div class="col-xl-5 col-lg-6 text-white">
						<h2>Game reviews</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
     */}



	<section class="page-section review-page spad">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="review-item">
						<div class="review-cover set-bg" src="assets/img/kraken.jpg">
							<img src="assets/img/kraken.jpg"/>
							{/* <div class="score yellow">9.3</div> */}
						</div>
						<div class="review-text">
							<h4>Kraken Slayer</h4>
							<div class="rating">
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star is-fade"></i>
							</div>
							<p>Sample Caption</p>
							<p>All you need to know about the game</p>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="review-item">
						<div class="review-cover set-bg" data-setbg="img/galleon.png">
							<img src="assets/img/galleon racing.jpg"/>
							{/* <div class="score yellow">9.3</div> */}
						</div>
						<div class="review-text">
							<h4>Galleon Race</h4>
							<div class="rating">
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star is-fade"></i>
							</div>
							<p>Sample Caption</p>
							<p>All you need to know about the game</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    


	<section class="review-section review-dark spad set-bg" data-setbg="img/review-bg-2.jpg">
		<div class="container">
			<div class="section-title text-white">
				<div class="cata new">Upcoming Games</div>
				<h2>Recent Reviews</h2>
			</div>
			<div class="row text-white">
				<div class="col-lg-3 col-md-6">
					<div class="review-item">
						<div class="review-cover set-bg" data-setbg="img/review/1.jpg">
							{/* <div class="score yellow">9.3</div> */}
						</div>
						<div class="review-text">
							<h5 style={{color: "#ffb320"}}>PEARL DIVER</h5>
							<p>Sample Caption</p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="review-item">
						<div class="review-cover set-bg" data-setbg="img/review/2.jpg">
							{/* <div class="score purple">9.5</div> */}
						</div>
						<div class="review-text">
							<h5 style={{color: "#ffb320"}}>ULAM FINDER</h5>
							<p>Sample Caption</p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="review-item">
						<div class="review-cover set-bg" data-setbg="img/review/3.jpg">
							{/* <div class="score green">9.1</div> */}
						</div>
						<div class="review-text">
							<h5 style={{color: "#ffb320"}}>GAME 3</h5>
							<p>Sample Caption</p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 col-md-6">
					<div class="review-item">
						<div class="review-cover set-bg" data-setbg="img/review/4.jpg">
							{/* <div class="score pink">9.7</div> */}
						</div>
						<div class="review-text">
							<h5 style={{color: "#ffb320"}}>GAME 4</h5>
							<p>Sample Caption</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    


	<section class="footer-top-section">
		<div class="container">
			<div class="footer-top-bg">
				<img src="assets/img/swords.png" style={{height: "580px"}} alt=""/>
			</div>
			<div class="row">
				<div class="col-lg-4">
					<div class="footer-logo text-white">
						{/* <img src="assets/img/footer-logo.png" alt=""/> */}
						<p></p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="footer-widget mb-5 mb-md-0">
						<h4 class="fw-title" style={{color: "#a5682a"}}>Links</h4>
						<div class="latest-blog" >
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author" style={{color: "white"}}>Home</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author" style={{color: "white"}}>Docs</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author" style={{color: "white"}}>Roadmap</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author" style={{color: "white"}}>Whitepaper</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author" style={{color: "white"}}>Help</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="footer-widget">
						<h4 class="fw-title" style={{color: "#a5682a"}}>Social Links</h4>
						<div class="top-comment">
							<div class="tc-item">
								<a href="#" class="lb-author" style={{color: "white"}}><i class="fa fa-facebook" style={{marginRight: "10px"}}></i>Facebook</a>
							</div>
							<div class="tc-item">
								<a href="#" class="lb-author" style={{color: "white"}}><i class="fa fa-telegram" style={{marginRight: "10px"}}></i>Telegram</a>
							</div>
							<div class="tc-item">
								<a href="#" class="lb-author" style={{color: "white"}}><i class="fa fa-twitter" style={{marginRight: "10px"}}></i>Twitter</a>
							</div>
							
							<div class="tc-item">
								<a href="#" class="lb-author" style={{color: "white"}}><i class="fab" style={{marginRight: "10px"}}></i>Discord</a>
							</div>
							<div class="tc-item">
								<a href="#" class="lb-author" style={{color: "white"}}><i style={{marginRight: "10px"}}></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    


<Footer />
        </React.Fragment>
    )
}
