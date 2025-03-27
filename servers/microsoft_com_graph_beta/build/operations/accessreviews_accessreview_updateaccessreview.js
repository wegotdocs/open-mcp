import { z } from "zod";
export const toolName = `accessreviews_accessreview_updateaccessreview`;
export const toolDescription = `Update accessReview (deprecated)`;
export const baseUrl = `https://graph.microsoft.com/beta`;
export const path = `/accessReviews/{accessReview-id}`;
export const method = `patch`;
export const security = [];
export const inputParams = z.object({ "body": z.string().optional() }).shape;
