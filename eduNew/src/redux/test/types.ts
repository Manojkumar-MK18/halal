import {
  questionLists,
  QuestionProps
} from '../../pages/student/Test/TestPage/const'

export interface TestPaper {
  questionLists: Array<QuestionProps>
}

export interface UpdateAnswerPayload {
  id: string
  selectedAnswer?: string
  isMarkedForReview?: boolean
}

export interface InitialState {
  isLoading: boolean
  isMarkedForReview: UpdateAnswerPayload
  TestPaper: TestPaper | null
}

export const initialState: InitialState = {
  isLoading: false,
  isMarkedForReview: {
    id: '',
    isMarkedForReview: false
  },
  TestPaper: {
    questionLists: questionLists
  }
}
