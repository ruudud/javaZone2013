package no.iterate.javazone;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.util.Map;

public class WordMapper {

    private String wordList;
    private Map<String, Note> wordMap = null;

    public void setWords(String wordList) {
        this.wordList = wordList;
    }

    public Map<String, Note> getWords() {
        if (wordMap == null) {
            populateWordMap();
        }
        return wordMap;
    }

    private void populateWordMap() {
        Gson gson = new Gson();
        wordMap =  gson.fromJson(wordList, new TypeToken<Map<String, Note>>(){}.getType());
    }

    public String toJson(Note iterateNote) {
        Gson gson = new Gson();
        return gson.toJson(iterateNote);
    }
}
