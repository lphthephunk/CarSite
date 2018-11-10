using supersecretapi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Collections.Generic;
using System;
using System.Text;
using System.Security.Claims;
using Newtonsoft.Json;

namespace supersecretapi.Controllers
{
    [Route("api/auth")]
    public class AuthenticationController : ControllerBase
    {
        internal static readonly string SECRET_KEY = "ABCDEFGH12345678";

        [HttpPost,Route("login")]
        public IActionResult Login([FromBody]LoginModel loginModel)
        {
            if(loginModel == null)
            {
                return BadRequest("Invalid login request");
            }
            
            if(loginModel.UserName.Length > 0 && loginModel.Password.Length > 0)
            {                
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SECRET_KEY));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var tokenOptions = new JwtSecurityToken(
                    issuer: "http://localhost:44358",
                    audience: "http://localhost:44358",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddHours(1),
                    signingCredentials: signinCredentials
                );

                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
                return Ok(JsonConvert.SerializeObject(new { token = tokenString, expires = tokenOptions.ValidTo }));
            }
            else
            {
                return Unauthorized();
            }
            
        }
    }
}
