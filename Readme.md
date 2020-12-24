

```
Part 1:

//////////////FIELD SCHEMA/////////////////
const { ObjectID, Decimal128, Double } = require("bson");
var mongoose=require("mongoose");


var fieldSchema=mongoose.Schema({
    
        // _id unique id will be assigned by mongodb automatically
        "field_name":{
            type:String,
            required:true,
        },
        "description":{
            type:String,
            required:true,
        },
        "directions":{
            type:String,
        },
        "field_photo_urls":{
            type:Array,
            default:[]
        },
        "gps_coordinates":{
            "longitude":{
                type:Double
            },
            "latitude":{
                type:Double
            }
        },
        "field_availability_slot":[{
            type:Schema.Types.ObjectId,
            ref:Slot
        }],
            
    
})

//////////////GAME SCHEMA///////////////////////

const { ObjectID, Timestamp } = require("bson");
var mongoose=require("mongoose");


var gameSchema=mongoose.Schema({


    // "_id":{
    //     type:ObjectID
    // },
    //that id will be automatically generated
    "registered_time":{
        type:Timestamp
    },
    "last_played":{
        type:Timestamp
    },
    "game_review":{
        type:Number
    },
    "comments":{
        type:Array,
        default:[]
    },
    "played":{
        type:Boolean
    },
    "field_id":{
        type:Schema.Types.ObjectId,
        ref:Field
    }


})

var Game=mongoose.model('Game',gameSchema);

module.exports={ Game }


/////MESSAGE SCHEMA//////////////


const { ObjectID, Timestamp } = require("bson");
var mongoose=require("mongoose");
const { Game } = require("./game");


var messageSchema=mongoose.Schema({


    // "_id":{
    //     type:ObjectID
    // },
    //that id will be automatically generated
    "user_id":{
        type:Schema.Types.ObjectId,
        ref:User
    },
    
    "userchat":{
        "messages":[
            {
                "message_id":{
                    type:String,
                    
                },
                "message_text":{
                    type:String
                },
                "sender_id":{
                    type:String
                },
                "receiver_id":{
                    type:String
                }
            }
        ],
        "online":{
            type:Boolean
        },
        "last_login":{
            type:Timestamp
        },
    },
    "game_chat":{
        "game_id":{
            type:Schema.Types.ObjectId,
            ref:Game
        },
        "messages":[
            {
                "message_id":{
                    type:String,
                    
                },
                "message_text":{
                    type:String
                },
                "sender_id":{
                    type:String
                },
                "receiver_id":{
                    type:String
                }
            }
        ],
        "online":{
            type:Boolean
        },
        "last_login":{
            type:Timestamp
        },
    }
   


})

var Message=mongoose.model('Message',gameSchema);

module.exports={ Message }


///////////////USER SCHEMA /////////////////
var mongoose=require("mongoose");



var userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        unique:1

    },
    "username":{
        type:String,
        required:true,
    },
    
    "game_signup":{
        //user can register multiple games
        "games_registered":[
            {
                type:Schema.Types.ObjectId,
                ref:Game
            },
        ]
        
        
    }

})



var User=mongoose.model('User',userSchema);

module.exports={ User }


////////////////////SLOT SCHEMA //////////////////

const { ObjectID, Timestamp } = require("bson");
var mongoose=require("mongoose");


var slotSchema=mongoose.Schema({

    "_id":{
        type:ObjectID
    },
    "start_time":{
        type:Timestamp
    },
    "end_time":{
        type:Timestamp
    },
    "booked":{
        type:Boolean
    },
    "field":{
        type:Schema.Types.ObjectId,
        
    }

})

var Slot=mongoose.model('Slot',slotSchema);

module.exports={ Slot }



//////////////////////////
////////PART 2////////////
/////////////////////////


function function1(date){
    // converting date to like this "18-11-2020"
    var myDate = "18-11-2020";
    myDate = myDate.split("-");
    var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
    // console.log(newDate.getTime());
    a=newDate.getTime()
    output_arr=[]
    // step-1 query the user db from the database
    // then we will get the array containing all different users data 

    // now schemas is a array containing all the sch

    for(var i=0;i<schemas.length;i++){
        arr=schemas[i].game_signup.games_registered
        bool=true
        for(var j=0;j<arr.length;j++){
            if(arr[j].played===0 && (new Date(arr[j].last_played).getTime()<a)){
                continue;
            }
            else{
                bool=false;
                break;
            }
        }

        if(bool){
            output_arr.push(schemas[i]._id)
        }
    }
    return output_arr
}


function  function2(avg_rating,matches){
     // step-1 query the db
    // then we will get the array containing all different schema data (i.e) all differenct users data

    // now schemas is a array containing all the schemas
    for(var i=0;i<schemas.length;i++){
        arr=schemas[i].game_signup.games_registered
        // now sort the array based on the last_played
        new_arr=arr.slice(0,matches)
        // intiate a counter
        // now looping through the new_arr and verfying the game_id from the  new_array with
        // schemas[i].game_review.games game_id if it matches increment the counter
        // if counter ===matches push that user_id to output array
    }

    // finally return output_arr

}

// part 2
function function3(id,start,end){
    
    fileld_id=id;
    var myDate = start;
    myDate = myDate.split("-");
    var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
    // console.log(newDate.getTime());
    a=newDate.getTime()

    var myDate1 = end;
    myDate1 = myDate1.split("-");
    var newDate1 = new Date( myDate1[2], myDate1[1] - 1, myDate1[0]);
    // console.log(newDate.getTime());
    b=newDate.getTime()

    // step-1 querying the schema we wll query the field with that respective filedlid
    // we will get result as
    result={
        "field_id":"field001",
        "field_name":"United states",
        "description":"Hello world",
        "directions":"chkjd vdyvgdh fdb hcjvkvdhbjvb",
        "field_photo_urls":[],
        "gps_coordinates":{
            "longitude":112.1234,
            "latitude":103.3433
        },
        "field_availability_slot":[
            {
                "id":"slot001",
                "start_time":"timestamp(In number format)",
                "end_time":"timestamp(In number format)",
                "booked":false,
                // if booked this will be changed to true
                
            },
            {
                "id":"slot002",
                "start_time":"timestamp(In number format)",
                "end_time":"timestamp(In number format)",
                "booked":false,
                
            }
        ]
    }

    // now looping trough the filed availability slot
    arr=result.field_availability_slot
    count=0
    for(var i=0;i<arr.length;i++){
        if(arr[i].start_time>a && arr[i].end_time<b && arr[i].booked===false){
            count+=1
        }
    }
    return count

}



///////////////////
///////Part 3//////
///////////////////

"all_games_at_field": {
    "field-id-1": [
        "game-id-1",
        "game-id-2"
    ],
    "field-id-2": [
    ]
}
/*
I designed in such a way that if we qury the db with field id then we can get all the games that are happening in that field 
I REFERENCED FILED_ID IN GAME SCHEMA SO WE CAN EASILY  GET ALL THE GAMES HAPPENING IN PARTICULAR USER ID

*/
```

