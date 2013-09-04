package no.iterate.javazone;

public class Note {
    private int note;
    private int velocity;
    private int channel;

    public Note(int note, int velocity, int channel) {
        this.note = note;
        this.velocity = velocity;
        this.channel = channel;
    }

    public int getNote() {
        return note;
    }

    public int getVelocity() {
        return velocity;
    }

    public int getChannel() {
        return channel;
    }
}
