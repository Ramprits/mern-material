import React from 'react';

import HorizontalNav3 from '../components/horizontal-navs/HorizontalNav3';
import StructureDiv from '../components/__structures/StructureDiv';
import Contact1 from '../components/contacts/Contact1';
import Footer1 from '../components/footers/Footer1';

export default function Contact() {
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
          <Contact1
            content={{
              header: 'Happy to help you',
              'contact1-desc1':
                'Charkop Road, RDP Rd Number 8, Kuluwasi CHS, Sector 4 Charkop, Kandivali West, ',
              'contact1-desc2': 'Mumbai, Maharashtra 400067',
              'contact2-desc': 'rampritsahani@gmail.com',
              'contact4-desc': '(986) 740-5720',
            }}
          />,

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

