use zoo;

// Reading from the database

const id = ObjectId('63c55a43e2fd253542297445');
db.animals.findOne({_id: id})


// Updating the database
db.animals.updateOne(
    {_id: ObjectId('63c55a43e2fd253542297446')},
    {$set: {name: "Kelsie"}}
)
db.animals.findOne({_id: ObjectId('63c55a43e2fd253542297446')})


// Deleting from database
db.animals.deleteOne({_id: ObjectId('63c55a43e2fd253542297446')})