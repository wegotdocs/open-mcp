import { z } from "zod";
export const inputParams = {
    "issueIdOrKey": z.string().describe("The ID or key of the issue."),
    "id": z.string().describe("The ID of the comment."),
    "expand": z.string().describe("Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.").optional()
};
