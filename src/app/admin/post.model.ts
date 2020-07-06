export class PostData {

    public upVotesUsers:Set<string>;
    public downVotesUsers:Set<string>;
    public upVoted :boolean;
    public downVoted : boolean;

    constructor( 
        private postString: string, 
        private username: string,
        private title : string,
        private category: string, 
        private userImage: string,
        private UpdatedOn: number,
        public isUpVote: boolean,
        public isDownVote: boolean
        ){
            this.upVotesUsers= new Set();
            this.downVotesUsers= new Set();
        }
}
