import { z } from "zod"

export const inputParams = {
  "is_filter": z.boolean().describe("是否过滤小程序不可用类目。枚举值如下： true：表示过滤不可用类目。 false：表示不过滤不可用类目。").optional()
}