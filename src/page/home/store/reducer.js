import { fromJS } from 'immutable'
import * as constants from './constants'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommend: [],
    articlePage: 1,
    showScroll: false

}
);

const changeHome = (state, action) => {
    return state.merge({
        topicList: fromJS(action.result.topicList),
        articleList: fromJS(action.result.articleList),
        recommend: fromJS(action.result.recommend)
    })
}
const changeHome2 = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.result),
        articlePage: action.nextPage
    })
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.change_home_data:
            return changeHome(state, action)
        case constants.change_home_data1:
            return changeHome2(state, action)
        case constants.gleTopShow:
            return state.merge({
                showScroll: action.show
            })
        default:
            return state
    }
}