import { z } from "zod";
export const toolName = `enterprise_admin_update_ldap_mapping_for_team`;
export const toolDescription = `Update LDAP mapping for a team`;
export const baseUrl = `https://github.com`;
export const path = `/admin/ldap/teams/{team_id}/mapping`;
export const method = `patch`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "team_id": z.number().int().describe("The unique identifier of the team.") }).optional(), "body": z.object({ "ldap_dn": z.string().describe("The [distinguished name](https://www.ldap.com/ldap-dns-and-rdns) (DN) of the LDAP entry to map to a team.") }).optional() }).shape;
