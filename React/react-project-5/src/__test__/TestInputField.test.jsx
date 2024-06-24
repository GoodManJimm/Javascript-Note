import { expect,it,describe } from "vitest";
import { render,screen } from "@testing-library/react";
import { TestInputField } from "../Component/TestInputField";

it('should find input by placeholder', () => {
    render(<TestInputField />)
    expect(screen.getByPlaceholderText(/enter/)).toBeInTheDocument()
})

it('should find input by placeholder', () => {
    render(<TestInputField />)
    expect(screen.getByDisplayValue("hello")).toBeInTheDocument()
})