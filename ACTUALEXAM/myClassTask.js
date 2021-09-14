class Story {
    constructor(titlestring, creatorstring) {
        this.title = titlestring;
        this.creator = creatorstring;
        this.comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length < 1) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            return `You can't like the same story twice!`;
        } else if (username === this.creator) {
            return `You can't like your own story!`;
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            return `You can't dislike this story!`;
        } else {
            this._likes.splice(this._likes.indexOf(username), 1);
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id) { // id = i 
        if (id === undefined || this.comments[id] === undefined) {
            let Replies = [];
            let thisComment = {id, username, content, Replies};
            this.comments.push(thisComment); // [{[]}, {}, {}....];
            return  `${username} commented on ${this.title}`;
        } else if (this.comments[id]) {
            let myRepliesLenght = this.comments[id].Replies.length;
            let thisReplyLenght = myRepliesLenght + 1;
            let myReply = {thisReplyLenght, username, content};
            this.comments[id].Replies.push(myReply);
            return `You replied successfully`;
        }
    }

    toString(sortingType) {
        if (sortingType === 'asc') {
            for (let thisComment of this.comments) {
                thisComment.Replies.sort((a,b) => a.id - b.id);
            }

            let output = '';
            output += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this.likes}\nComments:\n`
            for (let i = 0; i < this.comments.length; i++) { // [{[]}, {[]}, {[]}, {}, {}, {}, {}, {}, {},]
                output += !this.comments[i].hasOwnProperty(Replies) ? `-- ${i}. ${this.comments[i].username}: ${this.comments[i].content}` : `--- ${i}.${this.comments[i].id}. ${this.comments[i].username}: ${this.comments[i].content}`;
            }
        } else if (sortingType === 'desc') {
            this.comments.sort((a,b) => b - a);
            for (let thisComment of this.comments) {
                thisComment.Replies.sort((a,b) => b.id - a.id);
            }

            let output = '';
            output += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this.likes}\nComments:\n`
            for (let i = 0; i < this.comments.length; i++) { // [{[]}, {[]}, {[]}, {}, {}, {}, {}, {}, {},]
                output += !this.comments[i].hasOwnProperty(Replies) ? `-- ${i}. ${this.comments[i].username}: ${this.comments[i].content}` : `--- ${i}.${this.comments[i].id}. ${this.comments[i].username}: ${this.comments[i].content}`;
            }
        } else {
            this.comments.sort((a,b) => a.username.localeCompare(b.username));
            for (let thisComment of this.comments) {
                thisComment.Replies.sort((a,b) => a.username.localeCompare(b.username));
            }

            let output = '';
            output += `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this.likes}\nComments:\n`
            for (let i = 0; i < this.comments.length; i++) { // [{[]}, {[]}, {[]}, {}, {}, {}, {}, {}, {},]
                output += !this.comments[i].hasOwnProperty(Replies) ? `-- ${i}. ${this.comments[i].username}: ${this.comments[i].content}` : `--- ${i}.${this.comments[i].id}. ${this.comments[i].username}: ${this.comments[i].content}`;
            }
        }
    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content"); //1
console.log(art.comment("Ammy", "New Content")); //2
art.comment("Zane", "Reply", 1); //1.1
art.comment("Jessy", "Nice :)"); //3
console.log(art.comment("SAmmy", "Reply@", 1)); //1.2
console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));
