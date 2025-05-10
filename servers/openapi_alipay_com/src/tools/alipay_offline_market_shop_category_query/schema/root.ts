import { z } from "zod"

export const inputParams = {
  "category_id": z.string().describe("类目ID，如果为空则查询全部类目。").optional(),
  "op_role": z.string().describe("表示接口业务的调用方身份,默认不填标识为ISV。").optional()
}