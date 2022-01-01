import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import org.bson.BSON;
import org.bson.conversions.Bson;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.bson.BSON;
// import org.bson.Document;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;

import static com.mongodb.client.model.Filters.eq;

/**
 * A simple example, used on the jsoup website.
 */
public class Main {

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


    public static void main(String[] args) throws IOException, InterruptedException {
        Document doc = Jsoup.connect("https://brightonresort.com/conditions").get();
        //log(doc.title());

        Elements test = doc.getElementsByClass("vList_1");
        String testString = test.text();
        List<String> testArray = Arrays.asList(testString.split(" "));
        // these numbers work for when no overnight && 24 hour new snow
//        String brightonBase = testArray.get(9) + testArray.get(10) + " "+ testArray.get(11);
//        String brightonToDate = testArray.get(12) +  testArray.get(13) + " " +  testArray.get(14) + " " +  testArray.get(15) + " " + testArray.get(16);


        // this works for if snow overnight
//        if (testArray.get(14).equals("24")){
//            brightonToDate = testArray.get(50);
//            brighton24Hours = testArray.get(41);
//            brightonOvernight = testArray.get(38);
//        }
//
//        // this seems to work for snow 2 nights in row
//        if (testArray.get(18).equals("24") && testArray.get(19).equals("Hours")){
//            brightonBase = testArray.get(13);
//            brightonToDate = testArray.get(20);
//            brighton24Hours = testArray.get(16);
//            brightonOvernight = testArray.get(46);
//        }

        for (int i = 0; i < testArray.size(); i++) {
            if (testArray.get(i).equals("Base")) {
                brightonBase = testArray.get(i - 2);
            }

            if (testArray.get(i).equals("Season")) {
                brightonToDate = testArray.get(i - 2);
            }

            if (testArray.get(i).equals("Last") && testArray.get(i + 1).equals("7")) {
                brighton7Days = testArray.get(i - 2);
            }

            if (testArray.get(i).equals("24") && testArray.get(i + 1).equals("Hours")) {
                brighton24Hours = testArray.get(i - 2);
            }

            // add overnight
            if (testArray.get(i).equals("Overnight")) {
                brightonOvernight = testArray.get(i - 2);
            }
        }

        /////////////////////////////////////////
        // End brighton, begin soli
        /////////////////////////////////////////
        doc = Jsoup.connect("https://opensnow.com/location/solitude#report").get();
        //log(doc.title());

        //test = doc.getElementsByClass("col.conditions-block");
        // this gets 24 & 5 day snow totals
        test = doc.getElementsByClass("row");
        testString = test.text();
        testArray = Arrays.asList(testString.split(" "));
        System.out.println("");

        // can get base depth out of this
        test = doc.getElementsByClass("pb-2");
        testString = test.text();
        testArray = Arrays.asList(testString.split(" "));
        System.out.println("");

        //////////////////////

        // jack the data from this site, much better *******
        doc = Jsoup.connect("https://www.skiutah.com/members/solitude/snowreport").get();
        //log(doc.title());

        //test = doc.getElementsByClass("col.conditions-block");
        // this gets 24 & 5 day snow totals
        test = doc.getElementsByClass("snowfall-24");
        testString = test.text();
        testArray = Arrays.asList(testString.split(" "));
        System.out.println("");
        solitude24Hours = testArray.get(3);

        test = doc.getElementsByClass("overnight");
        testString = test.text();
        testArray = Arrays.asList(testString.split(" "));
        if (testArray.size() >= 13) {
            solitudeOvernight = testArray.get(14);
        }

        test = doc.getElementsByClass("hour48");
        testString = test.text();
        testArray = Arrays.asList(testString.split(" "));
        solitude48Hours = testArray.get(2);

        test = doc.getElementsByClass("base");
        testString = test.text();
        testArray = Arrays.asList(testString.split(" "));
        solitudeBase = testArray.get(1);

        test = doc.getElementsByClass("ytd");
        testString = test.text();
        testArray = Arrays.asList(testString.split(" "));
        solitudeToDate = testArray.get(1);


        //
        doc = Jsoup.connect("https://www.snowbird.com/mountain-report/").get();
        //log(doc.title());

        //test = doc.getElementsByClass("col.conditions-block");
        // this gets 24 & 5 day snow totals
        test = doc.getElementsByClass("conditions");
        testString = test.text();
        testArray = Arrays.asList(testString.split(" "));
        System.out.println("");

        snowbirdOvernight = testArray.get(1).replaceFirst("\"", "");
        snowbird24Hours = testArray.get(3).replaceFirst("\"", "");
        snowbird48Hours = testArray.get(5).replaceFirst("\"", "");
        snowbirdBase = testArray.get(7).replaceFirst("\"", "");
        snowbirdToDate = testArray.get(9).replaceFirst("\"", "");

        Random random = new Random();

        TimeUnit.SECONDS.sleep(1 + random.nextInt(7) + 2); // don't visit two urls on same domain too fast
        doc = Jsoup.connect("https://www.skiutah.com/members/alta/snowreport").get();
//log(doc.title());

//test = doc.getElementsByClass("col.conditions-block");
// this gets 24 & 5 day snow totals
        test = doc.getElementsByClass("snowfall-24");
        testString = test.text();
        testArray = Arrays.asList(testString.split(" "));
        System.out.println("");
        alta24Hours = testArray.get(3);

        test = doc.getElementsByClass("overnight");
        testString = test.text();
        testArray = Arrays.asList(testString.split(" "));
        if (testArray.size() >= 13) {
            altaOvernight = testArray.get(14);
        }

        test = doc.getElementsByClass("hour48");
        testString = test.text();
        testArray = Arrays.asList(testString.split(" "));
        alta48Hours = testArray.get(2);

        test = doc.getElementsByClass("base");
        testString = test.text();
        testArray = Arrays.asList(testString.split(" "));
        altaBase = testArray.get(1);

        test = doc.getElementsByClass("ytd");
        testString = test.text();
        testArray = Arrays.asList(testString.split(" "));
        altaToDate = testArray.get(1);



        System.out.println("base: " + brightonBase);
        System.out.println("toDate: " + brightonToDate);
        System.out.println("Overnight: " + brightonOvernight);
        System.out.println("24 hours: " + brighton24Hours);
        System.out.println("7 Days: " + brighton7Days);

        // pass the data to UpdateDatabase class
        setUpdateDatabaseStaticData();

        // use the data to update the mongoDB database
        UpdateDatabase.mongoDB();
    }

