import { z } from "zod";
export const inputParams = {
    "uuid": z.string().describe("Indexing job id")
};
