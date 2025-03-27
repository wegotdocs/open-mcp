import { z } from "zod"

export const toolName = `searchbysmarts`
export const toolDescription = `Substructure search`
export const baseUrl = `https://api.ideaconsult.net/enanomapper`
export const path = `/enm/{db}/query/smarts`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "db": z.enum(["calibrate","enanomapper","enpra","marina","nanogenotox","nanoinformatix","nanoreg1","nanoreg2","nanotest"]).describe("Database ID") }).optional(), "query": z.object({ "search": z.string().describe("Compound identifier (SMILES, InChI, name, registry identifiers)").optional(), "b64search": z.string().describe("Base64 encoded mol file; if included, will be used instead of the 'search' parameter").optional(), "type": z.enum(["smiles","mol","url"]).describe("Defines the expected content of the search parameter").optional(), "dataset_uri": z.string().describe("Restrict the search within the AMBIT dataset specified with the URI").optional(), "filterBySubstance": z.boolean().describe("Restrict the search within the set of structures with assigned substances").optional(), "bundle_uri": z.string().describe("If the structure is used in the specified bundle URI, the selection tag will be returned").optional(), "sameas": z.string().describe("Ontology URI to define groups of columns").optional(), "mol": z.boolean().describe("Only for application/json; to include mol as JSON field").optional(), "page": z.number().int().describe("Starting page").optional(), "pagesize": z.number().int().describe("Page size").optional() }).optional() }).shape