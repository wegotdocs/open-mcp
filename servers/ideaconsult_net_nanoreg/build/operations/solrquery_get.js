import { z } from "zod";
export const toolName = `solrquery_get`;
export const toolDescription = `Apache Solr powered search`;
export const baseUrl = `https://api.ideaconsult.net/nanoreg1`;
export const path = `/select`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "q": z.string().describe("The query").optional(), "start": z.number().int().describe("Starting page").optional(), "rows": z.number().int().describe("Page size").optional(), "wt": z.enum(["json", "xml"]).describe("Response format") }).optional() }).shape;
