import { z } from "zod";
export const inputParams = {
    "value": z.number().nullable().describe("Total Blocking Time value"),
    "previousValue": z.number().describe("Previous Total Blocking Time value to display a delta").optional(),
    "source": z.literal("web-vitals")
};
