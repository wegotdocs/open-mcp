import { z } from "zod";
export const inputParams = {
    "selectedIssueIdsOrKeys": z.array(z.string()).describe("List of issue IDs or keys which are to be bulk deleted. These IDs or keys can be from different projects and issue types."),
    "sendBulkNotification": z.boolean().nullable().describe("A boolean value that indicates whether to send a bulk change notification when the issues are being deleted.\n\nIf `true`, dispatches a bulk notification email to users about the updates.").optional()
};
