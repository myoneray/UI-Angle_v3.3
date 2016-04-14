using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace Angle_MVC6_Angular.Controllers
{
    public class ExtrasController : Controller
    {
        // GET: Extras
        public IActionResult Calendar()
        {
            return View();
        }
        public IActionResult Invoice()
        {
            return View();
        }
        public IActionResult Mailbox()
        {
            return View();
        }
        public IActionResult MailboxCompose()
        {
            return View();
        }
        public IActionResult MailboxInbox()
        {
            return View();
        }
        public IActionResult MailboxView()
        {
            return View();
        }
        public IActionResult Profile()
        {
            return View();
        }
        public IActionResult Search()
        {
            return View();
        }
        public IActionResult Timeline()
        {
            return View();
        }
        public IActionResult Todo()
        {
            return View();
        }
        public IActionResult CodeEditor()
        {
            return View();
        }
    }
}