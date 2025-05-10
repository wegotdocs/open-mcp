import { z } from "zod"

export const inputParams = {
  "bi_da": z.boolean().describe("消息是否必达(immediate_msg为false时此字段设置有效)，消息过期时间顺延3*24h. 建议使用expire_time设置消息过期时间").optional(),
  "device_query_type": z.string().describe("设备查询条件类型 ；SUPPLIERID_SN:supplierid+sn ;\t ITEMID_SN:itemid + sn;\tSN:sn").optional(),
  "immediate_msg": z.boolean().describe("是否即时消息; true-校验设备是否在线，false-不校验设备是否在线").optional(),
  "item_id": z.string().describe("产品ID").optional(),
  "msg_content": z.string().describe("消息内容").optional(),
  "msg_content_type": z.string().describe("消息内容格式").optional(),
  "msg_expire": z.number().int().describe("消息过期时间戳(ms)， 默认为当前时间顺延24h有效。当设备在线时消息服务过期之前尝试推送。最大过期时间顺延3*24h").optional(),
  "msg_priority": z.number().int().describe("消息优先级（immediate_msg为false此字段设置有效）数字越大优先发送。").optional(),
  "msg_type": z.string().describe("消息类型：\txpaas_common-小程序消息；\truyi_ordermsg-如意订单消息").optional(),
  "service_id": z.string().describe("服务ID，当小程序消费消息时必传(传入的是小程序ID)").optional(),
  "sn": z.string().describe("设备sn号").optional(),
  "supplier_id": z.string().describe("厂商ID").optional()
}