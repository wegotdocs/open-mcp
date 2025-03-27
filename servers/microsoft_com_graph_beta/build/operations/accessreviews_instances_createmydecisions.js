import { z } from "zod";
export const toolName = `accessreviews_instances_createmydecisions`;
export const toolDescription = `Create new navigation property to myDecisions for accessReviews`;
export const baseUrl = `https://graph.microsoft.com/beta`;
export const path = `/accessReviews/{accessReview-id}/instances/{accessReview-id1}/myDecisions`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.string().optional() }).shape;
