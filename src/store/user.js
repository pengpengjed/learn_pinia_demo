import { defineStore } from 'pinia';

const useUser = defineStore('user', {
  state: () => ({
    name: 'peng',
    age: 24,
    level: 88
  })
});

export default useUser;
