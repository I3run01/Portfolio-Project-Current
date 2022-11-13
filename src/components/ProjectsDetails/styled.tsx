import styled from "styled-components";

type Props = {
    theme: string
}

const titleDarkColor = '#ffff'
const titleLightColor = '#000000'

export const ProjectsDetailsStyles = styled.div<Props>`
    
    h1, h2 {
        font-family: 'Dosis', sans-serif;
        color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
        margin-top: 0;
        padding-top: 100px;
    }

    h1 {
        font-size: 48px;
    }

    #container {
        #topDiv {
            display: flex;

            img {
                width: 70%;
                border: 4px solid ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
                border-radius: 10px;
                //box shadows
                -webkit-box-shadow: 9px 13px 20px -4px rgba(0,0,0,0.54);
                -moz-box-shadow: 9px 13px 20px -4px rgba(0,0,0,0.54);
                box-shadow: 9px 13px 20px -4px rgba(0,0,0,0.54);
            }

            h2 {
                padding-left: 10%;
                font-size: 24px;
                text-align: center;
                filter: drop-shadow(1px 1px 5px #000);
            }
        }

        #bottomDiv {
            display: flex;
            flex-direction: row;

            #leftBottomDiv {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                background-color: blue;

                .Icons {
                    display: flex;
                    justify-content: space-between;
                    margin: 20px;
                    width: 100%;
                    padding: 10px;
                    
                    cursor: pointer;             

                    img {
                        width: 60px;

                    }

                    h3 {
                        font-family: 'Dosis', sans-serif;
                        color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
                        font-size: 16px;
                    }
                    



                }
            }

            #rightBottomDiv {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: red;

                p {
                    margin: 0;
                    line-height: 28px;
                    font-size: 16px;
                    font-family: 'Open Sans', sans-serif;
                    color: ${props => props.theme === 'dark' ? titleDarkColor : titleLightColor};
                    text-align: center;

                    width: 80%;
                }
            }
        }
    }


`