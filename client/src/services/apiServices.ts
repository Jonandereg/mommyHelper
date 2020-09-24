const BASE_URL = 'http://localhost:3001/';

const fetchRequest = (url:String,options?:Object) => {
  return fetch(`${BASE_URL}`+url, options)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => {
      console.log(err);
    });
};

export const getUsers = () => {
  return fetchRequest('users');
};

export const postEvent = (body:Object) => {
  return fetchRequest('register',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};
