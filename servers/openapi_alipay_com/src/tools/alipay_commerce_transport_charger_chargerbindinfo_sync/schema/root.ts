import { z } from "zod"

export const inputParams = {
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "bind_qrcode": z.string().describe("绑定充电桩二维码值，用户扫码绑桩扫描的二维码").optional(),
  "bind_status": z.string().describe("绑定状态 1:绑定; 2:解绑;  0:未知").optional(),
  "bind_time": z.string().describe("绑定时间，绑定成功必传").optional(),
  "connector_type": z.string().describe("1：家用插座\t2、交流接口插座\t3：交流接口插头\t4、直流接口枪头\t5、无线充电座\t6、其他").optional(),
  "current_output_type": z.string().describe("1：国标\t2：欧标\t3：美标\t4：日标\t5：其他").optional(),
  "equip_id": z.string().describe("设备编号").optional(),
  "equip_imei": z.string().describe("设备IMEI号").optional(),
  "equip_name": z.string().describe("设备名称，对用户展示，可以是设备名称，也可以是设备SN号，设备编号").optional(),
  "equip_sn": z.string().describe("设备SN号").optional(),
  "equip_status": z.string().describe("设备状态，遵循中电联协议的设备状态。0：离网;1：空闲;2：占用未充电;3：占用充电中;4：占用（预约锁定）;255：故障").optional(),
  "equip_type_no": z.string().describe("设备型号").optional(),
  "operator_id": z.string().describe("运营商编码，一般为企业组织机构代码").optional(),
  "operator_uid": z.string().describe("商户内部唯一标识用户的用户标识").optional(),
  "rated_current": z.string().describe("额定电流,单位：A").optional(),
  "rated_power": z.string().describe("额定功率，单位：kW").optional(),
  "rated_voltage": z.string().describe("额定电压，单位：V").optional(),
  "unbind_time": z.string().describe("解绑时间，解绑必传").optional()
}