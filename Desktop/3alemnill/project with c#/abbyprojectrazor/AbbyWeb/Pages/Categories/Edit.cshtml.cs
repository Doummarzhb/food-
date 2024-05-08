using AbbyWeb.Data;
using AbbyWeb.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AbbyWeb.Pages.Categories
{
    public class EditModel : PageModel
    {
        private readonly ApplicationDbContext _db;
        public Category Categories { get; set; }

        public EditModel(ApplicationDbContext db)
        {
			_db = db;
		}

        //public IndexModel(ApplicationDbContext db)
        //{
        //    _db     = db;

        //}
        public void OnGet(in id )
        {
            Category = _db.Category.Find(id);
            //Category = _db.Category.FirstOrDefault(u => u.Id == id);
            //Category = _db.Category.singleOrDefault(id);
            //Category = _db.Category.Where(u => u.Id == id).FirstOrDefault();
            //Categories = _db.Category;
        }
        public async Task <IActionResult> OnPost()
        {
            if(Category.Name == Category.DisplayOrder.ToString())
            {
                ModelState.AddModelError("Category.Name", "The displayorder cannot exactly match the name");
            }
            if(ModelState.IsValid)
            {
                _db.Category.Update(Category);
                await _db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return Page();
            //await _db.Category.AddAsync(Category);
            //await _db.SaveChangesAsync();
            //return RedirectToPage("Index");
        }
    }
}
