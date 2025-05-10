import { z } from "zod"

export const inputParams = {
  "channel": z.string().describe("目前支持以下值：\r\t1. ALIPAYAPP  （钱包h5页面签约）\r\t2. QRCODE(扫码签约)\r\t3. QRCODEORSMS(扫码签约或者短信签约)").optional()
}