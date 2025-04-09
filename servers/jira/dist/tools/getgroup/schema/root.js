import { z } from "zod";
export const inputParams = {
    "groupname": z.string().describe("As a group's name can change, use of `groupId` is recommended to identify a group.  \nThe name of the group. This parameter cannot be used with the `groupId` parameter.").optional(),
    "groupId": z.string().describe("The ID of the group. This parameter cannot be used with the `groupName` parameter.").optional(),
    "expand": z.string().describe("List of fields to expand.").optional()
};
