import { fireEvent, getByText, render } from "@testing-library/react"
import Launch from "./Launch"
import { act } from "react-dom/test-utils";
import userEvent from '@testing-library/user-event';

describe(Launch, () => {

    it("Displays title Omamori finder", () => {
        const {getByText} = render(<Launch />)
        const title = getByText("Omamori Finder")
        expect(title).toBeInTheDocument()
    });

    it("Displays description of the app", () => {
        const {getByText} = render(<Launch />)
        const paragraph = getByText("Text here")
        expect(paragraph).toBeInTheDocument()
    });

    it("Have a button on the page", () => {
        const {getByRole} = render(<Launch />)
        const findButton = getByRole("button", {name: "Find"})
        expect(findButton).toBeInTheDocument()
    });
})