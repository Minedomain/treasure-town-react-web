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

{/* 

	<section class="page-section review-page spad">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="review-item">
						<div class="review-cover set-bg" src="assets/img/kraken.jpg">
							<img src="assets/img/kraken.jpg"/>
							{/* <div class="score yellow">9.3</div> */}
						{/* </div>
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
						{/* </div>
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
		</div> */}
	{/* </section> */} 
    


	<section class="review-section spad set-bg" data-setbg="img/review-bg-2.jpg" >
		<div class="container">
			<div class="section-title">
				<div class="cata new"></div>
				<h2 style={{marginBottom: "110px", fontFamily: "PirateTreasure"}}>MARKETPLACE</h2>
				<div class="row rap" >
					<div class="col-sm-4">
						<div class="card" style={{backgroundColor: "transparent", border: "none", borderLeft: "3px solid #F43900", borderRight: "3px solid #F43900"}}>
							<div class="card-body" style={{fontFamily: "PirateTreasure"}}>
								Total Pirates
							</div>
						</div>
					</div>
					<div  class="col-sm-4">
						<div class="card" style={{backgroundColor: "transparent", border: "none", borderLeft: "3px solid #F43900" , borderRight: "3px solid #F43900"}}>
							<div class="card-body" style={{fontFamily: "PirateTreasure"}}>
								Total Sale
							</div>
						</div>
					</div>
					<div  class="col-sm-4">
						<div class="card" style={{backgroundColor: "transparent", border: "none", borderLeft: "3px solid #F43900" , borderRight: "3px solid #F43900"}}>
							<div class="card-body" style={{fontFamily: "PirateTreasure"}}>
								Total Transactions
							</div>
						</div>
					</div>
				</div>		
			</div>
			<br/>
			<br/>
			<br/>
			<br/>
			<div class="wrap">
				<div class="search">
					<input type="text" class="searchTerm" style={{fontFamily: "PirateTreasure"}} placeholder="Search your pirate"/>
					<button type="submit" class="searchButton">
						<i class="fa fa-search"></i>
					</button><br/>
					<br/>
					<br/>
				</div>
					<div>
						<button type="button" class="btn" style={{marginRight: "5px", marginBottom: "10px", backgroundColor: "#5F534B", color: "white", fontFamily: "PirateTreasure"}}>All</button>
						<button type="button" class="btn" style={{marginRight: "5px", marginBottom: "10px", backgroundColor: "#5F534B", color: "white", fontFamily: "PirateTreasure"}}>Swordsman</button>
						<button type="button" class="btn" style={{marginRight: "5px", marginBottom: "10px", backgroundColor: "#5F534B", color: "white", fontFamily: "PirateTreasure" }}>Viking</button>
						<button type="button" class="btn" style={{marginRight: "5px", marginBottom: "10px", backgroundColor: "#5F534B", color: "white", fontFamily: "PirateTreasure"}}>Doctor</button>
						<button type="button" class="btn" style={{marginRight: "5px", marginBottom: "10px", backgroundColor: "#5F534B", color: "white", fontFamily: "PirateTreasure"}}>Witch</button>
						<button type="button" class="btn" style={{marginRight: "5px", marginBottom: "10px", backgroundColor: "#5F534B", color: "white", fontFamily: "PirateTreasure"}}>Gunman</button>
					</div>
					<br/>
					<br/>
				<div class="row nowrap" style={{display: "flex"}}>
					<div class="col-sm-4">
						<label for="customRange3" class="form-label" style={{fontFamily: "PirateTreasure"}}>Health</label><br/>
						<input type="range" class="form-range" min="0" max="100" step="0.5" id="customRange3"/><br/>
						<label for="customRange3" class="form-label" style={{fontFamily: "PirateTreasure"}}>1-100</label>
					</div>
					<div class="col-sm-4">
						<label for="customRange3" class="form-label" style={{fontFamily: "PirateTreasure"}}>Strength</label><br/>
						<input type="range" class="form-range" min="0" max="100" step="0.5" id="customRange3"/><br/>
						<label for="customRange3" class="form-label" style={{fontFamily: "PirateTreasure"}}>1-100</label>
					</div>
					<div class="col-sm-4">
						<label for="customRange3" class="form-label" style={{fontFamily: "PirateTreasure"}}>Intelligence</label><br/>
						<input type="range" class="form-range" min="0" max="100" step="0.5" id="customRange3"/><br/>
						<label for="customRange3" class="form-label" style={{fontFamily: "PirateTreasure"}}>1-100</label>
					</div>
				</div>
			</div>
			<br/>

		</div>
	</section>

	
	
	

     
	<section class="review-section spad set-bg" data-setbg="img/review-bg-2.jpg" style={{marginTop: "-300px"}}>
		<div class="container-xl" style={{marginLeft: "100px", marginRight: "100px"}}>
				<div class="row row-cols-1 row-cols-sm-3 mb-5">
			<div class="col-sm-3">
				<div class="card" style={{borderRadius: "20px", backgroundColor: "#272119", marginBottom: "15px"}}>
				<img src="assets/img/Vikings.png" class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title" style={{color: "white", fontFamily: "PirateTreasure"}}>Viking</h5>
					<p class="card-text" style={{color: "white", fontFamily: "PirateTreasure"}}>High Health, Mid Strength, Low Intelligence</p>
				</div>
				</div>
			</div>
			<div class="col-sm-3">
				<div class="card" style={{borderRadius: "20px", backgroundColor: "#272119" , marginBottom: "15px"}}>
				<img src="assets/img/swords.png" class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title" style={{color: "white", fontFamily: "PirateTreasure"}}>Swordsman</h5>
					<p class="card-text" style={{color: "white", fontFamily: "PirateTreasure"}}>Low Health, High Strength, Mid Intelligence</p>
				</div>
				</div>
			</div>
			<div class="col-sm-3">
				<div class="card" style={{borderRadius: "20px", backgroundColor: "#272119" , marginBottom: "15px"}}>
				<img src="assets/img/Gunman.png" class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title" style={{color: "white", fontFamily: "PirateTreasure"}}>Gunman</h5>
					<p class="card-text" style={{color: "white", fontFamily: "PirateTreasure"}}>Mid Health, High Strength, Low Intelligence</p>
				</div>
				</div>
			</div>
			<div class="col-sm-3">
				<div class="card" style={{borderRadius: "20px", backgroundColor: "#272119" , marginBottom: "15px"}}>
				<img src="assets/img/Doctor.png" class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title" style={{color: "white", fontFamily: "PirateTreasure"}}>Doctor</h5>
					<p class="card-text" style={{color: "white", fontFamily: "PirateTreasure"}}>High Health, Low Strength, Mid Intelligence</p>
				</div>
				</div>
			</div>
			<div class="col-sm-3" >
				<div class="card" style={{borderRadius: "20px", backgroundColor: "#272119", marginBottom: "15px"}}>
				<img src="assets/img/Witch.png" class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title" style={{color: "white", fontFamily: "PirateTreasure"}}>Witch</h5>
					<p class="card-text" style={{color: "white", fontFamily: "PirateTreasure"}}>Low Health, Mid Strength, High Intelligence</p>
				</div>
				</div>
			</div>
			<div class="col-sm-3">
				<div class="card" style={{borderRadius: "20px", backgroundColor: "#272119" , marginBottom: "15px"}}>
				<img src="assets/img/Doctor.png" class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title" style={{color: "white", fontFamily: "PirateTreasure"}}>Doctor</h5>
					<p class="card-text" style={{color: "white", fontFamily: "PirateTreasure"}}>High Health, Low Strength, Mid Intelligence</p>
				</div>
				</div>
			</div>
			<div class="col-sm-3">
				<div class="card" style={{borderRadius: "20px", backgroundColor: "#272119" , marginBottom: "15px"}}>
				<img src="assets/img/Vikings.png" class="card-img-top" alt="..."/>
				<div class="card-body">
					<h5 class="card-title" style={{color: "white", fontFamily: "PirateTreasure"}}>Viking</h5>
					<p class="card-text" style={{color: "white", fontFamily: "PirateTreasure"}}>High Health, Mid Strength, Low Intelligence</p>
				</div>
				</div>
			</div>
			<div class="col-sm-3">
				<div class="card" style={{borderRadius: "20px", backgroundColor: "#272119" , marginBottom: "15px"}}>
				<img src="assets/img/Gunman.png" class="card-img-top" alt="..."/>
				<div class="card-body" >
					<h5 class="card-title" style={{color: "white", fontFamily: "PirateTreasure"}}>Gunman</h5>
					<p class="card-text" style={{color: "white", fontFamily: "PirateTreasure"}}>Mid Health, High Strength, Low Intelligence</p>
				</div>
				</div>
			</div>
			</div>
			</div>
			
	</section>
	
	<section class="review-section spad" data-setbg="img/review-bg-2.jpg" >
		<nav aria-label="Page navigation example" >
			<ul class="pagination justify-content-center mb-0">
				<li class="page-item" >
				<a class="page-link" href="#" aria-label="Previous" style={{backgroundColor: "#272119", color: "white"}}>
					<span aria-hidden="true">&laquo;</span>
				</a>
				</li>
				<li class="page-item" style={{fontFamily: "PirateTreasure"}}><a class="page-link" href="#" style={{backgroundColor: "#272119", color: "white"}}>1</a></li>
				<li class="page-item" style={{fontFamily: "PirateTreasure"}}><a class="page-link" href="#" style={{backgroundColor: "#272119", color: "white"}}>2</a></li>
				<li class="page-item" style={{fontFamily: "PirateTreasure"}}><a class="page-link" href="#" style={{backgroundColor: "#272119", color: "white"}}>3</a></li>
				<li class="page-item">
				<a class="page-link" href="#" aria-label="Next" style={{backgroundColor: "#272119", color: "white"}}>
					<span aria-hidden="true">&raquo;</span>
				</a>
				</li>
			</ul>
		</nav>
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
									<a href="#" class="lb-author"style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Home</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author"style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Marketplace</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author"style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Roadmap</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author"style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Whitepaper</a>
								</div>
							</div>
							<div class="lb-item">
								<div ></div>
								<div>					
									<a href="#" class="lb-author"style={{color: "#DDB376", fontFamily: "PirateTreasure"}}>Help</a>
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
								<a href="#" class="lb-author"style={{color: "#DDB376", fontFamily: "PirateTreasure"}}><i class="fa fa-facebook" style={{marginRight: "10px"}}></i>Facebook</a>
							</div>
							<div class="tc-item">
								<a href="#" class="lb-author"style={{color: "#DDB376", fontFamily: "PirateTreasure"}}><i class="fa fa-telegram" style={{marginRight: "10px"}}></i>Telegram</a>
							</div>
							<div class="tc-item">
								<a href="#" class="lb-author"style={{color: "#DDB376", fontFamily: "PirateTreasure"}}><i class="fa fa-twitter" style={{marginRight: "10px"}}></i>Twitter</a>
							</div>
							
							<div class="tc-item">
								<a href="#" class="lb-author"style={{color: "#DDB376", fontFamily: "PirateTreasure"}}><i class="fab" style={{marginRight: "10px"}}></i>Discord</a>
							</div>
							<div class="tc-item">
								<a href="#" class="lb-author"style={{color: "#DDB376", fontFamily: "PirateTreasure"}}><i style={{marginRight: "10px"}}></i></a>
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
