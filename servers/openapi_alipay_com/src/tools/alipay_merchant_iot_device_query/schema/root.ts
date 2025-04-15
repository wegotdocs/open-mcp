import { z } from "zod"

export const inputParams = {
  "device_id_type": z.string().describe("可选方式 [ID,SN]。ID-使用biztid作为设备唯一识别标识；SN-使用supplier_id、device_sn联合作为设备唯一识别标识。由于不同机型的supplier_id不同，推荐使用 ID 。").optional(),
  "biz_tid": z.string().describe("设备 ID ，device_id_type 为 ID 时填写。").optional(),
  "supplier_id": z.string().describe("设备供应商ID ，device_id_type 为 SN 时填写。需注意不同机型的供应商ID可能不同。").optional(),
  "device_sn": z.string().describe("设备序列号 ，device_id_type 为 SN 时填写。需配合supplier_id使用。").optional()
}