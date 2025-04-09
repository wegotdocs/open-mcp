import { z } from "zod";
export const inputParams = {
    "app_id": z.string().describe("The app ID"),
    "force_build": z.boolean().optional()
};
