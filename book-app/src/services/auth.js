import api from "../configs/api.js";

export const loginUser = async (username, password) => {
  try {
    const response = await api.post("auth/login", {
      username: username,
      password: password,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await api.post("auth/register", {
      username: username,
      password: password,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};
