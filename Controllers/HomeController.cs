using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LoginDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult login()
        {
            return View();
        }
        public ActionResult register()
        {
            return View();
        }

        public ActionResult home()
        {
            return View();
        }

        
    }
}