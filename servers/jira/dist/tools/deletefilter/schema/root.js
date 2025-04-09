import { z } from "zod";
export const inputParams = {
    "id": z.number().int().describe("The ID of the filter to delete.")
};
