import { z } from "zod";
export const toolName = `holidays`;
export const toolDescription = `Get all holidays`;
export const baseUrl = `https://canada-holidays.ca`;
export const path = `/api/v1/holidays`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2016).lte(2029).describe("A calendar year"), "federal": z.enum(["1", "0", "true", "false"]).describe("A boolean parameter. If true or 1, will return only federal holidays. If false or 0, will return no federal holidays.").optional(), "optional": z.enum(["1", "0", "true", "false"]).describe("A boolean parameter. If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.") }).optional() }).shape;
