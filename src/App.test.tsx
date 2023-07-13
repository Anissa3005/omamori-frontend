import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe(App, () => {

  it("Displays Omamori Finder title", () => {
    const {getByText} = render(<App />);
    const title = getByText("Omamori Finder")
    expect(title).toBeInTheDocument();
  });

})