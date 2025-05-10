export { inputParams } from "./schema/root.js"

export const toolName = `zoloz_authentication_smilepay_initialize`
export const toolDescription = `刷脸支付初始化`
export const baseUrl = `https://openapi.alipay.com`
export const path = `/v3/zoloz/authentication/smilepay/initialize`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "apdid_token",
    "app_name",
    "app_version",
    "base_ver",
    "bio_meta_info",
    "device_model",
    "device_type",
    "ext_info",
    "machine_info",
    "merchant_info",
    "os_version",
    "remote_log_id",
    "zim_ver"
  ]
}
export const flatMap = {}