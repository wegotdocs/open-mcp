import { z } from "zod"

export const toolName = `getsubstancestudy`
export const toolDescription = `get substance study`
export const baseUrl = `https://api.ideaconsult.net/nanoreg1`
export const path = `/enm/{db}/substance/{uuid}/study`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "db": z.enum(["calibrate","enanomapper","enpra","marina","nanogenotox","nanoinformatix","nanoreg1","nanoreg2","nanotest"]).describe("Database ID"), "uuid": z.string().describe("Substance UUID") }).optional(), "query": z.object({ "top": z.enum(["P-CHEM","ECOTOX","ENV FATE","TOX","EXPOSURE"]).describe("Top endpoint category").optional(), "category": z.string().describe("Endpoint category (The value in the protocol.category.code field)").optional(), "property_uri": z.string().describe("Property URI https://data.enanomapper.net/property/{UUID} , see Property service").optional(), "property": z.string().describe("Property UUID").optional(), "investigation_uuid": z.string().describe("Investigation UUID, a code to link different studies").optional(), "page": z.number().int().describe("Starting page").optional(), "pagesize": z.number().int().describe("Page size").optional() }).optional() }).shape