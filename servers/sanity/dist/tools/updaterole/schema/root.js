import { z } from "zod";
export const inputParams = {
    "resourceType": z.enum(["organization", "project"]).describe("Resources are entities that can be managed and accessed through the\nAccess API.\n"),
    "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type."),
    "roleName": z.string().describe("The role name."),
    "title": z.string().min(1).max(100),
    "name": z.string().regex(new RegExp("^[a-z0-9-_]+$")),
    "description": z.string().optional(),
    "appliesToUsers": z.boolean(),
    "appliesToRobots": z.boolean(),
    "permissions": z.array(z.object({ "name": z.string().describe("The name of the permission.").optional(), "action": z.enum(["create", "read", "update", "manage", "history", "editHistory"]).optional(), "params": z.record(z.any()).describe("The parameters for the permission. This is a key-value map of the permission's configuration.").optional() }))
};
