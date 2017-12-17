using Newtonsoft.Json.Linq;

namespace Workout.Database
{
    public class WorkoutDbRepository : JsonObjectsDb, IWorkoutRepository
    {
        public WorkoutDbRepository(JsonObjectsDbContext context)
            : base(context)
        {
        }

        public JToken GetTestValues()
        {
            return GetAll()["test"];
        }

        protected override void OnAfterDatabaseFirstCreated()
        {
            Set("test", new JArray(new string[] { "fromServer1", "fromServer2" }));
        }
    }
}
