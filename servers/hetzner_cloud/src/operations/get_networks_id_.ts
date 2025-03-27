import { z } from "zod"

export const toolName = `get_networks_id_`
export const toolDescription = `Get a Network`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/networks/{id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the network") }).optional() }).shape