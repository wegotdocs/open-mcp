import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "role_id": z.number().int().gte(1).lte(3),
  "org_id": z.number().int(),
  "email": z.union([z.string(), z.null()]).optional(),
  "prefer_lang": z.union([z.string(), z.null()]).optional(),
  "authorization": z.union([z.object({ "org": z.number().int().gte(0).lte(2).describe("組織。使用者角色最少要為 Administrator。"), "user": z.number().int().gte(0).lte(2).describe("使用者。使用者角色最少要為 Manager。"), "dev": z.number().int().gte(0).lte(2).describe("設備 (播放器、感測器)。使用者角色最少要為 Manager。"), "content": z.number().int().gte(0).lte(2).describe("內容 (節目、媒體、事件、排程)。"), "dispatch": z.number().int().gte(0).lte(2).describe("派送。"), "settings": z.number().int().gte(0).lte(2).describe("設定。") }).describe("0: 無權限, 1: 唯讀, 2: 全權限。"), z.null()]).optional(),
  "accessible_org_id_list": z.union([z.array(z.number().int()), z.null()]).optional()
}