
import { Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from '@mui/icons-material';


const Wrapper = styled(Box)`
    margin: '0 3% 0 auto',
    display: 'flex',
    & > button, & > p, & > div {
        margin-right: 40px;
        font-size:16px;
        align-items: centre;
    }
`

const Container = styled(Box)`
    display: flex;
`

const LoginButton = styled(Button)`
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
`
const CustonButtons=()=>{
    return(
        <Wrapper>
            <LoginButton variant="contained">Login</LoginButton>

            <Typography style={{ marginTop: 3,  width:135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>

            <Container>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </Container>
        </Wrapper>
    )
}

export default CustonButtons;