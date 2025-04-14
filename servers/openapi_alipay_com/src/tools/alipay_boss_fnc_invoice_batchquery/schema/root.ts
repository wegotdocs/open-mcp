import { z } from "zod"

export const inputParams = {
  "apply_order_id": z.string().describe("开票申请ID，唯一标识开票申请表的ID").optional(),
  "buyer_invoice_title": z.string().describe("买方发票抬头，用于打印在发票上").optional(),
  "buyer_ipid": z.string().describe("对应发票商户的ipId，在主站标示mid，在其他环境标示ip_id。").optional(),
  "buyer_ipids": z.array(z.string()).describe("购方商户ID集合").optional(),
  "buyer_iprole_id": z.string().describe("商户结算的ipRoleId，表示商户的结算对象，在主站表示pid。").optional(),
  "buyer_iprole_ids": z.array(z.string()).describe("购方PID集合").optional(),
  "inst_id": z.string().describe("对应发票所在OU的id，用于标示该发票所述的OU。").optional(),
  "invoice_channel": z.string().describe("开票渠道 01 线上;02 线下").optional(),
  "invoice_code": z.string().describe("发票代码，税务部门给予发票的编码").optional(),
  "invoice_create_date_begin": z.string().describe("发票创建日期【起始日期，格式yyyyMMdd】").optional(),
  "invoice_create_date_end": z.string().describe("发票创建日期【结束日期，格式yyyyMMdd】").optional(),
  "invoice_ids": z.array(z.string()).describe("发票ID集合，发票ID，唯一标示一张发票的ID").optional(),
  "invoice_material": z.string().describe("开票介质 01电子 02纸质").optional(),
  "invoice_no": z.string().describe("发票号码，税务部门给予发票的编码").optional(),
  "invoice_open_date_begin": z.string().describe("发票开票日期【起始日期，格式yyyyMMdd】").optional(),
  "invoice_open_date_end": z.string().describe("发票开票日期【结束日期，格式yyyyMMdd】").optional(),
  "invoice_status": z.array(z.string()).describe("发票状态：用于标示发票当前的状态，状态类型以及相关含义：01 待开票;02 开票中;03 已开票;04 作废中;05 已作废;06 红冲中;07 已红冲;08 部分红冲;09 无效").optional(),
  "invoice_types": z.array(z.string()).describe("发票类型,01专票 02普票 03营业税发票 04国际形式发票 05其它发票").optional(),
  "is_online": z.string().describe("是否能在线开票 Y能 N不能").optional(),
  "is_red": z.string().describe("是否红字 Y红字 N蓝字").optional(),
  "mail_status": z.array(z.string()).describe("邮寄状态 01 待邮寄;02 已邮寄;03 退回中;04 已退回").optional(),
  "monthly_bill_no": z.string().describe("月账单号").optional(),
  "page_no": z.number().int().describe("起始页，分页时必须提供").optional(),
  "page_size": z.number().int().describe("每页显示数，分页时必须提供").optional(),
  "tracking_no": z.string().describe("快递单号").optional()
}