import { z } from "zod"

export const inputParams = {
  "email": z.string(),
  "workspaces": z.array(z.object({ "id": z.string().describe("Workspace Slug"), "role": z.enum(["admin","member","manager"]) })),
  "role": z.enum(["admin","member"]),
  "workspace_api_key_details": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `workspace_api_key_details` to the tool, first call the tool `expandSchema` with \"/properties/workspace_api_key_details\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}