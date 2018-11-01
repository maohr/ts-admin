import Vue from 'vue';
import Vuex from 'vuex';
import { IAppState} from './modules/app';
import { ITagsViewState} from './modules/tagsView';

Vue.use(Vuex);

export interface IRootState {
  app: IAppState;
  tagsView: ITagsViewState;
}

const store = new Vuex.Store<IRootState>({
});

export default store;
