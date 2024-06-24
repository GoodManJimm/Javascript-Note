import { afterEach , beforeAll, afterAll} from "vitest";
import { cleanup , configure} from "@testing-library/react";
import "@testing-library/jest-dom/vitest"
import { server } from "./src/__mocks__/msw/server";

configure({asyncUtilTimeout: 5000})
beforeAll(() => {
    server.listen();
})

afterEach(() => {
    cleanup();
    server.resetHandlers();
})

afterAll(() => {
    server.close();
})