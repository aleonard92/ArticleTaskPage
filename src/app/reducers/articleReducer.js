import { getAllArticle } from "../../services/getAllArticle"

export const articleReducer = (state = [], actions) => {
    switch (actions.type){
        case '@article/init':
            return actions.payload.articles
        default:
            return state
    }

}

export const  initArticles = () => {
    return async (dispatch) => {
        const articles = await getAllArticle();
        dispatch({
            type: '@article/init',
            payload: articles
        })
    }
}