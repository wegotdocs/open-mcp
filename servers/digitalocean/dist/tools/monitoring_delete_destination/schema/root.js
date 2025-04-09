import { z } from "zod";
export const inputParams = {
    "destination_uuid": z.string().describe("A unique identifier for a destination.")
};
