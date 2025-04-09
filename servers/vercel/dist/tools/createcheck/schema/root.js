import { z } from "zod";
export const inputParams = {
    "deploymentId": z.string().describe("The deployment to create the check for."),
    "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
    "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
    "name": z.string().max(100).describe("The name of the check being created"),
    "path": z.string().max(255).describe("Path of the page that is being checked").optional(),
    "blocking": z.boolean().describe("Whether the check should block a deployment from succeeding"),
    "detailsUrl": z.string().describe("URL to display for further details").optional(),
    "externalId": z.string().describe("An identifier that can be used as an external reference").optional(),
    "rerequestable": z.boolean().describe("Whether a user should be able to request for the check to be rerun if it fails").optional()
};
