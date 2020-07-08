export class PostData {

    public upVotesUsers:Set<string>;
    public downVotesUsers:Set<string>;

    constructor( 
        private postString: string, 
        private username: string,
        private title : string,
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
