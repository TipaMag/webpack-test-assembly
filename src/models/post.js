export default class Post {
    constructor(text, image) {
        this.title = text
        this.date = new Date
        this.image = image
    }
    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
            image: this.image
        }, null, 2)
    }
    get uppercaseTitle() {
        return this.title.toUpperCase()
    }
}