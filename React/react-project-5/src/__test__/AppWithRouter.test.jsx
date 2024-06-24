import { renderWithRouter } from "./utils/helpers";
import { expect,it,describe } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it('should click on Users link and navigate to users route',async () => {
    renderWithRouter({initialEntries: ["/"]})
    await userEvent.click(
        screen.getByRole("link",{name: "Users"})
    )

    expect(screen.getByText("Welcome to Users DashBoard")).toBeInTheDocument()
})

it('should navigate to blog-post and back to /',async () => {
    renderWithRouter({initialEntries: ["/"]})
    await userEvent.click(
        screen.getByRole("link",{name: "Blogs"})
    )

    expect(screen.getByText("Welcome to BlogPost Page")).toBeInTheDocument()

    await userEvent.click(
        screen.getByRole("link",{name: "Home"})
    )

    expect(screen.queryByText("Welcome to BlogPost Page")).toBeNull()
})

