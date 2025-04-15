import { z } from "zod"

export const inputParams = {
  "city_code": z.string().describe("城市编码请参考查询 <a href=\"http://www.mca.gov.cn/article/sj/xzqh/\">中华人民共和国行政区划代码</a>。\t已支持城市：广州 440100，深圳 440300，杭州330100。").optional(),
  "trade_no": z.string().describe("支付宝交易号").optional()
}