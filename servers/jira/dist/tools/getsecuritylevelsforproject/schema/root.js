import { z } from "zod";
export const inputParams = {
    "projectKeyOrId": z.string().describe("The project ID or project key (case sensitive).")
};
