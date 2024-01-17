export type Joke = {
    id?: number;
    question: string;
    answer: string;
    jokeCounter?: Counter[];
}

export type Counter = {
    jokeId: number;
    sessionId: string;
    status: boolean;
}