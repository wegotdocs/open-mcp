import { z } from "zod";
export const inputParams = {
    "screenSchemeId": z.string().describe("The ID of the screen scheme.")
};
