import { z } from "zod"

export const inputParams = {
  "conn_key": z.string().describe("调用第一步创建接口的out_agreement_no，由外部传入").optional(),
  "once_token": z.string().describe("查询身份认证结果的凭证，在认证结果到达终态后只允许查询成功一次，若需要再次查询，则需要调用第一个接口再拉起受理台").optional(),
  "query_type": z.string().describe("exact:精确查询,dim:模糊查询").optional(),
  "identity_type": z.string().describe("04:教师，其它身份类型联系芝麻技术支持确认").optional(),
  "service_id": z.string().describe("信用服务id，商家接入产品功能包时有运营同学分配").optional(),
  "user_id": z.string().describe("蚂蚁统一会员ID\t和身份证任选一个传入").optional(),
  "open_id": z.string().describe("蚂蚁统一会员ID\t和身份证任选一个传入").optional(),
  "cert_no": z.string().describe("证件号").optional(),
  "cert_type": z.string().describe("\"身份证 : 0\"，\"护照: 1\"，\"台湾往来通行证：4\",\"港澳往来通行证：3\", \"回乡证: 2\"；\"港澳证件：5\"").optional()
}