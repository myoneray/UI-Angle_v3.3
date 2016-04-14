using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace Angle_MVC6_Angular.Controllers
{
    public class PagesController : Controller
    {
        // GET: Pages
        public IActionResult Error404()
        {
            return View();
        }
        public IActionResult Lock()
        {
            return View();
        }
        public IActionResult Login()
        {
            return View();
        }
        public IActionResult Page()
        {
            return View();
        }
        public IActionResult Recover()
        {
            return View();
        }
        public IActionResult Register()
        {
            return View();
        }
    }
}