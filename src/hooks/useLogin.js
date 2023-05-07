import axios from "axios";

const useLogin = () => {
  const login = async (email, password) => {
    const user = {
      email,
      password,
    };

    const url = `/api/users/login`;
    try {
      const response = await axios.post(url, user);
      if (response.statusText === "OK") {
        return response.data;
      }
    } catch (error) {
      return error.message;
    }
  };

  return { login };
};

export default useLogin;
