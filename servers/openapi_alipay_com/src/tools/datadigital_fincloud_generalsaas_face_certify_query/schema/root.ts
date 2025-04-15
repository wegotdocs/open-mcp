import { z } from "zod"

export const inputParams = {
  "certify_id": z.string().describe("本次申请操作的唯一标识，通过datadigital.fincloud.generalsaas.face.certify.initialize\t接口同步响应获取。").optional()
}