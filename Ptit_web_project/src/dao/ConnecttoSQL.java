// trình biên dịch trong 
//      javac -cp "C:\Users\ADMIN\OneDrive\Máy tính\project\Ptit_web_project\src\lib\*;." "C:\Users\ADMIN\OneDrive\Máy tính\project\Ptit_web_project\src\dao\ConnecttoSQL.java"


// chay file nayf trong terminal
//      java -cp "C:\Users\ADMIN\OneDrive\Máy tính\project\Ptit_web_project\src\lib\*;C:\Users\ADMIN\OneDrive\Máy tính\project\Ptit_web_project\src" dao.ConnecttoSQL

package dao;


import com.microsoft.sqlserver.jdbc.SQLServerDataSource;
import java.sql.Connection;
import java.sql.SQLException;

public class ConnecttoSQL {

    // Phương thức để tạo kết nối và trả về đối tượng Connection
    public static Connection getConnection() throws SQLException {
        SQLServerDataSource ds = new SQLServerDataSource();
        ds.setUser("sa");
        ds.setPassword("123456789");
        ds.setServerName("DESKTOP-L9G0DQ6");
        ds.setPortNumber(1433);
        ds.setDatabaseName("PTIT_web_project");

        // Thay thế setEncrypt(true) bằng setEncrypt("true")
        ds.setEncrypt("true");
        ds.setTrustServerCertificate(true); // Bỏ qua kiểm tra chứng chỉ

        // Trả về kết nối
        return ds.getConnection();
    }

    // Phương thức main để kiểm tra kết nối
    public static void main(String[] args) {
        try (Connection conn = getConnection()) {
            if (conn != null) {
                System.out.println("Connect thành công!");
            }
        } catch (SQLException e) {  // Bắt SQLException thay vì SQLServerException | SQLException
            System.err.println("Kết nối thất bại: " + e.getMessage());
        }
    }
}
