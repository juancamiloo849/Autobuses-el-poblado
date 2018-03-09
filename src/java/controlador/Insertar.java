
package controlador;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;





@WebServlet(name = "Insertar", urlPatterns = {"/Insertar"})
public class Insertar extends HttpServlet {

    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {  
        
        try{
            PrintWriter out = response.getWriter();
        conectaBD con = new conectaBD();
        Connection c = con.conectar();
        
        String id = request.getParameter("id");
        String cedula = request.getParameter("cedula");
        String nombre = request.getParameter("nombre");
        String apellido = request.getParameter("apellido");
        String telefono = request.getParameter("telefono");
        String celular = request.getParameter("celular");
        String direccion = request.getParameter("direccion");
        String vehiculo = request.getParameter("vehiculo");
        String email = request.getParameter("email");
        
        String query = "INSERT INTO conductor(id,cedula,nombre,apellido,telefono,celular,direccion,vehiculo,email) values ('"+id+"', '"+cedula+"', '"+nombre+"', '"+apellido+"','"+telefono+"', '"+celular+"', '"+direccion+"', '"+vehiculo+"', '"+email+"');";
        
        
        
        Statement stm = c.createStatement();
        stm.executeUpdate(query);
        
        ResultSet resul = stm.executeQuery("SELECT * FROM conductor");
        
        out.println("<h1> Insertó exitosamente </h1>");
        stm.close();
        resul.close();
        c.close();
        con.cierraConexion();
        

        }catch(SQLException e){
            e.printStackTrace();
        }
        
        
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
            processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
