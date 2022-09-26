const inquirer = require('inquirer');
const mangadex = require('mangadex-api');

const getManga = async (args) => {
    const searchResults = []
    // for (const key in args) {
    //     console.log(key)
    //     console.log(args[key].id)
    //     console.log(args[key].attributes.title.en)
    // }
    for (const key in args) {
        const pair = {
            name: args[key].attributes.title.en,
            value: args[key].id
        }
        searchResults.push(pair);
    }
    return inquirer.prompt([{
        type: 'list',
        name: 'userSelected',
        message: 'search results',
        choices: searchResults
    }]);
}

const printManga = (obj) => {
    console.log(`Title: ${obj.data.attributes.title.en}`)
    console.log(`Intended Audience Demographic: ${obj.data.attributes.publicationDemographic}`)
    console.log(`Content Rating: ${obj.data.attributes.contentRating}`)
    console.log(`Manga Status: ${obj.data.attributes.status}`)
    console.log(`Synopsis: ${obj.data.attributes.description.en}`)
}

const search = async (args) => {
    try {

        const {
            title
        } = args;

        const response = await mangadex.searchName(title);



        const searchResult = await getManga(response.body.data);



        const searchedManga = await mangadex.getById(searchResult.userSelected)

        printManga(searchedManga.body)


    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    search
};