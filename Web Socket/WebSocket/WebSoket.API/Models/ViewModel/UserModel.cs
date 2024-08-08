using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSoket.API.Models.ViewModel
{
    public class UserModel
    {
        public int Userid { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}