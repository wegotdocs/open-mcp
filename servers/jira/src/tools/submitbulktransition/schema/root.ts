import { z } from "zod"

export const inputParamsSchema = {
  "bulkTransitionInputs": z.array(z.object({ "selectedIssueIdsOrKeys": z.array(z.string()).describe("List of all the issue IDs or keys that are to be bulk transitioned."), "transitionId": z.string().describe("The ID of the transition that is to be performed on the issues.") }).strict()).describe("List of objects and each object has two properties:\n\n *  Issues that will be bulk transitioned.\n *  TransitionId that corresponds to a specific transition of issues that share the same workflow."),
  "sendBulkNotification": z.boolean().nullable().describe("A boolean value that indicates whether to send a bulk change notification when the issues are being transitioned.\n\nIf `true`, dispatches a bulk notification email to users about the updates.").optional()
}