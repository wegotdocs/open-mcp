import { z } from "zod";
export const inputParams = {
    "namespace_id": z.string().describe("The ID of the namespace to be managed."),
    "trigger_name": z.string().describe("The name of the trigger to be managed.")
};
