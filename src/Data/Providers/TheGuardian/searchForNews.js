import { getEnvironmentsForArticle, getEnvironmentsForArticles } from './apiEnvironments';

const fetchService = ({ id, ...params }) => {
    const options = {
        headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json'
        })
    };

    if (id) return fetch(getEnvironmentsForArticle(id), options);
    else return fetch(getEnvironmentsForArticles(params), options);
};

const handleResponse = response => {
    if (response.ok) return response.json();
    else return Promise.reject(new Error('The guardian news service could not be queried'));
};

const transformResponse = response => {
    return response.response || {};
};

const searchForNews = params => {
    return fetchService(params)
        .then(handleResponse)
        .then(transformResponse);
};

export { searchForNews, handleResponse };
