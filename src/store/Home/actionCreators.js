import Get from '../../axios/Get'

export default {
    getBanners(){
        return dispatch=>{
            Get('/LF/1.0/v_h5_5.1.2_33/contents/home_v2',{
                o: "http://m.lifevc.com",
                NewCartVersion: true
            }).then(res=>{
                //console.log(res.data)
            })
            Get('/NLF/1.0/v_h5_5.1.2_33/Stroll/StrollItemList',{
                pageNo: 1,
                o: "http://m.lifevc.com",
                NewCartVersion: true
            }).then(res=>{
                //console.log(res.data)
            })
        }
    }
}