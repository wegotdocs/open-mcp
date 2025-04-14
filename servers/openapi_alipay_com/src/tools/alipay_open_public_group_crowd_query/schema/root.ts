import { z } from "zod"

export const inputParams = {
  "label_rule": z.array(z.object({ "label_id": z.string().describe("标签id").optional(), "label_value": z.string().describe("标签取值，当有多个取值时用英文\",\"分隔（比如使用in操作符时）；不允许传入下划线\"_\"、竖线\"|\"或者空格\" \"").optional(), "operator": z.string().describe("目前支持EQ（等于）、NEQ（不等于）、LT（小于），GT（大于）、LTEQ（小于等于）、GTEQ（大于等于）、LIKE（匹配）、BETWEEN（范围）、IN（包含）、NOTIN（不包含）操作").optional() })).describe("用户分组的规则项列表，规则项之间元素是与的逻辑，每个规则项内部用多个值表示或的逻辑").optional()
}