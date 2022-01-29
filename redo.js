
/*
In this challenge you will test your knowledge of Stack and Queue.

THE PROBLEM:
Undo and Redo are two commonly used features in a Word Processor software like
Microsoft Word or Google Docs.

Undo allows a user to revert a change and return their document to a previous state,
while Redo allows the user to redo something they undid.

Example:
----------
User saves "Today is a beautiful day"
User updates text to "Today is really a beautiful day" and saves.
User clicks "Undo"
User's text is restored to  "Today is a beautiful day"
User clicks "Redo"
User's text is restored to  "Today is really a beautiful day"

*/

function Editor() {
    const  updates = [] // keep track of updates
    const  redos = [] // keep track of redos
    let content = ""; // the current editor content
  
    this.getContent = function() {
      // TODO (1): Return the current editor content
      return content;
    }
  
    this.save = function(content_) {
      // TODO (2): Update the current editor content
      // Hint: You should keep track of this update, in case the user needs to
      // undo the change.
      updates.push(content)
      content = content_
    }
  
    this.undo = function() {
      // TODO (3): Set the current editor content to the last update
      // Hint: If there are no updates, set the content to empty string ""
      // A user may redo an undo, so you'll need to keep track of this update you
      // just undid.
      if(updates.length > 0) {
      redos.push(content)
          content = updates.pop()
          }else {
          content = ''
          }
    }
  
    this.redo = function() {
      // TODO (4): Set the current editor content to the last undone update
      // Hint: Think of a redo as an update with the last undone change
      content = redos.pop()
    }
  }
  
  // THIS IS FOR YOUR TESTING ONLY
  const docs =  new Editor()
  
  docs.save('Today is a beautiful day')
  docs.save('Today is really beautiful day')
  console.log(`Content: ${docs.getContent()}`) // prints Today is really beautiful day
  
  console.log('undo ...')
  docs.undo()
  console.log(`Content: ${docs.getContent()}`) // prints Today is a beautiful day
  
  console.log('redo ...')
  docs.redo()
  console.log(`Content: ${docs.getContent()}`) // Today is really beautiful day
      