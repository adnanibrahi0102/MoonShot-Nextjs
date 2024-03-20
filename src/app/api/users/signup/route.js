
export const signUpController = async (userData) => {
  try {
    console.log("SignUp request received", userData);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { success: true, message: "User signed up successfully!",data: userData };
  } catch (error) {
    console.log(error);
    return { success: false, message: error.message };
  }
};
