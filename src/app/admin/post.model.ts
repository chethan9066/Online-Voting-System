export class PostData {

    public upVotesUsers:Set<string>;
    public downVotesUsers:Set<string>;
    public upVoted :boolean;
    public downVoted : boolean;

    constructor( 
        public postString: string, 
        public username: string,
        public title : string,
        private category: string, 
        private userImage: string,
        private UpdatedOn: string,
        public isUpVote: boolean,
        public isDownVote: boolean
        ){
            this.upVotesUsers= new Set();
            this.downVotesUsers= new Set();
        }
}
