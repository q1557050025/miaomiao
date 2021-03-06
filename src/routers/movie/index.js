export default {
  path: '/movie',
  component: () => import("@/views/Movie"),
  children: [
    {
      path:'cityList',
      component: () => import('@/components/CityList')
    },
    {
      path:'commingSoon',
      component: () => import('@/components/CommingSoon')
    },
    {
      path:'nowPlaying',
      component: () => import('@/components/NowPlaying')
    },
    {
      path:'search',
      component: () => import('@/components/Search')
    },
    {
      path: '/movie',
      redirect: '/movie/cityList'
    }
  ]
}