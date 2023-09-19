import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import Launch from '../components/Launch';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe(App, () => {

  // it("Displays Omamori Finder title", () => {
  //   const {getByText} = render(<App />);
  //   const title = getByText("Omamori Finder")
  //   expect(title).toBeInTheDocument();
  // });

  // it("Button event works when clicked", () => {
  //   const {getByRole} = render(<App />)
  //   const findButton = getByRole("button", {name: "Find"})
  //   let testButtonClick = "Not clicked"
  //   if (fireEvent.click(findButton)) testButtonClick = "Button is clicked";
    
  //   expect(testButtonClick).toBe("Button is clicked")
  // });

})