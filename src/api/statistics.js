import request from '@/utils/request'
import { merge } from 'lodash'
export async function getRegistrationActive() {
  let { data: registerData } = await request({
    url: '/hos-portal/adminApi/user/newRegisterNum',
    method: 'get',
  })
  let { data: activityData } = await request({
    url: '/hos-portal/adminApi/user/activityNum',
    method: 'get',
  })
  registerData = registerData.map(({ num, date }) => ({ register: num, date }))
  activityData = activityData.map(({ num, date }) => ({ activity: num, date }))
  return merge(registerData, activityData)
}
