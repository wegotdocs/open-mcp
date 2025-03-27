import { z } from "zod";
export const toolName = `getsubstancecomposition`;
export const toolDescription = `Substance composition`;
export const baseUrl = `https://api.ideaconsult.net/nanoreg1`;
export const path = `/enm/{db}/substance/{uuid}/composition`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "db": z.enum(["calibrate", "enanomapper", "enpra", "marina", "nanogenotox", "nanoinformatix", "nanoreg1", "nanoreg2", "nanotest"]).describe("Database ID"), "uuid": z.string().describe("Substance UUID") }).optional(), "query": z.object({ "all": z.boolean().describe("true (Show all compositions) false (do not show hidden compositions)").optional(), "page": z.number().int().describe("Starting page").optional(), "pagesize": z.number().int().describe("Page size").optional() }).optional() }).shape;
