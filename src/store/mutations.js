/**
 * Created by luowendi on 2017/4/16.
 */
import * as types from './mutation_types'

export default {
  [types.CHANGE_CURRENT_THEME_ID](state,id){
     state.currentThemeId = id;
  }
}
