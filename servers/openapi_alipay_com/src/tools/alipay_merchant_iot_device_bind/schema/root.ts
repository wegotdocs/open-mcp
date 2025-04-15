import { z } from "zod"

export const inputParams = {
  "biz_tid": z.string().describe("设备 ID ，仅device_id_type 为 ID 时填写。").optional(),
  "device_id_type": z.string().describe("可选方式。枚举支持：\t*  ID：表示使用 biztid 作为设备唯一识别标识，\t*  SN：表示使用 supplier_id、device_sn联合作为设备唯一识别标识。\t注意：由于不同机型的supplier_id不同，推荐使用 ID 。").optional(),
  "device_sn": z.string().describe("设备序列号 ，device_id_type 为 SN 时填写。需配合supplier_id使用。").optional(),
  "merchant_type": z.string().describe("商户类型。枚举支持：\t*  direct：直连商户；\t*  indirect：间连商户。").optional(),
  "pid": z.string().describe("直连场景填写商户收单pid。间连场景填写smid绑定的pid（可通过代运营授权API获取）。").optional(),
  "shop_id": z.string().describe("商户pid名下的门店 ID。可通过门店管理API获取，需注意请勿使用smid创建门店 ID。").optional(),
  "smid": z.string().describe("直连场景不填，间连场景填写商户收单smid").optional(),
  "supplier_id": z.string().describe("设备供应商ID ，device_id_type 为 SN 时填写。需注意不同机型的供应商ID可能不同。").optional()
}