import { z } from "zod"

export const inputParams = {
  "business_isv": z.array(z.object({ "business_appid": z.string().describe("业务归属appid").optional(), "business_payee_id": z.string().describe("业务收款pid，business_type为AGREEMENT_PAY时，此参数必传").optional(), "business_pid": z.string().describe("业务归属pid").optional(), "business_type": z.string().describe("业务类型ONLINE_PAY(在线缴费) 、AGREEMENT_PAY(无感停车)\tDEVICE_ONLINE_PAY(车机在线缴费)").optional() })).describe("车场业务归属关系列表").optional(),
  "parking_id": z.string().describe("车场创建返回的parking_id字段").optional()
}