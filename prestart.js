//code here is bluntly ripped off of load-from-pause's file of the same name. Actually, I just copied the entire mod and edited it into this thing. Thanks, ADudeCalledLeo!
nax.ccuilib.pauseScreen.addButton({
    text: '',
    showCondition() {
        // unless someone can find a reason why *not*?
        return true
    },
    enabledCondition() {
        // see earlier comment :D
        return true
    },
    onShow(button) {
        button.setText('Restart Game', true) //okay, so this is english only, unlike load from pause. If this is an issue for you, let me know and I'll fix it (although I guess there's no way you're here to read this comment)
    },
    //I found these functions in cc-fancy-crash. Though I assume I could've found it in the standard game's crash as well, that was easier to find, so credit to that as well.
    onPress() {
        window.location.reload() 
        chrome.runtime.reload()
    }
})
