import styled from 'styled-components';

const StyledLoader = styled.div`
    margin: auto;
    margin-top: 15%;
    border-radius: 10px;
    width: 120px;
    height: 120px;
    background-image: linear-gradient(
        40deg,
        #fffc00 0%,
        #fc00ff 45%,
        #00fffc 100%
    );

    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
    animation: sk-rotateplane 1.2s infinite ease-in-out;

    @-webkit-keyframes sk-rotateplane {
        0% { -webkit-transform: perspective(120px) }
        50% { -webkit-transform: perspective(120px) rotateY(180deg) }
        100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
    }

    @keyframes sk-rotateplane {
        0% { 
            transform: perspective(120px) rotateX(0deg) rotateY(0deg);
            -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
        }
        50% { 
            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
            -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
        }
        100% { 
            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
            -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        }
    }
`;

const Loader = () => <StyledLoader />;

export default Loader;
