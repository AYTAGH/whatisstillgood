
To run your new app open your terminal and type:
   
    $ meteor --port $IP:$PORT
    
If you want to access the database directly, in a new terminal type:

    meteor mongo
Then at the MongoDB prompt you can create a record:

    db.signups.insert({name: "Dan", color: "blue"});
Or see all records:

    db.signups.find();
Permanently delete all the records in your collection:

    db.signups.drop();