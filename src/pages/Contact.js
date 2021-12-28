import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from './Footer'

export default function Contact() {
    return (
        <React.Fragment>
	<Navbar />

	<section class="page-background spad" >
					<div class="container spad" >
						<div class="section-title spad" style={{display: "inline-block", marginTop: "100px"}}>
							<div class="mt-5">
								<div class="cata new mt-5" ></div>
										<h2 style={{fontFamily: "PirateTreasure"}}>Contact Support</h2>
							</div>
							
										<div class="row mt-5">
											<div class="col-md-4">
												<h4 style={{fontFamily: "PirateTreasure", color: "#F43900"}}>Address</h4>
													<p style={{fontFamily: "PirateTreasure"}}>Manila, Philippines</p>
											</div>
											<div class="col-md-4">
												<h4 style={{fontFamily: "PirateTreasure", color: "#F43900"}}>Phone</h4>
													<p style={{fontFamily: "PirateTreasure"}}>+63 9876 543 210</p>
											</div>
											<div class="col-md-4">
												<h4 style={{fontFamily: "PirateTreasure", color: "#F43900"}}>Email</h4>
													<p style={{fontFamily: "PirateTreasure"}}>ttownhelpsupport@gmail.com</p>
											</div>
										</div>

							<div>	
								<div class="col">				
									<div class="contact-form-warp">
										<div class="mt-5 mb-5">
											<h3  style={{fontFamily: "PirateTreasure"}}>Questions or concerns regarding the game? <br/>Leave us a message</h3>
										</div>
										<form class="comment-form">
											<div class="row">
												<div class="col-md-6">
													<input type="text" placeholder="Name" style={{fontFamily: "PirateTreasure"}}></input>
												</div>
												<div class="col-md-6">
													<input type="email" placeholder="Email" style={{fontFamily: "PirateTreasure"}}></input>
												</div>
												<div class="col-lg-12">
													<input type="text" placeholder="Subject" style={{fontFamily: "PirateTreasure"}}></input>
													<textarea placeholder="Message" style={{fontFamily: "PirateTreasure"}}></textarea>
													<button class="site-btn btn-sm " style={{fontFamily: "PirateTreasure"}}>Send</button>
												</div>
												
											</div>
										</form>
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
						<h4 class="fw-title" style={{color: "#a5682a", fontFamily: "PirateTreasure"}}>Links</h4>
						<div class="latest-blog" >
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author" style={{color: "#DDB376" , fontFamily: "PirateTreasure"}}>Home</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author" style={{color: "#DDB376" , fontFamily: "PirateTreasure"}}>Marketplace</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author" style={{color: "#DDB376" , fontFamily: "PirateTreasure"}}>Roadmap</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author" style={{color: "#DDB376" , fontFamily: "PirateTreasure"}}>#DDB376paper</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author" style={{color: "#DDB376" , fontFamily: "PirateTreasure"}}>Help</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="footer-widget">
						<h4 class="fw-title" style={{color: "#a5682a" , fontFamily: "PirateTreasure"}}>Social Links</h4>
						<div class="top-comment">
							<div class="tc-item">
								<a href="#" class="lb-author" style={{color: "#DDB376" , fontFamily: "PirateTreasure"}}><i class="fa fa-facebook" style={{marginRight: "10px"}}></i>Facebook</a>
							</div>
							<div class="tc-item">
								<a href="#" class="lb-author" style={{color: "#DDB376" , fontFamily: "PirateTreasure"}}><i class="fa fa-telegram" style={{marginRight: "10px"}}></i>Telegram</a>
							</div>
							<div class="tc-item">
								<a href="#" class="lb-author" style={{color: "#DDB376" , fontFamily: "PirateTreasure"}}><i class="fa fa-twitter" style={{marginRight: "10px"}}></i>Twitter</a>
							</div>
							
							<div class="tc-item">
								<a href="#" class="lb-author" style={{color: "#DDB376" , fontFamily: "PirateTreasure"}}><i class="fab" style={{marginRight: "10px"}}></i>Discord</a>
							</div>
							<div class="tc-item">
								<a href="#" class="lb-author" style={{color: "#DDB376" , fontFamily: "PirateTreasure"}}><i style={{marginRight: "10px"}}></i></a>
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
