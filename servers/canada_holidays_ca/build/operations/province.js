import { z } from "zod";
export const toolName = `province`;
export const toolDescription = `Get a province or territory by abbreviation`;
export const baseUrl = `https://canada-holidays.ca`;
export const path = `/api/v1/provinces/{provinceId}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2016).lte(2029).describe("A calendar year"), "optional": z.enum(["1", "0", "true", "false"]).describe("A boolean parameter (AB and BC only). If false or 0 (default), will return only legislated holidays. If true or 1, will return optional holidays from Alberta and BC.") }).optional() }).shape;
