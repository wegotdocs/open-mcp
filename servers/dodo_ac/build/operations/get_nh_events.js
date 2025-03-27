import { z } from "zod";
export const toolName = `get_nh_events`;
export const toolDescription = `All New Horizons events`;
export const baseUrl = `https://api.nookipedia.com`;
export const path = `/nh/events`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "header": z.object({ "X-API-KEY": z.string().uuid().describe("Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API."), "Accept-Version": z.string().describe("The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.") }).optional(), "query": z.object({ "date": z.string().describe("Specify a specific date (in the current or next year) to retrieve events for. Accepts many date formats, such as `YYYY-MM-DD` or `Month Day, Year`, as well as `today` to retrieve the current day's events (UTC time).").optional(), "year": z.string().describe("Specify the year to retrieve events for. Must be the current or next year.").optional(), "month": z.string().describe("Specify the month to retrieve events for (accepts multiple formats, such as `Oct`, `October`, or `10`). Most likely want to use alongside `year`, otherwise events in both the current and next year are returned.").optional(), "day": z.number().int().describe("Specify the day of the month to retrieve events for.").optional() }).optional() }).shape;
