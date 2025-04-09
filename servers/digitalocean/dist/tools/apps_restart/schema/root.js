import { z } from "zod";
export const inputParams = {
    "app_id": z.string().describe("The app ID"),
    "components": z.array(z.string()).optional()
};
