import { Joke } from "@/lib/type";
import { apiService } from "./config";

export const JokeService = {
    getJokes: async () => {
        return await apiService.get('/jokes').then(res => res.data);
    },
    postJoke: async (data: Joke) => {
        return await apiService.post('/jokes', data).then(res => res.data);
    }
}