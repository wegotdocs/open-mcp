import { z } from "zod"

export const toolName = `getinvestigationresults`
export const toolDescription = `Details of multiple studies`
export const baseUrl = `https://api.ideaconsult.net/enanomapper`
export const path = `/enm/{db}/investigation`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "db": z.enum(["calibrate","enanomapper","enpra","marina","nanogenotox","nanoinformatix","nanoreg1","nanoreg2","nanotest"]).describe("Database ID") }).optional(), "query": z.object({ "type": z.enum(["byinvestigation","byassay","bysubstance","byprovider","bycitation","bystudytype","bystructure_inchikey","bystructure_smiles","bystructure_name","bysubstance_name","bysubstance_type"]).describe("query type"), "search": z.string().describe("Search parameter, UUID of the investigation or a substance"), "inchikey": z.string().describe("Search parameter, InChI key(s) of the substance component(s), comma delimited").optional(), "id": z.string().describe("Search parameter, chemical structure or substance identifier(s), comma delimited").optional(), "page": z.number().int().describe("Starting page").optional(), "pagesize": z.number().int().describe("Page size").optional() }).optional() }).shape