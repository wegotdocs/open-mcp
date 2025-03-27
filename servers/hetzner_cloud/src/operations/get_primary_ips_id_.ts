import { z } from "zod"

export const toolName = `get_primary_ips_id_`
export const toolDescription = `Get a Primary IP`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/primary_ips/{id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the resource") }).optional() }).shape