import request from '@/utils/request'
// 【新增】
// /v1/image/add
// imageName 图片名称
// imageLocationId  图片位置ID
// imageUrl 图片地址
// hrefUrl 点击后地址
// status 状态
// token 用户id
// sortNum 排序
export function addPicture(parms) {
  return request({
    url: '/v1/image/add',
    method: 'post',
    data: {
      parms
    }
  })
}
// 【编辑】
// /v1/image/edit
// imageName 图片名称
// imageLocationId  图片位置ID
// imageUrl 图片地址
// hrefUrl 点击后地址
// status 状态
// token 用户id
// sortNum 排序
// imageId 图片id
export function editPicture(parms) {
  return request({
    url: '/v1/image/edit',
    method: 'post',
    parms
  })
}
// 【显示】
// /v1/image/showList
// imageLocationId 用户位置ID
// status 状态
// token 用户id
// pageNo 当前页
// pageSize 一页几条
export function showPictureList(parms) {
  return request({
    url: '/v1/image/showList',
    method: 'post',
    parms
  })
}
// 【下拉框】
// return imageLocation
export function selectPictureStauts(parms) {
  return request({
    url: '/v1/image/select',
    method: 'get',
    parms
  })
}
//
// 【查看】
// /v1/image/showDetails
// token 用户id
// imageId 图片id
export function showDetails(parms) {
  return request({
    url: '/v1/image/showDetails',
    method: 'post',
    parms
  })
}
