package no.iterate.javazone;

import org.junit.Test;

import java.util.Map;

import static org.junit.Assert.assertEquals;

public class WordMapperTest {

    @Test
    public void mapJsonToWordObjects() {
        String wordListAsJson =
                "{\n" +
                        "   \"Application\" : {\n" +
                        "       \"note\" : 123,\n" +
                        "       \"velocity\" : 38,\n" +
                        "       \"channel\" : 1\n" +
                        "   },\n" +
                        "   \"Java\" :  {\n" +
                        "       \"note\" : 124,\n" +
                        "       \"velocity\" : 22,\n" +
                        "       \"channel\" : 1\n" +
                        "   },\n" +
                        "   \n" +
                        "   \"Iterate\" : {\n" +
                        "       \"note\" : 22,\n" +
                        "       \"velocity\"  : 34,\n" +
                        "       \"channel\" : 1\n" +
                        "   }\n" +
                        "}";

        WordMapper wordMapper = new WordMapper();
        wordMapper.setWords(wordListAsJson);

        Map<String,Note> words = wordMapper.getWords();
        assertEquals(3, words.size());
        assertEquals(123, words.get("Application").getNote());
        assertEquals(22, words.get("Java").getVelocity());
    }
}
