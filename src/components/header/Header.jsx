import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";
import CustonButtons from "./CustomButtons";
import Search from "./Search";

const StyledHeader = styled(AppBar)`
    display: flex;
    background: #2874f0;
    height: 55px;
`

const Component = styled(Box)`
    margin-left :12%;
    line-height: 0;
`

const SubHeading =  styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusImage = styled("img")({
    widht:10,
    height:10,
    marginLeft:10
})

const CustomButtonsWrapper = styled(Box)`
    margin: 0 5% 0 auto;
`
const Header =()=>{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return(
        <StyledHeader>
            <Toolbar>
                <Component>
                    <img src={logoURL} alt="logo" style={{ width: 75}} />
                    <Box style={{display: 'flex' }}>
                        <SubHeading>Explorer&nsbp;
                            <Box component="span" style={{color: '#FFE500'}}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="sublogo"/>
                    </Box>
                </Component>
            </Toolbar>
            <Search/>
            <CustomButtonsWrapper>
                <CustonButtons/>
            </CustomButtonsWrapper>
        </StyledHeader>
    )
}

export default Header;