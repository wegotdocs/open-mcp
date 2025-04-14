import { z } from "zod"

export const inputParams = {
  "city_code": z.string().describe("城市编码请参考查询 <a href=\"http://www.mca.gov.cn/article/sj/xzqh/\">中华人民共和国行政区划代码</a>。\t已支持城市：广州 440100，深圳 440300，杭州330100。").optional(),
  "site_begin": z.string().describe("起点站站点编码").optional(),
  "site_end": z.string().describe("终点站站点编码").optional(),
  "ticket_num": z.string().describe("地铁票购票数量").optional(),
  "ticket_price": z.string().describe("单张票价，元为单价").optional(),
  "ticket_type": z.string().describe("地铁票种类，枚举支持：\t*oneway。").optional(),
  "total_fee": z.string().describe("订单总金额，元为单位").optional(),
  "trade_no": z.string().describe("支付宝交易号（交易支付时，必须通过指定sellerId：2088121612215201，将钱支付到指定的中间户中）").optional()
}