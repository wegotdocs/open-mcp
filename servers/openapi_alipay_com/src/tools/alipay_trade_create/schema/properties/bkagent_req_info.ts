import { z } from "zod"

export const inputParams = {
  "acq_code": z.string().describe("收单机构在清算组织登记或分配的机构代码").optional(),
  "device_type": z.string().describe("终端设备类型，受理方可参考终端注册时的设备类型填写。").optional(),
  "location": z.string().describe("终端设备实时经纬度信息，格式为纬度/经度，+表示北纬、东经，-表示南纬、西经。").optional(),
  "merch_code": z.string().describe("收单机构在清算组织登记的商户编码").optional(),
  "serial_num": z.string().describe("终端类型填写为 02、\t03、04、05、06、08、09 或 10 时，必\t须填写终端序列号。").optional()
}