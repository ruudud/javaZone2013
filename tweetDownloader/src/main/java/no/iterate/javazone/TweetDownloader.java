package no.iterate.javazone;


import twitter4j.*;

import java.util.List;

/**
 *  Class for searching twitter and fetching tweets.
 */
public class TweetDownloader
{
    public static void main(String[] args) {
        Twitter twitter = new TwitterFactory().getInstance();
        try {
            Query query = new Query("javazone");
            QueryResult result;
            result = twitter.search(query);
            List<Status> tweets = result.getTweets();
            for (Status tweet : tweets) {
                // Tokenize
                String tweetText = tweet.getText();
                System.out.println(tweetText);
            }
        } catch (TwitterException te) {
            te.printStackTrace();
            System.out.println("Failed to search tweets: " + te.getMessage());
            System.exit(-1);
        }
    }
}
