# isOnScreen.js

A jQuery Plugin which detects element is on screen or not & gives callback to do stuff

# Examples

### Default

    $(selector).isOnScreen({
     onDone: function(done,scene){
       // do stuff
     }
    })

### Visibility Trigger

    $(selector).isOnScreen({
      visibleTrigger: 25,
      onDone: function(done,scene){
       // do stuff
      }
    })

### Callbacks : onDone

    // When user done scroll event , onDone fires.
    $(selector).isOnScreen({
      visibleTrigger: 25,
      onDone: function(done,scene){
       // do stuff - while element arrives at screen
      } 
    })

returns **done**: true|false , **scene** : object {docViewTop:'',docViewBottom:'',elemTop:'',elemBottom:''}

### Callbacks : onBackStage

    // When element not on screen , onBackStage fires.
    $(selector).isOnScreen({
      visibleTrigger: 25,
      onDone: function(done,scene){
       // do stuff
      },
      onBackStage: function(done,scene){
       // do stuff - while element at backstage
      } 
    })
# Demo

http://akshaykarode.github.io/isOnScreen/example/demo
