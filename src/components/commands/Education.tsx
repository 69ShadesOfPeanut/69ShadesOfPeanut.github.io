import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "VCE certificate",
    desc: "Completion of units 3-4 studying History: revolutions, Media, English, and IT Software development | 2022",
  },
  {
    title: "Cert 3 in ICT",
    desc: "Certificate 3 in information and communications technology | 2022",
  }
];

export default Education;
