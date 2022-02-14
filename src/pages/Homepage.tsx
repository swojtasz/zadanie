import { useNavigate } from 'react-router';

import Image_1 from '../images/1.jpg';
import Image_2 from '../images/2.jpg';
import Image_3 from '../images/3.jpg';
import Image_4 from '../images/4.jpg';
import BigImage from '../images/5.jpg';

import { Container, Box, MainTitle, SubTitle, LoremIpsumParagraph, SeeMoreButton, SecondContainer, ImageBox } from '../styles/Homepage';

const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, tellus vehicula consectetur varius, justo arcu
pellentesque nunc, vel faucibus turpis velit mattis nibh. Praesent posuere facilisis tristique. Maecenas egestas iaculis nisi,
suscipit tempor lorem. Curabitur condimentum quam justo, volutpat finibus diam malesuada vehicula. Maecenas a eros ante. Aenean
ullamcorper finibus dolor in pellentesque. Ut sodales ut velit non faucibus. Etiam ac bibendum neque. Vestibulum volutpat enim
velit, ut hendrerit magna faucibus non. Maecenas odio dui, maximus in diam et, sagittis ultricies dui. Vivamus rutrum tellus
nisi, eget pretium quam aliquet non. Proin fringilla, felis dapibus facilisis maximus, dui dolor commodo mi, id aliquam metus
neque sit amet lectus. Integer et ipsum lorem. Aenean suscipit scelerisque mauris, id tempor ante molestie eget. Sed arcu leo,
commodo non sodales viverra, vulputate pellentesque velit. Donec hendrerit urna at massa dictum ultricies. Integer viverra velit
at volutpat laoreet.`;

const bigImageText = [
  'Budowa domów z drewna',
  'Budowa bram wjazdowych',
  'Wykończenie wnętrz',
  'Altany ogrodowe',
  'Kamienne elementy architektury',
  'Remonty',
];

export const Homepage = () => {
  const navigate = useNavigate();

  const NavigateToHouses = () => {
    navigate('/houses');
  };

  return (
    <>
      <Container>
        <Box>
          <MainTitle>Kilka słów o nas</MainTitle>
          <SubTitle>Czyli kim jesteśmy i dokąd zmierzamy</SubTitle>
          <LoremIpsumParagraph>{loremIpsumText}</LoremIpsumParagraph>
          <SeeMoreButton onClick={NavigateToHouses}>Zobacz więcej</SeeMoreButton>
        </Box>

        <SecondContainer>
          <ImageBox img={Image_1} />
          <ImageBox img={Image_2} transparent />
          <ImageBox img={Image_3} transparent />
          <ImageBox img={Image_4}>
            <p className='px-7  text-center text-sm font-normal'>... Gdy stawałem się dorosłym człowiekiem</p>
          </ImageBox>
        </SecondContainer>

        <ImageBox img={BigImage}>
          {bigImageText.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </ImageBox>

        <Box>
          <MainTitle>Nasza oferta</MainTitle>
          <SubTitle>Dowiedz się co możemy tobie zaoferować</SubTitle>
          <LoremIpsumParagraph>{loremIpsumText}</LoremIpsumParagraph>
          <SeeMoreButton onClick={NavigateToHouses}>Zobacz więcej</SeeMoreButton>
        </Box>
      </Container>
    </>
  );
};
