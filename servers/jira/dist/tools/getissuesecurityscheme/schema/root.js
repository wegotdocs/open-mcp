import { z } from "zod";
export const inputParams = {
    "id": z.number().int().describe("The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs.")
};
