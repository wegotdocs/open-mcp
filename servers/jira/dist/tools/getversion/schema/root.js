import { z } from "zod";
export const inputParams = {
    "id": z.string().describe("The ID of the version."),
    "expand": z.string().describe("Use [expand](#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `operations` Returns the list of operations available for this version.\n *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property represents the number of issues with a status other than *to do*, *in progress*, and *done*.\n *  `driver` Returns the Atlassian account ID of the version driver.\n *  `approvers` Returns a list containing the Atlassian account IDs of approvers for this version.").optional()
};
