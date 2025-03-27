import { z } from "zod"

export const toolName = `post_firewalls_id_actions_apply_to_resources`
export const toolDescription = `Apply to Resources`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/firewalls/{id}/actions/apply_to_resources`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Firewall") }).optional() }).shape