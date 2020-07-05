import { UserComponent } from './user.component';

export class UserData {
    constructor( 
        private postString: string, 
        private username: string,
        private title : string,
        private category: string, 
        private userImage: string, 
        private totalUpVotes: number, 
        private totalDownVotes: number,
        private UpdatedOn:number){
        }
}
