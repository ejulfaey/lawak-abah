export type Joke = {
    id?: number;
    question: string;
    answer: string;
}

export type Counter = {
    jokeId: number;
    sessionId: string;
    status: boolean;
}