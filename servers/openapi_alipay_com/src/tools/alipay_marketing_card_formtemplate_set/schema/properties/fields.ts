import { z } from "zod"

export const inputParams = {
  "optional": z.string().describe("表单可选字段配置，common_fields属性定义一个表单字段数组，表单字段有效值列表与required字段有效值列表相同。\t\t可选字段配置中不能含有必须字段配置的有效值。").optional(),
  "required": z.string().describe("表单必填字段配置，common_fields属性定义一个表单字段数组，字段有效值如下列表所示：\t\tOPEN_FORM_FIELD_MOBILE -- 手机号\t\tOPEN_FORM_FIELD_GENDER -- 性别\t\tOPEN_FORM_FIELD_NAME -- 姓名\t\tOPEN_FORM_FIELD_BIRTHDAY -- 生日\t\tOPEN_FORM_FIELD_IDCARD -- 身份证\t\tOPEN_FORM_FIELD_EMAIL -- 邮箱\t\tOPEN_FORM_FIELD_ADDRESS -- 地址\t\tOPEN_FORM_FIELD_CITY -- 城市\t\tOPEN_FORM_FIELD_IS_STUDENT -- 是否学生认证\t\tOPEN_FORM_FIELD_MEMBER_GRADE -- 会员等级").optional()
}