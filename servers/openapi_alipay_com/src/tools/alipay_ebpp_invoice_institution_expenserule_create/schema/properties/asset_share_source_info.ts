import { z } from "zod"

export const inputParams = {
  "share_mode": z.string().describe("当前规则可用的资产来源类型，搭配source_id_list使用。").optional(),
  "source_id_list": z.array(z.string()).describe("资产共享来源id列表，与share_mode配合设置，如果share_mode为INSTITUTION，该值则填写制度id列表").optional()
}