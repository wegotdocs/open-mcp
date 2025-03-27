import { z } from "zod"

export const toolName = `post_firewalls_id_actions_remove_from_resources`
export const toolDescription = `Remove from Resources`
export const baseUrl = `https://api.hetzner.cloud/v1`
export const path = `/firewalls/{id}/actions/remove_from_resources`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "id": z.number().int().describe("ID of the Firewall") }).optional() }).shape