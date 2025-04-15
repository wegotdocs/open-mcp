import { z } from "zod"

export const inputParams = {
  "child_name": z.string().describe("修改后的学生姓名\r\t本接口调用时，child_name、student_code、student_identify、users这几个参数至少需要填写其中一个，不能同时为空").optional(),
  "isv_pid": z.string().describe("已经签约教育缴费的isv的支付宝PID").optional(),
  "school_no": z.string().describe("学校编号，调用alipay.eco.edu.kt.schoolinfo.modify接口录入学校信息时，接口返回的编号").optional(),
  "school_pid": z.string().describe("学校用来签约支付宝教育缴费的支付宝PID").optional(),
  "status": z.string().describe("区分ISV操作，“D”表示删除，“U”表示更新，区分大小写。\r\t如果为U，则学生名字，学号，身份证至少填写一项").optional(),
  "student_code": z.string().describe("修改后的学号\r\t本接口调用时，child_name、student_code、student_identify、users这几个参数至少需要填写其中一个，不能同时为空").optional(),
  "student_identify": z.string().describe("修改后的身份证号码\r\t本接口调用时，child_name、student_code、student_identify、users这几个参数至少需要填写其中一个，不能同时为空").optional(),
  "student_no": z.string().describe("支付宝-中小学-教育缴费生成的学生唯一编号").optional(),
  "users": z.array(z.object({ "user_change_mobile": z.string().describe("用户变更手机号，替换旧的手机号").optional(), "user_mobile": z.string().describe("孩子家长的手机号").optional(), "user_name": z.string().describe("张三").optional(), "user_relation": z.string().describe("孩子与家长的关系： 1、爸爸  2、妈妈  3、爷爷  4、奶奶  5、外公  6、外婆  7、家长").optional() })).describe("孩子的家长信息，最多一次输入20个家长。如果输入的家长信息不存在，则该改学生增加家长信息\r\t本接口调用时，child_name、student_code、student_identify、users这几个参数至少需要填写其中一个，不能同时为空").optional()
}