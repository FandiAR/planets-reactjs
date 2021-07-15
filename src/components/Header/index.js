import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PonpesIT from 'assets/images/ponpesit.png';

const FixedHeader = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    box-shadow: 0px 2px 4px -1px #006fff, 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px #006fff;
    z-index: 1;
    background: white;
`;
const NavContainer = styled.div`
    width: 98%;
    margin: auto;
    img {
        height: 50px;
    }
    a {
        text-decoration: none;
        font-size: 18px;
        color: #006fff;
        position: relative;
        bottom: 18px;
    }
    .left {
        padding-left: 20px;
    }
`;

const Header = () => {
    return (
        <FixedHeader>
            <NavContainer>
                <span>
                    <img src={PonpesIT} alt="PonpesIT-Logo" />
                </span>
                <span className="left">
                    <NavLink to="/">
                        List of Planets {' | '}
                    </NavLink>
                </span>
                <span>
                    <NavLink to="/wishlist">
                        List of Whislist
                    </NavLink>
                </span>
            </NavContainer>
        </FixedHeader>
    );
};
export default Header;
