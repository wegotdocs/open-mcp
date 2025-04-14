import { z } from "zod"

export const inputParams = {
  "certify_id": z.string().describe("本次申请操作的唯一标识，由H5人脸核身初始化接口调用后生成，后续的操作都需要用到").optional()
}