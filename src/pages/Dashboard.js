import React from 'react';

import HorizontalNav3 from '../components/horizontal-navs/HorizontalNav3';
import StructureDiv from '../components/__structures/StructureDiv';
import Features1 from '../components/features/Features1';
import Footer1 from '../components/footers/Footer1';

export default function Dashboard() {
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
          <Features1 content={null} />,

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

