package com.codeclan.example;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        Bear bear = new Bear("Balu");
        String name = bear.getName();
        System.out.println(name);

        bear.setName("Jeff");
        System.out.println(bear.getName());
    }
}