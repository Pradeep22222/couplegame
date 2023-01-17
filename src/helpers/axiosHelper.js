import axios from "axios";
const apiNumberEp = "http://localhost:8000/api/v1/game/number";
export const postNumber = async(obj) => {
    try {
        const { data } = await axios.post(apiNumberEp, obj);
        return data;
    } catch (error) {
        return {
            status: "error",
            message:error.message
     }   
    }
}