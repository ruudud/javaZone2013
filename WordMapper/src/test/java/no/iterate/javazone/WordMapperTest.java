package no.iterate.javazone;

import org.junit.Before;
import org.junit.Test;

import java.util.Map;

import static org.junit.Assert.assertEquals;

public class WordMapperTest {

    WordMapper wordMapper;
    String wordListAsJson =
            "{\n" +
                    "   \"Application\" : {\n" +
                    "       \"note\" : 123,\n" +
                    "       \"velocity\" : 38,\n" +
                    "       \"channel\" : 1\n" +
                    "   },\n" +
                    "   \"Java\" :  {\n" +
                    "       \"note\" : 124,\n" +
                    "       \"velocity\" : 25,\n" +
                    "       \"channel\" : 1\n" +
                    "   },\n" +
                    "   \n" +
                    "   \"Iterate\" : {\n" +
                    "       \"note\" : 22,\n" +
                    "       \"velocity\"  : 34,\n" +
                    "       \"channel\" : 1\n" +
                    "   }\n" +
                    "}";

    @Before
    public void setUp() {
        wordMapper = new WordMapper();
        wordMapper.setWords(wordListAsJson);
    }

    @Test
    public void mapJsonToWordObjects() {

        Map<String,Note> words = wordMapper.getWords();

        assertEquals(3, words.size());
        assertEquals(123, words.get("Application").getNote());
        assertEquals(25, words.get("Java").getVelocity());
    }

    @Test
    public void getNoteObjectForWord() {
        Note iterateNote = wordMapper.getWords().get("Iterate");

        assertEquals(22, iterateNote.getNote());
        assertEquals(34, iterateNote.getVelocity());
    }
}
