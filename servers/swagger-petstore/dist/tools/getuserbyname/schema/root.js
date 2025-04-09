import { z } from "zod";
export const inputParams = {
    "username": z.string().describe("The name that needs to be fetched. Use user1 for testing")
};
