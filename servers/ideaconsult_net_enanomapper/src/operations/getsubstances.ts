import { z } from "zod"

export const toolName = `getsubstances`
export const toolDescription = `List substances`
export const baseUrl = `https://api.ideaconsult.net/enanomapper`
export const path = `/enm/{db}/substance`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "db": z.enum(["calibrate","enanomapper","enpra","marina","nanogenotox","nanoinformatix","nanoreg1","nanoreg2","nanotest"]).describe("Database ID") }).optional(), "query": z.object({ "search": z.string().describe("Search parameter").optional(), "type": z.enum(["substancetype","name","like","regexp","uuif","CompTox","DOI","reliability","purposeFlag","studyResultType","isRobustStudy","citation","citationowner","topcategory","endpointcategory","params","owner_name","owner_uuid","related","reference","facet"]).optional(), "compound_uri": z.string().describe("If type=related finds all substances containing this compound; if typ =reference - finds all substances with this compound as reference structure").optional(), "bundle_uri": z.string().describe("Retrieves if selected in this bundle").optional(), "addDummySubstance": z.boolean().describe("Adds a compound record as substance in JSON; only if type=related").optional(), "studysummary": z.boolean().describe("If true retrieves study summary for each substance").optional(), "page": z.number().int().describe("Starting page").optional(), "pagesize": z.number().int().describe("Page size").optional() }).optional() }).shape