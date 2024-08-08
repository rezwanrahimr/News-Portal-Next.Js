
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rezwanrahim99:rezwanrahim99@cluster0.rcpxe7d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run(req, res) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // Collections
        const newsCollection = client.db("news").collection("news-collection");
        console.log("Connected to the database");

        // get all news
        if (req.method === 'GET') {
            const news = await newsCollection.find({}).toArray();
            res.status(200).json({ message: 'All News Retrieved', data: news });
        }
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
export default run;
