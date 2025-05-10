import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.number().int(),
  "rename_only": z.union([z.number().int(), z.null()]).describe("Rename only? Empty / 0: No, Any / 1: Yes").optional(),
  "session_id": z.string().optional(),
  "user_update_in": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user_update_in` to the tool, first call the tool `expandSchema` with \"/properties/user_update_in\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "userauth_in": z.union([z.object({ "org": z.number().int().gte(0).lte(2).describe("組織。使用者角色最少要為 Administrator。"), "user": z.number().int().gte(0).lte(2).describe("使用者。使用者角色最少要為 Manager。"), "dev": z.number().int().gte(0).lte(2).describe("設備 (播放器、感測器)。使用者角色最少要為 Manager。"), "content": z.number().int().gte(0).lte(2).describe("內容 (節目、媒體、事件、排程)。"), "dispatch": z.number().int().gte(0).lte(2).describe("派送。"), "settings": z.number().int().gte(0).lte(2).describe("設定。") }).describe("0: 無權限, 1: 唯讀, 2: 全權限。"), z.null()]).optional(),
  "accessible_org_id_list": z.union([z.array(z.number().int()), z.null()]).optional()
}