using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace Angle_MVC6_Angular.Controllers
{
    public class WidgetsController : Controller
    {
        // GET: Widgets
        public IActionResult Widgets()
        {
            return View();
        }
    }
}