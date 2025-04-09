import { z } from "zod";
export const inputParams = {
    "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.")
};
