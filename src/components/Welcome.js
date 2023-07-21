import styled from "styled-components"; 
import Imagen from "../img/the-simpson.png"; 
                                            
export default function Welcome(props) {
  const {reqApi} = props;
    return (
        <ContentLogo>
            <WelcomeText>
                Binevenido para ver las frases da click sobre la imagen
            </WelcomeText>
            <Image src={Imagen} alt="LosSimpson" onClick={reqApi}/>
        </ContentLogo>
    );
};

const Image = styled.img`
  width: 450px;
  height: auto;
  &:hover{
    cursor: pointer;
  }
`;

const ContentLogo = styled.div`
  width: 100%;
  text-align:center;
`;

const WelcomeText = styled.p`
  color: #2a9d8f;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 25px;
`;




