import { TProfile } from "@/types/profile/type";
import Axios from "@/utils/axios";

export async function FetchDataProfile(): Promise<TProfile> {
    try {
        const response = await Axios.get(`${process.env.API_AUTH_URL}/auth/profile/`)
        const data = response.data
        return data
    } catch (error) {
        throw error
    }
}