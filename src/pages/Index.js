import React from 'react';

import HorizontalNav3 from '../components/horizontal-navs/HorizontalNav3';
import StructureDiv from '../components/__structures/StructureDiv';
import HowItWorks3 from '../components/how-it-works/HowItWorks3';
import Footer1 from '../components/footers/Footer1';

export default function Index() {
  return (
    <React.Fragment>
      <HorizontalNav3
        content={{
          brand: {
            text: 'Mobile Programming',
            image: 'nereus-assets/img/nereus-light.png',
            width: '110',
          },
          link1: 'Home',
          link2: 'Product',
          link3: 'Blog',
          link4: 'Vegetable ',
          link5: 'Contact',
          'primary-action': 'Login',
        }}
      />

      <StructureDiv
        bucket1={[
          <HowItWorks3 content={null} />,

          <Footer1
            content={{
              brand: {
                text: 'Mobile Programming',
                image: 'nereus-assets/img/nereus-light.png',
                width: '110',
              },
              link1: 'Home',
              link2: 'Product',
              link3: 'Blog',
              link4: 'Contact',
            }}
          />,
        ]}
      />
    </React.Fragment>
  );
}

