import axios from 'axios';

axios.defaults.baseURL = 'https://yesno.wtf/';

export const getAnswer = async () => {
  try {
    const {
      data: { answer },
    } = await axios('api');

    return answer;
  } catch (e) {}
};
