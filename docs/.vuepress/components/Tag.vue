<template>
  <div class="board">
    <div v-for="(value, index) in tagList" v-bind:key="value">
      <span v-bind:style="{ background: colorList[index] }">{{ value }}</span>
    </div>
  </div>
</template>
<script>
const colorList = [
  "#fc5185",
  "#ffc7c7",
  "#3fc1c9",
  "#abedd8",
  "#ffb6b9",
  "#67c9b2",
  "#8785a2",
];
export default {
  props: {
    tagList: [],
  },
  data() {
    return {
      colorList: colorList,
    };
  },
};
</script>

<style scoped>
.board{
    display: flex;
    /* padding: 20px; */
}
  div {
    display: inline;
    margin: 5px 2px;
  }
  div > span {
    padding: 4px;
    color: white;
    font-size: 14px;
    /* background-color: cadetblue; */
    border-radius: 5px;
    transition: font-size 0.5s;
    -webkit-transition: font-size 0.5s; /* Safari */
    transition: box-shadow 0.5s;
    -webkit-transition: box-shadow 0.5s; /* Safari */
    cursor: context-menu;
  }
  
    div>span:hover{
        font-size: 16px;
        box-shadow: 2px 2px 10px 0px #bba3a3d6;;

    }

</style>