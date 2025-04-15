import { z } from "zod"

export const inputParams = {
  "buying_url": z.string().describe("需要修改的商品小程序购买链接").optional(),
  "goods_brand": z.string().describe("需要修改的商品品牌").optional(),
  "goods_comment": z.string().describe("需要修改的商品辅助说明文案").optional(),
  "goods_description_label": z.string().describe("需要修改的商品说明标签（如-随心退）").optional(),
  "goods_id": z.string().describe("商品的唯一标识，根据该字段修改商品").optional(),
  "goods_label": z.string().describe("需要修改的商品营销标签（如-限量特价），每个商品仅支持一个营销标签").optional(),
  "goods_name": z.string().describe("需要修改的商品名称").optional(),
  "goods_type": z.string().describe("需要修改的商品所属品类").optional(),
  "main_pic_url": z.string().describe("需要修改的商品主图片地址").optional(),
  "need_public_promo": z.boolean().describe("是否需要进行公域推广").optional(),
  "order_number": z.number().int().describe("需要修改的商品排序，自然整数, 数字越小越靠前").optional(),
  "original_price": z.string().describe("需要修改的商品原价，单位\"元\"，传入数字，不需要传入\"元\"").optional(),
  "publish_cities": z.string().describe("需要修改的商品投放城市的列表，详见https://www.mca.gov.cn/article/sj/xzqh/2020/2020/202007170301.html，有多个用英文,分隔。如果没有限制则不传入").optional(),
  "sell_price": z.string().describe("需要修改的商品售价，位\"元\"，传入数字，不需要传入\"元\"").optional(),
  "sell_tag_list": z.array(z.string()).describe("需要修改的商品卖点标签").optional()
}