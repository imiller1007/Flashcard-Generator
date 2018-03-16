var ClozeCard = function(text, cloze){
    this.fullText = text
    this.cloze = cloze
    this.cutCloze = function(){
        var partialText= this.fullText.substring(this.cloze.length, text.length)
        partialText = "..." + partialText;
        console.log(partialText)
    }
};





module.exports = ClozeCard;
