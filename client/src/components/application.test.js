import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './application.js'
import Nav from './nav/nav.js';
import Analyzer from './analyzer.js';
import Footer from './footer/footer.js';

Enzyme.configure({adapter: new Adapter() });

describe('Application', () => {
  test('renders', () => {
    const app = shallow(<App />)
    expect(app.contains(
      <div>
        <Nav />
        <Analyzer />
        <Footer />
      </div>
    )).toEqual(true);
  });
});