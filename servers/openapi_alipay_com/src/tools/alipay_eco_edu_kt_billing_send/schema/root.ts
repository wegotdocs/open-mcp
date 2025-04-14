import { z } from "zod"

export const inputParams = {
  "amount": z.string().describe("总金额，单位为元，精确到小数点后两位，取值范围[0.01,100000000]，\r\t如果是非多选项，是要和缴费项的总和相同，多选模式不做验证").optional(),
  "charge_bill_title": z.string().describe("缴费账单名称").optional(),
  "charge_item": z.array(z.object({ "item_mandatory": z.string().describe("缴费项是否必选\r\t如果缴费项是多选模式，此参数生效。 “Y”表示必填，“N”或空表示非必填。").optional(), "item_maximum": z.number().int().describe("缴费项最大可选数\r\t如果缴费项是多选模式，此参数生效，范围是1-9，如果为空，则最大项默认为9").optional(), "item_name": z.string().describe("缴费项名称").optional(), "item_price": z.string().describe("缴费项金额").optional(), "item_serial_number": z.number().int().describe("缴费项序号，如果缴费项是多选模式，此项为必填，建议从1开始的连续数字，\r\t用户支付成功后，通过passback_params参数带回已选择的缴费项。例如:orderNo=uoo234234&isvOrderNo=24werwe&items=1-2|2-1|3-5\r\t1-2|2-1|3-5 表示：缴费项序列号-缴费项数|缴费项序列号-缴费项数").optional() })).describe("缴费详情：输入json格式字符串。Json定义：key填写缴费项名称，value填写缴费项金额，金额保留2位小数（单位：元）").optional(),
  "charge_type": z.string().describe("缴费项模式：空或\"N\"，表示缴费项不可选，\r\t\"M\"表示缴费项为可选 ，支持单选和多选。").optional(),
  "child_name": z.string().describe("孩子名字").optional(),
  "class_in": z.string().describe("孩子所在班级").optional(),
  "end_enable": z.string().describe("截止日期是否生效，与gmt_end发布配合使用,N为gmt_end不生效，用户过期后仍可以缴费；Y为gmt_end生效，用户过期后，不能再缴费。").optional(),
  "ext_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `ext_info` to the tool, first call the tool `expandSchema` with \"/properties/ext_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "gmt_end": z.string().describe("缴费截止时间，格式\"yyyy-MM-dd HH:mm:ss\"，日期要大于当前时间。请注意，过期时间不宜设置过短。").optional(),
  "grade": z.string().describe("孩子所在年级").optional(),
  "out_trade_no": z.string().describe("ISV端的缴费账单编号").optional(),
  "partner_id": z.string().describe("Isv支付宝pid, 支付宝签约后，返回给ISV编号").optional(),
  "school_no": z.string().describe("学校编码，录入学校接口返回的参数").optional(),
  "school_pid": z.string().describe("学校支付宝pid,直付通填写smid").optional(),
  "student_code": z.string().describe("学生的学号，只支持字母和数字类型，一般以教育局学号为准，作为学生的唯一标识。此字段与student_identify、家长user_mobile至少选一个").optional(),
  "student_identify": z.string().describe("学生的身份证号，如果ISV有学生身份证号，则同步身份证号作为学生唯一标识。此字段与student_code、家长user_mobile至少选一个。\r\t大陆身份证必须是18位 ， 其它地区或国家的身份证开头需要加\"IC\"开头区分并且不超过18位，但查询账单的时候不要带\"IC\"").optional(),
  "users": z.array(z.object({ "user_change_mobile": z.string().describe("用户变更手机号，替换旧的手机号").optional(), "user_mobile": z.string().describe("孩子家长的手机号").optional(), "user_name": z.string().describe("张三").optional(), "user_relation": z.string().describe("孩子与家长的关系： 1、爸爸  2、妈妈  3、爷爷  4、奶奶  5、外公  6、外婆  7、家长").optional() })).describe("孩子的家长信息，最多一次输入10个家长，此字段做为识别家长的孩子用，与student_identify、student_code至少选一个").optional()
}