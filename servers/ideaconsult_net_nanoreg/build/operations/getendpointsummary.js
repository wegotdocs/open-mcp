import { z } from "zod";
export const toolName = `getendpointsummary`;
export const toolDescription = `Search endpoint summary`;
export const baseUrl = `https://api.ideaconsult.net/nanoreg1`;
export const path = `/enm/{db}/query/study`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "db": z.enum(["calibrate", "enanomapper", "enpra", "marina", "nanogenotox", "nanoinformatix", "nanoreg1", "nanoreg2", "nanotest"]).describe("Database ID") }).optional(), "query": z.object({ "top": z.enum(["P-CHEM", "ECOTOX", "ENV FATE", "TOX", "EXPOSURE"]).describe("Top endpoint category").optional(), "category": z.string().describe("Endpoint category (The value in the protocol.category.code field)").optional() }).optional() }).shape;
