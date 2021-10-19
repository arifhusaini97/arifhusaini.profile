import axios from 'axios';

const baseDomain = process.env.VUE_APP_BASE_URL;
const baseURL = `${baseDomain}`; // Incase of /api/v1;
// ALL DEFAULT CONFIGURATION HERE

const HttpClient = axios.create({
  baseURL,
  headers: {
    // "Authorization": "Bearer xxxxx"
  },
});
HttpClient.interceptors.response.use(
  (response) => {
    try {
      if (response.data.success == false)
        throw new Error(
          `Error: ${response.data.errorMessage}, 
          Errors: ${response.data.errorMessages}`,
        );
      else return response;
    } catch (e) {
      //Debug
      console.error(e.message);
      return response;
    }
  },
  (error) => {
    //Debug
    console.log(`Error: ${error}`);
    return Promise.resolve({ error });
  },
);
export default HttpClient;
