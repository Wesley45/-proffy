import React from 'react';
import { Link } from "react-router-dom";
import { Container, ConcludedContainer, IconSuccess } from './styles';

interface ConcludedProps {
  title: string;
  description: string;
  titleButton: string;
  link: string;
}

const Concluded: React.FC<ConcludedProps> = ({
  title,
  description,
  titleButton,
  link
}) => {
  return (
    <Container>
      <ConcludedContainer>
        <IconSuccess>
          <i className="fas fa-check" />
        </IconSuccess>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <Link to={link}>{titleButton}</Link>
        </div>
      </ConcludedContainer>
    </Container>
  );
};

export default Concluded;
