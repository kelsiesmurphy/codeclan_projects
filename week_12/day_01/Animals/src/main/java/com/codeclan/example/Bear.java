package com.codeclan.example;

import java.util.function.Function;

public class Bear {
    private String name;

    public Bear(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String newName) {
        this.name = newName;
    }
}
