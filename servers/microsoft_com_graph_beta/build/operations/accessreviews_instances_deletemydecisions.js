import { z } from "zod";
export const toolName = `accessreviews_instances_deletemydecisions`;
export const toolDescription = `Delete navigation property myDecisions for accessReviews`;
export const baseUrl = `https://graph.microsoft.com/beta`;
export const path = `/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "header": z.object({ "If-Match": z.string().describe("ETag").optional() }).optional() }).shape;
