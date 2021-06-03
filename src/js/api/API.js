let userList = [];
import { userBaseURL } from "./urls.js";
export const getUserList = () => {
  return fetch(userBaseURL).then((response) => response.json());
};

export const getUserByuserId = (userId) => {
  return fetch(userBaseURL + "/" + userId).then((response) => response.json());
};

export const postUser = (name) => {
  return fetch(userBaseURL, options("Post", { name })).then((response) =>
    response.json()
  );
};

export const deleteUserByuserId = (userId) => {
  return fetch(userBaseURL + "/" + userId, options("delete")).then((response) =>
    response.json()
  );
};

const options = (method, bodyInput) => {
  return {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyInput),
  };
};
