<template>
  <div class="city_body">
    <div class="city_list">
      <better-scroll ref="city_List">
        <div>
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul class="clearfix">
              <li
                v-for="item in hotList"
                :key="item.id"
                @tap="handleToCity(item.nm , item.id)"
              >{{ item.nm }}</li>
            </ul>
          </div>
          <div class="city_sort" ref="city_sort">
            <div v-for="item in cityList" :key="item.index">
              <h2>{{ item.index }}</h2>
              <ul>
                <li
                  v-for="itemList in item.list"
                  :key="itemList.id"
                  @tap="handleToCity(itemList.nm , itemList.id)"
                >{{ itemList.nm }}</li>
              </ul>
            </div>
          </div>
        </div>
      </better-scroll>
    </div>
    <div class="city_index">
      <ul>
        <li
          v-for="(item,index) in cityList"
          :key="item.index"
          @touchstart="handleToIndex(index)"
        >{{ item.index }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {messageBox} from '@/components/JS'

export default {
  name: "City",
  data() {
    return {
      isLoading: false,
      hotList: [],
      cityList: []
    };
  },
  mounted() {
    let cityList = window.localStorage.getItem('cityList')
    let hotList = window.localStorage.getItem('hotList')

    if(cityList && hotList) {
      this.cityList = JSON.parse(cityList)
      this.hotList = JSON.parse(hotList)
    }else{
      this.$api.getCityList().then(res => {
        console.log("getApiOfCityList")
        let cities = res.cities;
        var result = this.formatCityList(cities);
        console.log("result", result);
        this.cityList = result.cityList;
        this.hotList = result.hotList;

        window.localStorage.setItem('cityList', JSON.stringify(result.cityList))
        window.localStorage.setItem('hotList', JSON.stringify(result.hotList))
      });
    }

    messageBox({
      title: "定位",
      content: "金华",
      cancel: "取消",
      ok: "切换定位"
    })
  },
  methods: {
    formatCityList(cities) {
      var cityList = [];
      var hotList = [];

      for (let i = 0; i < cities.length; i++) {
        if (cities[i].isHot) hotList.push(cities[i]);
        let firstLetter = cities[i].py.substring(0, 1).toUpperCase();
        let city = {
          nm: cities[i].nm,
          id: cities[i].id
        };
        if (toCom(firstLetter)) {
          cityList.push({
            index: firstLetter,
            list: [city]
          });
        } else {
          for (let j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) cityList[j].list.push(city);
          }
        }
      }

      cityList.sort((a, b) => {
        if (a.index > b.index) {
          return 1;
        } else if (a.index < b.index) {
          return -1;
        } else {
          return 0;
        }
      });

      console.log(cityList);
      function toCom(firstLetter) {
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }

      return {
        cityList,
        hotList
      };
    },
    handleToCity(name,id) {
      this.$store.commit("city/CITY_INFO", {name,id})
      this.$router.push("/movie/nowPlaying")
    },
    handleToIndex(index) {
      var h2 = this.$refs.city_sort.getElementsByTagName("h2");
      //this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
      this.$refs.city_List.toScrollTop(-h2[index].offsetTop);
    }
  }
};
</script>

<style scoped>
#content .city_body {
  margin-top: 45px;
  display: flex;
  width: 100%;
  position: relative;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::-webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>