/**
 * Created by luowendi on 2017/4/16.
 */
import * as types from './mutation_types'

export default {
  changeCurrentThemeId:({ commit },id) => {
    commit(types.CHANGE_CURRENT_THEME_ID,id)
  },
  addNews:({ commit },payload) => {
    commit(types.ADD_NEWS,payload)
  },
  addNewId:({commit},id) => {
    commit(types.ADD_NEWID,id)
  },
  changeFirstLoad:({ commit }) => {
    commit(types.CHANGE_FIRST_LOAD)
  },
  changeFirstSide:({ commit }) => {
    commit(types.CHANGE_FIRST_SIDEBAR)
  },
  deleteData:({commit}) => {
    commit(types.DELETE_STORIES);
  },
  changeStoryExtra:({commit},extra) => {
    commit(types.STORY_EXTRA,extra)
  }
}
