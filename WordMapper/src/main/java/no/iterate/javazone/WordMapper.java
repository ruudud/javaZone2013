package no.iterate.javazone;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.util.Map;

public class WordMapper {

    private String wordList;

    public void setWords(String wordList) {
        this.wordList = wordList;
    }

    public Map<String, Note> getWords() {
        Gson gson = new Gson();

        Map<String, Note> noteMap= gson.fromJson(wordList, new TypeToken<Map<String, Note>>(){}.getType());

        return noteMap;
    }
}
