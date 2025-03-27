import { z } from "zod"

export const toolName = `get_images_id_actions`
export const toolDescription = `Get all Actions for an Image`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/images/{id}/actions`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Image") }).optional(), "query": z.object({ "sort": z.enum(["id","id:asc","id:desc","command","command:asc","command:desc","status","status:asc","status:desc","progress","progress:asc","progress:desc","started","started:asc","started:desc","finished","finished:asc","finished:desc"]).describe("Can be used multiple times.").optional(), "status": z.enum(["running","success","error"]).describe("Can be used multiple times, the response will contain only Actions with specified statuses").optional() }).optional() }).shape