import request from '@/utils/request'

export function gethomepagelist(params) {
  return request({
    url: '/homepage/getlist',
    method: 'get',
    params
  })
}
export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
