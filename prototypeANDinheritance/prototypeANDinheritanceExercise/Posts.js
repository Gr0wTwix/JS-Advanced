function solve() {
    class Post {
        constructor(myTitle, myContent) {
            this.title = myTitle;
            this.content = myContent;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(myTitle, myContent, likes, dislikes) {
            super(myTitle, myContent);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let superString = super.toString();
            let rating = this.likes - this.dislikes;
            if (this.comments.length < 0) {
                return `${superString}\nRating: ${rating}`;
            } else {
                let commentsToPrint = '';
                for (let comment of this.comments) {
                    commentsToPrint += `\n * ${comment}`;
                }
                return `${superString}\nRating: ${rating}\nComments: ${commentsToPrint}`;
            }
        }
    }

    class BlogPost extends Post {
        constructor(myTitle, myContent, myViews) {
            super(myTitle, myContent);
            this.views = myViews;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let superString = super.toString();
            return superString + `\nViews: ${this.views}`;
        }
    }

    return { Post, SocialMediaPost, BlogPost };
}

let post = new Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
