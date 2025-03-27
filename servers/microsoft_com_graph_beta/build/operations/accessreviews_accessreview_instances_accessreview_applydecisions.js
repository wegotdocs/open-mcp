import { z } from "zod";
export const toolName = `accessreviews_accessreview_instances_accessreview_applydecisions`;
export const toolDescription = `Invoke action applyDecisions`;
export const baseUrl = `https://graph.microsoft.com/beta`;
export const path = `/accessReviews/{accessReview-id}/instances/{accessReview-id1}/microsoft.graph.applyDecisions`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({}).shape;
