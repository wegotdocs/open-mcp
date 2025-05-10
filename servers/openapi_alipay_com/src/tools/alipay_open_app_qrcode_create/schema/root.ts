import { z } from "zod"

export const inputParams = {
  "color": z.string().describe("圆形二维码颜色（十六进制颜色色值），仅圆形二维码支持颜色设置，方形二维码默认为黑色。").optional(),
  "describe": z.string().describe("对应的二维码描述").optional(),
  "query_param": z.string().describe("小程序启动参数，内容按照格式为参数名=参数值&参数名=参数值。打开小程序的query ，在小程序 onLaunch的方法中获取。可查看 <a href=\"https://opendocs.alipay.com/support/01rb2a\">如何获取各种场景的启动参数</a>。").optional(),
  "size": z.string().describe("合成后图片的大小规格，有s、m、l三档可选。").optional(),
  "url_param": z.string().describe("page/component/component-pages/view/view为小程序中能访问到的页面路径").optional()
}