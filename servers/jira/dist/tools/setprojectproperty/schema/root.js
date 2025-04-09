import { z } from "zod";
export const inputParams = {
    "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
    "propertyKey": z.string().describe("The key of the project property. The maximum length is 255 characters.")
};
