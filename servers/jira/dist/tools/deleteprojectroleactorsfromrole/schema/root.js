import { z } from "zod";
export const inputParams = {
    "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
    "user": z.string().describe("The user account ID of the user to remove as a default actor.").optional(),
    "groupId": z.string().describe("The group ID of the group to be removed as a default actor. This parameter cannot be used with the `group` parameter.").optional(),
    "group": z.string().describe("The group name of the group to be removed as a default actor.This parameter cannot be used with the `groupId` parameter. As a group's name can change, use of `groupId` is recommended.").optional()
};
