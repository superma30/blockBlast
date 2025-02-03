import './App.css';
import settingsIcon from "./media/settings.png"
import bestScoreIcon from "./media/bestScore.png"

export default function App() {
	return (
	<div className="app flexColumnCenter">
		<header className='appHeader'>
			<BestScore score="2000" />
			<CurrentScore score="1000" />
			<Settings />
		</header>
		<div className='gameBoardAndNewPiecesAligner'>
			<GameBoard />
			<div className='newPiecesAligner'>
				<NewPiece />
				<NewPiece />
				<NewPiece />
			</div>
		</div>
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
		<div className='headerAlignBox'>
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
		<div className='headerAlignBox'>
			<img src={settingsIcon} alt='Settings' className='settingsIcon' />
		</div>
		</>
	);
}

function CurrentScore({ score }){
	return(
		<>
		<div className='headerAlignBox'>
			<p className='currentScoreDisplay'>
				{score}
			</p>
		</div>
		</>
	);
}

function NewPiece({ pieceType }){
	return(
		<>
		<div className='newPieceDisplay'>
			<img src={bestScoreIcon} />
		</div>
		</>
	);
}