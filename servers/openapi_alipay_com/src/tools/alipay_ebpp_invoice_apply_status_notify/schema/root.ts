import { z } from "zod"

export const inputParams = {
  "apply_id": z.string().describe("发票申请ID，由阿里发票平台生成。字母或数字组成。\t申请单的唯一标识，幂等字段。").optional(),
  "apply_status": z.string().describe("申请状态，可选值：\tapplying: 申请中，初始状态；\tcancelled: 申请已取消、或商户已驳回；\tcreating_inv: 商户已受理/开票中，待发票结果回传；\tinv_failed: 开票失败；\tinv_success: 开票成功；\tinv_part_success: 部分成功（拆单场景下存在。举例：发票申请拆单之后有10张票，其中有1张开票成功时，此时申请状态为inv_part_success，当10张票全部成功申请状态则为inv_success）").optional(),
  "invoice_uks": z.array(z.object({ "invoice_code": z.string().describe("发票代码").optional(), "invoice_no": z.string().describe("发票号码").optional() })).describe("该申请下所有已开具成功的发票。\t状态变更为 apply_status=inv_success 时该字段必传").optional(),
  "message": z.string().describe("说明信息：驳回或失败原因\tapply_status=inv_failed 或 apply_status=cancelled 时必传").optional()
}