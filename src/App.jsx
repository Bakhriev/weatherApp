import "./scss/main.scss"

function App() {
	return (
		<div className="wrapper">
			<div className="header">
				<div className="header__item">
					<div className="header__logo">
						<img src="wind.svg" alt="logo" />
					</div>
					<div className="country">
						<div className="country__state">Sunny</div>
						<div className="country__name">Bukhara Sity</div>
					</div>
					<div className="current-degree">
						<span>28</span>
						<span>°C</span>
					</div>
				</div>
				<form className="header__form">
					<input className="search-input" type="text" placeholder="Search..." />
					<button className="form-btn" type="submit"></button>
				</form>
				<div className="header__item">
					<ul className="weather-info">
						<li className="weather-info__item">
							<img src="rain.svg" aria-hidden="true" />
							<div className="weather-info__text">
								<div>Chance of Rain</div>
								<div>
									<span>50</span>
									<span>%</span>
								</div>
							</div>
						</li>
						<li className="weather-info__item">
							<img src="rain.svg" aria-hidden="true" />
							<div className="weather-info__text">
								<div>Wind Speed</div>
								<div>
									<span>1.4</span>
									<span>km/h</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<main className="main ">
				<div className="container">
					<div className="cards">
						<div className="card active">
							<div className="card__top">
								<div className="card__pm">
									<span>3</span>
									<span>AM</span>
								</div>
							</div>
							<div className="card__bot">
								<div className="card__degree">
									<span>28</span>
									<span>°C</span>
								</div>
								<div className="card__feel">
									<span>Feels like</span>
									<span>28</span>
									<span>°C</span>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card__top">
								<div className="card__pm">
									<span>4</span>
									<span>AM</span>
								</div>
							</div>
							<div className="card__bot">
								<div className="card__degree">
									<span>24</span>
									<span>°C</span>
								</div>
								<div className="card__feel">
									<span>Feels like</span>
									<span>22</span>
									<span>°C</span>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card__top">
								<div className="card__pm">
									<span>5</span>
									<span>AM</span>
								</div>
							</div>
							<div className="card__bot">
								<div className="card__degree">
									<span>21</span>
									<span>°C</span>
								</div>
								<div className="card__feel">
									<span>Feels like</span>
									<span>18</span>
									<span>°C</span>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card__top">
								<div className="card__pm">
									<span>6</span>
									<span>AM</span>
								</div>
							</div>
							<div className="card__bot">
								<div className="card__degree">
									<span>16</span>
									<span>°C</span>
								</div>
								<div className="card__feel">
									<span>Feels like</span>
									<span>22</span>
									<span>°C</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<div className="footer "></div>
		</div>
	)
}

export default App
