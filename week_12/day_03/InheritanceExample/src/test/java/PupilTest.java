import org.junit.Before;
import org.junit.Test;
import school.pupils.Pupil;

import static org.junit.Assert.assertEquals;

public class PupilTest {
    private Pupil pupil;

    @Before
    public void before(){
        pupil = new Pupil("Barry", 13, "Green");
    }

    @Test
    public void setNewColour() {
        pupil.setFavouriteColour("Blue");
        assertEquals("Blue", pupil.getFavouriteColour());
    }
}
