using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace reactProj.Models
{
    public class RecipeDetail
    {
        [Key]
        public int id { get; set; }
        [Column(TypeName="nvarchar(50)")]
        public string name { get; set; }
        //public List<IngredientLines> ingredientLines { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string totalTime { get; set; }
        public string rating { get; set; }
        [Column(TypeName = "nvarchar(50)")]
        public string CuisineType { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string MealType { get; set; }



        //public class IngredientLines
        //{
        //    [Key]
        //    [Column(TypeName = "nvarchar(50)")]
        //    public string? ingredients { get; set; }
        //}

    }
}
