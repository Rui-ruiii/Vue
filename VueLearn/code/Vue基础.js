//创建vue实例
//el是元素选择器，例如所选元素id叫app，那么el就是“#app”，还可以选class等 类型的元素，就用“.app”；data就是实例中用到的数据
var datalearn = new Vue({
    el:"#datalearn",
    data:{
        message:"Hello Vue!",
        datalearndic:{
            key1:"value1",
            key2:"value2"
        },
        datalearnlist:["str0","str1","str2"]
    }
})

var vtextlearn = new Vue({
    el:".learnVtext",
    data:{
        message:"Hello Vue!",
        datalearndic:{
            key1:"value1",
            key2:"value2"
        },
        datalearnlist:["str0","str1","str2"]
    }
})
var vhtmllearn = new Vue({
    el:"#learnVhtml",
    data:{
        datadic:{
            text:"文本内容而非html内容",
            ishtml:"<a href='http://www.baidu.com'>html内容而非文本内容</a>"
        }
    }
})
var events = new Vue({
    el:"#mouseevent",
    data:{
        vdata:"testVdata"
    },
    methods:{
        event:function(){
            alert("mouseenvent???");
        },
        changeVdata:function(){
            //可在log中打印信息
            console.log(this.vdata);
        },
        foradd:function(){
            //每一次点击都可以累加显示
            this.vdata+="+累加+"
        }
    },
})
var count = new Vue({
    el:"#counter",
    data:{
        num:0
    },
    methods:{
        add:function(){
            if(this.num<10){
                this.num+=1;
            }
            else{
                alert("已达到最大值")
            }
            console.log('add');
        },
        sub:function(){
            if(this.num>0){
                this.num-=1;
            }else{
                alert("已达到最小值")
            }
            console.log("sub")
        }
    }
})
var picture = new Vue({
    el:"#svg_picture",
    data:{
        svg_status:false,
        num:0
    },
    methods:{
        changeSVGstatus:function(){
            this.svg_status = !this.svg_status;
        },
        addnum:function(){
            if(this.num<3){
                this.num++;
            }
            else{
                this.num = this.num-3
            }
        }
    },
})
var ele_apper = new Vue({
    el:"#ele_apper",
    data:{
        ele_status:true,
        num:5
    },
})

var img_bind = new Vue({
    el:"#img_bind",
    data:{
        img_src:"../material/烤鸡腿.svg",
        imgtitle:"测试v-bind",
        isactive:false
    },
    methods:{
        imgclick:function(){
            this.isactive = !this.isactive
        }
    }
})

var test_changepicture = new Vue({
    el:"#test_changepicture",
    data:{
        index:0,
        imgarr:[
            "../material/01.svg",
            "../material/02.svg",
            "../material/03.svg",
            "../material/04.svg",
            "../material/05.svg",
        ]
    },
    methods:{
        addindex:function(){
            this.index++;
        },
        subindex:function(){
            this.index--;
        }
    },
})

var vfor = new Vue({
    el:"#vfor",
    data:{
        arr:[2,4,6,8,10],
        objarr:[{name:"Jack"},{name:"Rose"},{date:"0611"},{weather:"sunny"}]
    },
    methods:{
        addobj:function(){
            // push的内容可以以后根据用户的输入加入到列表中，当前是写了一个固定的;
            //并且新添加的位置是在同名索引处，如果添加一个{addtext：“新内容”}，点击按钮就不会显示（因为在实例中没有让这个属性显示,就是说没有{{item.addtext}}）
            this.objarr.push({name:"这里是新添加的内容"})
        },
        removeobj:function(){
            //shift默认移除最左边的元素因此不必传参
            this.objarr.shift()
        }
    }
})

var v_on_append = new Vue({
    el:"#v_on_append",
    methods:{
        doit:function(p1,p2){
            console.log(p1),
            console.log(p2)
        },
        sayhi:function(){
            alert("Bingo!~")
        },
    },
})

var vmodel = new Vue({
    el:"#vmodel",
    data:{
        message:"学习v-model指令"
    },
    methods:{
        getmessage:function(){
            alert(this.message)
        },
        setmessage:function(){
            this.message="这条就是默认值"
        }
    },
})

var testNotepad = new Vue({
    el:"#testNotepad",
    data:{
        jobarr:["吃饭","睡觉","打豆豆"],
        jobmassage:"请输入任务"
    },
    methods:{
        addjob:function(){
            this.jobarr.push(this.jobmassage);
        },
        removejob:function(){
            this.jobarr.splice(this.jobmassage,1)
        },
        clearall:function(){
            this.jobarr = []
        }
    },
})