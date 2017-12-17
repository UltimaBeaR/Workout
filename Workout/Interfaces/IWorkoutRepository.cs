using Newtonsoft.Json.Linq;

namespace Workout
{
    public interface IWorkoutRepository : IJsonObjects
    {
        JToken GetTestValues();
    }
}
