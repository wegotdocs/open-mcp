import { z } from "zod"

export const inputParams = {
  "merchant_sales_detail": z.array(z.object({ "coupons_quantity": z.string().describe("配券数").optional(), "device_detail": z.string().describe("设备详情").optional(), "merchant_pid": z.string().describe("商户pid").optional(), "mini_appid": z.string().describe("小程序appid，若推广的商品不为小程序，则不传此参数").optional(), "operation_place": z.string().describe("作业地").optional(), "out_biz_no": z.string().describe("外部业务号，传isv系统生成的账单号，需要保证唯一").optional(), "promotor_pid": z.string().describe("推广服务商(S2)pid").optional(), "sales_amount": z.string().describe("销售金额，这里填写的是整数，单位为分，比如1元，那么输入100").optional(), "sales_quantity": z.string().describe("销售笔数").optional(), "sub_promotor_pid": z.string().describe("推广服务商(S2)子账号pid").optional(), "write_off_amount": z.string().describe("核销金额，这里填写的是整数，单位为分，比如1元，那么输入100").optional(), "write_off_quantity": z.string().describe("核销数").optional() })).describe("商户销售数据回传的参数对象，形式为一个列表，每天回传昨日商户的销售数据。").optional()
}