import axios from 'axios'

export default{
    gitRepos: function() {
         console.log("route called")
         return axios.get("http://localhost:3001/api/repos")
    },
}