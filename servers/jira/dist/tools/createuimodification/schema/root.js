import { z } from "zod";
export const inputParams = {
    "contexts": z.array(z.object({ "id": z.string().describe("The ID of the UI modification context.").readonly().optional(), "isAvailable": z.boolean().describe("Whether a context is available. For example, when a project is deleted the context becomes unavailable.").readonly().optional(), "issueTypeId": z.string().describe("The issue type ID of the context. Null is treated as a wildcard, meaning the UI modification will be applied to all issue types. Each UI modification context can have a maximum of one wildcard.").optional(), "projectId": z.string().describe("The project ID of the context. Null is treated as a wildcard, meaning the UI modification will be applied to all projects. Each UI modification context can have a maximum of one wildcard.").optional(), "viewType": z.enum(["GIC", "IssueView", "IssueTransition"]).describe("The view type of the context. Only `GIC`(Global Issue Create), `IssueView` and `IssueTransition` are supported. Null is treated as a wildcard, meaning the UI modification will be applied to all view types. Each UI modification context can have a maximum of one wildcard.").optional() }).strict().describe("The details of a UI modification's context, which define where to activate the UI modification.")).describe("List of contexts of the UI modification. The maximum number of contexts is 1000.").optional(),
    "data": z.string().describe("The data of the UI modification. The maximum size of the data is 50000 characters.").optional(),
    "description": z.string().describe("The description of the UI modification. The maximum length is 255 characters.").optional(),
    "name": z.string().describe("The name of the UI modification. The maximum length is 255 characters.")
};
