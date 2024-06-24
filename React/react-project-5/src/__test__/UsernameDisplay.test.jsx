import { describe,it,test, expect } from "vitest";
import { render , screen} from "@testing-library/react";
import { UsernameDisplay } from "../Component/UsernameDisplay";
import { element } from "prop-types";

describe('UsernameDisplay', () => {
    it('should render username', async () => {
        const result = render(<UsernameDisplay username="ha"/>)
        // expect(result.container).toMatchSnapshot()
        // expect(screen.getByText(/h/)).toBeInTheDocument()
        // const elements = screen.getAllByText(/h/)
        // elements.map((element) => expect(element).toBeInTheDocument)
        // expect(screen.queryByText("ha")).toBeDefined()

        expect(await screen.findByText(/h/,{},{timeout:6000})).toBeInTheDocument()
    })
})