import { z } from "zod"

export const toolName = `get_es_statename_mediatypeextension_`
export const toolDescription = `Returns pages content.`
export const baseUrl = `https://www.healthcare.gov`
export const path = `/es/{stateName}{mediaTypeExtension}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "mediaTypeExtension": z.literal(".json").describe("Omiting the param causes html to be returned."), "stateName": z.string() }).optional() }).shape