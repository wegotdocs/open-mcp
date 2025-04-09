import { z } from "zod";
export const inputParams = {
    "dashboardId": z.number().int().describe("The ID of the dashboard."),
    "gadgetId": z.number().int().describe("The ID of the gadget."),
    "color": z.string().describe("The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.").optional(),
    "position": z.string().optional(),
    "title": z.string().describe("The title of the gadget.").optional()
};
