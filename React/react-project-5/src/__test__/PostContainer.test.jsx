import { expect,it, describe } from "vitest";
import { screen,render } from "@testing-library/react";
import { PostContainer } from "../Component/PostContainer";
import { UserContext } from "../Context/UserContext";

describe("render context values", () => {
    it ('should match snap shot', () => {
        const mockUserContextData = {
            id: 1001,
            username: 'johnny',
            email: 'johnny@gmail.com',
            name: 'johnny',
            setUserData: () => {}
        }
        const {container} = render(
            <UserContext.Provider value={{...mockUserContextData}}>
                <PostContainer />
            </UserContext.Provider>)
            expect(container).toMatchSnapshot()
    })

    it("should display username", () => {
        const mockUserContextData = {
            id: 1001,
            username: 'johnny',
            email: 'johnny@gmail.com',
            name: 'johnny',
            setUserData: () => {}
        }
        const {container} = render(
        <UserContext.Provider value={{...mockUserContextData}}>
            <PostContainer />
        </UserContext.Provider>)
        expect(container).toMatchSnapshot()
        expect(screen.getByText("Username: johnny")).toBeInTheDocument()
    })

})