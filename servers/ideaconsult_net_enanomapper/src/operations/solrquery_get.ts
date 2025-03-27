import { z } from "zod"

export const toolName = `solrquery_get`
export const toolDescription = `Apache Solr powered search`
export const baseUrl = `https://api.ideaconsult.net/enanomapper`
export const path = `/select`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "q": z.string().describe("The query").optional(), "fq": z.string().describe("Filter query").optional(), "fl": z.string().describe("Field list").optional(), "start": z.number().int().describe("Starting page").optional(), "rows": z.number().int().describe("Page size").optional(), "wt": z.enum(["json","xml","csv"]).describe("Response format") }).optional() }).shape