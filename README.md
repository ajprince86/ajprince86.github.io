# 🏈 Welcome to the College Football database 🏫

Help me build this amazing college football database. As of 3/9/22 I only have
a total of 9 teams divided into 3 conferences. Keep reading to see more info on installation,
technologies being used,enpoints, schemas and how to add your own database.

_______________________________________________________________________

## Technologies
Express,MongoDB,Mongoose,NodeJs

## Instructions to run the application:
Use the Endpoints with the below heroku Base URL to get the data in any Web Browser or Postman.

Base Heroku URL for the API:https://football-amari-10.herokuapp.com/

## EndPoints
/teams
/conferences
/stadiums
/sponsors

For teams,conferences,stadiums, and sponsors you can update by their id if needed

For Example, [https://library-crud-api.herokuapp.com/api/books/6227b652589f62bf5ebd99be]

## Schemas

### Conference
```
const Conference = new Schema(
{
    name:{type:String,required:true},
    year_created:{type:Number,required:true},
    logo:{type:String,required:true},
    headquarters:{type:String,required:true},
    num_members:{type:Number,required:true},
    expansion:{type:Boolean,required:true}
},
{timestamps:true}
)
```
### Teams

```
const Team = new Schema(
{
    name:{type:String,required:true},
    school:{type:String,required:true},
    logo:{type:String,required:true},
    national_champs:{type:Number,required:true},
    notable_players:{type:Array,required:true},
    top_25:{type:Number,required:true},
    conference_id:{type:Schema.Types.ObjectId,ref:`conference`},
    uniform_sponsor_id:{type:Schema.Types.ObjectId,ref:`sponsor`}
},
{timestamps:true}
)
```
### Sponsors
```
const Sponsor = new Schema(
{
    name:{type:String,required:true},
    logo:{type:String,required:true},
    revenue:{type:String,required:true},
    ceo:{type:String,required:true}
},
{timestamps:true}
)
```

### Stadiums
```
const Stadium = new Schema(
{
    name:{type:String,required:true},
    capacity:{type:Number,required:true},
    image:{type:String,required:true},
    team_id:{type:Schema.Types.ObjectId,ref:`team_id`},
    location:{type:String,required:true},
},
{timestamps:true}
)

```
### Endpoints For CRUD

```
1./conferences
2./teams
3./sponsors
4./stadiums






