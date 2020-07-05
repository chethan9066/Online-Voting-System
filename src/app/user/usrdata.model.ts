export class UserData {
    postString: string; 
        username: string; 
        upvote: boolean;
        downvote: boolean; 
        userImage: string;
        totalUpVotes: number;
        totalDownVotes: number;
        Updatedon:number;

    constructor( 
        postString: string, 
        username: string, 
        upvote: boolean, 
        downvote: boolean, 
        userImage: string, 
        totalUpVotes: number, 
        totalDownVotes: number,
        Updatedon:number){
            this.postString=postString
            this.username = username;
            this.userImage = userImage;
            this.upvote = upvote;
            this.downvote = downvote;
            this.totalUpVotes = totalUpVotes;
            this.totalDownVotes = totalDownVotes;
            this.Updatedon = Updatedon;
        }
}