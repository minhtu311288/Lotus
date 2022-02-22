import axios from 'axios'
const HOST = 'http://localhost:3000'
// POST
export const CallAPIPOST = (url, request, optional) => {
    const response = axios.post(HOST + url, request, optional)
        .then(function (response) {
            if (response.status != 200) return
            return response.data
        })
        .catch(function (error) {
            console.log("error ", error)
            return error
        })
    return response
}

// GET
export const CallAPIGET = (url, header) => {
    const response = axios.get(HOST + url, header)
        .then(function (response) {
            if (response.status != 200) return
            return response.data
        })
        .catch(function (error) {
            console.log("error ", error)
            return error
        })
    return response
}