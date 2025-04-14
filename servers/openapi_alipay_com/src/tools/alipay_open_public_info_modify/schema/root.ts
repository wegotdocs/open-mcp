import { z } from "zod"

export const inputParams = {
  "app_name": z.string().describe("生活号名称，2-20个字之间。注意：\t* 不得含有违反法律法规和公序良俗的相关信息；\t* 不得侵害他人名誉权、知识产权、商业秘密等合法权利；\t* 不得以太过广泛的、或产品、行业词组来命名，如：女装、皮革批发；\t* 不得以实名认证的媒体资质账号创建服务窗，或媒体相关名称命名服务窗，如：XX电视台、XX杂志等。").optional(),
  "auth_pic": z.string().describe("授权运营书图片地址，企业商户若为被经营方授权，需上传加盖公章的扫描件。支持 .jpg、 .jpeg、 .png 格式，需小于1M。使用 <a href=\"https://opendocs.alipay.com/apis/api_3/alipay.offline.material.image.upload\">alipay.offline.material.image.upload</a>(上传门店照片和视频接口)上传图片后，将得到的image_url回填与此处。").optional(),
  "background_url": z.string().describe("背景图片地址，建议尺寸 1600 x 1000px，支持.jpg .jpeg .png格式，小于1M。使用 <a href=\"https://opendocs.alipay.com/apis/api_3/alipay.offline.material.image.upload\">alipay.offline.material.image.upload</a>(上传门店照片和视频接口)上传图片后，将得到的image_url回填与此处。").optional(),
  "introduction": z.string().describe("简介").optional(),
  "license_url": z.string().describe("营业执照地址，建议尺寸 320*320 px，支持 .jpg、 .jpeg、 .png 格式，需小于1M。\t使用 <a href=\"https://opendocs.alipay.com/apis/api_3/alipay.offline.material.image.upload\">alipay.offline.material.image.upload</a>(上传门店照片和视频接口)上传图片后，将得到的image_url回填与此处。").optional(),
  "logo_url": z.string().describe("生活号头像地址，建议尺寸 320*320 px，支持 .jpg、 .jpeg、 .png 格式，需小于1M。\t使用 <a href=\"https://opendocs.alipay.com/apis/api_3/alipay.offline.material.image.upload\">alipay.offline.material.image.upload</a>(上传门店照片和视频接口)上传图片后，将得到的image_url回填与此处。").optional(),
  "notify_url": z.string().describe("通知地址").optional(),
  "public_greeting": z.string().describe("欢迎语").optional(),
  "shop_pics": z.array(z.string()).describe("门店照片地址，支持 .jpg、 .jpeg、 .png 格式，需小于1M。\t使用 <a href=\"https://opendocs.alipay.com/apis/api_3/alipay.offline.material.image.upload\">alipay.offline.material.image.upload</a>(上传门店照片和视频接口)上传图片后，将得到的image_url回填与此处。").optional()
}