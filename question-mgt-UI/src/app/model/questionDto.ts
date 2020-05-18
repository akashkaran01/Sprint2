export class QuestionDto{

    testId: number;
    questionTitle: String;
    questionOptions: String[];
    questionAnswer: number;
    questionMarks: number;
    chosenAnswer: number;
    marksScored: number;

    constructor(
        testId?:number,
        questionTitle? : String,
        questionOptions? : String[],
        questionAnswer ?: number,
        questionMarks ?: number,
        chosenAnswer ?: number,
        marksScored ?: number
    ){
        this.testId = testId;
        this.questionTitle = questionTitle;
        this.questionOptions = questionOptions;
        this.questionAnswer = questionAnswer;
        this.questionMarks = questionMarks;
        this.chosenAnswer = chosenAnswer;
        this.marksScored = marksScored;


    }
}
