import { z } from "zod"

export const inputParams = {
  "isv_pub_key": z.string().describe("用于接入CCM iframe接口安全认证的 ISV 公钥，采用 base64 编码，秘钥对生成算法为 RSA2048。").optional()
}