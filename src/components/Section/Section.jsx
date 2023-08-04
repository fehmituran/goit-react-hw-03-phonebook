import React from "react";
import PropTypes from 'prop-types';

import { SectionContainer, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <div>
        <Title>{title}</Title>
        {children}
      </div>
    </SectionContainer>
  );
};

Section.prototype = {
  title: PropTypes.string.isRequired,
};

export default Section;
