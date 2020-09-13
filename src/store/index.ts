import { UserDTO } from '@/models/index';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export interface IRootState{
  user: UserDTO
}

export default new Vuex.Store<IRootState>({
  
})
