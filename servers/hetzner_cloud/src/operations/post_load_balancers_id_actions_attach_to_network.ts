import { z } from "zod"

export const toolName = `post_load_balancers_id_actions_attach_to_network`
export const toolDescription = `Attach a Load Balancer to a Network`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/load_balancers/{id}/actions/attach_to_network`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Load Balancer") }).optional() }).shape