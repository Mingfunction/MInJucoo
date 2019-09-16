import axios from "axios";


//首页轮播图
export async function GetBanner(){
    const {data} = await axios.get("/jucoo/home/index/getClassifyHome?city_id=0&abbreviation=&version=6.0.5&referer=2")
    return data.slide_list
}