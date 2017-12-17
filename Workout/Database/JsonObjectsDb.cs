using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using System.Linq;

namespace Workout.Database
{
    public abstract class JsonObjectsDb : IJsonObjects
    {
        public JsonObjectsDb(JsonObjectsDbContext context)
        {
            _context = context;
        }

        public string SetUnique(JToken value, string domain = null)
            => _context.AddNewObject(domain ?? globalDomain, value);

        public void Set(string id, JToken value, string domain = null)
            => _context.AddNewObject(domain ?? globalDomain, value, id);

        public JObject GetAll(string domain = null)
            => _context.GetObjectsFromTable(domain ?? globalDomain);

        public void Initialize()
        {
            if (_context.Database.EnsureCreated())
                OnAfterDatabaseFirstCreated();
        }

        protected virtual void OnAfterDatabaseFirstCreated()
        {
            // Ничего не делать
        }

        private JsonObjectsDbContext _context;

        private const string globalDomain = "__global";

        public class JsonObjectsDbContext : DbContext
        {
            public JsonObjectsDbContext(DbContextOptions<JsonObjectsDbContext> options)
                : base(options)
            {
            }

            public DbSet<JsonObject> Objects { get; set; }

            public string AddNewObject(string tableName, JToken value, string name = null)
            {
                var newObject = new JsonObject()
                {
                    ID = name ?? System.Guid.NewGuid().ToString(),
                    Domain = tableName,
                    Value = value.ToString()
                };

                Objects.Add(newObject);

                SaveChanges();

                return newObject.ID;
            }

            public JObject GetObjectsFromTable(string tableName)
            {
                var result = new JObject();

                foreach (var obj in GetObjectsQueryFromTable(tableName).ToArrayAsync().Result)
                    result.Add(obj.ID, JToken.Parse(obj.Value));

                return result;
            }

            public IQueryable<JsonObject> GetObjectsQueryFromTable(string tableName)
                => Objects.Where(x => x.Domain == tableName);
        }

        public class JsonObject
        {
            public string ID { get; set; }
            public string Domain { get; set; }
            public string Value { get; set; }
        }
    }
}
