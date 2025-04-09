import { z } from "zod";
export const inputParams = {
    "resourceType": z.enum(["organization", "project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
    "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
    "inviteToken": z.string().describe("The public token for the invite. This token is shared with the invitee.")
};
