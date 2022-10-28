import styled from "styled-components";

type Props ={
    mouseIn: boolean
}


export const BurguerMenuStyled = styled.div<Props>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    margin-top: 15px;
    margin-left: 15px;
    padding: 5px;
    height: 60px;
    width: 60px;

    cursor: pointer;

    .line01, .line02, .line03 {
        height: 4px;
        transition: all 0.5s ease-in-out;
        border: 1px solid #ffff;
        border-radius: 5px;
        background-color: ${props => props.mouseIn ? '#001D66' : '#ffff'};
    }
    
    .line01, .line03 {
        width: 40px;
    }

    .line01 {
        margin-top: 10px;
    }

    .line02 {
        width: 60px;
    }

    .line03 {
        margin-bottom: 10px;
    }

    //Animation
    .line01menuOpened, .line03menuOpened {
        width: 40px; 
        margin: 0;
    }

    .line01menuOpened {
        rotate: 45deg;
        transform: translate(25px, 13px);
    }

    .line03menuOpened {
        rotate: -45deg;
        transform: translate(25px, -13px);
    }

    .line02menuOpened {
        translate: -40px;
        opacity: 0;
    }
`