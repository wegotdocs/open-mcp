import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().min(1).max(255).describe("Device ID"),
  "push_provider": z.enum(["firebase","apn","huawei","xiaomi"]).describe("Push provider"),
  "push_provider_name": z.string().describe("Push provider name").optional(),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().describe("**Server-side only**. User ID which server acts upon").optional(),
  "voip_token": z.boolean().describe("When true the token is for Apple VoIP push notifications").optional()
}