import { z } from "zod";
export const inputParams = {
    "petId": z.number().int().describe("ID of pet to return")
};
