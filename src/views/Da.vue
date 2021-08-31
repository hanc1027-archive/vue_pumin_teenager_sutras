<template>
  <div>
   <div><router-link to="/"><img src="@/assets/logo.png" style="width:25px"></router-link></div> 
    <div id="sidebar_left" @click="pre"><i class="bi bi-arrow-left-circle"></i></div>
    <div id="sidebar_right" @click="next"><i class="bi bi-arrow-right-circle"></i></div>
    <div id="content" class="card text-dark bg-light mb-3">
      <div class="card-header">大悲咒 第{{which_page+1}}頁</div>
      <div class="card-body">
        <p class="card-text">{{pages[which_page]}}
        </p>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            which_page:0,
            pages:[
                `南無喝囉怛那哆囉夜耶． 南無阿唎耶．
                    婆盧羯帝爍缽囉耶 菩提薩埵婆耶
                    摩訶薩埵婆耶．摩訶迦盧尼迦耶．
                    唵 薩皤囉罰曳． 數怛那怛寫．
                    南無悉吉慄埵伊蒙阿唎耶 
                    婆盧吉帝室佛囉楞馱婆．
                    南無那囉謹墀 醯利摩訶皤哆沙咩 
                    薩婆阿他豆輸朋 阿逝孕 `,
                `薩婆薩哆那摩婆薩哆．那摩婆伽 
                    摩罰特豆． 怛姪他 
                    唵 阿婆盧醯  盧迦帝 迦羅帝 夷醯唎 
                    摩訶菩提薩埵． 薩婆薩婆． 摩囉摩囉．
                    摩醯摩醯唎馱孕．俱盧俱盧羯蒙
                    度盧度盧罰闍耶帝 摩訶罰闍耶帝．
                    陀囉陀囉地唎尼 室佛囉耶 
                    遮囉遮囉． 摩麼罰摩囉 穆帝隸．
                    伊醯伊醯．室那室那． 阿囉參佛囉舍利．
                    罰娑罰參．佛囉舍耶．
                    呼嚧呼嚧摩囉． 呼嚧呼嚧醯利．
                    娑囉娑囉． 悉唎悉唎． 蘇嚧蘇嚧．
                    菩提夜菩提夜 菩馱夜菩馱夜 彌帝利夜 
                    那囉謹墀．地利瑟尼那．`,
                `婆夜摩那 娑婆訶．
                    悉陀夜 娑婆訶．
                    摩訶悉陀夜 娑婆訶．
                    悉陀喻藝 室皤囉耶 娑婆訶．
                    那囉謹墀 娑婆訶．
                    摩囉那囉 娑婆訶．
                    悉囉僧阿穆佉耶 娑婆訶．
                    娑婆摩訶阿悉陀夜 娑婆訶．`,
                `者吉囉阿悉陀夜 娑婆訶．
                    波陀摩羯悉陀夜 娑婆訶．
                    那囉謹墀皤伽囉耶 娑婆訶．
                    摩婆利勝羯囉夜 娑婆訶．
                    南無喝囉怛那哆囉夜耶． 南無阿唎耶 
                    婆嚧吉帝 爍皤囉夜 娑婆訶．
                    唵 悉殿都 漫多囉 跋陀耶 娑婆訶．`
            ]
        }
    },
    methods:{
        pre(){
            if(this.which_page>0){
                this.which_page--
            }else if(this.which_page==0){
                alert("這已是最前頁")
            }
        },
        next(){
            if(this.which_page<this.pages.length-1){
                this.which_page++
            }else if(this.which_page==this.pages.length-1){
                alert("這已是最後頁,將帶您回到第1頁")
                this.which_page=0   
            }
        }
    }
};
</script>

<style scoped>
#sidebar_left{
    background-color:#FFECC9;
    width:10%;
    /* height:400px; */
    text-align:center;
    line-height:550px;
    float:left;
}
#sidebar_right{
    background-color:#FFECC9;
    width:10%;
    /* height:400px; */
    text-align:center;
    line-height:550px;
    float:right;
}
#content{
    /* margin-left:120px; */
    /* margin-right:120px; */
    width:80%;
    size: 20px;
    height:550px;
    /* height:400px; */
    /* background-color:#F2FFF2; */
    /* line-height:400px; */
    /* max-width: 40rem */
}
p{
    text-align:left;
}
</style>