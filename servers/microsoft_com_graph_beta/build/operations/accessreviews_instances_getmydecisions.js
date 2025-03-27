import { z } from "zod";
export const toolName = `accessreviews_instances_getmydecisions`;
export const toolDescription = `Get myDecisions from accessReviews`;
export const baseUrl = `https://graph.microsoft.com/beta`;
export const path = `/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions/{accessReviewDecision-id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "$select": z.array(z.enum(["id", "accessRecommendation", "accessReviewId", "appliedBy", "appliedDateTime", "applyResult", "justification", "reviewedBy", "reviewedDateTime", "reviewResult"])).describe("Select properties to be returned").optional(), "$expand": z.array(z.literal("*")).describe("Expand related entities").optional() }).optional() }).shape;
