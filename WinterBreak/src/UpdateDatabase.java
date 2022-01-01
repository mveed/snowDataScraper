

import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import org.bson.conversions.Bson;

/**
 * Simple application that shows how to use Azure Cosmos DB for MongoDB API in a Java application.
 *
 */
public class UpdateDatabase {
    public static String brightonBase = "";
    public static String brightonToDate = "";
    public static String brighton24Hours = "";
    public static String brightonOvernight = "";
    public static String brighton7Days = "";
    public static String solitudeOvernight = "";
    public static String solitude24Hours = "";
    public static String solitude48Hours = "";
    public static String solitudeBase = "";
    public static String solitudeToDate = "";
    public static String snowbirdOvernight = "";
    public static String snowbird24Hours = "";
    public static String snowbird48Hours = "";
    public static String snowbirdBase = "";
    public static String snowbirdToDate = "";
    public static String altaOvernight = "";
    public static String alta24Hours = "";
    public static String alta48Hours = "";
    public static String altaBase = "";
    public static String altaToDate = "";

    public static void mongoDB()
    {
        /*
         * Replace connection string from the Azure Cosmos DB Portal
         */
        MongoClientURI uri = new MongoClientURI("mongodb://mveed:BPXalacbVSyTuc7Q5pfSbBjgsj9LdkPS4FAWqA5db9esUs6CRbYoy6D54RSWxIxKWAhcUosmnBD1UuiAJRtNCg==@mveed.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@mveed@");

        MongoClient mongoClient = null;
        try {
            mongoClient = new MongoClient(uri);

            // Get database
            MongoDatabase database = mongoClient.getDatabase("db");

            // Get collection
            MongoCollection<Document> collection = database.getCollection("coll");

            // Insert documents
//            Document document1 = new Document("resortData", "dev");
//            Document updateTest = new Document("testValue", "testTest");
//            Document updateTestOp = new Document ("$set", updateTest);
            // collection.insertOne(document1);  // this creates a new document with key value pair
//            System.out.println(collection.updateOne(document1, updateTestOp));

            // Find fruits by name
//            Document queryResult = collection.find(Filters.eq("fruit", "apple")).first();
//            System.out.println(queryResult.toJson());

            // find the resort data document
            updateMongoDBDoc("brightonBase", brightonBase, database, collection);
            updateMongoDBDoc("brighton24Hours", brighton24Hours, database, collection);
            updateMongoDBDoc("brighton7Days", brighton7Days, database, collection);
            updateMongoDBDoc("brightonToDate", brightonToDate, database, collection);
            updateMongoDBDoc("brightonOvernight", brightonOvernight, database, collection);
            updateMongoDBDoc("solitudeBase", solitudeBase, database, collection);
            updateMongoDBDoc("solitude24Hours", solitude24Hours, database, collection);
            updateMongoDBDoc("solitude48Hours", solitude24Hours, database, collection);
            updateMongoDBDoc("solitudeToDate", solitudeToDate, database, collection);
            updateMongoDBDoc("solitudeOvernight", solitudeOvernight, database, collection);
            updateMongoDBDoc("snowbirdBase", snowbirdBase, database, collection);
            updateMongoDBDoc("snowbird24Hours", snowbird24Hours, database, collection);
            updateMongoDBDoc("snowbird48Hours", snowbird24Hours, database, collection);
            updateMongoDBDoc("snowbirdToDate", snowbirdToDate, database, collection);
            updateMongoDBDoc("snowbirdOvernight", snowbirdOvernight, database, collection);
            updateMongoDBDoc("altaBase", altaBase, database, collection);
            updateMongoDBDoc("alta24Hours", alta24Hours, database, collection);
            updateMongoDBDoc("alta48Hours", alta24Hours, database, collection);
            updateMongoDBDoc("altaToDate", altaToDate, database, collection);
            updateMongoDBDoc("altaOvernight", altaOvernight, database, collection);

//            Document resortData = collection.find(new Document("resortData", "dev")).first();
//            Bson updateValue = new Document("newValue", "willItCreate?");
//            Bson updateOperation = new Document("$set", updateValue);
            //System.out.println("test" + collection.updateOne(resortData, updateOperation));

            System.out.println( "Completed successfully" );

        } finally {
            if (mongoClient != null) {
                mongoClient.close();
            }
        }
    }

    private static void updateMongoDBDoc(String key, String value, MongoDatabase database, MongoCollection<Document> collection) {
        Document resortData = collection.find(new Document("resortData", "dev")).first();
        Bson updateValue = new Document(key, value);
        Bson updateOperation = new Document("$set", updateValue);
        System.out.println("test" + collection.updateOne(resortData, updateOperation));
    }
}
