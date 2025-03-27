import { z } from "zod";
export const toolName = `holiday`;
export const toolDescription = `Get a holiday by id`;
export const baseUrl = `https://canada-holidays.ca`;
export const path = `/api/v1/holidays/{holidayId}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2016).lte(2029).describe("A calendar year"), "optional": z.enum(["1", "0", "true", "false"]).describe("A boolean parameter. If false or 0 (default), will return provinces for which this is a legislated holiday. If true or 1, will return provinces which optionally celebrate this holiday.") }).optional() }).shape;
