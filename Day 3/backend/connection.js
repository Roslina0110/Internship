const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://roslinamanue:PDcUzGJ8YxFgIHUa@cluster0.g8pbmvb.mongodb.net/moviedb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
    console.log('DB is connected')
}).catch((res)=>{
    console.log('DB not connected')
})    