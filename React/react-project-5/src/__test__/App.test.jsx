import { describe, it, expect } from "vitest";
import { render ,screen, waitFor} from "@testing-library/react";
import App from "../App";
import {userEvent} from '@testing-library/user-event'
import { within } from "@testing-library/dom";
import { server } from "../__mocks__/msw/server";
import { http , HttpResponse, delay} from "msw";

describe('App', () => {
    it('should render users', () => {
        const { container } = render(<App usersData={[]}/>);
        expect(container).toMatchSnapshot();
    }),

    describe("When user is only 1", () => {
        it("should render save button" , async () => {
            render(<App usersData={[{
                id: 1,
                username: 'ha',
                email: 'ha@gmail.com'
              }]}/>)

            const editButton = screen.getByRole("button", {name:"Edit"})
            await userEvent.click(editButton)
            const saveButton = screen.getByRole("button", {name:"save"})
            expect(saveButton).toBeInTheDocument()
        }),
        it('should displau username & email input fields',async () => {
            render(<App usersData={[{
                id: 1,
                username: 'ha',
                email: 'ha@gmail.com'
              }]}/>)
            const editButton = screen.getByRole("button", {name:"Edit"})
            await userEvent.click(editButton)
            expect(screen.getByLabelText("Username:")).toBeInTheDocument()
            expect(screen.getByRole('textbox', {name : "email"})).toBeInTheDocument()
        })
    })

    describe("When there are 2 users", () => {
        it('should have two users' , () => {
            render(<App usersData={[
                {
                    id: 1,
                    username: 'ha',
                    email: 'ha@gmail.com'
                },
                {
                    id: 2,
                    username: 'ha2',
                    email: 'ha2@gmail.com'
                }
                ]}/>)

                expect(screen.getByText('ha')).toBeInTheDocument()
                expect(screen.getByText('ha2')).toBeInTheDocument()
        })
        it('should click edit button for 1st user and save button appear' ,async () => {
            render(<App usersData={[
            {
                id: 1,
                username: 'ha',
                email: 'ha@gmail.com'
            },
            {
                id: 2,
                username: 'ha2',
                email: 'ha2@gmail.com'
            }
            ]}/>)
            const userDetails = screen.getByTestId('user-details-1');
            expect(within(userDetails).getByText("ha")).toBeInTheDocument()
            expect(within(userDetails).queryByText("ha2")).toBeNull()
            
            const editButton = within(userDetails).getByRole("button", { name: "Edit" });
            await userEvent.click(editButton);
            expect(within(userDetails).getByRole("button", { name: "save" })).toBeInTheDocument();
            
        }),
        it('should click edit button for 1st user and save button appear' ,async () => {
            render(<App usersData={[
                {
                    id: 1,
                    username: 'ha',
                    email: 'ha@gmail.com'
                },
                {
                    id: 2,
                    username: 'ha2',
                    email: 'ha2@gmail.com'
                }
                ]}/>)
                const userDetails = screen.getByTestId('user-details-2');
                await userEvent.click(within(userDetails).getByRole('button',{name: 'Edit'}))
                await userEvent.type(within(userDetails).getByLabelText('Username:'),"123")
                await userEvent.click(within(userDetails).getByRole('button',{name: 'save'}))
                expect(within(userDetails).queryByLabelText("Username:")).toBeNull()
                expect(within(userDetails).getByText("ha2123")).toBeInTheDocument()
            })  
    }),

    describe('updating UserContext',() => {
        it("should update display name" , async () => {
            render(<App usersData={[]}/>)
            await userEvent.type(screen.getByLabelText("Update Name:"),"Jonathan The Dev")
            await userEvent.click(screen.getByRole('button',{name: "Update display name"}))
            expect(screen.getByText("Display Name:Jonathan The Dev")).toBeInTheDocument()
        })
    })


    describe('rendering context data', () => {
        it('should render correct email',async () => {

            server.use( http.get('https://jsonplaceholder.typicode.com/users/*', async ({params}) => {
                await delay(2000)
                return Response.json({
                    id: params.id,
                    username: 'josh',
                    name: 'josh',
                    email: 'josh@josh.com'
                })
            }))
            render(<App usersData={[]} />)
            expect(await screen.findByText("Email: josh@josh.com",{},{timeout:5000})).toBeInTheDocument()
            expect(screen.getByText("Email: josh@josh.com")).toBeInTheDocument();
            await waitFor(
                async () => {
                  expect(screen.getByText("Email: josh@josh.com")).toBeInTheDocument();
                },{timeout: 5000}
              );
        })
    })


});
