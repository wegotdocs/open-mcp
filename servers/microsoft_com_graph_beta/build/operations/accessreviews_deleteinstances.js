import { z } from "zod";
export const toolName = `accessreviews_deleteinstances`;
export const toolDescription = `Delete navigation property instances for accessReviews`;
export const baseUrl = `https://graph.microsoft.com/beta`;
export const path = `/accessReviews/{accessReview-id}/instances/{accessReview-id1}`;
export const method = `delete`;
export const security = [];
export const inputParams = z.object({ "header": z.object({ "If-Match": z.string().describe("ETag").optional() }).optional() }).shape;
