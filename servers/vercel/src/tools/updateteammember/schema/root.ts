import { z } from "zod"

export const inputParamsSchema = {
  "uid": z.string().describe("The ID of the member."),
  "confirmed": z.literal(true).describe("Accept a user who requested access to the team.").optional(),
  "role": z.string().describe("The role in the team of the member.").optional(),
  "projects": z.array(z.object({ "projectId": z.string().max(256).describe("The ID of the project."), "role": z.union([z.literal("ADMIN"), z.literal("PROJECT_VIEWER"), z.literal("PROJECT_DEVELOPER"), z.literal(null)]).nullable().describe("The project role of the member that will be added. \\\"null\\\" will remove this project level role.") }).strict()).optional(),
  "joinedFrom": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `joinedFrom` to the tool, first call the tool `expandSchema` with \"/properties/joinedFrom\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}