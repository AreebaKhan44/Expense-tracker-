import {useState} from 'react';

import {Box,Typography,TextField,Button,styled} from '@mui/material'


const Container=styled(Box)`
display:flex;
flex-direction: column;
& > h5,& > div,& >button { 
    margin-top:30px
}
`

const NewTransactions=({setTransactions})=>{
    const [text ,setText ]= useState('');
    const [amount,setAmount]=useState();


    const addTransaction=() => {
        const transaction ={
            id: Math.floor(Math.random()*1000000),
            text: text,
            amount: +amount
            
        }

        setTransactions(prevState =>[transaction,...prevState]);

    }
    return(

        <Container>
        <Typography variant="h5">NewTransaction</Typography> 
        <TextField label="Enter expense"  onChange={(e) => setText(e.target.value)} />
        <TextField label="Enter amount"  onChange={(e) => setAmount(e.target.value)} />
        <Button variant="contained" onClick={() => addTransaction()} >AddTransaction</Button>

        
        </Container>
    )
}
export default NewTransactions;