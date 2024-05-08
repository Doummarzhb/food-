using AbbyWeb.Model;

namespace AbbyWeb.Data
{
	public class ApplicationDbContext
	{
		public IEnumerable<Category> Category { get; internal set; }

		internal Task SaveChangesAsync()
		{
			throw new NotImplementedException();
		}
	}
}
