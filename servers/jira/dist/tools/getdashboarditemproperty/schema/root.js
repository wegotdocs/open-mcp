import { z } from "zod";
export const inputParams = {
    "dashboardId": z.string().describe("The ID of the dashboard."),
    "itemId": z.string().describe("The ID of the dashboard item."),
    "propertyKey": z.string().describe("The key of the dashboard item property.")
};
