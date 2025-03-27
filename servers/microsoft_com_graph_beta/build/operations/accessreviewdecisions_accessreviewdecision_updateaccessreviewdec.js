import { z } from "zod";
export const toolName = `accessreviewdecisions_accessreviewdecision_updateaccessreviewdec`;
export const toolDescription = `Update entity in accessReviewDecisions`;
export const baseUrl = `https://graph.microsoft.com/beta`;
export const path = `/accessReviewDecisions/{accessReviewDecision-id}`;
export const method = `patch`;
export const security = [];
export const inputParams = z.object({ "body": z.string().optional() }).shape;
