import { z } from "zod";
export const inputParams = {
    "value": z.number().nullable().describe("Cumulative Layout Shift value"),
    "previousValue": z.number().describe("Previous Cumulative Layout Shift value to display a delta").optional(),
    "source": z.literal("web-vitals")
};
