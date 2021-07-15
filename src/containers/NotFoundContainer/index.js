import styled from 'styled-components';

const StyledNotFound = styled.div`
    height: 50vh;
    width: 100vw;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: black;
    overflow: hidden;
    .error {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
    }
      
    .number {
        font-weight: 900;
        font-size: 15rem;
        line-height: 1;
        color: white;
    }
      
      .illustration {
        position: relative;
        width: 12.2rem;
        margin: 0 2.1rem;
    }
      
      .circle {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 12.2rem;
        height: 11.4rem;
        border-radius: 50%;
        background-image: linear-gradient(
            40deg,
            #fffc00 0%,
            #fc00ff 45%,
            #00fffc 100%
        );
    }
      
    .clip {
        position: absolute;
        bottom: 0.3rem;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
        width: 12.5rem;
        height: 13rem;
        border-radius: 0 0 50% 50%;
    }
      
    .paper {
        position: absolute;
        bottom: -0.3rem;
        left: 50%;
        transform: translateX(-50%);
        width: 9.2rem;
        height: 12.4rem;
        border: 0.3rem solid #006fff;
        background-color: white;
        border-radius: 0.8rem;
        
        &::before {
          content: "";
          position: absolute;
          top: -0.7rem;
          right: -0.7rem;
          width: 1.4rem;
          height: 1rem;
          background-color: white;
          border-bottom: 0.3rem solid #006fff;
          transform: rotate(45deg);
        }
    }
      
    .face {
        position: relative;
        margin-top: 2.3rem;
    }
      
    .eyes {
        position: absolute;
        top: 0;
        left: 2.4rem;
        width: 4.6rem;
        height: 0.8rem;
    }
      
    .eye {
        position: absolute;
        bottom: 0;
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        background-color: #006fff;
        animation-name: eye;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        
        &-left {
          left: 0;
        }
      
        &-right {
          right: 0;
        }
      }
      
      @keyframes eye {
        0% {
          height: 0.8rem;
        }
        50% {
          height: 0.8rem;
        }
        52% {
          height: 0.1rem;
        }
        54% {
          height: 0.8rem;
        }
        100% {
          height: 0.8rem;
        }
    }
      
    .rosyCheeks {
        position: absolute;
        top: 1.6rem;
        width: 1rem;
        height: 0.2rem;
        border-radius: 50%;
        background-color: pink;
        
        &-left {
          left: 1.4rem;
        }
      
        &-right {
          right: 1.4rem;
        }
    }
      
    .mouth {
        position: absolute;
        top: 3.1rem;
        left: 50%;
        width: 1.6rem;
        height: 0.2rem;
        border-radius: 0.1rem;
        transform: translateX(-50%);
        background-color: #006fff;
    }
      
    .text {
        font-size: 20px;
        margin-top: 5rem;
        font-weight: 300;
        color: white;
    }
    button {
        margin-top: 20px;
        cursor: pointer;
        font-size: 20px;
        background-image: linear-gradient(
            40deg,
            #fffc00 0%,
            #fc00ff 45%,
            #00fffc 100%
        );
        color: white;
        border: solid 1px #006fff;
        border-radius: 5px;
        padding: 1.2rem 3rem;
    }
`;

const NotFoundContainer = ({ history }) => (
    <StyledNotFound>
        <div className="error">
            <div className="number">4</div>
            <div className="illustration">
                <div className="circle"></div>
                <div className="clip">
                    <div className="paper">
                        <div className="face">
                            <div className="eyes">
                                <div className="eye eye-left"></div>
                                <div className="eye eye-right"></div>
                            </div>
                            <div className="rosyCheeks rosyCheeks-left"></div>
                            <div className="rosyCheeks rosyCheeks-right"></div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="number">4</div>
        </div>

        <div className="text">Oops. You are lost. Back to home if you dare.</div>
        <button type="button" className="button" onClick={() => history.push('/')}>I am dare :-(</button>
    </StyledNotFound>
);
export default NotFoundContainer;
