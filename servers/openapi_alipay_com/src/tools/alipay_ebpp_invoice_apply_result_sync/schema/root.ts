import { z } from "zod"

export const inputParams = {
  "apply_id": z.string().describe("支付宝发起开票申请的id，该id具有唯一性，该字段由支付宝向税控发起申请的时候带过去，作为支付宝向税控开票申请的唯一标志").optional(),
  "result": z.string().describe("支付宝向税控商或ISV发起发票申请后，对应这笔申请的发票开具结果。\r\t取值如下：\r\tSUCCESS:成功;FAIL:失败").optional(),
  "result_code": z.string().describe("结果码，支付宝向税控商或ISV发起发票申请后，对应这笔申请的发票开具结果进行详细说明的结果码。\r\t取值如下：\r\t成功(SUCCESS),\r\t参数不合法(PARAMETER_ILLEGAL),\r\t商户税控设备异常(MERCHANT_TAX_DEVICE_ERROR).").optional(),
  "result_msg": z.string().describe("结果描述，支付宝向税控商或ISV发起发票申请后，对应这笔申请的发票开具结果描述信息。").optional(),
  "tax_apply_id": z.string().describe("该字段是税控商或ISV收到支付宝开票请求后生成的申请id，由税控商或isv自己生成，该id具有唯一性\r\t当ISV接入时是按照tax_apply_id来查询发票信息时，该字段必填。").optional()
}