using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace reactProj.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Recipes",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    totalTime = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    rating = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CuisineType = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    MealType = table.Column<string>(type: "nvarchar(10)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Recipes", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "IngredientLines",
                columns: table => new
                {
                    ingredients = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    RecipeDetailid = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IngredientLines", x => x.ingredients);
                    table.ForeignKey(
                        name: "FK_IngredientLines_Recipes_RecipeDetailid",
                        column: x => x.RecipeDetailid,
                        principalTable: "Recipes",
                        principalColumn: "id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_IngredientLines_RecipeDetailid",
                table: "IngredientLines",
                column: "RecipeDetailid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "IngredientLines");

            migrationBuilder.DropTable(
                name: "Recipes");
        }
    }
}
