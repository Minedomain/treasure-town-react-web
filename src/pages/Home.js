import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from './Footer'
import Slider from 'react-slick'

export default class Home extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: true,
			speed: 3000,
			autoplaySpeed: 3000,
		  };
    return (
        <React.Fragment>
<Navbar />

		<section class="hero-section">
			<div class="hero-slider owl-carousel">
				<div class="hs-item set-bg" data-setbg="assets/img/slider-1.jpg">
					<div class="hs-text">
						<div class="container">
							<h2>The Best <span>Games</span> Out There</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
							<a href="#" class="site-btn">Read More</a>
						</div>
					</div>
				</div>
				<div class="hs-item set-bg" data-setbg="assets/img/slider-2.jpg">
					<div class="hs-text">
						<div class="container">
							<h2>The Best <span>Games</span> Out There</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<a href="#" class="site-btn">Read More</a>
						</div>
					</div>
				</div>
			</div>
		</section>

	{/* <div class="latest-news-section">
		<div class="ln-title">Latest News</div>
		<div class="news-ticker">
			<div class="news-ticker-contant">
				<div class="nt-item"><span class="new">new</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
				<div class="nt-item"><span class="strategy">strategy</span>Isum dolor sit amet, consectetur adipiscing elit. </div>
				<div class="nt-item"><span class="racing">racing</span>Isum dolor sit amet, consectetur adipiscing elit. </div>
			</div>
		</div>
	</div> */}


{/* 
	<section class="feature-section spad">
		<div class="container">
			<div class="row" >
				<div class="col-lg-4 col-md-6 p-2">
					<div class="feature-item">
						<img src="assets/img/kraken.jpg"/>
						<span class="cata new">Kraken Slayer</span>
						
					</div>
				</div>
				<div class="col-lg-4 col-md-6 p-2">
					<div class="feature-item set-bg" data-setbg="assets/img/features/2.jpg">
						<img src="assets/img/galleon.png"/>
						<span class="cata strategy">Galleon Race</span>
					
					</div>
				</div>
				<div class="col-lg-4 col-md-6 p-2">
					<div class="feature-item set-bg" data-setbg="assets/img/features/2.jpg">
						<span class="cata strategy"></span>
					
					</div>
				</div>
			</div>
		</div>
	</section> */}



	{/* <section class="recent-game-section spad set-bg" data-setbg="assets/img/recent-game-bg.png">
		<div class="container">
			<div class="section-title">
				<div class="cata new"></div>
				<h2>ROADMAP</h2>
			</div>
			<div class="row">
				<div class="col-lg-4 col-md-8">
					<div class="recent-game-item">
						<div class="rgi-thumb set-bg" data-setbg="assets/img/recent-game/1.jpg">
						
						</div>
					
					</div>	
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="recent-game-item">
						<div class="rgi-thumb set-bg" data-setbg="assets/img/recent-game/2.jpg">
							
						</div>
						
					</div>	
				</div>
			</div>
		</div> */}
	{/* </section> */}

	<section class="review-section spad">
	<div class="container-xl" style={{marginLeft: "150px", marginRight: "150px"}}>
		<div class="section-title">
				<div class="cata new"></div>
				<h2 style={{fontFamily: "PirateTreasure"}}>TREASURE TOWN GAMES</h2>
			</div>
        <Slider {...settings} style={{marginTop: "-100px"}}>
          <div class="col">
            <img src="assets/img/galleon racing.jpg" alt=""/>
          </div>
          <div class="col">
		  	<img src="assets/img/kraken.jpg" alt=""/>
          </div>
          <div class="col">
		  <img src="assets/img/galleon racing.jpg" alt=""/>
          </div>
          <div class="col">
		  <img src="assets/img/kraken.jpg" alt=""/>
          </div>
          <div class="col">
		  <img src="assets/img/galleon racing.jpg" alt=""/>
          </div>
          <div class="col">
		  <img src="assets/img/kraken.jpg" alt=""/>
          </div>
        </Slider>
		</div>
	</section>

	<section class="tournaments-section">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="tournament-item">
						
						<div class="ti-content">
							<div class="ti-thumb set-bg" data-setbg="assets/img/tournament/1.jpg"></div>
							<div class="ti-text" style={{justifyContent: "left", textAlign: "left"}}> 
							<div class="ti-notic" style={{fontFamily: "PirateTreasure"}} >TOKENOMICS</div>
								<h4 style={{fontFamily: "PirateTreasure"}}>$SQUAWK</h4>
								<ul style={{fontFamily: "PirateTreasure"}}>
									<li><span>Name:</span> Treasure Town</li>
									<li><span>Max. Supply:</span> 1,xxx,xxx,xxx $SQUAWK</li>
									<li><span>Network:</span> </li>
									<li><span>Contract:</span></li>
									<li><span>Swap:</span></li>
								</ul>
								{/* <p><span>Updated Value:</span></p> */}
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div style={{marginTop: "-50px"}}>
						<img src="assets/img/toucan w stroke.png" style={{padding: "100px"}} alt="Avatar" class="image"/>
					</div>
				</div>
			</div>
		</div>
	</section>




	<section class="review-section" data-setbg="assets/img/review-bg.png">
		<div class="container-xl" style={{marginLeft: "100px", marginRight: "100px", paddingBottom: "100px"}}>
			<div class="section-title">
				<div class="cata new"></div>
				<h2 style={{fontFamily: "PirateTreasure"}}>OUR TEAM</h2>
			</div>
			<div class="row" style={{marginTop: "-100px"}}>
				<div class="col-md-3">
					<div class="container2">
						<img src="assets/img/img_avatar.png" alt="Avatar" class="image"/>
						<div class="overlay2">
							<div class="text2">
								<h3 style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Imran Kyle Balunan</h3>
								<p style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Software Developer</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="container3">
						<img src="assets/img/img_avatar.png" alt="Avatar" class="image"/>
						<div class="overlay3">
								<div class="text2">
									<h3 style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Dave Yatco</h3>
									<p style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Software Developer</p>
								</div>
							</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="container4">
						<img src="assets/img/img_avatar.png" alt="Avatar" class="image"/>
						<div class="overlay4">
							<div class="text2">
								<h3 style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Carlo Cobarrubias</h3>
								<p style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Software Developer</p>
							</div>	
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="container5">
						<img src="assets/img/img_avatar.png" alt="Avatar" class="image"/>
						<div class="overlay5">
							<div class="text2">
								<h3 style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Arvin Jay Iballa</h3>
								<p style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Software Developer</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div class="row">
				<div class="col-md-3">
					<div class="container2">
						<img src="assets/img/img_avatar.png" alt="Avatar" class="image"/>
						<div class="overlay2">
							<div class="text2">TRY</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="container3">
						<img src="assets/img/img_avatar.png" alt="Avatar" class="image"/>
						<div class="overlay3">
							<div class="text3">TRY</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="container4">
						<img src="assets/img/img_avatar.png" alt="Avatar" class="image"/>
						<div class="overlay4">
							<div class="text4">TRY</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="container5">
						<img src="assets/img/img_avatar.png" alt="Avatar" class="image"/>
						<div class="overlay5">
							<div class="text5">TRY</div>
						</div>
					</div>
				</div>
			</div> */}
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
						<h4 class="fw-title" style={{color: "#a5682a", fontFamily: "PirateTreasure"}}>Links</h4>
						<div class="latest-blog" >
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author" style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Home</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author" style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Marketplace</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author" style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Roadmap</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author" style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Whitepaper</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author" style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Help</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="footer-widget">
						<h4 class="fw-title" style={{color: "#a5682a", fontFamily: "PirateTreasure"}}>Social Links</h4>
						<div class="top-comment">
							<div class="tc-item">
								<a href="#" class="lb-author" style={{color: "#DDB376", fontFamily: "PirateTreasure"}}><i class="fa fa-facebook" style={{marginRight: "10px"}}></i>Facebook</a>
							</div>
							<div class="tc-item">
								<a href="#" class="lb-author" style={{color: "#DDB376", fontFamily: "PirateTreasure"}}><i class="fa fa-telegram" style={{marginRight: "10px"}}></i>Telegram</a>
							</div>
							<div class="tc-item">
								<a href="#" class="lb-author" style={{color: "#DDB376", fontFamily: "PirateTreasure"}}><i class="fa fa-twitter" style={{marginRight: "10px"}}></i>Twitter</a>
							</div>
							
							<div class="tc-item">
								<a href="#" class="lb-author" style={{color: "#DDB376", fontFamily: "PirateTreasure"}}><i class="fab" style={{marginRight: "10px"}}></i>Discord</a>
							</div>
							<div class="tc-item">
								<a href="#" class="lb-author" style={{color: "#DDB376", fontFamily: "PirateTreasure"}}><i style={{marginRight: "10px"}}></i></a>
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
}