import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name"),
  "pipelines_stage_id": z.number().int().describe("Pipeline Stage"),
  "primary_contact_id": z.number().int().describe("Primary Contact"),
  "value": z.union([z.number().describe("The potential value of this opportunity in the default currency of the workspace"), z.null().describe("The potential value of this opportunity in the default currency of the workspace")]).describe("The potential value of this opportunity in the default currency of the workspace").optional(),
  "closed_at": z.union([z.string().datetime({ offset: true }).describe("Close date"), z.null().describe("Close date")]).describe("Close date").optional(),
  "assignee_id": z.number().int().describe("The ID of the Team `Membership` to assign the Opportunity to.\nAn Opportunity can be assigned to any Team member since they have access to all your workspaces.\nYou can get a list of available Memberships and their `id` via the `Team` resource's `memberships` property.\n\nIf the opportunity is already assigned to a team member, the assignee will be updated.\nYou can unset the assignee by passing a `null` value for `assignee_id`.\n").optional()
}