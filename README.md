# isOnScreen

A jQuery Plugin which detects element is on screen or not & gives callback to do stuff

# Examples

### Default

    $(selector).isOnScreen()

### Visibility Trigger

    $(selector).isOnScreen({visibleTrigger: 25})

### Callbacks : onDone

    // When user done scroll event , onDone fires.
    $(selector).isOnScreen({
      visibleTrigger: 25 ,
      onDone: function(done,scene){
        // do stuff
      } 
    })
  
  Returns done: boolean , scene : {docViewTop:'',docViewBottom:'',elemTop:'',elemBottom:''}


# Demo

http://akshaykarode.github.io/isOnScreen/
