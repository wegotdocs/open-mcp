import { z } from "zod"

export const toolName = `searchbyidentifier`
export const toolDescription = `Exact chemical structure search`
export const baseUrl = `https://api.ideaconsult.net/enanomapper`
export const path = `/enm/{db}/query/compound/{term}/{representation}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "db": z.enum(["calibrate","enanomapper","enpra","marina","nanogenotox","nanoinformatix","nanoreg1","nanoreg2","nanotest"]).describe("Database ID"), "term": z.enum(["search","url","inchikey"]).describe("search term type"), "representation": z.enum(["all","smiles","reach","stdinchi","stdinchikey","names","iupac_name","synonym","cas","einecs"]) }).optional(), "query": z.object({ "search": z.string().describe("Compound identifier (SMILES, InChI, name, registry identifiers)").optional(), "b64search": z.string().describe("Base64 encoded mol file; if included, will be used instead of the 'search' parameter").optional(), "casesens": z.boolean().describe("Case sensitive search if yes").optional(), "bundle_uri": z.string().describe("Bundle URI").optional(), "sameas": z.string().describe("Ontology URI to define groups of columns").optional(), "page": z.number().int().describe("Starting page").optional(), "pagesize": z.number().int().describe("Page size").optional() }).optional() }).shape