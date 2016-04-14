using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace Angle_MVC6_jQuery.Controllers
{
    public class PagesController : Controller
    {
        public IActionResult Error_404()
        {
            return View();
        }
        public IActionResult Lock() {
            return View();
        }
        public IActionResult Login() {
            return View();
        }
        public IActionResult Recover() {
            return View();
        }
        public IActionResult Register() {
            return View();
        }
        public IActionResult Template()
        {
            return View();
        }
    }
}