interface QuestionsTypes {
    id: number,
    question: string,
    options: string[],
    multiOption: boolean,
    img?: string,
    answer: number[]
}

type QuestionPageProps = {
    questions: QuestionsTypes[]
}