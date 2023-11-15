using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PIABDDController : ControllerBase
    {
        public class LoginRequestModel
        {
            public string nombreUsuario { get; set; }
            public string Pass { get; set; }
        }

        private IConfiguration _configuration;
        
        public PIABDDController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("obtenerEjemplo")]
        public JsonResult obtenerEjemplo()
        {
            string query = "select * from dbo.Ejemplo where estado = 1";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BDDPiaCon");
            SqlDataReader myReader;
            using(SqlConnection myCon = new SqlConnection(sqlDatasource)) {
                myCon.Open();
                using(SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader=myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        [Route("agregarEjemplo")]
        public JsonResult agregarEjemplo([FromForm] string nuevoNombre, [FromForm] string nuevoApellido)
        {
            string query = "INSERT INTO Ejemplo (EjemploNombre, EjemploApellido) VALUES (@nuevoNombre, @nuevoApellido)";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BDDPiaCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@nuevoNombre", nuevoNombre);
                    myCommand.Parameters.AddWithValue("@nuevoApellido", nuevoApellido);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpDelete]
        [Route("eliminarEjemplo")]
        public JsonResult eliminarEjemplo(int id)
        {
            string query = "UPDATE Ejemplo SET estado = 0 WHERE id = @id";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BDDPiaCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
        [HttpPost]
        [Route("registrarUsuario")]
        public JsonResult registrarUsuario([FromForm] int idRol, [FromForm] string nombreUsuario, [FromForm] string pass, [FromForm] int idDependencia, [FromForm] string nombre, [FromForm] string primerApellido, [FromForm] string segundoApellido)
        {
            string query = "INSERT INTO Usuario (idRol, nombreUsuario, pass, idDependencia, nombre, primerApellido, segundoApellido) VALUES (@idRol, @nombreUsuario, @pass, @idDependencia, @nombre, @primerApellido, @segundoApellido)";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BDDPiaCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@idRol", idRol);
                    myCommand.Parameters.AddWithValue("@nombreUsuario", nombreUsuario);
                    myCommand.Parameters.AddWithValue("@pass", pass);
                    myCommand.Parameters.AddWithValue("@idDependencia", idDependencia);
                    myCommand.Parameters.AddWithValue("@nombre", nombre);
                    myCommand.Parameters.AddWithValue("@primerApellido", primerApellido);
                    myCommand.Parameters.AddWithValue("@segundoApellido", segundoApellido);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpGet]
        [Route("login")]
        public JsonResult Login([FromQuery] string nombreUsuario, [FromQuery] string pass)
        {
            string query = "select * from dbo.Usuario where nombreUsuario = @nombreUsuario AND pass = @pass";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BDDPiaCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();

                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    // Utiliza parámetros para evitar la inyección de SQL
                    myCommand.Parameters.AddWithValue("@nombreUsuario", nombreUsuario);
                    myCommand.Parameters.AddWithValue("@pass", pass);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
        [HttpGet]
        [Route("listarEventos")]
        public JsonResult listarEventos()
        {
            string query = "select * from dbo.Eventos WHERE estado = 1";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BDDPiaCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();

                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    // Utiliza parámetros para evitar la inyección de SQL
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpGet]
        [Route("mostrarTipoEvento")]
        public JsonResult mostrarTipoEvento([FromQuery] string idTipoEvento)
        {
            string query = "select tipoEvento from dbo.tipoEvento where idTipoEvento = @idTipoEvento";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BDDPiaCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();

                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    // Utiliza parámetros para evitar la inyección de SQL
                    myCommand.Parameters.AddWithValue("@idTipoEvento", idTipoEvento);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpGet]
        [Route("listarMisEventos")]
        public JsonResult listarMisEventos([FromQuery] string idUsuario)
        {
            string query = "select * from dbo.Eventos WHERE estado = 1 and idUsuario = @idUsuario";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BDDPiaCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();

                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    // Utiliza parámetros para evitar la inyección de SQL
                    myCommand.Parameters.AddWithValue("@idUsuario", idUsuario);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpGet]
        [Route("eliminarEvento")]
        public JsonResult eliminarEvento([FromQuery] string idEvento)
        {
            string query = "UPDATE dbo.Eventos SET estado = 0 WHERE estado = 1 and idEvento = @idEvento";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BDDPiaCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();

                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    // Utiliza parámetros para evitar la inyección de SQL
                    myCommand.Parameters.AddWithValue("@idEvento", idEvento);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpGet]
        [Route("detalleEvento")]
        public JsonResult detalleEvento([FromQuery] string idEvento)
        {
            string query = "select * from dbo.Eventos WHERE estado = 1 and idEvento = @idEvento";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BDDPiaCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();

                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    // Utiliza parámetros para evitar la inyección de SQL
                    myCommand.Parameters.AddWithValue("@idEvento", idEvento);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpGet]
        [Route("mostrarInvitadosEspeciales")]
        public JsonResult mostrarInvitadosEspeciales()
        {
            string query = "select * from dbo.InvitadosEspeciales";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BDDPiaCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();

                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    // Utiliza parámetros para evitar la inyección de SQL
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }


        [HttpPost]
        [Route("agregarEvento")]
        public JsonResult agregarEvento([FromForm] int idUsuario, [FromForm] string idTipoEvento, [FromForm] string nombreEvento, [FromForm] DateTime fechaInicio, [FromForm] DateTime fechaFin, [FromForm] string lugar, [FromForm] string descripcion, [FromForm] string cupo, [FromForm] string estado)
        {
            string query = "INSERT INTO Eventos (idUsuario, idTipoEvento, nombreEvento, fechaInicio, fechaFin, lugar, descripcion, cupo, estado) VALUES (@idUsuario, @idTipoEvento, @nombreEvento, @fechaInicio, @fechaFin, @lugar, @descripcion, @cupo, @estado)";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BDDPiaCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@idUsuario", idUsuario);
                    myCommand.Parameters.AddWithValue("@idTipoEvento", idTipoEvento);
                    myCommand.Parameters.AddWithValue("@nombreEvento", nombreEvento);
                    myCommand.Parameters.AddWithValue("@fechaInicio", fechaInicio);
                    myCommand.Parameters.AddWithValue("@fechaFin", fechaFin);
                    myCommand.Parameters.AddWithValue("@descripcion", descripcion);
                    myCommand.Parameters.AddWithValue("@lugar", lugar);
                    myCommand.Parameters.AddWithValue("@cupo", cupo);
                    myCommand.Parameters.AddWithValue("@estado", estado);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]
        [Route("editarEvento")]
        public JsonResult editarEvento([FromForm] int idUsuario, [FromForm] string idTipoEvento, [FromForm] string nombreEvento, [FromForm] DateTime fechaInicio, [FromForm] DateTime fechaFin, [FromForm] string lugar, [FromForm] string descripcion, [FromForm] string cupo, [FromForm] string estado, [FromForm] string idEvento)
        {
            string query = "UPDATE Eventos SET idUsuario = @idUsuario, idTipoEvento = @idTipoEvento, nombreEvento = @nombreEvento, fechaInicio = @fechaInicio, fechaFin = @fechaFin, lugar = @lugar, descripcion = @descripcion, cupo = @cupo, estado = @estado WHERE idEvento = @idEvento;";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BDDPiaCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@idUsuario", idUsuario);
                    myCommand.Parameters.AddWithValue("@idTipoEvento", idTipoEvento);
                    myCommand.Parameters.AddWithValue("@nombreEvento", nombreEvento);
                    myCommand.Parameters.AddWithValue("@fechaInicio", fechaInicio);
                    myCommand.Parameters.AddWithValue("@fechaFin", fechaFin);
                    myCommand.Parameters.AddWithValue("@descripcion", descripcion);
                    myCommand.Parameters.AddWithValue("@lugar", lugar);
                    myCommand.Parameters.AddWithValue("@cupo", cupo);
                    myCommand.Parameters.AddWithValue("@estado", estado);
                    myCommand.Parameters.AddWithValue("@idEvento", idEvento);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpGet]
        [Route("mostrarInvitados")]
        public JsonResult mostrarInvitados([FromQuery] string idEvento)
        {
            string query = "select * from dbo.Invitados where idEvento = @idEvento";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BDDPiaCon");
            SqlDataReader myReader;

            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();

                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    // Utiliza parámetros para evitar la inyección de SQL
                    myCommand.Parameters.AddWithValue("@idEvento", idEvento);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        [Route("agregarInvitados")]
        public JsonResult agregarInvitados([FromForm] int idEvento, [FromForm] string nombre, [FromForm] string primerApellido, [FromForm] string segundoApellido, [FromForm] string correo, [FromForm] string idOcupacion, [FromForm] string idDependencia, [FromForm] string numBoleto)
        {
            string query = "INSERT INTO Invitados (idEvento, nombre, primerApellido, segundoApellido, correo, idOcupacion, idDependencia, numBoleto) VALUES (@idEvento, @nombre, @primerApellido, @segundoApellido, @correo, @idOcupacion, @idDependencia, @numBoleto)";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("BDDPiaCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDatasource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@idEvento", idEvento);
                    myCommand.Parameters.AddWithValue("@nombre", nombre);
                    myCommand.Parameters.AddWithValue("@primerApellido", primerApellido);
                    myCommand.Parameters.AddWithValue("@segundoApellido", segundoApellido);
                    myCommand.Parameters.AddWithValue("@correo", correo);
                    myCommand.Parameters.AddWithValue("@idOcupacion", idOcupacion);
                    myCommand.Parameters.AddWithValue("@idDependencia", idDependencia);
                    myCommand.Parameters.AddWithValue("@numBoleto", numBoleto);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }


    }
}
