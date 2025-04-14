import { z } from "zod"

export const inputParams = {
  "apply_id": z.string().describe("支付宝开票申请id").optional(),
  "extend_fields": z.string().describe("预留的扩展字段，格式如：key1=value1\\nkey2=value2\\nkey3=value3，字段之间以\\n(换行符)分隔。").optional(),
  "file_base": z.string().describe("base64化的字符串，与file_download_url不可同时为空。").optional(),
  "file_download_type": z.string().describe("文件类型，必填。\tPDF类型文件填写PDF，\tOFD类型文件填写ofd，\tJPG类型文件填写JPG(JPG文件请先询问对接人当前是否支持)").optional(),
  "file_download_url": z.string().describe("发票文件下载地址，和file_base不可同时为空。").optional(),
  "login_id": z.string().describe("支付宝登录账号").optional(),
  "open_id": z.string().describe("支付宝用户id，当apply_id为空时，open_id必填").optional(),
  "out_invoice_id": z.string().describe("外部ISV的唯一发票标识").optional(),
  "user_id": z.string().describe("支付宝用户userId").optional(),
  "zip": z.string().describe("压缩方式").optional()
}