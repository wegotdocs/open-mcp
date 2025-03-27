import { z } from "zod"

export const toolName = `get_floating_ips_id_actions`
export const toolDescription = `Get all Actions for a Floating IP`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/floating_ips/{id}/actions`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Floating IP") }).optional(), "query": z.object({ "sort": z.enum(["id","id:asc","id:desc","command","command:asc","command:desc","status","status:asc","status:desc","progress","progress:asc","progress:desc","started","started:asc","started:desc","finished","finished:asc","finished:desc"]).describe("Can be used multiple times.").optional(), "status": z.enum(["running","success","error"]).describe("Can be used multiple times, the response will contain only Actions with specified statuses").optional() }).optional() }).shape