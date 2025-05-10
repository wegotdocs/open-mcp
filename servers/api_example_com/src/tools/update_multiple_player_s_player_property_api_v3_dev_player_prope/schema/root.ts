import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional(),
  "dev_id_list": z.array(z.number().int()).describe("播放器 ID 清單。"),
  "dev_player_property_in": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `dev_player_property_in` to the tool, first call the tool `expandSchema` with \"/properties/dev_player_property_in\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>播放器屬性。</property-description>")
}