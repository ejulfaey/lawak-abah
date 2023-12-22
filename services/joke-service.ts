import { apiService } from "./config";

export const JokeService = {
    getJokes: async () => {
        return await apiService.get('/jokes').then(res => res.data);
    }
}