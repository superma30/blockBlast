import './App.css';
import settingsIcon from "./media/settings.png"
import bestScoreIcon from "./media/bestScore.png"

export default function App() {
	return (
	<div className="app">
		<header className='appHeader'>
			<BestScore score="2000" />
			<Settings />
		</header>
	</div>
	);
}

function BestScore({ score }){
	return(
		<>
		<div className='bestScoreDisplay'>
			<img src={bestScoreIcon} alt='Best Score' className='bestScoreDisplay' />
			<p className='bestScoreDisplay'>
				{score}
			</p>
		</div>
		</>
	);
}

function Settings(){
	return(
		<>
			<img src={settingsIcon} alt='Settings' className='settingsIcon' />
		</>
	);
}