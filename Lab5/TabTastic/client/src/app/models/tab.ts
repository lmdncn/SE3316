//This defines a Tab object


export class Tab {
    id: string;
    song: string;
    artist: string;
    desc: string;
    author: string;
    authorId: string;
    tab: string;
    dateMade:Date;
    isPublic:Boolean;
    lastDayRevised:Date;

    constructor(song: string, artist: string, desc: string, author: string, authorId: string,tab: string, isPublic:Boolean = true) {
        this.song = song;
        this.artist = artist;
        this.desc = desc;
        this.author = author;
        this.authorId = authorId;
        this.tab = tab;
        this.isPublic = isPublic;
    }



}
