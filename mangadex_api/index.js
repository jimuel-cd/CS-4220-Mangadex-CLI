const superAgent = require('superAgent');
const config = require('./config.json');

const searchName = async (mangaName) => {
    try {
        const mangadexUrl = `${config.url}?title=${mangaName}`;
        const response = await superAgent.get(mangadexUrl);

        return response

    } catch (error) {
        return error;

    }
}

const getById = async (id) => {
    try {
        const mangadexIdUrl = `${config.url}/${id}`;
        const responseById = await superAgent.get(mangadexIdUrl);

        return responseById;

    } catch (error) {
        return error
    }
}

module.exports = {
    searchName,
    getById
};