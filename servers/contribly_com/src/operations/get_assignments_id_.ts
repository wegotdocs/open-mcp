import { z } from "zod"

export const toolName = `get_assignments_id_`
export const toolDescription = `Get a single assigment by id`
export const baseUrl = `https://api.contribly.com/1`
export const path = `/assignments/{id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the assignment to return") }).optional() }).shape