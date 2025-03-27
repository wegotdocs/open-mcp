import { z } from "zod"

export const toolName = `get_tagsets_id_`
export const toolDescription = `Retrieve a single tag set by id`
export const baseUrl = `https://api.contribly.com/1`
export const path = `/tagsets/{id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the tag set to return") }).optional() }).shape