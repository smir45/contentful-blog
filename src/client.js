import * as contentful from 'contentful';


const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_ID,
})


export default client;