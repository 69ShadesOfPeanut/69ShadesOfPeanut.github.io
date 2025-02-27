import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Peanut</HighlightSpan>!
      </p>
      <p>
        I'm a<HighlightAlt> wannabe game developer</HighlightAlt> based in Victoria,
        Australia.
      </p>
      <p>
        I am passionate about game development and all things privacy.
      </p>
      <p>
        test text pleaseee ignore!!!
      </p>
    </AboutWrapper>
  );
};

export default About;
