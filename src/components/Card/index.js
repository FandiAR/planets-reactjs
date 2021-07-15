import styled from 'styled-components';
import { convertToThousand } from 'utils/common';
import Button from 'components/Button';

const Container = styled.div`
    max-width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 35px;
    margin: 0 auto;
    margin-top: 50px;
    .card {
        position: relative;
        width: 300px;
        height: 400px;
        margin: 0 auto;
        background: #006fff;
        border-radius: 15px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  
        .face {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
  
          &.face1 {
            box-sizing: border-box;
            padding: 20px;
  
            h2 {
              margin: 0;
              padding: 0;
            }
  
            .text {
              background-color: #fffc00;
              -webkit-background-clip: text;
              -webkit-text-fill-color: white;
            }
          }
  
          &.face2 {
            transition: 0.5s;
  
            h2 {
              margin: 0;
              padding: 0;
              font-size: 40px;
              color: #fff;
              transition: 0.5s;
              text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
              z-index: 10;
            }
          }
        }
      }
  
      .card:hover .face.face2 {
        height: 60px;
  
        h2 {
          font-size: 20px;
        }
      }
  
      .card .face.face2 {
        background-image: linear-gradient(
          40deg,
          #fffc00 0%,
          #fc00ff 45%,
          #00fffc 100%
        );
        border-radius: 15px;
      }
`;

const CardComponent = (props) => {
  const { data, addWhislist } = props;
  const path = window.location.pathname;

  const content = data?.map((item, index) => (
    <div key={`${item.name}-${index}`} className="card">
      <div className="face face1">
        <div className="content">
          <h2 className="text">{item.name}</h2>
          <p className="text">
            {`
              ${item.name} have climate(s) ${item.climate}. Have diameter
              ${convertToThousand(item.diameter)} kilometers and gravity ${item.gravity}.
            `}
          </p>
          <p className="text">
            {`
              The orbital period is ${item.orbital_period} and the amount of
              ${item.population !== 'unknown'
                ? `populations are ${convertToThousand(item.population)}.`
                : `popoulation is ${item.population}.`
              }
            `}
          </p>
          {
            path === '/'
              ? (
                <Button
                  text="Add to Whislist"
                  handleClickButton={(e) => addWhislist(e, item.name)}
                />
              ) : null
          }
        </div>
      </div>
      <div className="face face2">
        <h2>{item.name}</h2>
      </div>
    </div>
  ));

  return (
    <Container>
      {content}
    </Container>
  )
};
export default CardComponent;