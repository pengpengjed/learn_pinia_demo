import { defineStore } from 'pinia';

const useHome = defineStore('home', {
  state: () => ({
    banner: [],
    recommends: []
  }),
  actions: {
    async fetchHomeMultidata() {
      const res = await fetch('http://123.207.32.32:8000/home/multidata');
      const data = await res.json();

      this.banners = data.data.banner.list;
      this.recommends = data.data.recommend.list;

      return data;
    }
  }
});

export default useHome;
