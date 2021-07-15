import styled from 'styled-components';

const StyledPagination = styled.div`
    display: inline-block;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        border: solid 0.5px grey;
        border-radius: 5px;
        cursor: pointer;
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        &:hover {
            background-image: linear-gradient(
                40deg,
                #fffc00 0%,
                #fc00ff 45%,
                #00fffc 100%
            );
            color: white;
        }
    }
`;
const Pagination = ({ perPage, totalWhislist, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalWhislist / perPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <StyledPagination>
            {
                pageNumbers.map((number, index) => (
                    <p key={number} onClick={() => paginate(number)}>
                        {number}
                    </p>
                ))
            }
        </StyledPagination>
    );
};
export default Pagination;
