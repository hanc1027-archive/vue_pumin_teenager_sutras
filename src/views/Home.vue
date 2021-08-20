<template>
  <div class="home">
    <h3>【普民精舍線上青年班-普門品及大悲咒共修】</h3>
    <ul class="nav justify-content-center" style="padding: auto; cursor:pointer">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" @click="change_web(functions_url_obj['sign_01'])">普門品誦持部數-登記</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" @click="change_web(functions_url_obj['sign_02'])">大悲咒誦持部數-登記</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" @click="change_web(functions_url_obj['query_01'])">普門品-查詢</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" @click="change_web(functions_url_obj['query_02'])">大悲咒-查詢</a>
        </li>
    </ul>

    <center>
    <iframe :src=show_web width="90%" height="700vh"></iframe>
    </center>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data(){
    return {
      show_web:"https://docs.google.com/forms/d/e/1FAIpQLSfJyrw0uzmNw08ncl4U8REk3HOJx_9e2HrYjLPpPyt2qoP5RA/viewform",
      functions_url_obj:{
        "sign_01":"https://docs.google.com/forms/d/e/1FAIpQLSfJyrw0uzmNw08ncl4U8REk3HOJx_9e2HrYjLPpPyt2qoP5RA/viewform", // 誦普門品輸入表單 - 青年班
        "sign_02":"https://docs.google.com/forms/d/e/1FAIpQLSe1pR8w-i--NQy5Otr0fg8hKy76m0tX2Jr1cSw18qH1PXkeHg/viewform", // 誦大悲咒輸入表單 - 青年班
        "query_01":"https://docs.google.com/spreadsheets/d/1i_pOMnB_Lz2936BuovZ2WluQ3gQ3jUt3nDpiShYdfxE/edit?resourcekey#gid=902733678", // 誦普門品輸入表單-青年班 (回覆)
        "query_02":"https://docs.google.com/spreadsheets/d/1GzkKnXWvsJyiyBw8INgrMGM_M8OtckAwa3dv1WjvNQ0/edit?resourcekey#gid=1486725159" // 誦大悲咒輸入表單-青年班 (回覆)
      }
    }
  },
  methods:{
    change_web(url){
      this.show_web = url
    }
  }
}
</script>
