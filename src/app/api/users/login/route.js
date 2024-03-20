export const loginController=async(userData)=>{
    try {
        console.log("Login request received",userData);
        await new Promise((resolve)=>setTimeout(resolve,1000));
        return {
            success:true,
            data:userData,
            message:"Login Successfull"
        }

    } catch (error) {
        return {
            success:false,
            data:error,
            message:"Login Failed"
        }
    }
}