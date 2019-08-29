<template>
  <div>
    <Header title="我的电影"></Header>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
  import Header from "@/components/Header";
  import tabBar from "@/components/TabBar"; 
  export default {
    name: "Profile",
    components: {
      Header,
      tabBar
    }
  }
</script>