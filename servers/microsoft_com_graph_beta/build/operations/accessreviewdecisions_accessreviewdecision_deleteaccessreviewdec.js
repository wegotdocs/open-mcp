import { z } from "zod";
export const toolName = `accessreviewdecisions_accessreviewdecision_deleteaccessreviewdec`;
export const toolDescription = `Delete entity from accessReviewDecisions`;
export const baseUrl = `https://graph.microsoft.com/beta`;
export const path = `/accessReviewDecisions/{accessReviewDecision-id}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "header": z.object({ "If-Match": z.string().describe("ETag").optional() }).optional() }).shape;
