import axios from 'axios'

export const api = {
  async getMovieComingList(cityId) {
    var result = {}
    await axios.get('/api/movieComingList?cityId='+cityId).then((res) => {
      result = res.data.data
    })
    return result
  },
  async getDetailmovie(movieId) {
    var result = {}
    await axios.get('/api/detailmovie?movieId='+ movieId).then((res) => {
      result = res.data.data
    })
    return result
  },
  async getCityList() {
    var result = {}
    await axios.get('/api/cityList').then((res) => {
      result = res.data.data
    })
    return result
  },
  async getMovieOnInfoList(id) {
    var result = {}
    await axios.get('/api/movieOnInfoList?cityId=' + id).then((res) => {
      result = res.data.data
    })
    return result
  },
  async getMovieComingList(cityId) {
    var result = {}
    await axios.get('/api/movieComingList?cityId='+cityId).then((res) => {
      result = res.data.data
    })
    return result
  },
  async getSearchList(cityId,newVal) {
    var result = {}
    await axios.get('/api/searchList?cityId='+ cityId +'&kw='+ newVal).then((res) => {
      result = res.data.data
    })
    return result
  },
}
