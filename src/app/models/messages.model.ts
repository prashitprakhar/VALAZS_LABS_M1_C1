export class MessagesModel {
    constructor(
        public message: string,
        public videoLink: string,
        public year: number,
        public month: number,
        public date: number,
        public hour: number,
        public minutes: number,
        public seconds: number
    ) {}
}
