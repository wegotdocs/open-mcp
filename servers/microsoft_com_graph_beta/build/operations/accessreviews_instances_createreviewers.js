import { z } from "zod";
export const toolName = `accessreviews_instances_createreviewers`;
export const toolDescription = `Add accessReview reviewer (deprecated)`;
export const baseUrl = `https://graph.microsoft.com/beta`;
export const path = `/accessReviews/{accessReview-id}/instances/{accessReview-id1}/reviewers`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.string().optional() }).shape;
