const axios = require("axios");

module.exports = {

    findAll: function (req, res) {
        //first we call the github api for all my repos
        axios.get("https://api.github.com/users/mitburr/repos").then(results => {
            //then we map the repos to an array with the information I want (pretty much just the link)
            res.send(results.data.map(Element => {
                let repoObj = {
                    repoTitle: Element.name,
                    repoLink: Element.html_url,
                }
                return repoObj;
            }))
        })
    }

}