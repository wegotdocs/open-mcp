import { z } from "zod"

export const toolName = `get_datacenters`
export const toolDescription = `Get all Datacenters`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/datacenters`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "name": z.string().describe("Can be used to filter Datacenters by their name. The response will only contain the Datacenter matching the specified name. When the name does not match the Datacenter name format, an `invalid_input` error is returned.").optional() }).optional() }).shape