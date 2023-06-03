// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestionsTypes[]>
) {
  res.status(200).json([
    {
        id: 1,
        question: "How do you judge what should be added in the next version of the app?",
        options: [
            "Data Analysis",
            "User's feedback",
            "Copy from similar product",
            "Make a questionary",
            "Personal feeling"
        ],
        multiOption: false,
        answer: [2],
    },
    {
        id: 2,
        question: "How do you judge what should be added in the next version of the app?",
        options: [
            "Data Analysis",
            "User's feedback",
            "Copy from similar product",
            "Make a questionary",
            "Personal feeling"
        ],
        multiOption: true,
        answer: [2, 4],
        img: "/images/2-q-img.png",
    },
    {
        id: 3,
        question: "How do you judge what should be added in the next version of the app?",
        options: [
            "Data Analysis",
            "User's feedback",
            "Copy from similar product",
            "Make a questionary",
            "Personal feeling"
        ],
        multiOption: true,
        answer: [2, 4],
    },
    {
        id: 4,
        question: "How do you judge what should be added in the next version of the app?",
        options: [
            "Data Analysis",
            "User's feedback",
            "Copy from similar product",
            "Make a questionary",
            "Personal feeling"
        ],
        multiOption: true,
        answer: [2, 4],
    },
    {
        id: 5,
        question: "How do you judge what should be added in the next version of the app?",
        options: [
            "Data Analysis",
            "User's feedback",
            "Copy from similar product",
            "Make a questionary",
            "Personal feeling"
        ],
        multiOption: false,
        answer: [2],
    },
])
}
