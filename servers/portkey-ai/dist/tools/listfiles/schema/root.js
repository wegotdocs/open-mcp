import { z } from "zod";
export const inputParams = {
    "purpose": z.string().describe("Only return files with the given purpose.").optional()
};
