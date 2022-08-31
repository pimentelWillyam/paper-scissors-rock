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
      }
      else if (currentPlayer == 'Player 2'){
        setPlayerTwoChoice(choice)
        setCurrentPlayer('Player 1')
		}
    //setUserMessage(currentPlayer+', Select your choice')
    console.log("player message setted")
  }

	const checkWinner = () =>{
		if (playerOneChoice == playerTwoChoice){
			alert('Tie!')
      return
		}
		else if (playerOneWon(playerOneChoice,playerTwoChoice)){
			alert('Player 1!')
      return
		}
		else{
			alert('Player 2!')
      return
		}
	}

  useEffect(() =>{
    if (playerOneChoice != '' && playerTwoChoice != ''){
      console.log("checando vencedor ")
      checkWinner()
      setWinner('')
      setPlayerOneChoice('')
      setPlayerTwoChoice('')
    }
  },[playerOneChoice,playerTwoChoice])

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
