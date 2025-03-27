import { z } from "zod"

export const toolName = `get_datacenters_id_`
export const toolDescription = `Get a Datacenter`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/datacenters/{id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of Datacenter") }).optional() }).shape