using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebSoket.API.Models.DbContext;
using WebSoket.API.Models.ViewModel;

namespace WebSoket.API.Controllers
{
    public class RegisterController : ApiController
    {
        WebSocketEntities _context = new WebSocketEntities();

        [System.Web.Mvc.Route("api/Register/Registration")]
        [System.Web.Http.HttpPost]
        //public IHttpActionResult Registration(string username, string Email, string password)
        public IHttpActionResult Registration(UserModel userModel)
        {
            try
            {
                SqlParameter[] sp = new SqlParameter[]
                {
                new SqlParameter("@username",userModel.Username),
                new SqlParameter("@email",userModel.Email),
                new SqlParameter("@password",userModel.Password),
                };

                int count = _context.Database.SqlQuery<UserModel>("exec RegisterUser @username ,@email ,@password", sp).ToList().Count();
                return Ok();
            }
            catch (Exception e)
            {
                return NotFound();
            }

        }
        [System.Web.Mvc.Route("api/Register/GetAllUser")]
        [System.Web.Http.HttpGet]
        public List<UserModel> GetAllUser()
        {   
            try
            {

                var userList = _context.Database.SqlQuery<UserModel>("exec GetUserlist").ToList();

                return userList;
            }
            catch (Exception e)
            {
                throw e;
            }
            }


    }
}