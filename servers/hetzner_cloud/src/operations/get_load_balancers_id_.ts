import { z } from "zod"

export const toolName = `get_load_balancers_id_`
export const toolDescription = `Get a Load Balancer`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/load_balancers/{id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Load Balancer") }).optional() }).shape