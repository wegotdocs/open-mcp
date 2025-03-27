import { z } from "zod"

export const toolName = `post_load_balancers_id_actions_detach_from_network`
export const toolDescription = `Detach a Load Balancer from a Network`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/load_balancers/{id}/actions/detach_from_network`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Load Balancer") }).optional() }).shape