    public static void setUpdateDatabaseStaticData(){
        UpdateDatabase.brighton7Days = brighton7Days;
        UpdateDatabase.brightonBase = brightonBase;
        UpdateDatabase.brighton24Hours = brighton24Hours;
        UpdateDatabase.brightonOvernight = brightonOvernight;
        UpdateDatabase.brightonToDate = brightonToDate;
        UpdateDatabase.solitudeBase = solitudeBase;
        UpdateDatabase.solitude24Hours = solitude24Hours;
        UpdateDatabase.solitude48Hours = solitude48Hours;
        UpdateDatabase.solitudeOvernight = solitudeOvernight;
        UpdateDatabase.solitudeToDate = solitudeToDate;
        UpdateDatabase.snowbirdBase = snowbirdBase;
        UpdateDatabase.snowbird24Hours = snowbird24Hours;
        UpdateDatabase.snowbird48Hours = snowbird48Hours;
        UpdateDatabase.snowbirdOvernight = snowbirdOvernight;
        UpdateDatabase.snowbirdToDate = snowbirdToDate;
        UpdateDatabase.altaBase = altaBase;
        UpdateDatabase.alta24Hours = alta24Hours;
        UpdateDatabase.alta48Hours = alta48Hours;
        UpdateDatabase.altaOvernight = altaOvernight;
        UpdateDatabase.altaToDate = altaToDate;

    }

    private static void log(String msg, String... vals) {
        System.out.println(String.format(msg, vals));
    }
}