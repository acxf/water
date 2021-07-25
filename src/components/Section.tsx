import React from 'react';
import Header from './Header';

interface SectionProps {
  title: string;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div>
      <Header title={title} />

      {children}
    </div>
  );
};

export default Section;
