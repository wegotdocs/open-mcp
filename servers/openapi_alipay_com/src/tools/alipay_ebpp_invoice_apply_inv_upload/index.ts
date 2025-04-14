export { inputParams } from "./schema/root.js"

export const toolName = `alipay_ebpp_invoice_apply_inv_upload`
export const toolDescription = `发票回传`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/alipay/ebpp/invoice/apply/inv/upload`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "anti_fake_code",
    "apply_id",
    "biz_error_code",
    "biz_error_msg",
    "business_type",
    "check_code",
    "create_result",
    "device_no",
    "invoice_amount",
    "invoice_code",
    "invoice_date",
    "invoice_file_content",
    "invoice_file_type",
    "invoice_items",
    "invoice_kind",
    "invoice_memo",
    "invoice_no",
    "invoice_type",
    "levy_type",
    "normal_invoice_code",
    "normal_invoice_no",
    "payee_address",
    "payee_bank_account_id",
    "payee_bank_name",
    "payee_checker",
    "payee_name",
    "payee_operator",
    "payee_phone",
    "payee_receiver",
    "payee_register_no",
    "payer_address",
    "payer_bank_account_id",
    "payer_bank_name",
    "payer_email",
    "payer_name",
    "payer_phone",
    "payer_register_no",
    "platform_code",
    "platform_tid",
    "platform_user_id",
    "qr_code",
    "receive_mobile",
    "red_notice_no",
    "serial_no",
    "source",
    "special_flag",
    "sum_price",
    "sum_tax"
  ]
}
export const flatMap = {}