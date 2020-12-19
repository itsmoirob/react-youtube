import axios from 'redaxios';

const KEY = 'AIzaSyAcu_qOGUhxSV6PPDGICMjQncgbAO6cac8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});