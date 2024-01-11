import { Counter } from "@/lib/type";
import { apiService } from "./config";

export const LikeService = {
    toggleJoke: async (data: Counter) => {
        return await apiService.post('/likes', data).then(res => res.data);
    }
}