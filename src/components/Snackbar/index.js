import styled from 'styled-components'

const StyledSnackbar = styled.div`
    position: fixed;
    top: 8%;
    left: 50%;
    z-index: 1;
    background: transparent;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 60px;
    .symbol {
        h1 {
            font-size: 14px;
        }
    }
    .error {
        border-radius: 8px;
        background-color: #c81f70;
        background-image: linear-gradient(315deg, #c81f70 0%, #d19592 74%);
        color: white;
        display: flex;
        align-items: center;
        text-align: center;
        padding-left: 10px;
    }
    .success {
        border-radius: 8px;
        background-color #7cffcb;
        background-image linear-gradient(315deg, #7cffcb 0%, #74f2ce 74%);
        color: black;
        display: flex;
        align-items: center;
        text-align: center;
        padding-left: 10px;
    }
    .message {
        padding-left: 10px;
        font-weight: bold;
    }
    #show {
        visibility: visible;
    }
    #hide {
        visibility: hidden;
    }
`;
const Snackbar = ({ message, severity, showSnackbar }) => (
    <StyledSnackbar>
        <div className={severity === 'error' ? 'error' : 'success'} id={showSnackbar ? 'show' : 'hide'}>
            <span className="symbol">
                {severity === 'success' ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
            </span>
            <span className="message">{message}</span>
        </div>
    </StyledSnackbar>
);

export default Snackbar;
