import axios from "axios";

//首页数据

// export async function getClassifyHome(){
//   const {data} = await axios.get("/jucoo/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.5&referer=2")
//   return data
// }
// //https://api.juooo.com/vip/index/getVipHomeSchedular?version=6.0.5&referer=2
// export async function getVipHomeSchedular(){
//    const {data} = await axios.get("/jucoo/vip/index/getVipHomeSchedular?version=6.0.5&referer=2")
//    return data
// }


let getClassifyHome = new Promise( async (resolve, reject) => {
    const {data} = await axios.get("/jucoo/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.5&referer=2")
    // console.log(data)
    resolve(data.data)
  })
  
let getVipHomeSchedular = new Promise( async (resolve, reject) => {
    const {data} = await axios.get("/jucoo/vip/index/getVipHomeSchedular?version=6.0.5&referer=2")
    // console.log(data)
    resolve(data.data)
})
// https://api.juooo.com/home/index/getHotsRecommendList?city_id=0&version=6.0.5&referer=2
let getHotsRecommendList = new Promise( async (resolve, reject) => {
    const {data} = await axios.get("/jucoo/home/index/getHotsRecommendList?city_id=0&version=6.0.5&referer=2")
    // console.log(data)
    resolve(data.data)
})
// https://api.juooo.com/home/index/getFloorShow?city_id=0&version=6.0.5&referer=2
let getFloorShow = new Promise( async (resolve, reject) => {
    const {data} = await axios.get("/jucoo/home/index/getFloorShow?city_id=0&version=6.0.5&referer=2")
    // console.log(data)
    resolve(data.data)
})
export default function all(){
    return Promise.all( [
        getClassifyHome,
        getVipHomeSchedular,
        getHotsRecommendList,
        getFloorShow
    ] )
}