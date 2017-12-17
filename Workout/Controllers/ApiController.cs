using Microsoft.AspNetCore.Mvc;

namespace Workout.Controllers
{
    [Route("api")]
    public class ApiController : Controller
    {
        public ApiController(IWorkoutRepository repository)
        {
            _repository = repository;
        }

        [Route("testvalues")]
        public JsonResult GetTestValues()
        {
            return Json(_repository.GetTestValues());
        }

        private IWorkoutRepository _repository;
    }
}
