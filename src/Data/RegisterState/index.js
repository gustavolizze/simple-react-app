import { setGlobal, addReducer } from 'reactn';
import { searchForNews } from './../Providers/TheGuardian';

const hasNews = (pages, currentPage) => {
    if (!pages || !currentPage) return true;

    return currentPage < pages;
};

const registerState = () => {
    setGlobal({
        currentCategory: undefined,
        currentSearch: '',
        currentPage: 0,
        pages: 0,
        waitingExternalService: false,
        hasMoreNews: true,
        news: [],
        article: {},
        error: null
    });

    addReducer('fetchNews', global => {
        const { currentSearch, currentCategory } = global;

        return searchForNews({ currentSearch, currentCategory })
            .then(response => ({
                currentPage: 1,
                hasMoreNews: hasNews(response.pages, 1),
                pages: response.pages,
                waitingExternalService: false,
                news: response.results || []
            }))
            .catch(error => ({ error }));
    });

    addReducer('concatNews', (global, id) => {
        const { news, currentSearch, currentCategory, currentPage } = global;

        return searchForNews({ currentSearch, currentCategory, currentPage })
            .then(response => ({
                currentPage: response.currentPage,
                hasMoreNews: hasNews(response.pages, response.currentPage),
                pages: response.pages,
                waitingExternalService: false,
                news: (news || []).concat(response.results || [])
            }))
            .catch(error => ({ error }));
    });

    addReducer('fetchArticle', (global, id) => {
        return searchForNews({ id })
            .then(response => ({
                article: response.content,
                waitingExternalService: false
            }))
            .catch(error => ({ error }));
    });
};

export { registerState };
