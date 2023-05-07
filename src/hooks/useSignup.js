import axios from "axios";

const useRegister = () => {
  const register = async (email, password, name) => {
    const user = {
      email,
      password,
      name
    };

    const url = `/api/users`;
    try {
      const response = await axios.post(url, user);
      console.log({response});
      if (response.statusText === "Created") {
        return response.data;
      }
    } catch (error) {
      return error.message;
    }
  };

  return { register };
};

export default useRegister;
