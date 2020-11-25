<template>
    <div>
        <button @click="goBack">Go Back</button><br><br>
        <button id="checkVideoResult" @click="checkVideo">测试是否支持视频标签</button>
        <button @click="goHtml5Page">查看更多 HTML5 的信息</button><br><br>
        <div class="cat--box">
            <h3>下面是用一个div画的图形</h3>
            <div class="cat--single_div"></div>
        </div><br><br>
        <div class="sully--box cat--box">
            <h3>下面是用一个div画的图形</h3>
            <div class="sully--single_div"></div>
        </div><br><br>
        <h1>
            <a target="blank" :href="url">{{msg}}</a>
        </h1>
    </div>
</template>

<script>
import './index.css'

export default {
    name: 'Cat',

    data () {
        return {
            msg: 'A SingleDiv',
            url: 'https://a.singlediv.com/'
        }
    },

    methods: {
        goBack () {
            this.$router.back()
        },

        goHtml5Page () {
            this.$router.push('./htmlfive')
        },

        // 检测浏览器是否支持video标签
        checkVideo () {

            /**
             *  canPlayType() 方法浏览器是否能播放指定的音频/视频类型:
             * 
             *  "probably" - 浏览器最可能支持该音频/视频类型
             *  "maybe" - 浏览器也许支持该音频/视频类型
             *  "" - （空字符串）浏览器不支持该音频/视频类型
             */
            if (!!document.createElement('video').canPlayType) {
                var vidTest = document.createElement("video"),
                    oggTest = vidTest.canPlayType('video/ogg; codecs="theora, vorbis"')

                if (!oggTest) {

                    // mp4
                    var h264Test = vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')

                    if (!h264Test) {

                        // 不支持
                        document.getElementById("checkVideoResult").innerHTML = "Sorry. No video support."
                    } else {

                        if (h264Test === "probably") {
                            
                            // 支持 mp4 格式
                            document.getElementById("checkVideoResult").innerHTML = "Yes! Full support!"
                        } else {

                            // "maybe" - 浏览器也许支持该音频/视频类型
                            document.getElementById("checkVideoResult").innerHTML = "Well. Some support."
                        }
                    }
                } else {

                    // ogg
                    if (oggTest === "probably") {
                        
                        // 支持 ogg 的格式
                        document.getElementById("checkVideoResult").innerHTML = "Yes! Full support!"
                    } else {

                        // "maybe" - 浏览器也许支持该音频/视频类型
                        document.getElementById("checkVideoResult").innerHTML = "Well. Some support."
                    }
                }
            } else {

                // 完全不支持
                document.getElementById("checkVideoResult").innerHTML = "Sorry. No video support."
            }
        }
    }
}
</script>
