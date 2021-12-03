package view;

import java.io.IOException;

import controller.PescaProcess;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import model.Pesca;

@WebServlet("/rotarest")
public class PescaHttp extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setCharacterEncoding("UTF-8");
		if (PescaProcess.pesca == null) {
			PescaProcess.iniciar();
		}
		String id = req.getParameter("id");
		if (id != null) {
			for (Pesca p : PescaProcess.pesca) {
				if (p.getId() == Integer.valueOf(id)) {
					resp.getWriter().print(p.toString());
				}
			}
		} else {
			for (Pesca p : PescaProcess.pesca) {
				resp.getWriter().print(p.toString());
			}
		}

	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		if (id != null) {
			Pesca pesca = new Pesca();
			pesca.setId(req.getParameter("id"));
			pesca.setCidade(req.getParameter("cidade"));
			pesca.setQuantidade(req.getParameter("quantidade"));
			pesca.setStatus(req.getParameter("status"));
			pesca.setExcedente(req.getParameter("excedente"));
			pesca.setMulta(req.getParameter("multa"));
			PescaProcess.pesca.add(pesca);
			resp.setStatus(HttpServletResponse.SC_CREATED);
		}
	}

	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		if (id != null) {
			Pesca pesca = new Pesca(id);
			if (PescaProcess.pesca.contains(pesca)) {
				int indice = PescaProcess.pesca.indexOf(pesca); 
				pesca.setCidade(req.getParameter("cidade"));
				pesca.setQuantidade(req.getParameter("quantidade"));
				pesca.setStatus(req.getParameter("status"));
				pesca.setExcedente(req.getParameter("excedente"));
				pesca.setMulta(req.getParameter("multa"));
				PescaProcess.pesca.set(indice,pesca);
			} else {
				resp.setStatus(HttpServletResponse.SC_FOUND);
			}
		} else {
			resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}
	}
	
	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("id");
		if (id != null) {
			Pesca pesca = new Pesca(id);
			if (PescaProcess.pesca.contains(pesca)) {
				PescaProcess.pesca.remove(pesca);
			} else {
				resp.setStatus(HttpServletResponse.SC_FOUND);
			}
		}
	}

}