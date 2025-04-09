import { z } from "zod";
export const inputParams = {
    "dashboardId": z.string().describe("The ID of the dashboard."),
    "itemId": z.string().describe("The ID of the dashboard item."),
    "propertyKey": z.string().describe("The key of the dashboard item property. The maximum length is 255 characters. For dashboard items with a spec URI and no complete module key, if the provided propertyKey is equal to \"config\", the request body's JSON must be an object with all keys and values as strings.")
};
