import { rest } from "msw";

const baseURL = process.env.NEXT_APP_API_URL || "";
export const handlers = [
    rest.get(baseURL + '/jokes', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    "id": 36,
                    "question": "Why did the bicycle fall over?",
                    "answer": "Because it was two tired.",
                    "isDark": false,
                    "language": {
                        "name": "English"
                    }
                },
                {
                    "id": 37,
                    "question": "How do you organize a space party?",
                    "answer": "You planet.",
                    "isDark": false,
                    "language": {
                        "name": "English"
                    }
                },
                {
                    "id": 38,
                    "question": "What do you call an alligator in a vest?",
                    "answer": "An investigator.",
                    "isDark": false,
                    "language": {
                        "name": "English"
                    }
                },
            ])
        );
    }),
]
