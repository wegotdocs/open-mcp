import { z } from "zod";
export const inputParams = {
    "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
    "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
    "categorisedActors": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `categorisedActors` to the tool, first call the tool `expandSchema` with \"/properties/categorisedActors\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The actors to add to the project role.\n\nAdd groups using:\n\n *  `atlassian-group-role-actor` and a list of group names.\n *  `atlassian-group-role-actor-id` and a list of group IDs.\n\nAs a group's name can change, use of `atlassian-group-role-actor-id` is recommended. For example, `\"atlassian-group-role-actor-id\":[\"eef79f81-0b89-4fca-a736-4be531a10869\",\"77f6ab39-e755-4570-a6ae-2d7a8df0bcb8\"]`.\n\nAdd users using `atlassian-user-role-actor` and a list of account IDs. For example, `\"atlassian-user-role-actor\":[\"12345678-9abc-def1-2345-6789abcdef12\", \"abcdef12-3456-789a-bcde-f123456789ab\"]`.</property-description>").optional(),
    "b_id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.").readonly().optional()
};
