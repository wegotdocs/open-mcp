import { z } from "zod";
export const inputParams = {
    "settlement": z.string().max(5000).describe("The settlement token to mark as complete.")
};
