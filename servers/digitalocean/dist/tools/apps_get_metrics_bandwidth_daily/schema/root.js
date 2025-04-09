import { z } from "zod";
export const inputParams = {
    "app_id": z.string().describe("The app ID"),
    "date": z.string().datetime({ offset: true }).describe("Optional day to query. Only the date component of the timestamp will be considered. Default: yesterday.").optional()
};
