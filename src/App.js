import './App.css';
import settingsIcon from "./media/settings.png"
import bestScoreIcon from "./media/bestScore.png"

export default function App() {
	return (
	<div className="app flexColumnCenter">
		<header className='appHeader'>
			<BestScore score="2000" />
			<Settings />
		</header>
		<CurrentScore score="1000" />
		<GameBoard />
	</div>
	);
}

function GameBoard(){
	let table = [[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8],[1,2,3,4,5,6,7,8]];
	
	return(
		<>
		<table className='gameBoard'>
			{
				table.map((list, ridx) => {
					return(<tr data-row={ridx}>
						{list.map((item, cidx) => {
							return(<td data-cell={cidx}>{item}</td>)
						})}
					</tr>)
				})
			}
		</table>
		</>
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

function CurrentScore({ score }){
	return(
		<>
			<p className='currentScoreDisplay'>
				{score}
			</p>
		</>
	);
}