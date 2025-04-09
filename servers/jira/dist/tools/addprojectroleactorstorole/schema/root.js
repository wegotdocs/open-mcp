import { z } from "zod";
export const inputParams = {
    "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
    "group": z.array(z.string()).describe("The name of the group to add as a default actor. This parameter cannot be used with the `groupId` parameter. As a group's name can change,use of `groupId` is recommended. This parameter accepts a comma-separated list. For example, `\"group\":[\"project-admin\", \"jira-developers\"]`.").optional(),
    "groupId": z.array(z.string()).describe("The ID of the group to add as a default actor. This parameter cannot be used with the `group` parameter This parameter accepts a comma-separated list. For example, `\"groupId\":[\"77f6ab39-e755-4570-a6ae-2d7a8df0bcb8\", \"0c011f85-69ed-49c4-a801-3b18d0f771bc\"]`.").optional(),
    "user": z.array(z.string()).describe("The account IDs of the users to add as default actors. This parameter accepts a comma-separated list. For example, `\"user\":[\"5b10a2844c20165700ede21g\", \"5b109f2e9729b51b54dc274d\"]`.").optional()
};
