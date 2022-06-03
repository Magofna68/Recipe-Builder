using Microsoft.EntityFrameworkCore;

namespace reactProj.Models
{
    public class RecipeDbContext:DbContext
    {
        public RecipeDbContext(DbContextOptions<RecipeDbContext> options) : base(options)
        {

        }
        public DbSet<RecipeDetail> Recipes { get; set; }
    }
}
