import { z } from "zod"

export const toolName = `get_firewalls_id_actions_action_id_`
export const toolDescription = `Get an Action for a Firewall`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/firewalls/{id}/actions/{action_id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Firewall"), "action_id": z.number().int().describe("ID of the Action") }).optional() }).shape