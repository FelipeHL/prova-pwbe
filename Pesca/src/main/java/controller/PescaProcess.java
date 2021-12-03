package controller;

import java.util.ArrayList;

import model.Pesca;

public class PescaProcess {

	public static ArrayList<Pesca> pesca;
	
	public static void iniciar() {
		pesca = new ArrayList<>();
		pesca.add(new Pesca(1,"Pedreira",10,"Liberado","Nenhum",00));
		pesca.add(new Pesca(2,"Santos",120,"Bloqueado","Passou Do Limite",20000));
		pesca.add(new Pesca(3,"Campinas",15,"Liberado","Nenhum",00));
		pesca.add(new Pesca(4,"Ubatuba",150,"Liberado","Nenhum",00));
		pesca.add(new Pesca(5,"Santos",150,"Bloqueado","Passou Do Limite",50000));
	}
}