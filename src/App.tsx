import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import './helpers/playerOneWon'

import {Container,Row,Col} from 'react-bootstrap'

import { useState,useEffect } from 'react'
import { playerOneWon } from './helpers/playerOneWon';

function App() {

	const [currentPlayer,setCurrentPlayer] = useState('Player 1')
	const [playerOneChoice, setPlayerOneChoice] = useState('')
	const [playerTwoChoice, setPlayerTwoChoice] = useState('')
	const [winner,setWinner] = useState('')
	const [gameOver, setGameOver] = useState('false')
	const [userMessage, setUserMessage] = useState('Player 1, Select your choice')

	const handleClick = (choice: string) =>{
			if (currentPlayer == 'Player 1'){
				setPlayerOneChoice(choice)
				setCurrentPlayer('Player 2')
				setUserMessage(`${currentPlayer}, Select your choice`)
			}
			else{
				setCurrentPlayer('Player 1')
				setPlayerTwoChoice(choice)
				checkWinner()
				setUserMessage(`${currentPlayer}, Select your choice`)
			}
			
		}

	const checkWinner = () =>{
		console.log("player one:",playerOneChoice)
		console.log("player two:",playerTwoChoice)
		if (playerOneChoice == playerTwoChoice){
			setWinner('tie')
		}
		else if (playerOneWon(playerOneChoice,playerTwoChoice)){
			setWinner('Player 1')
			setGameOver('true')
		}
		else{
			setWinner('Player 2')
			setGameOver('true')
		}
	}

useEffect(() =>{
	if (gameOver == 'true' && winner != 'tie'){
			alert(`${winner} has won!`)
	}
	else if(gameOver == 'true' && winner == 'tie'){
		alert('Tie!')
	}
},[userMessage])

return (
	<div className="App">
		<Container>
			<Row id='line-1'>
				<h1>{userMessage}</h1>
			</Row>
			<Row id='line-2'>
				<Col onClick={() => handleClick('🖐️')}>
					🖐️
				</Col>
				<Col onClick={() => handleClick('✊')}>
					✊
				</Col>
				<Col onClick={() => handleClick('✌️')}>
					✌️
				</Col>
			</Row>
		</Container>
	</div>
)
}

export default App
