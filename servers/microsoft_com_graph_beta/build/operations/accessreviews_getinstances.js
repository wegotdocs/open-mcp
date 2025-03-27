import { z } from "zod";
export const toolName = `accessreviews_getinstances`;
export const toolDescription = `Get instances from accessReviews`;
export const baseUrl = `https://graph.microsoft.com/beta`;
export const path = `/accessReviews/{accessReview-id}/instances/{accessReview-id1}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "$select": z.array(z.enum(["id", "businessFlowTemplateId", "createdBy", "description", "displayName", "endDateTime", "reviewedEntity", "reviewerType", "settings", "startDateTime", "status", "decisions", "instances", "myDecisions", "reviewers"])).describe("Select properties to be returned").optional(), "$expand": z.array(z.enum(["*", "decisions", "instances", "myDecisions", "reviewers"])).describe("Expand related entities").optional() }).optional() }).shape;
