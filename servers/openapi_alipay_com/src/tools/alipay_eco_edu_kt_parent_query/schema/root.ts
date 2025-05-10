import { z } from "zod"

export const inputParams = {
  "school_pid": z.string().describe("学校支付宝pid").optional(),
  "school_no": z.string().describe("学校编码，录入学校接口返回的school_no参数").optional(),
  "partner_id": z.string().describe("Isv的支付宝pid").optional(),
  "child_name": z.string().describe("孩子或学生姓名").optional(),
  "user_mobile": z.string().describe("用户手机号，发账单时填写users数组中的一个手机号。结果返回用户是否通过此手机号添加此学生的缴费账户。user_mobile、student_code 、student_identify 必须并且只能填一项。").optional(),
  "student_code": z.string().describe("学生的学号，一个学校的学号必须是唯一。结果返回用户是否通过此学号添加此学生的缴费账户。user_mobile、student_code 、student_identify 必须并且只能填一项。").optional(),
  "student_identify": z.string().describe("学生的身份证号，使用身份证规则验证。结果返回用户是否通过此身份证号添加此学生的缴费账户。user_mobile、student_code 、student_identify 必须并且只能填一项。").optional()
}