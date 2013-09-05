package no.iterate.javazone;

import org.junit.Test;

import java.io.BufferedReader;
import java.io.StringReader;

import static org.junit.Assert.assertEquals;

/**
 * Explain the responsibility of this class
 */
public class DictionaryBuilderTest {

    @Test
    public void testToJson() throws Exception {
        DictionaryBuilder dictionaryBuilder = new DictionaryBuilder();

        String test = "a\nb\nc\nd\ne\nf\ng\nh\n";

        test = dictionaryBuilder.toJson(new BufferedReader(new StringReader(test)));

        assertEquals("{\"a\":{\"note\":1,\"velocity\":0,\"channel\":1},\"b\":{\"note\":2,\"velocity\":0,\"channel\":1},\"c\":{\"note\":3,\"velocity\":0,\"channel\":1},\"d\":{\"note\":4,\"velocity\":0,\"channel\":1},\"e\":{\"note\":5,\"velocity\":0,\"channel\":1},\"f\":{\"note\":6,\"velocity\":0,\"channel\":1},\"g\":{\"note\":7,\"velocity\":0,\"channel\":1},\"h\":{\"note\":8,\"velocity\":0,\"channel\":1}}",test);
    }
}
