import behaviours.IOutput;
import device_management.Computer;
import device_management.Monitor;
import device_management.Printer;
import device_management.Speaker;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class ComputerTest {
    Computer computer;
    Monitor monitor;

    @Before
    public void before() {
        monitor = new Monitor(22, 786432);
        computer = new Computer(8, 512, monitor);
    }

    @Test
    public void hasRam() {
        assertEquals(8, computer.getRam());
    }

    @Test
    public void hasHddSize() {
        assertEquals(512, computer.getHddSize());
    }

    @Test
    public void hasOutputDevice() {
        IOutput outputDevice = computer.getDevice();
        System.out.println("Type " + outputDevice.getClass());
        System.out.println(outputDevice instanceof Monitor);
        assertNotNull(outputDevice);
        assertTrue(outputDevice instanceof Monitor);
    }

    @Test
    public void canOutputData() {
        assertEquals("space invaders is now on screen", computer.outputData("space invaders"));
    }

    @Test
    public void canOutputDataViaPrinter() {
        Printer printer = new Printer("Epson", "Stylus", 120, 4);
        computer = new Computer(8, 512, printer);
        assertEquals("printing: space invaders", computer.outputData("space invaders"));
    }

    @Test
    public void canOutputDataViaSpeaker() {
        Speaker speaker = new Speaker(100);
        computer = new Computer(8, 512, speaker);
        assertEquals("playing: Beep!", computer.outputData("Beep!"));
    }

    @Test
    public void canSetOutputDevice() {
        Printer printer = new Printer("Epson", "Stylus", 120, 4);
        computer = new Computer(8, 512, printer);
        computer.setOutputDevice(printer);
        assertEquals("printing: space invaders", computer.outputData("space invaders"));
    }
}
