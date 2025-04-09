import { z } from "zod";
export const inputParams = {
    "project_id": z.string().describe("ID of the project to list files from"),
    "branch_data": z.boolean().describe("Returns branch metadata in the response for each main file with a branch inside the project.").optional()
};
