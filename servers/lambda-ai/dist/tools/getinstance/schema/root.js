import { z } from "zod";
export const inputParams = {
    "id": z.string().describe("The unique identifier (ID) of the instance")
};
