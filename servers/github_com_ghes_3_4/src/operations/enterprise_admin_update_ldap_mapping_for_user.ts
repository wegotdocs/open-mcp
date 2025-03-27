import { z } from "zod"

export const toolName = `enterprise_admin_update_ldap_mapping_for_user`
export const toolDescription = `Update LDAP mapping for a user`
export const baseUrl = `https://github.com`
export const path = `/admin/ldap/users/{username}/mapping`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "path": z.object({ "username": z.string().describe("The handle for the GitHub user account.") }).optional(), "body": z.object({ "ldap_dn": z.string().describe("The [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team.") }).optional() }).shape