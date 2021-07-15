import Header from 'components/Header';
import styled from 'styled-components';

const LayoutContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
`;
const LayoutContent = styled.div`
    width: 98%;
    height: 90%;
    overflow-y: auto;
    margin: auto;
    font-size: 14px;
    padding-top: 50px;
`;

const Layout = ({ children }) => (
    <LayoutContainer>
        <Header />
        <LayoutContent>
            {children}
        </LayoutContent>
    </LayoutContainer>
);
export default Layout;
