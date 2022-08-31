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
	const [userMessage, setUserMessage] = useState('Player 1, Select your choice')

	const handleClick = (choice: string) =>{
			if (currentPlayer == 'Player 1'){
        setUserMessage('Player 2, Select your choice')
        setPlayerOneChoice(choice)
        setCurrentPlayer('Player 2')
      }
      else if (currentPlayer == 'Player 2'){
        setUserMessage('Player 1, Select your choice')
        setPlayerTwoChoice(choice)
        setCurrentPlayer('Player 1')
		}
  }

	const checkWinner = () =>{
		if (playerOneChoice == playerTwoChoice){
			alert('Tie!')
      return
		}
		else if (playerOneWon(playerOneChoice,playerTwoChoice)){
			alert('Player 1 has won!')
      return
		}
		else{
			alert('Player 2 has won!')
      return
		}
	}

  useEffect(() =>{
    if (playerOneChoice != '' && playerTwoChoice != ''){
      console.log("checando vencedor ")
      checkWinner()
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
