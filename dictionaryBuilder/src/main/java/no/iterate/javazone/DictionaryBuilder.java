package no.iterate.javazone;

import com.google.gson.Gson;

import java.io.*;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Converts a list of words into json formatted
 *
 *  a,b,c -> - { word : {note: x, velocity: y, channel : 1 }}
 *
 *
 * and converts it
 *
 */
public class DictionaryBuilder
{


    public DictionaryBuilder() {
    }

    public static void main( String[] args ) {

        try {
            new DictionaryBuilder().readAndWrite();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void readAndWrite() throws IOException {
        InputStream inputStream = DictionaryBuilder.class.getResourceAsStream("/wordsToSample.txt");

        try {
            System.out.println(readStuff(inputStream));
        }
        finally {
            inputStream.close();
        }
    }

    private String readStuff(InputStream inputStream) throws IOException {
        InputStreamReader reader = new InputStreamReader(inputStream, "UTF-8"); // leave charset out for default
        BufferedReader bufferedReader= new BufferedReader(reader);

        return toJson(bufferedReader);
    }

    public String toJson(BufferedReader bufferedReader) throws IOException {
        StringBuilder result = new StringBuilder("{");
        int note = 0;
        int velocity = 1;
        Map<String, Map<String, Integer>> messages = new LinkedHashMap<>();
        String word;
        while ((word = bufferedReader.readLine()) != null) {

            if (velocity > 127) {
                note++;
                velocity=1;
                result.append("\n\t");
            }

            HashMap<String, Integer> notes = new LinkedHashMap<>();
            notes.put("note", note);
            notes.put("velocity", velocity);
            notes.put("channel", 1);
            messages.put(new String(word), notes);

            velocity++;

        }
        return new Gson().toJson(messages);
    }
}
