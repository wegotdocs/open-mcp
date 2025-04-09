import { z } from "zod";
export const inputParams = {
    "projectIdOrKey": z.string().describe("The project ID or project key (case-sensitive)."),
    "id": z.string().describe("The ID of the project classification.")
};
