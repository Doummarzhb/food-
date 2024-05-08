using AbbyWeb.Data;
using AbbyWeb.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AbbyWeb.Pages.Categories
{
    public class CreateModel : PageModel
    {
        private readonly ApplicationDbContext _db;
        public Category Categories { get; set; }

        public CreateModel(ApplicationDbContext db)
        {
			_db = db;
		}

        //public IndexModel(ApplicationDbContext db)
        //{
        //    _db     = db;

        //}
        public void OnGet()
        {

            //Categories = _db.Category;
        }
        public async Task <IActionResult> OnPost()
        {
            if(Category.Name == Category.DisplayOrder.ToString())
            {
                ModelState.AddModelError("Category.Name", "The displayorder cannot exactly match the name");
            }
            await _db.Category.AddAsync(Category);
            await _db.SaveChangesAsync();
            return RedirectToPage("Index");
        }
    }
}
