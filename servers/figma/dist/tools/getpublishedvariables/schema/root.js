import { z } from "zod";
export const inputParams = {
    "file_key": z.string().describe("File to get variables from. This must be a main file key, not a branch key, as it is not possible to publish from branches.")
};
