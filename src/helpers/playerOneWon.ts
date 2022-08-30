export const playerOneWon = (playerOneChoice: string,playerTwoChoice: string) =>{
    if ((playerOneChoice == '🖐️' && playerTwoChoice == '✊') || (playerOneChoice == '✊' && playerTwoChoice == '✌️') || (playerOneChoice == '✌️' && playerTwoChoice == '🖐️')){
        return true
    }
    else{
        return false
    }
}