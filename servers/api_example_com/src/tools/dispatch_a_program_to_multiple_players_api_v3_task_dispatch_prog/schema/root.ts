import { z } from "zod"

export const inputParamsSchema = {
  "prog_id": z.number().int(),
  "flush_current_skd": z.union([z.number().int(), z.null()]).describe("是否清除設備上已有的時程。不指定/0: 不清除, 與設備上已有的時程進行合併; 任意值/1: 清除, 取代設備上已有的時程。此設定在插播節目時無效。").optional(),
  "replace_previous_dispatch": z.union([z.number().int(), z.null()]).describe("若設備尚有擱置中的派送任務, 是否取代該任務。不指定/0: 不取代, 此次派送失敗; 任意值/1: 取消擱置中的派送任務, 以此派送任務取代。").optional(),
  "session_id": z.string().optional(),
  "task_in": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `task_in` to the tool, first call the tool `expandSchema` with \"/properties/task_in\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "dev_id_list": z.array(z.number().int())
}