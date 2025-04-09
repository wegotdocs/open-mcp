import { z } from "zod";
export const inputParams = {
    "projectId": z.number().int().describe("The ID of the project.")
};
