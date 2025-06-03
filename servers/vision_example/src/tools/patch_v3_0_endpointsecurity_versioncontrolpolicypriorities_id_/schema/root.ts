import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().min(1).max(1024).describe("The ID of the policy priority"),
  "agentUpdateStatus": z.enum(["onSchedule","disable"]).describe("The status of agent updates.\n\nIf the status is `onSchedule`, the agent updates automatically according to the policies\n").optional(),
  "agentUpdatePolicy": z.string().describe("The version the agent or sensor will update to\n\n> **Tip**\n> \n> Get the available versions by sending a request to the `/v3.0/endpointSecurity/versionControlPolicies/agentUpdatePolicies` endpoint.\n").optional(),
  "componentUpdatePolicy": z.enum(["n","n-1","n-2","n-3","n-4","n-5","n-6","n-7","n-8"]).describe("The version that component will update to'.\n\n> **Tip**\n>\n> `n` indicates the latest version, `n-x` represents x snapshots prior.\n> Example: `n-2` represents 2 snapshots prior\n").optional()
}