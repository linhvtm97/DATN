import axios from 'axios'
import * as Config from '../constants/Config'

export default function callApi(endpoint,method='GET',body) {
    return axios({
        headers: {
            'content-type': 'application/json'
        },
        method: method,
        url: `${Config.APIUrl}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    })
}