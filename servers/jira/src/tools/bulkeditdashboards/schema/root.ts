import { z } from "zod"

export const inputParamsSchema = {
  "action": z.enum(["changeOwner","changePermission","addPermission","removePermission"]).describe("Allowed action for bulk edit shareable entity"),
  "changeOwnerDetails": z.string().optional(),
  "entityIds": z.array(z.number().int()).describe("The id list of shareable entities to be changed."),
  "extendAdminPermissions": z.boolean().describe("Whether the actions are executed by users with Administer Jira global permission.").optional(),
  "permissionDetails": z.string().optional()
}