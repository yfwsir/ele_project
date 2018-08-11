export default {
    install(Vue){
        // 拼接图片地址链接的过滤器
        Vue.filter('formateImg',(value)=>{
            if(!value){
                return 
            }
            if(value.indexOf('jpeg')>-1){
                return 'http://fuss10.elemecdn.com/'+value + '.jpeg?imageMogr/format/webp/thumbnail/!65x65r/gravity/Center/crop/65x65/'
            }else if(value.indexOf('png'>-1)) {
                return 'http://fuss10.elemecdn.com/'+value + '.png?imageMogr/format/webp/thumbnail/!65x65r/gravity/Center/crop/65x65/'
            }
        })

        //保留两位小数的过滤器
        Vue.filter('formateSale',(value)=>{
            return value.toFixed(2)
        })
    }
}
