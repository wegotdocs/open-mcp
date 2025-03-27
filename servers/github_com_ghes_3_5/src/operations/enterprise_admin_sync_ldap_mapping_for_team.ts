import { z } from "zod"

export const toolName = `enterprise_admin_sync_ldap_mapping_for_team`
export const toolDescription = `Sync LDAP mapping for a team`
export const baseUrl = `https://github.com`
export const path = `/admin/ldap/teams/{team_id}/sync`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "team_id": z.number().int().describe("The unique identifier of the team.") }).optional() }).shape