import qs from 'qs';

export const getQueryUrl = (blogs, pagination, locale) => {
    const query = {
        populate: {
            blogs: blogs,
        },
        pagination: pagination,
        locale: locale || "vi",
    };

    const queryToString = qs.stringify(query, { encode: false });
    return queryToString
}
