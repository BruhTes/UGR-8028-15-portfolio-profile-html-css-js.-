// Create a new file called typewriter.js
class TypeWriter {
    constructor(textElement, words, waitTime = 3000) {
        this.textElement = textElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.waitTime = parseInt(waitTime, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if(this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.textElement.innerHTML = `<span>${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 200;

        if(this.isDeleting) {
            typeSpeed /= 2; // Faster deletion
        }

        // If word is complete
        if(!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.waitTime;
            // Set delete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}