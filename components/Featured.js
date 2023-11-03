import Center from "@/components/Center";
import styled from "styled-components";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import FlyingButton from "@/components/FlyingButton";
import { RevealWrapper } from 'next-reveal'

const Bg = styled.div`
  background-image: url("/images/Featured-bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 475px;
  width: auto;
  background-color: #000;
  color:#fff;
  padding: 50px 0;
  align-items: center;
  align-content: center;
  display: flex;
`;
const Title = styled.h1`
  margin: 0;
  font-weight:normal;
  font-size:1.5rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size:4rem;
    text-align: left;
  }
`;
const Desc = styled.p`
text-align: center;
@media screen and (min-width: 768px) {
  color:#fff;
  font-size:1.2rem;
  text-align: left;
}
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img.main{
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
    box-shadow: 0 0 20px #45E9A0,
               0 0 30px #45E9A0, 
               0 0 40px #45E9A0;
    transition: box-shadow 0.3s ease;
    border-radius: 15px;
    &:hover{
      box-shadow: 0 0 30px #45E9A0, 
               0 0 40px #45E9A0, 
               0 0 50px #45E9A0;
    }
  }
  div:nth-child(1) {
    order: 2;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 768px) {
    gap: 150px;
    grid-template-columns: 1.1fr 0.9fr;
    & > div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
    }
    img.main{
      max-height: 300px;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap:20px;
  margin-top:25px;
`;
const CenterImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ImgColumn = styled(Column)`
  & > div{
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
`;

export default function Featured({ product }) {
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <RevealWrapper origin={'left'} delay={0}>
                <ContentWrapper>
                  <Title>{product.title}</Title>
                  <Desc>{product.description}</Desc>
                  <ButtonsWrapper>
                    <ButtonLink href={'/product/' + product._id} outline={1} white={1}>Read more</ButtonLink>
                    <FlyingButton white={1} _id={product._id} src={product.images?.[0]}>
                      <CartIcon />
                      Add to cart
                    </FlyingButton>
                  </ButtonsWrapper>
                </ContentWrapper>
              </RevealWrapper>
            </div>
          </Column>
          <ImgColumn>
            <RevealWrapper delay={0}>
              <CenterImg>
                <img className={'main'} src={product.images?.[0]} alt="" />
              </CenterImg>
            </RevealWrapper>
          </ImgColumn>
        </ColumnsWrapper>
      </Center>

    </Bg>
  );
}