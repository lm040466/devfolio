import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>{about.split("\n").map((line) => {
          return (
            <span>
              {line}
              <br/>
            </span>
            );
        })}</p>
      </div>
    </Section>
  );
};

export default SectionAbout;
