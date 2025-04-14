import { z } from "zod"

export const inputParams = {
  "group_id": z.string().describe("分组ID，通过<a href=\"https://opendocs.alipay.com/apis/api_6/alipay.open.public.group.create\">alipay.open.public.group.create</a>（用户分组创建接口)\t创建用户分组获取。").optional(),
  "label_rule": z.array(z.object({ "label_id": z.string().describe("标签id").optional(), "label_value": z.string().describe("标签取值，当有多个取值时用英文\",\"分隔（比如使用in操作符时）；不允许传入下划线\"_\"、竖线\"|\"或者空格\" \"").optional(), "operator": z.string().describe("目前支持EQ（等于）、NEQ（不等于）、LT（小于），GT（大于）、LTEQ（小于等于）、GTEQ（大于等于）、LIKE（匹配）、BETWEEN（范围）、IN（包含）、NOTIN（不包含）操作").optional() })).describe("标签规则，满足该规则的粉丝将被圈定，标签id不能重复").optional(),
  "name": z.string().describe("分组名称，仅支持中文、字母、数字、下划线的组合。").optional()
}