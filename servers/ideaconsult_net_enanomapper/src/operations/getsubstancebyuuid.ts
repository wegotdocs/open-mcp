import { z } from "zod"

export const toolName = `getsubstancebyuuid`
export const toolDescription = `Get a substance`
export const baseUrl = `https://api.ideaconsult.net/enanomapper`
export const path = `/enm/{db}/substance/{uuid}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "db": z.enum(["calibrate","enanomapper","enpra","marina","nanogenotox","nanoinformatix","nanoreg1","nanoreg2","nanotest"]).describe("Database ID"), "uuid": z.string().describe("Substance UUID") }).optional(), "query": z.object({ "property_uris[]": z.string().describe("Property URIs").optional(), "page": z.number().int().describe("Starting page").optional(), "pagesize": z.number().int().describe("Page size").optional() }).optional() }).shape