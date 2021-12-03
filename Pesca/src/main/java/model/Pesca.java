package model;

import java.util.Objects;

public class Pesca {

	private int id;
	private String cidade;
	private int quantidade;
	private String status;
	private String excedente;
	private int multa;
	
	public Pesca() {
	}
	
	public Pesca(String id) {
		this.id = Integer.parseInt(id);
	}
	public Pesca(int id, String cidade, int quantidade, String status, String excedente, int multa) {
		this.id = id;
		this.cidade = cidade;
		this.quantidade = quantidade;
		this.status = status;
		this.excedente = excedente;
		this.multa = multa;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public int getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getExcedente() {
		return excedente;
	}
	public void setExcedente(String excedente) {
		this.excedente = excedente;
	}
	public int getMulta() {
		return multa;
	}
	public void setMulta(int multa) {
		this.multa = multa;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pesca other = (Pesca) obj;
		return id == other.id;
	}
	
	@Override
	public String toString() {
		return "Pesca [id=" + id + ", cidade=" + cidade + ", quantidade=" + quantidade + ", status=" + status
				+ ", excedente=" + excedente + ", multa=" + multa + "]";
	}
	
}
