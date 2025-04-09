import { z } from "zod";
export const inputParams = {
    "id": z.number().int().describe("ID of the project category to delete.")
};
