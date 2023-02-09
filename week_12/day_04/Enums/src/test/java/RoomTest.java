import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class RoomTest {
    Room room;

    @Before
    public void before(){
        room = new Room(RoomType.DOUBLE);
    }

    @Test
    public void canGetRoomType(){
        assertEquals(RoomType.DOUBLE, room.getRoomType());
    }

    @Test
    public void doubleRoomHasValue2() {
        assertEquals(2, room.getValueFromEnum());
    }

    @Test
    public void familyRoomHasCapacityOf5() {
        room = new Room(RoomType.FAMILY);
        assertEquals(5, room.getCapacityFromEnum());
    }
}
