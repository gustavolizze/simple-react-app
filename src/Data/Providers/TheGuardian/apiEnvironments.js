import { environment } from './../../../Environments';

const getEnvironmentsForArticle = id => {
    const url = new URL(`${environment.theGuardian.article}/${id}`);
    url.searchParams.append('api-key', environment.theGuardian.apiKey);
    url.searchParams.append('show-fields', 'body,thumbnail,publication');
    return url;
};

const getEnvironmentsForArticles = ({ currentPage, currentCategory, currentSearch }) => {
    const url = new URL(environment.theGuardian.search);
    url.searchParams.append('api-key', environment.theGuardian.apiKey);
    url.searchParams.append('lang', 'en');
    url.searchParams.append('page-size', 6);
    url.searchParams.append('show-references', 'author');
    url.searchParams.append('show-fields', 'trailText,thumbnail,publication');

    if (currentPage || currentPage === 0) url.searchParams.append('page', currentPage + 1);
    if (currentCategory) url.searchParams.append('section', currentCategory);
    if (currentSearch) url.searchParams.append('q', currentSearch);

    return url;
};

export { getEnvironmentsForArticle, getEnvironmentsForArticles };
