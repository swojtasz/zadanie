import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 100%;
  }
`;

export const Box = styled.div`
  background-color: white;
  padding: 2rem;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
`;

export const MainTitle = styled.h1`
  color: black;
  font-weight: 600;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: -0.15rem;
`;
export const SubTitle = styled.h1`
  color: #009bff;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: -0.05rem;
`;

export const LoremIpsumParagraph = styled.p`
  margin: 2rem 1rem;
  font-size: 0.7rem;
  text-align: center;
`;

export const SeeMoreButton = styled.button`
  padding: 0.25rem 1rem;
  background-color: white;
  color: #009bff;
  border: 1px solid #009bff;
  text-transform: uppercase;
  letter-spacing: -0.05rem;
  font-weight: 600;
`;

interface ImageBoxProps {
  img: any;
  transparent?: boolean;
}

export const ImageBox = styled.div<ImageBoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: ${({ img }) => `url(${img})`};
  background-size: contain;

  ${({ transparent }) =>
    !transparent &&
    `
box-shadow: inset 0 0 0 1000px rgb(0, 155, 255, 0.7);
`}
  text-align: center;
  font-weight: 600;
  font-size: 1.4rem;
`;

export const SecondContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
`;
