import { Paper, Grid } from "@mui/material";
import Loader from "../Loader";
import { styled } from '@mui/material/styles';

const CardGrid = styled(Grid)(() => ({
    width: "100%"
}))

const CardPaper = styled(Paper)(({color}) => ({
        padding: 10,
        margin: 10,
        textAlign: "center",
        color: 'white !important',
        backgroundColor: color
}))

const Card = ({cardNumberClass, cardText, cardValue, isLoading, color}) => {

    return <CardGrid item md={3} >
        <CardPaper className={cardNumberClass} color={color}>
            <p>{cardText}</p> 
            {isLoading ? <Loader /> : <h3>{cardValue}</h3>}
        </CardPaper>
    </CardGrid>
}
export default Card;
