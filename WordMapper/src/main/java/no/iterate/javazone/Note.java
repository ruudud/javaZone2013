package no.iterate.javazone;

public class Note {
    private int note;
    private int velocity;

    public Note(int note, int velocity) {
        this.note = note;
        this.velocity = velocity;
    }

    public int getNote() {
        return note;
    }

    public int getVelocity() {
        return velocity;
    }
}
