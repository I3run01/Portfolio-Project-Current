import styled from "styled-components";

export const CoverStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    margin-left: 15px;
    margin-right: 15px;

    #screen {
        z-index: 1;
        width: 100%;
    }

    #bkmain {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        top: 0;

        height: 100vh;
        width: 100%;
        overflow-x: hidden;

        #bk01 {
            height: 50vh;
            width: 100%;
            background: rgb(0,255,139);
            background: radial-gradient(circle, rgba(0,255,139,0.4) 10%, rgba(145,8,178,0.6) 30%, rgba(0,57,204,0) 60%);
        }

        #bk02 {
            height: 50vh;
            width: 100%;
            background: rgb(0,57,204);
            background: radial-gradient(circle, rgba(0,57,204,0.4) 10%, rgba(255,165,23,0.6) 30%, rgba(0,57,204,0) 60%);
        }
    }

    @media screen and (min-width: 800px) {
        #bkmain {
            flex-direction: row;

            #bk01 {
                height: 100vh;
                width: 50%;
            }

            #bk02 {
                height: 100vh;
                width: 50%;
            }
        }
    }

    @media screen and (min-width: 1000px) {
        #screen {
            max-width: 800px;
        }
    }

    @media screen and (min-width: 1300px) {
        #screen {
            width: 1100px;
        }
    }

`