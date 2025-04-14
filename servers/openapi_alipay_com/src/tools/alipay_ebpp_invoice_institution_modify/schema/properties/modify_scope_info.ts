import { z } from "zod"

export const inputParams = {
  "adapter_type": z.string().describe("制度的适用范围类型").optional(),
  "add_owner_id_list": z.array(z.string()).describe("增加的归属id列表").optional(),
  "delete_owner_id_list": z.array(z.string()).describe("删除归属id列表").optional(),
  "owner_type": z.string().describe("归属id类型").optional()
}