using Newtonsoft.Json.Linq;

namespace Workout
{
    public interface IJsonObjects
    {
        void Initialize();
        string SetUnique(JToken value, string domain = null);
        void Set(string id, JToken value, string domain = null);
        JObject GetAll(string domain = null);
    }
}
