import { z } from "zod";
export const toolName = `solrquery_post`;
export const toolDescription = `Apache Solr powered search`;
export const baseUrl = `https://api.ideaconsult.net/enanomapper`;
export const path = `/select`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "wt": z.enum(["json", "xml"]).describe("Response format") }).optional(), "body": z.object({ "facet": z.record(z.any()).optional(), "params": z.object({ "fl": z.array(z.string()).optional(), "rows": z.number().int().optional() }).optional() }).optional() }).shape;
