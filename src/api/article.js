import request from '@/utils/request'

export function getarticletype(params) {
  return request({
    url: '/article/type',
    method: 'get',
    params
  })
}
export function getarticle(params) {
  return request({
    url: '/article/detail',
    method: 'get',
    params
  })
}
export function getarticlelist(params) {
  return request({
    url: '/article/list',
    method: 'get',
    params
  })
}
// 【新增】
// /v1/article/add
// name 姓名
// create_time 创建时间
// type 类型
// remark 备注
// content 内容
// token 用户id
export function addArticle(params) {
  return request({
    url: '/v1/article/add',
    method: 'post',
    params
  })
}
// 【编辑】
// /v1/article/edit
// name 姓名
// create_time 创建时间
// type 类型
// remark 备注
// content 内容
// token 用户id
// articleId 文章id
export function editArticle(params) {
  return request({
    url: '/v1/article/edit',
    method: 'post',
    params
  })
}
// 【显示文章】
// v1/article/showList
// type 类型
// name 文章名称
// token 用户id
// pageNo 当前页
// pageSize 一页多少条
export function showList(params) {
  return request({
    url: 'v1/article/showList',
    method: 'get',
    params
  })
}
// 【查看】
// /v1/article/show
// token 用户id
// articleId 文章名
export function showArticleDetail(params) {
  return request({
    url: '/v1/article/show',
    method: 'get',
    params
  })
}
// 【删除】
// /v1/article/delete
//   token 用户id
// articleId 文章名
export function deleteArticle(params) {
  return request({
    url: '/v1/article/delete',
    method: 'get',
    params
  })
}
// 文章类型
// 【显示】
// /v1/articleType/showType
// token 用户id
export function showType(params) {
  return request({
    url: '/v1/articleType/showType',
    method: 'get',
    params
  })
}
